<template>
    <div class="FallCollection">
        <h1 class="FallCollection-side">FLASH NIGHT</h1>
        <div class="FallCollection-products">
            <Product 
                v-for="product in products.edges" 
                :key="product.node.id" 
                :product="product.node"/>
            <div v-if="$apollo.loading">Loading...</div>
        </div>
    </div>
</template>

<script>
/**************************************
                IMPORTS
**************************************/
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';
import Product from '../components/Product';
import gql from 'graphql-tag';

const GET_FALL_PRODUCTS = gql`
{
  products(first: 6, query: "tag:fall") {
    edges {
      node {
        id
        title
        images(first: 2) {
          edges {
            node {
              originalSrc
            }
          }
        }
        priceRange {
          maxVariantPrice {
            amount
          }
          minVariantPrice {
            amount
          }
        }
        variants(first: 30) {
          edges {
            node {
              id
              title
              priceV2{
                  amount
              }
              selectedOptions {
                name
                value
              }
            }
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
                products: '',
            }
        },
        computed: {
            ...mapGetters([]),

        },
        methods: {
            ...mapActions([]),
        },
        components: {
            Product,
        },
        mounted () {
            
        },
        apollo: {
           products: {
               query: GET_FALL_PRODUCTS,
           },
        },
    }
</script>

<style lang='scss' scoped>
/**************************************
                STYLES
**************************************/
.FallCollection{
    height: max-content; min-height: 100vh;
    background-color: #212121;
    display: grid;
    grid-template-columns: 1fr;
    &-side{
        position: fixed;
        top: 40%;
        left: -5%;
        text-transform: uppercase;
        transform: rotate(-90deg);
        font-weight: 300;
        color: white;
        font-size: 8rem;
        @include respond(phone){
          display: none;
        }
    }
    &-products{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
        @include respond(tab-port){
            grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
            //width: 314px; 
        }
        @include respond(phone){
            grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
            grid-row-gap: 5rem;
            //width: 230px; 
        }
        grid-row-gap: 10rem;
        justify-items: center;
        padding: 20rem 10rem 0 30rem;
        @include respond(phone){
          padding: 20rem 5rem;
        }
    }
}
</style>