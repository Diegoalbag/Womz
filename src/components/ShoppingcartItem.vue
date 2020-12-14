<template>
    <div class="product">
        <figure class="product-image">
            <img :src="item.image">
        </figure>
         <div class="product-info">
            <h4>{{item.title}} <span v-if="item.size !== undefined">{{item.size}}</span> </h4>
            <p>${{this.Price}}</p>
            <div class="product-info__quantity">
                <a href="#"><i @click="item.quantity === 1 ? '' : AddItemsTocart({
                    id: item.id, 
                    quantity: -1,
                    color: item.color,
                    size: item.size
                })" class="fas fa-minus"></i></a>

                <p> {{item.quantity}}</p>
                
                <a href="#"><i @click="AddItemsTocart({
                    id: item.id, 
                    quantity: 1,
                    color: item.color,
                    size: item.size
                })" class="fas fa-plus"></i></a>
            </div>
            <div class="product-info__delete">
                <i @click="DeleteItemfromcart({
                    id: item.id, 
                    quantity: 1,
                    color: item.color,
                    size: item.size
                })" class="far fa-trash-alt"></i>
            </div>
        </div>
    </div>
</template>

<script>
/**************************************
                IMPORTS
**************************************/
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';
/**************************************
                SCRIPTS
**************************************/
    export default {
        props: ['item'],
        computed: {
            ...mapGetters(['GetCartItems']),
            Price() {
                return (this.item.quantity * this.item.price).toFixed(2)
            },
        },
        methods: {
            ...mapActions(['AddItemsTocart', 'DeleteItemfromcart'])
        },
    }
</script>

<style lang='scss' scoped>
/**************************************
                STYLES
**************************************/
.product{
    //background-color: darkgray;
    height: 12rem;
    width: 100%;
    display: flex;
    &-image{
        width: 40%;
        height: 100%;
         img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    &-info{
        display: grid;
        grid-gap: auto;
        width: 100%;
        height: 100%;
        grid-template-columns: repeat(2, 1fr);
        //grid-auto-rows: max-content;
        h4{
            font-size: 1.5rem;
            font-weight: 500;
            padding: 0 1rem;
        }
        span{
            font-weight: 300;
        }
        p{
            font-size: 1.5rem;
            justify-self: end;
            padding: .7rem;
        }
        &__quantity{
            display: flex;
            text-align: center;
            justify-content: center;
            align-items: flex-end;
            font-size: 2rem;
            padding: 2rem;
            .fas{
                text-emphasis: none;
                color: grey;
                transform: translateY(-.3rem);
                margin: 0 1rem;
            }
        }
        &__delete{
            align-self: center;
            justify-self: end;
            font-size: 2rem;
            padding: 2rem;
            cursor: pointer;
        }
    }
}
</style>