<template>
    <div class="Hero">
        <h1>FLASH NIGHT</h1>
        <a @click="$router.push('/fallcol')" href="#" class="btn">Discover collection</a>
        <div class="Hero-1"></div>
        <div class="Hero-2"></div>
        <div class="Hero-3"></div>
    </div>
</template>

<script>
/**************************************
                IMPORTS
**************************************/
import Navbar from '../components/Navbar';
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';
/**************************************
                SCRIPTS
**************************************/
    export default {
        components: {
            Navbar,
        },
        computed: {
            ...mapGetters([])
        },
        methods: {
            ...mapActions([])
        },
    }
</script>

<style lang='scss' scoped>
/**************************************
                STYLES
**************************************/
.Hero{
    position: relative;
    height: 90vh;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    @include respond(phone){
        grid-template-columns: 1fr;
    }
    &-1{
        background-image: url(../assets/Hero1.jpg);
        background-size: cover;
        background-position: center;
        @include respond(phone){
            display: none;
        }
    }
    &-2{
        background-image: url(../assets/Hero2.jpg);
        background-size: cover;
        background-position: right;
    }
    &-3{
        background-image: url(../assets/Hero3.jpg);
        background-size: cover;
        @include respond(phone){
            display: none;
        }
    }
    h1{
        position: absolute;
        top: 30%;
        left: 50%;
        white-space: nowrap;
        transform: translateX(-50%);
        color: white;
        font-weight: 300;
        font-size: 14rem;
        @include respond(phone){
            font-size: 10rem;
            top: 40%;
        }
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
</style>