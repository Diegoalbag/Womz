<template>
    <div v-if="IsShowingAdded || IsShowingSelect" class="Notification">
        <div v-if="IsShowingAdded" class="Notification-add">
            <h1>Product added to cart</h1>
            <i class="fas fa-cart-plus"></i>
        </div>
        <div v-if="IsShowingSelect" class="Notification-select">
            <h1>please choose an option</h1>
            <!-- <i class="fas fa-hand-pointer"></i> -->
            <i class="fas fa-vote-yea"></i>
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
        computed: {
            ...mapGetters(['IsShowingAdded', 'IsShowingSelect'])
        },
        methods: {
            ...mapActions([''])
        },
    }
</script>

<style lang='scss' scoped>
/**************************************
                STYLES
**************************************/
.Notification{
    width: 50rem;
    height: 10rem;
    border-radius: 10px;
    background-color: white;
    position: fixed;
    left: 50%;
    top: 3%;
    transform: translateX(-50%);
    z-index: 5;
    &-add{
        height: 100%;
        width: 100%;
        background-color: rgb(160, 255, 160);
        border-radius: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        h1{
            text-transform: uppercase;
            font-weight: 400;
        }
        i{
            font-size: 2rem;
            margin: 0 1rem;
            color: green;
        }
    }
    &-select{
        height: 100%;
        width: 100%;
        background-color: rgb(255, 160, 160);
        border-radius: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        h1{
            text-transform: uppercase;
            font-weight: 400;
        }
        i{
            font-size: 2rem;
            margin: 0 1rem;
            color: red;
        }
    }
}
</style>