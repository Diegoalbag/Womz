<template>
  <div class="Product">
    <div
      @click="MobileAddToCart()"
      class="Product-Card"
      :style="{ backgroundImage: `url('${MainImg}')` }"
    >
      <div v-if="overlay" class="Product-Card__Overlay"></div>
      <div v-if="overlay" class="Product-Card__Info">
        <div class="Product-Card__Info--del">
          <h2 @click="InfoActive">+</h2>
        </div>
        <h1 class="Product-Card__Info--title">{{ product.title }}</h1>
        <h2 class="Product-Card__Info--price">${{ ProductMaxPrice }}</h2>
        <p class="Product-Card__Info--desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <h2 v-if="productsizes.length > 0" class="Product-Card__Info--size">
          size
        </h2>
        <div v-if="productsizes.length > 0" class="Product-Card__Info--sizes">
          <h6
            @click="SelectSize(size)"
            v-for="size in productsizes"
            :key="size"
            :class="selectedSize === size ? 'sizeactive' : ''"
          >
            {{ size }}
          </h6>
        </div>
        <h2 v-if="productcolors.length > 0" class="Product-Card__Info--color">
          color
        </h2>
        <div v-if="productcolors.length > 0" class="Product-Card__Info--colors">
          <div
            @click="SelectColor(color)"
            v-for="color in productcolors"
            :key="color"
            :style="{ backgroundColor: `${color}` }"
            :class="selectedColor === color ? 'coloractive' : ''"
          ></div>
        </div>
        <div class="Product-Card__Info--counter">
          <h2 @click="productQuantity === 1 ? '' : productQuantity--">--</h2>
          <h3>{{ productQuantity }}</h3>
          <h2 @click="productQuantity++">+</h2>
        </div>
        <div class="Product-Card__Info--btn">
          <h2 @click="AddToCart()">add to cart</h2>
        </div>
      </div>
    </div>
    <div class="Product-Title">
      <h1>{{ product.title }}</h1>
    </div>
    <div v-if="overlay" class="Product-Mobile">
      <div class="Product-Mobile__Info">
        <div class="Product-Mobile__Info--del">
          <h2 @click="InfoActive">+</h2>
        </div>
        <h1 class="Product-Mobile__Info--title">{{ product.title }}</h1>
        <h2 class="Product-Mobile__Info--price">${{ ProductMaxPrice }}</h2>
        <p class="Product-Mobile__Info--desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <h2 v-if="productsizes.length > 0" class="Product-Mobile__Info--size">
          size
        </h2>
        <div v-if="productsizes.length > 0" class="Product-Mobile__Info--sizes">
          <h6
            @click="SelectSize(size)"
            v-for="size in productsizes"
            :key="size"
            :class="selectedSize === size ? 'sizeactivemobile' : ''"
          >
            {{ size }}
          </h6>
        </div>
        <h2 v-if="productcolors.length > 0" class="Product-Mobile__Info--color">
          color
        </h2>
        <div v-if="productcolors.length > 0" class="Product-Mobile__Info--colors">
          <div
            @click="SelectColor(color)"
            v-for="color in productcolors"
            :key="color"
            :style="{ backgroundColor: `${color}` }"
            :class="selectedColor === color ? 'coloractive' : ''"
          ></div>
        </div>
        <div class="Product-Mobile__Info--counter">
          <h2 @click="productQuantity === 1 ? '' : productQuantity--">--</h2>
          <h3>{{ productQuantity }}</h3>
          <h2 @click="productQuantity++">+</h2>
        </div>
        <div class="Product-Mobile__Info--btn">
          <h2 @click="AddToCart()">add to cart</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
  name: "product",
  props: ["product"],
  methods: {
    ...mapActions(["AddItemsTocart", "ShowNotification"]),
    InfoActive() {
      setTimeout(() => {
        this.overlay = false;
        this.productQuantity = 1;
        this.selectedColor = undefined;
        this.selectedSize = undefined;
      }, 1);
    },
    VariantsLog() {
      for (let i = 0; i < this.product.variants.edges.length; i++) {
        // Loops through all the possible VARIENTS
        let variants = this.product.variants.edges[i].node.selectedOptions; //Declares the CURRENT VARIANT data in a variable

        for (let i = 0; i < variants.length; i++) {
          // Loops through all the possible VARIENTS OPTIONS

          if (variants[i].value !== "Default Title") {
            //Checks if the PRODUCT contains more than one VARIENT OPTION
            this.gotVariants = true; // If the PRODUCT got more than the default variant sets gotVariants to TRUE
            if (variants[i].name === "Size") {
              if (this.productsizes.includes(variants[i].value)) {
                //Checks if productsizes already has the CURRENT SIZE
              } else {
                this.productsizes.push(variants[i].value); //If productsizes does not has the CURRENT SIZE adds it to the array
              }
            }
            if (variants[i].name === "Color") {
              if (this.productcolors.includes(variants[i].value)) {
                //Checks if productcolors already has the CURRENT COLOR
              } else {
                this.productcolors.push(variants[i].value); //If productcolors does not has the CURRENT COLOR adds it to the array
              }
            }
          }
        }
      }
    },
    SelectSize(size) {
      this.selectedSize = size;
    },
    SelectColor(color) {
      this.selectedColor = color;
    },
    AddToCart() {
      if (
        this.gotVariants &&
        this.selectedColor === undefined &&
        this.selectedSize === undefined
      ) {
        console.log("Please select size and color");
      } else {
        console.log(this.product.id);
        console.log(this.selectedColor);
        console.log(this.selectedSize);
        console.log(this.productQuantity);

        this.AddItemsTocart({
          id: this.product.id,
          title: this.product.title,
          image: this.MainImg,
          price: this.ProductMaxPrice,
          quantity: this.productQuantity,
          color: this.selectedColor,
          size: this.selectedSize,
        });

        this.ShowNotification().then(() => {
          gsap.from(".Notification", {
            y: -300,
            duration: 0.5,
          });
        });
      }
    },
    SizeStyle(size) {
      let style = "";
      if (this.SelectSize === size) {
        style = '{backgroundColor: "white"}';
        console.log(style);
      }
      return style;
    },
    MobileAddToCart() {
        this.overlay = true;
        setTimeout(() => {
            gsap.to('.Product-Mobile', {
                y: 0,
                duration: .2
            })
        }, 1);
    }
  },
  data() {
    return {
      overlay: false,
      productQuantity: 1,
      gotVariants: false,
      productcolors: [],
      productsizes: [],
      selectedColor: undefined,
      selectedSize: undefined,
    };
  },
  computed: {
    MainImg() {
      return this.product.images.edges[0].node.originalSrc;
    },
    ProductMaxPrice() {
      return parseInt(this.product.priceRange.maxVariantPrice.amount);
    },
  },
  mounted() {
    this.VariantsLog();
  },
};
</script>

