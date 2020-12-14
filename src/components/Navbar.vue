<template>
    <div class="Navbar">
        <div @click="$router.push({path: '/'})" class="Navbar-logo"><h1>womnz.</h1> </div>
        <div class="Navbar-icons">
            <i class="fas fa-search"></i>
            <i class="fas fa-user"></i>
            <div class="Navbar-icons__cart">
                <i @mouseover="ShowHideShoppingCart" class="fas fa-shopping-bag"></i>
                <div class="Navbar-icons__cart-count">
                    <p>{{GetCartItems.length}}</p>
                </div>
            </div>
            <p class="Navbar-icons__price">${{TotalPrice}}</p>
            <div class="Navbar-icons__menu">
                <i class="fas fa-bars"></i>
            </div>
        </div>
        <ShoppingCart/>
    </div>
</template>

<script>
/**************************************
                IMPORTS
**************************************/
import ShoppingCart from '../components/ShoppingCart';
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';
/**************************************
                SCRIPTS
**************************************/
    export default {
        components: {
            ShoppingCart
        },
        computed: {
            ...mapGetters(['IsMobileMenu','IsShoppingCart','GetCartItems']),
            TotalPrice() {
                let Price = 0
                for(let i = 0; i < this.GetCartItems.length; i++){
                    Price += this.GetCartItems[i].price * this.GetCartItems[i].quantity;
                }
                return Price
            }
        },
        methods: {
            ...mapActions(['ShowHideMenu','ShowHideShoppingCart']),
        },
        created () {
    
        },
    }
</script>

<style lang='scss' scoped>
/**************************************
                STYLES
**************************************/
.Navbar{
    height: 8.5rem;
    //width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2;
    border-bottom: 0.1px rgba($color: white, $alpha: .5) solid;
    display: flex;
    align-items: center;
    justify-content: space-between;
    &-logo{
        cursor: pointer;
        h1{
            text-transform: uppercase;
            font-size: 5rem;
            font-weight: 300;
            color: white;
            margin: 0 5rem;
        }
    }
    &-icons{
        display: flex;
        align-items: center;
        i{
            font-size: 3rem;
            color: white;
            margin: 0 3rem;
        }
        &__price{
            color: white;
            font-size: 2rem;
            line-height: 0%;
            margin: 0 3rem 0 0;
        }
        &__cart{
            position: relative;
            &-count{
                position: absolute;
                top: 50%;
                right: 20%;
                height: 2.5rem;
                width: 2.5rem;
                background-color: black;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 50px;
                p{
                    color: white;
                }
            }
        }
        &__menu{
            height: 8.5rem;
            width: 8.5rem;
            display: flex;
            justify-content: center;
            align-items: center;
            border-left: 0.1px rgba($color: white, $alpha: .5) solid;
            i{
                font-size: 3.5rem;
            }
        }
    }
}
</style>