module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/sass/_mixins.scss";`
      }
    }
  },

  pluginOptions: {
    apollo: {
      enableMocks: false,
      enableEngine: false
    }
  }
};
