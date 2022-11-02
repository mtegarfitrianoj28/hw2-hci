<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-header :translucent="true">
        <ion-toolbar>
          <ion-row class="ion-justify-content-between ion-align-items-center">
            <ion-col size="5">
              <h1 style="margin-left: 10%; font-size: 25px">Kolam</h1>
            </ion-col>
            <ion-col size="5" style="font-size: 24px; text-align: end; margin-right: 5%;" class="ion-align-self-center">
                <a href="#">
                  <!-- <font-awesome-icon icon="fa-solid fa-arrow-up-wide-short" style="margin-right: 25px;" /> -->
                  <ion-icon src="icon/list-sharp.svg" style="margin-right: 25px; font-size: 30px;"></ion-icon>
                </a>
                <a href="#">
                  <ion-icon src="icon/funnel-sharp.svg" style="font-size: 25px;"></ion-icon>
                  <!-- <font-awesome-icon icon="fa-solid fa-filter" /> -->
                </a>
            </ion-col>
          </ion-row>
        </ion-toolbar>
      </ion-header>

      <ion-list>
        <ion-card style="width: 90%; margin: auto;">
          <ion-card-header >
            <ion-row class="ion-align-items-center ion-justify-content-between" style="border-bottom: 2px solid black;">
              <ion-col>
                <ion-card-title style="color:black;">Alpha</ion-card-title>
              </ion-col>
              <ion-col style="text-align: end;">
                <ion-button>Aktif</ion-button>
              </ion-col>
            </ion-row>
          </ion-card-header>
          <ion-card-content>
            <ion-row class="ion-align-items-center">
              <!-- <font-awesome-icon icon="fa-solid fa-calendar-plus" style="margin-right: 10px;"/> -->
              <ion-icon src="icon/calendar-sharp.svg" style="margin-right: 10px;"></ion-icon>
              <ion-card-subtitle>01-09-2022</ion-card-subtitle>
            </ion-row>
            <ion-row class="ion-align-items-center">
              <!-- <font-awesome-icon icon="fa-solid fa-calendar-days" style="margin-right: 10px;" /> -->
              <ion-icon src="icon/calendar-number-sharp.svg" style="margin-right: 10px;"></ion-icon>
              <ion-card-subtitle>90 Hari</ion-card-subtitle>
            </ion-row>
            <ion-row class="ion-align-items-center">
              <!-- <font-awesome-icon icon="fa-solid fa-fish-fins" style="margin-right: 8px;" /> -->
              <ion-icon src="icon/fish-sharp.svg" style="margin-right: 10px;"></ion-icon>
              <ion-card-subtitle>200 Ekor</ion-card-subtitle>
            </ion-row>
            
          </ion-card-content>
        </ion-card>
        <ion-card style="width: 90%; margin: auto;">
          <ion-card-header >
            <ion-row class="ion-align-items-center ion-justify-content-between" style="border-bottom: 2px solid black;">
              <ion-col>
                <ion-card-title style="color:black;">Beta</ion-card-title>
              </ion-col>
              <ion-col style="text-align: end;">
                <ion-button class="deactive">Tidak Aktif</ion-button>
              </ion-col>
            </ion-row>
          </ion-card-header>
          <ion-card-content>
            <ion-row class="ion-align-items-center">
              <!-- <font-awesome-icon icon="fa-solid fa-calendar-plus" style="margin-right: 10px;"/> -->
              <ion-icon src="icon/calendar-sharp.svg" style="margin-right: 10px;"></ion-icon>
              <ion-card-subtitle>01-09-2022</ion-card-subtitle>
            </ion-row>
            <ion-row class="ion-align-items-center">
              <!-- <font-awesome-icon icon="fa-solid fa-calendar-days" style="margin-right: 10px;" /> -->
              <ion-icon src="icon/calendar-number-sharp.svg" style="margin-right: 10px;"></ion-icon>
              <ion-card-subtitle>90 Hari</ion-card-subtitle>
            </ion-row>
            <ion-row class="ion-align-items-center">
              <!-- <font-awesome-icon icon="fa-solid fa-fish-fins" style="margin-right: 8px;" /> -->
              <ion-icon src="icon/fish-sharp.svg" style="margin-right: 10px;"></ion-icon>
              <ion-card-subtitle>200 Ekor</ion-card-subtitle>
            </ion-row>
          </ion-card-content>
        </ion-card>
        <ion-card style="width: 90%; margin: auto;">
          <ion-card-header>
            <ion-row class="ion-align-items-center ion-justify-content-between" style="border-bottom: 2px solid black;">
              <ion-col>
                <ion-card-title style="color:black;">Charlie</ion-card-title>
              </ion-col>
              <ion-col style="text-align: end;">
                <ion-button>Aktif</ion-button>
              </ion-col>
            </ion-row>
          </ion-card-header>
          <ion-card-content>
            <ion-row class="ion-align-items-center">
              <!-- <font-awesome-icon icon="fa-solid fa-calendar-plus" style="margin-right: 10px;" /> -->
              <ion-icon src="icon/calendar-sharp.svg" style="margin-right: 10px;"></ion-icon>
              <ion-card-subtitle>01-09-2022</ion-card-subtitle>
            </ion-row>
            <ion-row class="ion-align-items-center">
              <!-- <font-awesome-icon icon="fa-solid fa-calendar-days" style="margin-right: 10px;" /> -->
              <ion-icon src="icon/calendar-number-sharp.svg" style="margin-right: 10px;"></ion-icon>
              <ion-card-subtitle>90 Hari</ion-card-subtitle>
            </ion-row>
            <ion-row class="ion-align-items-center">
              <!-- <font-awesome-icon icon="fa-solid fa-fish-fins" style="margin-right: 8px;" /> -->
              <ion-icon src="icon/fish-sharp.svg" style="margin-right: 10px;"></ion-icon>
              <ion-card-subtitle>200 Ekor</ion-card-subtitle>
            </ion-row>
          </ion-card-content>
        </ion-card>
        <ion-card style="width: 90%; margin: auto;">
          <ion-card-header>
            <ion-row class="ion-align-items-center ion-justify-content-between" style="border-bottom: 2px solid black;">
              <ion-col>
                <ion-card-title style="color:black;">Delta</ion-card-title>
              </ion-col>
              <ion-col style="text-align: end;">
                <ion-button>Aktif</ion-button>
              </ion-col>
            </ion-row>
          </ion-card-header>
          <ion-card-content>
            <ion-row class="ion-align-items-center">
              <!-- <font-awesome-icon icon="fa-solid fa-calendar-plus" style="margin-right: 10px;" /> -->
              <ion-icon src="icon/calendar-sharp.svg" style="margin-right: 10px;"></ion-icon>
              <ion-card-subtitle>01-09-2022</ion-card-subtitle>
            </ion-row>
            <ion-row class="ion-align-items-center">
              <!-- <font-awesome-icon icon="fa-solid fa-calendar-days" style="margin-right: 10px;" /> -->
              <ion-icon src="icon/calendar-number-sharp.svg" style="margin-right: 10px;"></ion-icon>
              <ion-card-subtitle>90 Hari</ion-card-subtitle>
            </ion-row>
            <ion-row class="ion-align-items-center">
              <!-- <font-awesome-icon icon="fa-solid fa-fish-fins" style="margin-right: 8px;" /> -->
              <ion-icon src="icon/fish-sharp.svg" style="margin-right: 10px;"></ion-icon>
              <ion-card-subtitle>200 Ekor</ion-card-subtitle>
            </ion-row>
          </ion-card-content>
        </ion-card>
        <ion-card style="width: 90%; margin: auto;">
          <ion-card-header>
            <ion-row class="ion-align-items-center ion-justify-content-between" style="border-bottom: 2px solid black;">
              <ion-col>
                <ion-card-title style="color:black;">Epsilon</ion-card-title>
              </ion-col>
              <ion-col style="text-align: end;">
                <ion-button>Aktif</ion-button>
              </ion-col>
            </ion-row>
          </ion-card-header>
          <ion-card-content>
            <ion-row class="ion-align-items-center">
              <!-- <font-awesome-icon icon="fa-solid fa-calendar-plus" style="margin-right: 10px;" /> -->
              <ion-icon src="icon/calendar-sharp.svg" style="margin-right: 10px;"></ion-icon>
              <ion-card-subtitle>01-09-2022</ion-card-subtitle>
            </ion-row>
            <ion-row class="ion-align-items-center">
              <!-- <font-awesome-icon icon="fa-solid fa-calendar-days" style="margin-right: 10px;" /> -->
              <ion-icon src="icon/calendar-number-sharp.svg" style="margin-right: 10px;"></ion-icon>
              <ion-card-subtitle>90 Hari</ion-card-subtitle>
            </ion-row>
            <ion-row class="ion-align-items-center">
              <!-- <font-awesome-icon icon="fa-solid fa-fish-fins" style="margin-right: 8px;" /> -->
              <ion-icon src="icon/fish-sharp.svg" style="margin-right: 10px;"></ion-icon>
              <ion-card-subtitle>200 Ekor</ion-card-subtitle>
            </ion-row>
          </ion-card-content>
        </ion-card>
      </ion-list>

      <a href="/kolam/register" class="fixedButton">
        <ion-img src="img/floatbtn.svg"></ion-img>
      </a>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
} from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "KolamPage",
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonToolbar,
  },
});
</script>

<style scoped>
#container {
  text-align: center;

  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;

  color: #8c8c8c;

  margin: 0;
}

#container a {
  text-decoration: none;
}

a:visited {
  color: white;
}

ion-button{
  --background : #1B7C1A;
}

ion-card, ion-card-title, ion-card-subtitle{
  color: black;
}

ion-card-title{
  font-weight: bold;
  font-size: 18px !important;
}

ion-card{
  border-radius: 16px;
  margin-bottom: 20px !important;
}

ion-button{
  --border-radius : 12px
}

.deactive{
  --background: #952229;
}

.fixedButton{
  /* --border-radius : 50%; */
  position: fixed;
  bottom: 0px;
  right: 0px;
  width: 100px;
  height: auto;
}
</style>
