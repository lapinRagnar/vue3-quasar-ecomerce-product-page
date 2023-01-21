<template>
  <q-page padding>

    <div class="row justify-around q-mt-xl">

      <div class="col-xs-12 col-md-4 cursor-pointer">

        <q-carousel
          swipeable
          animated
          v-model="slide"
          thumbnails
          infinite
          style="border-radius: 15px;"

        >
          <q-carousel-slide
            v-for="(dataCarousel, i) in datasCarousel"
            :index="i"
            :name="dataCarousel.name"
            :img-src="dataCarousel.imgUrl"
            style="border-radius: 15px;"
            @click="carousel = true"
          />

        </q-carousel>

        <!-- dialog to be clicked -->
        <q-dialog
          v-model="carousel"
          persistent
          full-width
        >
          <div>

            <q-toolbar class="flex flex-center">
              <q-btn
                align="center"
                flat
                round
                dense
                text-color="red"
                size="xl"
                icon="close"
                v-close-popup
              />
            </q-toolbar>

            <q-carousel
              swipeable
              animated
              v-model="slide"
              thumbnails
              class="carousel-slide"
              style="border-radius: 15px;"
            >
              <q-carousel-slide
                v-for="(dataCarousel, i) in datasCarousel"
                :index="i"
                :name="dataCarousel.name"
                :img-src="dataCarousel.imgUrl"
                style="border-radius: 15px;"
                @click="carousel = true"
              />

            </q-carousel>

          </div>


        </q-dialog>


      </div>

      <div class="col-sm-12 col-md-5 " style="border-radius: 15px;">

        <div class="q-mb-lg text-orange text-weight-bold q-pt-sm-md sneaker-company ">SNEAKER COMPANY</div>
        <div class="text-h4 text-weight-bold">Fall Limited Edition Sneakers</div>
        <div class="text-body1 q-my-lg">
        These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer
        sole, they'll withstand everything the weather can offer.
        </div>
        <div class="row">
          <div class="q-mr-md text-weight-bold text-h6">$125.00</div>
          <div class="text-orange q-mb-xs text-weight-bold text-h6">50%</div>
        </div>
        <div
          class="q-mb-xl text-grey text-weight-bold text-h6"
          style="text-decoration: line-through; text-decoration-color: red; "
        >$250.00</div>

        <div class="la-div-btn">
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
            class="col-1 my-input"
            v-model.number="counterCart"
            borderless
            hide-bottom-space
          />
          <q-btn
            class="col-1"
            label="+"
            color="orange"
            size="lg"
            flat
            @click="counterCart++"
          />
          <q-btn
            class="col-6 bg-orange my-btn-add-cart"
            color="white"
            label="Add to Cart"
            flat
            icon="shopping_cart"
            rounded
            autogrow="false"
            dense
            no-wrap
            @click="addToCart"
          />

          <!-- alert for empty cart -->

          <q-dialog v-model="alertCartEmpty" persistent transition-show="rotate" transition-hide="rotate">
            <q-card style="width: 300px">
              <q-card-section class="bg-teal text-red" >
                <div class="text-h6">Alert</div>
              </q-card-section>

              <q-card-section class="q-pt-none">
                Your cart is empty!
              </q-card-section>

              <q-card-actions align="right">
                <q-btn flat label="OK" color="primary" v-close-popup />
              </q-card-actions>
            </q-card>
          </q-dialog>

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
  const carousel = ref(false)
  const alertCartEmpty = ref(false)
  const datasCarousel = ref([
    {
      name: 1,
      imgUrl: 'image-product-1.jpg'
    },
    {
      name: 2,
      imgUrl: 'image-product-2.jpg'
    },
    {
      name: 3,
      imgUrl: 'image-product-3.jpg'
    },
    {
      name: 4,
      imgUrl: 'image-product-4.jpg'
    },
  ])

  function addToCart() {
    if (counterCart.value > 0){
      inputCartStore.inputValue = counterCart.value
      counterCart.value = 0
    } else {
      alertCartEmpty.value = true
    }
  }

</script>

<style lang="scss" scoped>

  .my-btn-add-cart{
    width: 190px;
  }

  .la-div-btn{
    max-width: 300px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
  }

  .my-input{
    width: 20px;
    font-size: 30px;
    font-weight: 900;
  }

  .sneaker-company{

    @media (max-width: 1028px) {
      margin-top: 50px;
    }
  }

  .carousel-slide{
    background-color: red;
    width: 60%;
    text-align: center;
    margin-left: 220px;
  }

  /* .q-carousel__navigation-inner{
    position: fixed !important;
    margin-top: 30px !important;
    margin-left:50px !important;
  } */

  /* .q-carousel__navigation-inner.flex.flex-center.no-wrap{
    position: fixed !important;
    margin-top: 30px !important;
    margin-left:50px !important;
  } */


  /* .q-toolbar.row.no-wrap.items-center.flex.flex-center {
    margin-bottom: -200px;
  } */

</style>


