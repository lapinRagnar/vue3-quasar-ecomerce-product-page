<template>
  <q-layout view="hHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          sneakers
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      :width="200"
    >


      <div class="q-pa-md" style="max-width: 350px">

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
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>

<style lang="scss">
  .q-item.q-router-link--active {
    font-size: 20px;
    font-weight: bolder;
    color: $green-6 !important;
    background-color: $orange-1 !important;
  }
</style>
