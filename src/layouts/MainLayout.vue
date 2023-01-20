<template>
  <q-layout view="hHh Lpr lFf">
    <q-header>
      <q-toolbar class="my-padding-x my-toolbar bg-lime-1">

        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
          class="lt-sm"
        />

        <q-btn
          label="sneakers"
          flat
          no-caps
          class="text-h5 text-weight-bold text-black"
          :to="{name: 'home'}"
        />

        <q-tabs
          class="text-grey-6 gt-xs"
          v-model="tab"
          shrink
          no-caps
          active-color="orange-4"
          active-class="my-active-class"
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

        <q-btn dense round flat icon="shopping_cart" color="black">
          <q-badge color="red" floating transparent>
            4
          </q-badge>
        </q-btn>

        <q-btn class="q-ml-md" flat>
          <q-avatar>
            <img src="image-avatar.png">
          </q-avatar>
        </q-btn>

      </q-toolbar>

    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
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


export default defineComponent({
  name: 'MainLayout',

  components: {

  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      tab: ref('tab1'),
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
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
    @media (max-width: 600px) {
      padding-left: 10px;
      padding-right: 10px;
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

</style>
