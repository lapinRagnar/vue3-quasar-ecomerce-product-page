<template>
  <q-layout view="hHh Lpr lFf">
    <q-header>
      <q-toolbar class="my-padding-x my-toolbar bg-lime-1 text-h4">

        <div class="lt-md q-pa-none">
          <q-btn
            flat
            dense
            round
            text-color="black"
            icon="menu"
            aria-label="Menu"
            @click="toggleLeftDrawer"

          />
        </div>

        <q-btn
          label="sneakers"
          flat
          no-caps
          class="text-h5 text-weight-bold text-black"
          :to="{name: 'home'}"
        />

        <q-tabs
          class="text-grey-6 text-h4 gt-sm"
          v-model="tab"
          shrink
          no-caps
          active-color="orange-4"
          active-class="my-active-class"
          content-class="my-content-class-tab"
        >
          <q-route-tab
            name="tab1"
            label="Categories"
            :to="{name: 'home'}"
            style="height: 98px"
          />
          <q-route-tab
            name="tab2"
            label="Men"
            :to="{name: 'men'}"
          />
          <q-route-tab
            name="tab3"
            label="Women"
            :to="{name: 'women'}"
          />
          <q-route-tab
            name="tab4"
            label="About"
            :to="{name: 'about'}"
          />
          <q-route-tab
            name="tab5"
            label="Contact"
            :to="{name: 'contact'}"
          />
        </q-tabs>

        <q-space/>

        <q-btn
          v-if="inputCartStore.inputValue == 0"
          dense
          round
          flat
          icon="shopping_cart"
          color="grey"
          size="lg"
        >

          <q-badge color="red" floating transparent>
            {{ inputCartStore.inputValue }}
          </q-badge>


          <q-menu
            fit
            :offset="[145, 20]"
          >
            <q-list class="bg-orange-1 " style="width: 280px; height: 200px;">
              <q-item clickable v-close-popup>
                <q-item-section class="text-weight-bold full-width">Cart</q-item-section>
              </q-item>
              <q-separator />
              <q-item clickable v-close-popup>
                <q-item-section style="height: 100px;" class="flex flex-center">Your Cart is empty.</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>

        <q-btn
          v-else
          dense
          round
          flat
          icon="shopping_cart"
          color="grey"
          size="lg"
        >

          <q-badge color="red" floating transparent>
            {{ inputCartStore.inputValue }}
          </q-badge>

          <q-menu
            fit
            :offset="[145, 20]"
          >
            <q-list style="width: 280px; height: 200px;">

              <q-item clickable v-close-popup>
                <q-item-section class="text-weight-bold">Cart</q-item-section>
              </q-item>

              <q-separator />

              <q-item clickable v-ripple v-close-popup>

                <q-item-section avatar>
                  <q-avatar rounded  text-color="black">
                    <q-img src="image-product-1.jpg"></q-img>
                  </q-avatar>
                </q-item-section>

                <q-item-section>
                  <div>Fall Limited Edition Sneakers</div>
                  <div> ({{ inputCartStore.inputValue }}) x $125 </div>
                </q-item-section>

                <q-item-section avatar>
                  <q-avatar
                    rounded
                    text-color="black"
                    icon="delete"
                    @click="deleteCart"
                  />
                </q-item-section>

              </q-item>

              <q-separator spaced />

              <q-item>
                <q-item-section>
                  <q-btn
                    color="orange"
                    label="Chekout"

                  />
                </q-item-section>
              </q-item>


            </q-list>
          </q-menu>
        </q-btn>

        <q-btn
          class="q-ml-md"
          flat
          size="xl"
        >
          <q-avatar size="xl">
            <img class="avatar-hover-border" src="image-avatar.png">
          </q-avatar>
        </q-btn>

      </q-toolbar>

    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      :width="200"
    >

      <div class="q-pa-md" style="max-width: 200px">

        <q-list >

          <q-btn
            dense
            round
            unelevated
            icon="fa-solid fa-xmark"
            @click="toggleLeftDrawer"
            size="sm"
            class="q-mb-xl"
          />

          <q-item
            clickable
            v-ripple
            exact
            to="/"
          >
            <q-item-section>Collections</q-item-section>
          </q-item>

          <q-item
            clickable
            v-ripple
            to="/men"
          >
            <q-item-section>
              <q-item-label>Men</q-item-label>
            </q-item-section>
          </q-item>

          <q-item
            clickable
            v-ripple
            exact
            to="/women"
          >
            <q-item-section>
              <q-item-label>Women</q-item-label>
            </q-item-section>
          </q-item>

          <q-item
            clickable
            v-ripple
            exact
            to="/about"
          >
            <q-item-section>
              <q-item-label>About</q-item-label>
            </q-item-section>
          </q-item>

          <q-item
            clickable
            v-ripple
            exact
            to="/contact"
          >
            <q-item-section>
              <q-item-label>Contact</q-item-label>
            </q-item-section>
          </q-item>

        </q-list>
      </div>

    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

import { defineComponent, ref } from 'vue'
import { useInputCartStore } from 'src/stores/inputCart'


export default defineComponent({
  name: 'MainLayout',

  components: {

  },

  setup () {
    const leftDrawerOpen = ref(false)
    const inputCartStore = useInputCartStore()

    function deleteCart(){
      console.log('la cart', inputCartStore.inputValue)
      inputCartStore.inputValue = 0
      console.log('la cart', inputCartStore.inputValue)
    }

    return {
      tab: ref('tab1'),
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
      inputCartStore,
      deleteCart
    }
  }
})
</script>

<style lang="scss">

  body {
    background-color: $lime-1 !important;
  }

  .q-item.q-router-link--active {
    font-size: 20px;
    font-weight: bolder;
    color: $green-6 !important;
    background-color: $orange-1 !important;
    border-radius: 2px solid $orange-4;
  }

  .my-padding-x{
    padding-left: 200px;
    padding-right: 200px;

    @media (max-width: 400px) {
      padding-left: 0px;
      padding-right: 0px;
    }

    @media (max-width: 800px) {
      padding-left: 10px;
      padding-right: 10px;
    }

    @media (max-width: 1060px) {
      padding-left: 50px;
      padding-right: 50px;
    }
  }

  .my-toolbar{
    height: 100px;
    background-color: transparent;
    background: transparent;
    position: relative;
  }

  .my-toolbar::before{
    content: '';
    position: absolute;
    width: 800px;
    top: 0;
    bottom: 0;
    border-bottom: 1px solid $grey-3;
  }

  .my-content-class-tab{
    .q-tab__label{
      font-size: 16px;
    }
  }

  .avatar-hover-border:hover{
    border: 5px solid orange;
  }

</style>
