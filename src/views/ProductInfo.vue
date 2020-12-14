<template>
    <div class="addtocart">
        <GoBack/>
        <div class="card">
            <figure class="product-image">
                <img :src="product.src">
            </figure>
            <div class="product-info">
                <h4>{{ product.title }}</h4>
                <p>${{ItemTotal}}</p>
                <div class="product-info__quantity">
                    <a><i class="fas fa-minus" @click="quantity === 1 ? '' : --quantity"></i></a>
                    <p>{{quantity}}</p>
                    <a><i class="fas fa-plus" @click="quantity++"></i></a>
                </div>
                <a class="btn" @click="SendItem">add to cart</a>
            </div>
        </div>
    </div>
</template>

<script>
/**************************************
                IMPORTS
**************************************/
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';
import GoBack from '../components/GoBack'
/**************************************
                SCRIPTS
**************************************/
    export default {
        data() {
            return {
                quantity: 1
            }
        },
        components: {
            GoBack
        },
        computed: {
            ...mapGetters(['GetBestSellers']),
            ItemTotal() {
                return (this.product.price * this.quantity).toFixed(2)
            },
            product() {
                return this.GetBestSellers.find(
                    product => product.id === this.$route.params.id
                )
            }
            
        },
        methods: {
            ...mapActions(['AddItemsTocart']),
            SendItem() {
                this.AddItemsTocart({id: this.product.id, quantity: this.quantity}).then(() =>{
                    this.$router.go(-1);
                })
            }
        },
    }
</script>

<style lang='scss' scoped>
.addtocart{
    position: relative;
    height: 100vh;
    .card{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        height: 63rem;
        width: 120rem;
        display: flex;
            .product-image{
                width: 100%;
                height: 100%;
                img{
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }
            .product-info{
                height: 100%;
                width: 100%;
                display: grid;
                grid-template-columns: 1fr;
                grid-auto-rows: min-content;
                h4{
                    font-size: 4rem;
                    font-weight: 500;
                }
                p{
                    font-size: 3rem;
                }
                .btn{
                    cursor: pointer;
                    width: 30rem;
                    text-transform: uppercase;
                    text-decoration: none;
                    text-align: center;
                    font-size: 3rem;
                    display: inline-block;
                    color: black;
                    border: .3rem black solid;
                    transition: all .2s;
                    &:hover{
                        background-color: black;
                        color: white;

                    }
                }
                &__quantity{
                    display: flex;
                    text-align: center;
                    align-items: flex-end;
                    font-size: 2rem;
                    .fas{
                        text-emphasis: none;
                        color: grey;
                        transform: translateY(-.3rem);
                        margin: 0 1rem;
                    }
                }
            }
    }
        
}
</style>