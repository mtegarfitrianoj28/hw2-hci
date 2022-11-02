<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="home" href="/home">
          <!-- <font-awesome-icon style="font-size: 20px;" icon="fa-solid fa-home" /> -->
          <ion-icon src="icon/home-sharp.svg"></ion-icon>
        </ion-tab-button>
        <ion-tab-button tab="page2" href="/kolam">
          <!-- <font-awesome-icon style="font-size: 20px;" icon="fa-solid fa-cube" /> -->
          <ion-icon src="icon/cube-sharp.svg"></ion-icon>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<!-- Icon Search Terminal dir node_modules/@fortawesome/free-solid-svg-icons/ | findstr -->

<script lang="ts">
import { defineComponent } from "vue";
import {
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonPage,
  IonRouterOutlet,
} from "@ionic/vue";

export default defineComponent({
  name: "TabsPage",
  components: {
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonPage,
    IonRouterOutlet,
  },
  setup() {
    return {
    };
  },
});
</script>
