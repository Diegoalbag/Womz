<template>
  <div
    v-if="IsShoppingCart"
    @mouseleave="ShowHideShoppingCart"
    class="shopping-cart"
  >
    <h1 class="shopping-cart__heading">My Order</h1>
    <div class="shopping-cart__products">
      <h1 v-if="GetCartItems.length === 0">Shopping Cart Empty</h1>
      <ShoppingcartItem
        v-for="item in GetCartItems"
        :key="item.id + item.size + item.color"
        :item="item"
      />
    </div>
    <p class="shopping-cart__total">Total ${{ this.TotalPrice }}</p>
    <a @click="SendCheckout" href="#" class="shopping-cart__checkoutbtn"
      >checkout</a
    >
  </div>
</template>

<script>
/**************************************
                IMPORTS
**************************************/
import Product from '../components/Product';
import ShoppingcartItem from '../components/ShoppingcartItem';
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';
import gql from 'graphql-tag';

const CHECKOUT = gql`
    mutation ($lineItems: [CheckoutLineItemInput!], $lineItemsLength: Int!) {
    checkoutCreate(input: {
        lineItems: $lineItems
    }) {
        checkout {
        id
        webUrl
        lineItems(first: $lineItemsLength) {
            edges {
            node {
                title
                quantity
            }
            }
        }
        }
    }
    }
`;
/**************************************
                SCRIPTS
**************************************/
    export default {
        data() {
            return {
                lineItems: [],
            }
        },
        components: {
            Product,
            ShoppingcartItem
        },
        computed: {
            ...mapGetters(['GetCartItems', 'IsShoppingCart']),
            TotalPrice() {
                let Price = 0
                for(let i = 0; i < this.GetCartItems.length; i++){
                    Price += this.GetCartItems[i].price * this.GetCartItems[i].quantity;
                }
                return Price
            }
        },
        methods: {
            ...mapActions(['ShowHideShoppingCart']),
            SendCheckout() {
                for(let i = 0; i < this.GetCartItems.length; i++){
                    this.lineItems.push({
                        "variantId": this.GetCartItems[i].id,
                        "quantity": this.GetCartItems[i].quantity
                    })
                }
                 this.$apollo.mutate({
                    mutation: CHECKOUT,
                    variables: {
                        "lineItems": this.lineItems,
                        "lineItemsLength": this.lineItems.length
                    },
                 }).then((data) => {
                    this.lineItems = [];
                    let Url = data.data.checkoutCreate.checkout.webUrl
                    window.location.href = Url;
                }).catch((error) => {
                    console.error(error)
                });
            }
        },
    }
</script>

<style lang='scss' scoped>
/**************************************
                STYLES
**************************************/
.shopping-cart {
  position: absolute;
  right: 4rem;
  top: 7.5rem;
  z-index: 1;
  display: grid;
  grid-template-rows: repeat(3, min-content);
  row-gap: 2rem;
  position: absolute;
  background-color: #fff;
  //border: .1rem solid rgb(66, 66, 66);
  box-shadow: 0.3rem 0.5rem 2rem rgba($color: black, $alpha: 0.3);
  height: auto;
  width: 47rem;
  padding: 3rem 4rem;
  &__heading {
    font-size: 3rem;
    font-weight: 400;
  }
  &__total {
    font-size: 2rem;
    font-weight: 500;
    justify-self: end;
  }
  &__checkoutbtn {
    border: 0.2rem black solid;
    text-transform: uppercase;
    text-decoration: none;
    text-align: center;
    font-size: 2.5rem;
    color: black;
    letter-spacing: 1rem;
    padding: 0.5rem 0;
    transition: all 0.1s;
    &:hover {
      background-color: black;
      color: white;
      transform: translateY(-0.3rem);
      box-shadow: 0 1rem 1rem rgba(black, 0.2);
    }
    &:active {
      transform: translateY(-0.1rem);
      box-shadow: 0 0.5rem 2rem rgba(black, 0.4);
    }
  }
  &__products {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 1rem;
    max-height: 54rem;
    overflow-y: scroll;
  }
  // &::after{
  //     content: "";
  //         display: block;
  //         height: 40%;
  //         width: 20%;
  //         position: absolute;
  //         top: -5rem;
  //         right: -2rem;
  //         z-index: 0;
  // }
}
</style>