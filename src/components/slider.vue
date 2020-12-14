<template>
<transition name="slide">
    <div class="slider">
        &nbsp;{{msg}}&nbsp;&nbsp;&nbsp;
        <span class="font-bold">{{msg}}</span>
        &nbsp;{{msg}}&nbsp;&nbsp;&nbsp;
        <span class="font-bold">{{msg}}</span>
        &nbsp;{{msg}}&nbsp;&nbsp;&nbsp;
        <span class="font-bold">{{msg}}</span>
        &nbsp;{{msg}}&nbsp;&nbsp;&nbsp;
        <span class="font-bold">{{msg}}</span>
        &nbsp;{{msg}}&nbsp;&nbsp;&nbsp;
        <span class="font-bold">{{msg}}</span>
        &nbsp;{{msg}}&nbsp;&nbsp;&nbsp;
        <span class="font-bold">{{msg}}</span>
        &nbsp;{{msg}}&nbsp;&nbsp;&nbsp;
        <span class="font-bold">{{msg}}</span>
        &nbsp;{{msg}}&nbsp;&nbsp;&nbsp;
        <span class="font-bold">{{msg}}</span>
        &nbsp;{{msg}}&nbsp;&nbsp;&nbsp;
        <span class="font-bold">{{msg}}</span>
        &nbsp;{{msg}}&nbsp;&nbsp;&nbsp;
        <span class="font-bold">{{msg}}</span>
        &nbsp;{{msg}}&nbsp;&nbsp;&nbsp;
        <span class="font-bold">{{msg}}</span>
        &nbsp;{{msg}}&nbsp;&nbsp;&nbsp;
        <span class="font-bold">{{msg}}</span>
        &nbsp;{{msg}}&nbsp;&nbsp;&nbsp;
        <span class="font-bold">{{msg}}</span>
        &nbsp;{{msg}}&nbsp;&nbsp;&nbsp;
        <span class="font-bold">{{msg}}</span>
        &nbsp;{{msg}}&nbsp;&nbsp;&nbsp;
        <span class="font-bold">{{msg}}</span>
        &nbsp;{{msg}}&nbsp;&nbsp;&nbsp;
        <span class="font-bold">{{msg}}</span>
        &nbsp;{{msg}}&nbsp;&nbsp;&nbsp;
        <span class="font-bold">{{msg}}</span>
        &nbsp;{{msg}}&nbsp;&nbsp;&nbsp;
        <span class="font-bold">{{msg}}</span>
        &nbsp;{{msg}}&nbsp;&nbsp;&nbsp;
        <span class="font-bold">{{msg}}</span>
        &nbsp;{{msg}}&nbsp;&nbsp;&nbsp;
        <span class="font-bold">{{msg}}</span>
        &nbsp;{{msg}}&nbsp;&nbsp;&nbsp;
        <span class="font-bold">{{msg}}</span>
        &nbsp;{{msg}}&nbsp;&nbsp;&nbsp;
        <span class="font-bold">{{msg}}</span>
        &nbsp;{{msg}}&nbsp;&nbsp;&nbsp;
        <span class="font-bold">{{msg}}</span>
        &nbsp;{{msg}}&nbsp;&nbsp;&nbsp;
        <span class="font-bold">{{msg}}</span>
        &nbsp;{{msg}}&nbsp;&nbsp;&nbsp;
        <span class="font-bold">{{msg}}</span>
        &nbsp;{{msg}}&nbsp;&nbsp;&nbsp;
        <span class="font-bold">{{msg}}</span>
        &nbsp;{{msg}}&nbsp;&nbsp;&nbsp;
        <span class="font-bold">{{msg}}</span>
        &nbsp;{{msg}}&nbsp;&nbsp;&nbsp;
        <span class="font-bold">{{msg}}</span>
        &nbsp;{{msg}}&nbsp;&nbsp;&nbsp;
        <span class="font-bold">{{msg}}</span>
        &nbsp;{{msg}}&nbsp;&nbsp;&nbsp;
        <span class="font-bold">{{msg}}</span>
        &nbsp;{{msg}}&nbsp;&nbsp;&nbsp;
        <span class="font-bold">{{msg}}</span>
        &nbsp;{{msg}}&nbsp;&nbsp;&nbsp;
        <span class="font-bold">{{msg}}</span>
        &nbsp;{{msg}}&nbsp;&nbsp;&nbsp;
        <span class="font-bold">{{msg}}</span>
        &nbsp;{{msg}}&nbsp;&nbsp;&nbsp;
        <span class="font-bold">{{msg}}</span>
        &nbsp;{{msg}}&nbsp;&nbsp;&nbsp;
        <span class="font-bold">{{msg}}</span>
        &nbsp;{{msg}}&nbsp;&nbsp;&nbsp;
        <span class="font-bold">{{msg}}</span>
        &nbsp;{{msg}}&nbsp;&nbsp;&nbsp;
        <span class="font-bold">{{msg}}</span>
        &nbsp;{{msg}}&nbsp;&nbsp;&nbsp;
        <span class="font-bold">{{msg}}</span>
        &nbsp;{{msg}}&nbsp;&nbsp;&nbsp;
        <span class="font-bold">{{msg}}</span>
    </div>
</transition>
  
</template>

<script>
/**************************************
                IMPORTS
**************************************/
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
/**************************************
                SCRIPTS
**************************************/
export default {
    props: ['msg'],
    computed: {
    ...mapGetters([])
    },
    methods: {
    ...mapActions([])
    }
};
</script>

<style lang='scss' scoped>
/**************************************
                STYLES
**************************************/
.slider{
    font-size: 1.5rem;
    padding: .5rem 0;
    width: max-content;
    white-space: nowrap;
    will-change: transform;
    animation: slide 60s linear infinite;
    @include respond (phone) {
        font-size: 2.5rem;
    }
}
.font-bold{
    font-weight: 700;
    margin: 0 1.5rem;
}
@keyframes slide { 
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-85%);
    }
}
</style>