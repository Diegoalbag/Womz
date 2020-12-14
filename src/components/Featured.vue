<template>
    <div class="featured">
        <div class="best-sellers">
            <div class="best-sellers__head">
                <h1>Best Sellers</h1>
                <div class="buttons">
                    <a v-if="Backbtn" @click="CurrentPageM()" class="back"><i class="fas fa-caret-left"></i></a>
                    <a v-if="Nextbtn" @click="CurrentPageP()" class="next"><i class="fas fa-caret-right"></i></a>
                </div>
                <div class="divisor"></div>
            </div>
            <div class="best-sellers__products">
                <Product 
                v-for="product in VisibleProducts" 
                :key="product.id" 
                :product="product"/>
            </div>
        </div>
        <div class="new-items">
            <div class="new-items__head">
                <h1>New Products</h1>
                <div class="buttons">
                    <a class="back"><i class="fas fa-caret-left"></i></a>
                    <a class="next"><i class="fas fa-caret-right"></i></a>
                </div>
                <div class="divisor"></div>
            </div>
        </div>
    </div>
</template>

<script>
/**************************************
                IMPORTS
**************************************/
import Product from '../components/Product';
import * as firebase from 'firebase/app'
import 'firebase/firestore'
import db from '../main'
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';
import gql from 'graphql-tag'
/**************************************
                SCRIPTS
**************************************/
    export default {
        data() {
            return {
                CurrentPage: 0,
                PerPage: 6,
                Nextbtn: true,
                Backbtn: true
            }
        },
        components: {
            Product
        },
        computed: {
            ...mapGetters(['GetBestSellers']),
            VisibleProducts() {
                return this.GetBestSellers.slice(this.CurrentPage * this.PerPage, (this.CurrentPage * this.PerPage) + this.PerPage);
            },
        },
        methods: {
            ...mapActions(['FetchBestSellers']),
            CurrentPageM() {
                this.CurrentPage = this.CurrentPage - 1;
                console.log(this.CurrentPage);
                if(this.CurrentPage == 0){
                    this.Backbtn = false;
                }
                if(this.VisibleProducts.length = this.PerPage){
                    this.Nextbtn = true;
                }
            },
            CurrentPageP() {
                this.CurrentPage = this.CurrentPage + 1;
                console.log(this.VisibleProducts.length);
                if(this.VisibleProducts.length < this.PerPage){
                    this.Nextbtn = false;
                }
                if(this.CurrentPage != 0){
                    this.Backbtn = true;
                }
            }
        },
        created() {
            this.FetchBestSellers();
            if(this.CurrentPage == 0){
                    this.Backbtn = false;
                };
        },
        mounted () {
        },
        apollo: {
            shop: gql`{
                shop {
                    name
                    products(first: 100){
                        edges{
                            node{
                                id
                            title
                            priceRange{
                                maxVariantPrice{
                                amount
                                }
                            }
                            }
                        }
                    }
                }
            }`
        },
    }
</script>

<style lang='scss' scoped>
/**************************************
                STYLES
**************************************/
.featured{
    display: grid;
    height: max-content;
    grid-template-columns: repeat(auto-fit, minmax(55rem, 1fr));
    justify-content: center;
    margin: 1rem auto;
    padding: 4rem 0;
    @include respond(phone) {
        grid-template-columns: 1fr;
        font-size: 2.5rem;
    }
    .best-sellers{
        display: grid;
        grid-template-columns: 1fr;
        padding: 0 3rem;
        &__head{
            display: grid;
            height: max-content;
            grid-template-columns: repeat(2, max-content);
            justify-content: space-between;
            .buttons{
                align-self: center;
                justify-self: center;
                @include respond(phone){
                    font-size: 4rem;
                }
                .back, .next{
                    width: 2rem;
                    height: 2rem;
                    padding: 0 .5rem;
                    margin: 0 .5rem;
                    @include respond(phone){
                        padding: 0 3rem;
                        margin: 0 1rem;
                    }
                    border: .1rem black solid;
                    background-color: white;
                }

            }
            .divisor{
                background-color: black;
                height: .1rem;
                margin-top: 1rem;
                grid-column: 1 / -1
            }
        }
        &__products{
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
            grid-gap: 3rem;
            padding-top: 3rem;
        }
    }
    .new-items{
        display: grid;
        grid-template-columns: 1fr;
        padding: 0 3rem;
        &__head{
            display: grid;
            height: max-content;
            grid-template-columns: repeat(2, max-content);
            justify-content: space-between;
            .buttons{
                align-self: center;
                justify-self: center;
                @include respond(phone){
                    font-size: 4rem;
                }
                .back, .next{
                    width: 2rem;
                    height: 2rem;
                    padding: 0 .5rem;
                    margin: 0 .5rem;
                    @include respond(phone){
                        padding: 0 3rem;
                        margin: 0 1rem;
                    }
                    border: .1rem black solid;
                    background-color: white;
                }

            }
            .divisor{
                background-color: black;
                height: .1rem;
                margin-top: 1rem;
                grid-column: 1 / -1
            }
        }
    }
}
</style>