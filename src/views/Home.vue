<template>
    <div>
        <Header/>
        <slider msg="NEW ARRIVAL"/>
        <Collections/>
    </div>
</template>

<script>
/**************************************
                IMPORTS
**************************************/
import router from '../router';
import Header from '../components/Header';
import Collections from '../components/Collections';
import slider from '../components/slider';
import Featured from '../components/Featured';
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
/**************************************
                SCRIPTS
**************************************/
    export default {
        name: 'Home',
        components: {
            Header,
            Collections,
            slider,
            Featured
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
</style>