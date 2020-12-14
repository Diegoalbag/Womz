<template>
    <div class="collections">
        <div class="collections-main">
            <h1>shoewear</h1>
            <a @click="$router.push('/shoewear')" href="#" class="btn">shop shoewear</a>
        </div>
        <div class="collections-sub">
            <div @mouseover="collectionssub1hover = true" @mouseleave="collectionssub1hover = false" class="collections-sub__1">
                <div v-if="collectionssub1hover || Mobile" class="collections-sub__1--heading">
                    <h1>Hoodies</h1>
                    <a href="" class="btn">check out</a>
                </div>
            </div>
            <div @mouseover="collectionssub2hover = true" @mouseleave="collectionssub2hover = false" class="collections-sub__2">
                <div v-if="collectionssub2hover || Mobile" class="collections-sub__2--heading">
                        <h1>T-shirts</h1>
                        <a href="" class="btn">check out</a>
                </div>
            </div>
            <div @mouseover="collectionssub3hover = true" @mouseleave="collectionssub3hover = false" class="collections-sub__3">
                <div v-if="collectionssub3hover || Mobile" class="collections-sub__3--heading">
                        <h1>Gallery</h1>
                        <a href="" class="btn">check out</a>
                </div>
            </div>
            <div @mouseover="collectionssub4hover = true" @mouseleave="collectionssub4hover = false" class="collections-sub__4">
                <div v-if="collectionssub4hover || Mobile" class="collections-sub__4--heading">
                        <h1>Accessories</h1>
                        <a href="" class="btn">check out</a>
                </div>
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
        data() {
            return {
                collectionssub1hover : false,
                collectionssub2hover : false,
                collectionssub3hover : false,
                collectionssub4hover : false,
                Mobile: false
            }
        },
        computed: {
            ...mapGetters([])
        },
        methods: {
            ...mapActions([])
        },
        created () {
            if(window.innerWidth <= 600) {
                    this.Mobile = true;
                    console.log('true');
                };
        },
    }
</script>

