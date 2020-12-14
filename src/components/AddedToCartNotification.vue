<template>
    <div v-if="IsShowing" class="Notification">

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
            ...mapGetters(['IsShowing'])
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
    width: 500px;
    height: 100px;
    border-radius: 10px;
    background-color: white;
    position: fixed;
    left: 50%;
    top: 3%;
    transform: translateX(-50%);
    z-index: 5;
}
</style>