<template>
    <span class="go-back">
        <a @click="goBack">Go Back</a>
    </span>
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
            ...mapGetters([])
        },
        methods: {
            ...mapActions([]),
            goBack() {
                this.$router.go(-1);
            }
        },
    }
</script>

<style lang='scss' scoped>
/**************************************
                STYLES
**************************************/
.go-back{
    a{
        cursor: pointer;
        text-transform: uppercase;
        text-decoration: none;
        text-align: center;
        font-size: 2rem;
        display: inline-block;
        color: black;
        padding: 3rem 4rem;
        //border: .3rem black solid;
    }
}
</style>