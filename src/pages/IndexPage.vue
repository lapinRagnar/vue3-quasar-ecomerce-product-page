<template>
  <q-page padding>

    <div class="row justify-around">

      <div class="col-4 bg-cyan-1">
        <q-carousel
          swipeable
          animated
          v-model="slide"
          thumbnails
          infinite

        >
          <q-carousel-slide
            :name="1"
            img-src="https://cdn.quasar.dev/img/mountains.jpg"
            style="border-radius: 15px;"
          />
          <q-carousel-slide
            :name="2"
            img-src="https://cdn.quasar.dev/img/parallax1.jpg"
            style="border-radius: 15px;"
          />
          <q-carousel-slide
            :name="3"
            img-src="https://cdn.quasar.dev/img/parallax2.jpg"
            style="border-radius: 15px;"
          />
          <q-carousel-slide
            :name="4"
            img-src="https://cdn.quasar.dev/img/quasar.jpg"
            style="border-radius: 15px;"
          />

        </q-carousel>


      </div>


      <div class="col-5 q-pa-xl" style="border-radius: 15px;">

        <div class="q-mb-xs text-orange text-weight-bold">SNEAKER COMPANY</div>
        <div class="text-h4 text-weight-bold">Fall Limited Edition Sneakers</div>
        <div class="text-caption q-my-lg">
        These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer
        sole, they'll withstand everything the weather can offer.
        </div>
        <div class="row">
          <div class="q-mr-md">$125.00</div>
          <div class="text-orange q-mb-xs">50%</div>
        </div>
        <div
          class="q-mb-xl text-grey"
          style="text-decoration: line-through; text-decoration-color: red; "
        >$250.00</div>
        <div class="row flex flex-center bg-green">
          <q-btn
            class="col-1"
            color="orange"
            label="-"
            flat
            size="lg"
            @click="counterCart > 0 ? counterCart-- : 0"
          />
          <q-input
            name="my-input"
            class="col-1"
            type="number"
            v-model.number="counterCart"
            borderless
            hide-bottom-space
          />
          <q-btn
            class="col-1 q-mr-xl"
            label="+"
            color="orange"
            size="lg"
            flat
            @click="counterCart++"
          />
          <q-btn
            class="col-6 bg-orange"
            color="white"
            label="Add to Cart"
            flat
            icon="shopping_cart"
            rounded
            autogrow="false"
            dense
            @click="addToCart"
          />
        </div>


      </div>

    </div>

  </q-page>
</template>

<script setup>

  import { ref } from 'vue';
  import { useInputCartStore } from 'src/stores/inputCart'

  const inputCartStore = useInputCartStore()

  const slide = ref(1)
  const counterCart = ref(0)

  function addToCart() {
    if (counterCart.value > 0){
      inputCartStore.inputValue = counterCart.value
      counterCart.value = 0
    }
  }

</script>

<style scoped>

  .q-carousel__navigation-inner{
    position: fixed !important;
    margin-top: 30px !important;
    margin-left:50px !important;
  }

  input[type="number"] {
    outline: none;
    font-size: 5rem !important;
  }

</style>