<style lang="scss" scoped>
.Product {
  &-Card {
    position: relative;
    height: 526px;
    width: 370px;
    @include respond(tab-port) {
      height: 446px;
      width: 314px;
    }
    @include respond(phone) {
      height: 350px;
      width: 250px;
      border-radius: 20px;
    }
    border-radius: 30px;
    background-image: url(../assets/flowers.jpg);
    background-size: cover;
    background-origin: center;
    background-position: center;
    margin: 0 3rem;
    overflow: hidden;
    &__Overlay {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      height: 110%;
      width: 110%;
      border-radius: 30px;
      background: inherit;
      box-shadow: inset 0 0 1000px rgba($color: black, $alpha: 0.7);
      filter: blur(15px);
      padding: 5rem;
      @include respond(phone) {
        border-radius: 20px;
        display: none;
      }
    }
    &__Info {
      height: 100%;
      width: 100%;
      position: relative;
      padding: 3rem 2rem;
      color: white;
      @include respond(phone) {
        padding: 5rem 4rem;
        display: none;
      }
      &--del {
        position: absolute;
        top: 0;
        right: 0;
        height: min-content;
        padding: 2rem 2rem;
        h2 {
          font-size: 4rem;
          font-weight: 400;
          transform: rotate(45deg);
          line-height: 3rem;
          cursor: pointer;
          @include respond(phone) {
            font-size: 8rem;
          }
        }
      }
      &--title {
        text-transform: uppercase;
        font-size: 3.5rem;
        font-weight: 400;
        @include respond(phone) {
          font-size: 5rem;
        }
      }
      &--price {
        font-size: 2.5rem;
        font-weight: 400;
        @include respond(phone) {
          font-size: 3rem;
        }
      }
      &--desc {
        font-size: 1.5rem;
        font-weight: 300;
        margin: 1rem 0 0 0;
        @include respond(phone) {
          font-size: 2rem;
        }
      }
      &--size {
        font-size: 2.5rem;
        font-weight: 400;
        text-transform: uppercase;
        margin: 1rem 0 0 0;
        @include respond(phone) {
          font-size: 3rem;
        }
      }
      &--sizes {
        font-size: 2.5rem;
        font-weight: 400;
        text-transform: uppercase;
        h6 {
          display: inline-block;
          border: 1px solid white;
          font-size: 2rem;
          @include respond(phone) {
            font-size: 5rem;
            margin: 0 2rem 0 0;
            padding: 0 2rem;
          }
          font-weight: 300;
          text-align: center;
          height: min-content;
          width: min-content;
          padding: 0 1rem;
          margin: 0 0.5rem 0 0;
          cursor: pointer;
        }
      }
      &--color {
        font-size: 2.5rem;
        font-weight: 400;
        text-transform: uppercase;
        margin: 1rem 0 0 0;
      }
      &--colors {
        font-size: 2.5rem;
        font-weight: 400;
        text-transform: uppercase;
        display: flex;
        div {
          //background-color: beige;
          border-radius: 100%;
          height: 3.2rem;
          width: 3.2rem;
          margin: 0 0.5rem 0 0;
          cursor: pointer;
        }
      }
      &--counter {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 4rem 0 0 0;
        h3 {
          display: inline-block;
          border: 1px solid white;
          font-size: 2rem;
          font-weight: 300;
          text-align: center;
          height: 3.2rem;
          width: 3.2rem;
          margin: 0 3rem;
        }
        h2 {
          font-size: 3rem;
          font-weight: 300;
          cursor: pointer;
        }
      }
      &--btn {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 1rem 0;
        cursor: pointer;
        h2 {
          text-transform: uppercase;
          font-weight: 400;
          border: 1.5px solid white;
          padding: 0.5rem 2rem;
        }
      }
    }
  }
  &-Mobile {
    display: none;
    position: fixed;
    bottom: 0;
    left: 0;
    transform: translateY(500px);
    height: 70vh;
    width: 100vw;
    border-radius: 20px 20px 0px 0px;
    background-color: white;
    z-index: 1;
    @include respond(phone) {
      display: block;
    }
    &__Info{
      height: 100%;
      width: 100%;
      position: relative;
      padding: 5rem 5rem;
      color: black;
      &--del {
        position: absolute;
        top: 0;
        right: 0;
        height: min-content;
        padding: 4rem 4rem;
        h2 {
          font-size: 10rem;
          font-weight: 400;
          transform: rotate(45deg);
          line-height: 3rem;
          cursor: pointer;
        }
      }
      &--title {
        text-transform: uppercase;
        font-size: 8rem;
        font-weight: 400;
      }
      &--price {
        font-size: 5rem;
        font-weight: 400;
        margin: 3rem 0;
      }
      &--desc {
        font-size: 3rem;
        font-weight: 300;
        margin: 2rem 0 0 0;
      }
      &--size {
        font-size: 5rem;
        font-weight: 400;
        text-transform: uppercase;
        margin: 2rem 0 0 0;
      }
      &--sizes {
        font-size: 2.5rem;
        font-weight: 400;
        text-transform: uppercase;
        margin: 2rem 0;
        h6 {
          display: inline-block;
          border: 1px solid black;
          font-size: 6rem;
          font-weight: 300;
          text-align: center;
          height: min-content;
          width: min-content;
          padding: 0 2rem;
          margin: 0 2rem 0 0;
          cursor: pointer;
        }
      }
      &--color {
        font-size: 2.5rem;
        font-weight: 400;
        text-transform: uppercase;
        margin: 1rem 0 0 0;
      }
      &--colors {
        font-size: 2.5rem;
        font-weight: 400;
        text-transform: uppercase;
        display: flex;
        div {
          //background-color: beige;
          border-radius: 100%;
          height: 3.2rem;
          width: 3.2rem;
          margin: 0 0.5rem 0 0;
          cursor: pointer;
        }
      }
      &--counter {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0rem 0 0 0;
        h3 {
          display: inline-block;
          border: 1px solid white;
          font-size: 5rem;
          font-weight: 300;
          text-align: center;
          height: 7rem;
          width: 7rem;
          margin: 0 3rem;
        }
        h2 {
          font-size: 8rem;
          font-weight: 300;
          cursor: pointer;
        }
      }
      &--btn {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 1rem 0;
        cursor: pointer;
        h2 {
          text-transform: uppercase;
          font-weight: 400;
          font-size: 4rem;
          border: 1.5px solid black;
          padding: 1rem 3rem;
        }
      }
    }
  }
  &-Title {
    padding: 1rem 0;
    text-align: center;
    text-transform: uppercase;
    h1 {
      font-weight: 400;
      color: white;
      filter: none;
    }
  }
  .sizeactive {
    background-color: white;
    color: black;
  }
  .sizeactivemobile {
    background-color: black;
    color: white;
  }
  .coloractive {
    border-radius: 10% !important;
  }
}
</style>