<style lang='scss' scoped>
/**************************************
                STYLES
**************************************/
.collections{
    display: grid;
    height: 50vw;
    grid-template-columns: repeat(2, 1fr);
    @include respond(phone){
        height: 100vh;
        grid-template-columns: 1fr;
    }
    &-main{
        position: relative;
        background-image: url(../assets/collections-main.jpg);
        background-size: cover;
        background-position: center;
        h1{
            position: absolute;
            top: 30%;
            left: 50%;
            white-space: nowrap;
            transform: translateX(-50%);
            color: white;
            font-weight: 300;
            font-size: 10rem;
            text-transform: uppercase;
        }
        .btn{
            cursor: pointer;
            position: absolute;
            top: 60%;
            left: 50%;
            transform: translateX(-50%);
            text-transform: uppercase;
            text-decoration: none;
            text-align: center;
            font-size: 3rem;
            display: inline-block;
            color: white;
            padding: 1rem 3rem;
            border: .3rem white solid;
            transition: all .2s;

            @include respond(phone){
                padding: 2rem 1rem; 
            }
            &:hover{
                background-color: white;
                transform: translate(-50%, -.3rem);
                color: black;
                box-shadow: 0 1rem 1rem rgba(black, .4);

            }
            &:active{
                transform: translate(-50%, -.1rem);
                box-shadow: 0 .5rem 2rem rgba(black, .4);
            }
            &::after{
                content: "";
                display: inline-block;
                height: 100%;
                width: 100%;
                position: absolute;
                top: 0;
                left: 0;
                z-index: -1;
            }

        }
    }
    &-sub{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
        &__1{
            position: relative;
            background-image: url(../assets/hoodies.jpg);
            background-size: cover;
            background-position: top;
            &:hover{
                background-image: linear-gradient(to right bottom, 
                rgba(red, .8), 
                rgba(grey, .8)),
                url(../assets/hoodies.jpg);
                margin: .5rem;
                transition: all .5s;
            }
            @include respond(phone){
                background-image: linear-gradient(to right bottom, 
                rgba(red, .8), 
                rgba(grey, .8)),
                url(../assets/hoodies.jpg);
            }
            &--heading{
                position: absolute;
                top: 40%;
                left: 50%;
                transform: translateX(-50%);
                text-align: center;
                h1{
                    font-size: 4rem;
                    font-weight: 300;
                    color: white;
                    @include respond(phone){
                        font-size: 5rem;
                        font-weight: 400;
                    }
                }
                .btn{
                    cursor: pointer;
                    position: relative;
                    top: 3rem;
                    text-transform: uppercase;
                    text-decoration: none;
                    text-align: center;
                    font-size: 1rem;
                    display: inline-block;
                    color: white;
                    padding: 1rem 3rem;
                    border: .2rem white solid;
                    @include respond(phone){
                        display: none;
                    }
                }
            }
        }
        &__2{
            position: relative;
            background-image: url(../assets/tshirts.jpg);
            background-size: cover;
            background-position: top;
            &:hover{
                background-image: linear-gradient(to left bottom,
                rgba(201,40,90, .8), 
                rgba(170,144,128, .8)), 
                url(../assets/tshirts.jpg);
                margin: .5rem;
                transition: all .5s;
            }
            @include respond(phone){
                background-image: linear-gradient(to left bottom,
                rgba(201,40,90, .8), 
                rgba(170,144,128, .8)), 
                url(../assets/tshirts.jpg);
            }
            &--heading{
                position: absolute;
                top: 40%;
                left: 50%;
                transform: translateX(-50%);
                text-align: center;
                h1{
                    font-size: 4rem;
                    font-weight: 300;
                    color: white;
                    @include respond(phone){
                        font-size: 5rem;
                        font-weight: 400;
                    }
                }
                .btn{
                    cursor: pointer;
                    position: relative;
                    top: 3rem;
                    text-transform: uppercase;
                    text-decoration: none;
                    text-align: center;
                    font-size: 1rem;
                    display: inline-block;
                    color: white;
                    padding: 1rem 3rem;
                    border: .2rem white solid;
                    @include respond(phone){
                        display: none;
                    }
                }
            }
        }
        &__3{
            position: relative;
            background-image: url(../assets/flowers.jpg);
            background-size: cover;
            background-position: bottom;
            &:hover{
                background-image: linear-gradient(to left bottom, 
                rgba(240,210,150, .8), 
                rgba(220,73,29, .8)),
                url(../assets/flowers.jpg);
                margin: .5rem;
                transition: all .5s;
            }
            @include respond(phone){
                background-image: linear-gradient(to left bottom, 
                rgba(240,210,150, .8), 
                rgba(220,73,29, .8)),
                url(../assets/flowers.jpg);
            }
            &--heading{
                position: absolute;
                top: 40%;
                left: 50%;
                transform: translateX(-50%);
                text-align: center;
                h1{
                    font-size: 4rem;
                    font-weight: 300;
                    color: white;
                    @include respond(phone){
                        font-size: 5rem;
                        font-weight: 400;
                    }
                }
                .btn{
                    cursor: pointer;
                    position: relative;
                    top: 3rem;
                    text-transform: uppercase;
                    text-decoration: none;
                    text-align: center;
                    font-size: 1rem;
                    display: inline-block;
                    color: white;
                    padding: 1rem 3rem;
                    border: .2rem white solid;
                    @include respond(phone){
                        display: none;
                    }
                }
            }
        }
        &__4{
            position: relative;
            background-image: url(../assets/accesories.jpg);
            background-size: cover;
            background-position: bottom;
            &:hover{
                background-image: linear-gradient(to left bottom, 
                rgba(grey, .8), 
                rgba(black, .8)),
                url(../assets/accesories.jpg);
                margin: .5rem;
                transition: all .5s;
            }
            @include respond(phone){
                background-image: linear-gradient(to left bottom, 
                rgba(grey, .8), 
                rgba(black, .8)),
                url(../assets/accesories.jpg);
            }
            &--heading{
                position: absolute;
                top: 40%;
                left: 50%;
                transform: translateX(-50%);
                text-align: center;
                h1{
                    font-size: 4rem;
                    font-weight: 300;
                    color: white;
                    @include respond(phone){
                        font-size: 5rem;
                        font-weight: 400;
                    }
                }
                .btn{
                    cursor: pointer;
                    position: relative;
                    top: 3rem;
                    text-transform: uppercase;
                    text-decoration: none;
                    text-align: center;
                    font-size: 1rem;
                    display: inline-block;
                    color: white;
                    padding: 1rem 3rem;
                    border: .2rem white solid;
                    @include respond(phone){
                        display: none;
                    }
                }
            }
        }
    }
}
</style>