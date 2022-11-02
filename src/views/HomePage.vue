<template>
  <ion-page>
    <ion-content :fullscreen="true">
    <ion-header :translucent="true">
      <ion-toolbar>
        <h1 style="margin-left: 4%; font-size: 25px;">Home</h1>
      </ion-toolbar>
    </ion-header>

      <!-- Card -->
      <ion-grid>
        <ion-row>
          <ion-col>
            <ion-card>
              <ion-card-header>
                <ion-card-subtitle style="color: black"
                  >Kolam</ion-card-subtitle
                >
                <ion-card-title style="color: black; font-weight: bold"
                  >10</ion-card-title
                >
              </ion-card-header>
            </ion-card>
          </ion-col>
          <ion-col>
            <ion-card>
              <ion-card-header>
                <ion-card-subtitle style="color: black"
                  >Kolam Aktif</ion-card-subtitle
                >
                <ion-card-title style="color: black; font-weight: bold"
                  >8</ion-card-title
                >
              </ion-card-header>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>

      <ion-grid>
        <ion-row>
          <ion-col>
            <ion-card>
              <ion-card-header>
                <ion-card-subtitle style="color: black"
                  >Ikan Hidup</ion-card-subtitle
                >
                <ion-card-title style="color: black; font-weight: "
                  ><span style="font-weight: bold">200</span>
                  Ekor</ion-card-title
                >
              </ion-card-header>
            </ion-card>
          </ion-col>
          <ion-col>
            <ion-card>
              <ion-card-header>
                <ion-card-subtitle style="color: black"
                  >Ikan Mati</ion-card-subtitle
                >
                <ion-card-title style="color: black"
                  ><span>70</span> Ekor</ion-card-title
                >
              </ion-card-header>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>

      <ion-grid>
        <ion-row>
          <ion-col>
            <ion-card>
              <ion-card-header>
                <ion-card-subtitle style="color: black"
                  >Panen 2022</ion-card-subtitle
                >
                <ion-card-title style="color: black"
                  ><span>109</span> kg</ion-card-title
                >
              </ion-card-header>
            </ion-card>
          </ion-col>
          <ion-col>
            <ion-card>
              <ion-card-header>
                <ion-card-subtitle style="color: black"
                  >Total Pakan</ion-card-subtitle
                >
                <ion-card-title style="color: black"
                  ><span>230</span> kg</ion-card-title
                >
              </ion-card-header>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>

      <h2 style="margin-left: 10px; margin-top: 10px; margin-bottom: 0">
        Total Berat Ikan
      </h2>

      <!-- slider -->
      <ion-slides pager="true" :options="slideOpts">
        <ion-slide>
          <ion-grid>
            <ion-row>
              <ion-col style="width: 100%">
                <ion-card class="kartu">
                  <img
                    alt="Silhouette of mountains"
                    src="https://img.lovepik.com/original_origin_pic/18/09/22/5be7bac5644589630b5de87f8c88d971.png_wh300.png"
                  />
                  <ion-card-header>
                    <ion-card-title style="color: black; text-align: start"
                      >Lele</ion-card-title
                    >
                    <ion-card-subtitle style="color: blue; text-align: start"
                      >200 kg</ion-card-subtitle
                    >
                  </ion-card-header>
                </ion-card>
              </ion-col>
              <ion-col>
                <ion-card class="kartu">
                  <img
                    alt="Silhouette of mountains"
                    src="https://img.lovepik.com/original_origin_pic/19/01/07/31dea53acb065c5574ce39f8156944cb.png_wh300.png"
                  />
                  <ion-card-header>
                    <ion-card-title style="color: black; text-align: start"
                      >Nila Merah</ion-card-title
                    >
                    <ion-card-subtitle style="color: blue; text-align: start"
                      >200 kg</ion-card-subtitle
                    >
                  </ion-card-header>
                </ion-card>
              </ion-col>
            </ion-row>
          </ion-grid>
        </ion-slide>
        <ion-slide>
          <ion-grid>
            <ion-row>
              <ion-col style="width: 100%">
                <ion-card class="kartu">
                  <img
                    alt="Silhouette of mountains"
                    src="https://img.lovepik.com/original_origin_pic/19/01/07/31dea53acb065c5574ce39f8156944cb.png_wh300.png"
                  />
                  <ion-card-header>
                    <ion-card-title style="color: black; text-align: start"
                      >Lele</ion-card-title
                    >
                    <ion-card-subtitle style="color: blue; text-align: start"
                      >200 kg</ion-card-subtitle
                    >
                  </ion-card-header>
                </ion-card>
              </ion-col>
              <ion-col>
                <ion-card class="kartu">
                  <img
                    alt="Silhouette of mountains"
                    src="https://img.lovepik.com/original_origin_pic/18/09/22/5be7bac5644589630b5de87f8c88d971.png_wh300.png"
                  />
                  <ion-card-header>
                    <ion-card-title style="color: black; text-align: start"
                      >Nila Merah</ion-card-title
                    >
                    <ion-card-subtitle style="color: blue; text-align: start"
                      >200 kg</ion-card-subtitle
                    >
                  </ion-card-header>
                </ion-card>
              </ion-col>
            </ion-row>
          </ion-grid>
        </ion-slide>
        <ion-slide>
          <ion-grid>
            <ion-row>
              <ion-col style="width: 100%">
                <ion-card class="kartu">
                  <img
                    alt="Silhouette of mountains"
                    src="https://img.lovepik.com/original_origin_pic/18/09/22/5be7bac5644589630b5de87f8c88d971.png_wh300.png"
                  />
                  <ion-card-header>
                    <ion-card-title style="color: black; text-align: start"
                      >Lele</ion-card-title
                    >
                    <ion-card-subtitle style="color: blue; text-align: start"
                      >200 kg</ion-card-subtitle
                    >
                  </ion-card-header>
                </ion-card>
              </ion-col>
              <ion-col>
                <ion-card class="kartu">
                  <img
                    alt="Silhouette of mountains"
                    src="https://img.lovepik.com/original_origin_pic/19/01/07/31dea53acb065c5574ce39f8156944cb.png_wh300.png"
                  />
                  <ion-card-header>
                    <ion-card-title style="color: black; text-align: start"
                      >Nila Merah</ion-card-title
                    >
                    <ion-card-subtitle style="color: blue; text-align: start"
                      >200 kg</ion-card-subtitle
                    >
                  </ion-card-header>
                </ion-card>
              </ion-col>
            </ion-row>
          </ion-grid>
        </ion-slide>
      </ion-slides>

      <h2 style="bottom: 190px; margin-left: 10px">Kualitas Air</h2>

      <ion-slides>
        <ion-slide>
          <ion-grid>
            <ion-row>
              <ion-col>
                <ion-card>
                  <ion-card-header>
                    <ion-card-title
                      style="color: black; bottom: 10px; text-align: start; margin-left: 10px;"
                      >pH</ion-card-title
                    >
                    <ion-card-subtitle
                      style="color: black; bottom: 5px; text-align: start; margin-left: 10px;"
                      >Normal<span style="color: blue">
                        6 Kolam</span
                      ></ion-card-subtitle
                    >
                    <ion-card-subtitle style="color: black; bottom: 5px; text-align: start; margin-left: 10px;"
                      >Abnormal<span style="color: blue; justify-self: left">
                        6 Kolam</span
                      ></ion-card-subtitle
                    >
                  </ion-card-header>
                </ion-card>
              </ion-col>
              <ion-col>
                <ion-card>
                  <ion-card-header>
                    <ion-card-title
                      style="color: black; bottom: 10px; text-align: start; margin-left: 10px; font-weight: bold;"
                      >DO</ion-card-title
                    >
                    <ion-card-subtitle
                      style="color: black; bottom: 5px; text-align: start; margin-left: 10px;"
                      >Normal<span style="color: blue">
                        6 Kolam</span
                      ></ion-card-subtitle
                    >
                    <ion-card-subtitle style="color: black; bottom: 5px; text-align: start; margin-left: 10px;"
                      >Abnormal<span style="color: blue; justify-self: left">
                        6 Kolam</span
                      ></ion-card-subtitle
                    >
                  </ion-card-header>
                </ion-card>
              </ion-col>
            </ion-row>
          </ion-grid>
        </ion-slide>
        <ion-slide>
          <ion-grid>
            <ion-row>
              <ion-col>
                <ion-card>
                  <ion-card-header>
                    <ion-card-title style="color: black; bottom: 10px; text-align: start; margin-left: 10px;">pH
                    </ion-card-title>
                    <ion-card-subtitle style="color: black; bottom: 5px; text-align: start; margin-left: 10px;">Normal<span
                        style="color: blue">
                        6 Kolam</span></ion-card-subtitle>
                    <ion-card-subtitle style="color: black; bottom: 5px; text-align: start; margin-left: 10px;">Abnormal<span
                        style="color: blue; justify-self: left">
                        6 Kolam</span></ion-card-subtitle>
                  </ion-card-header>
                </ion-card>
              </ion-col>
              <ion-col>
                <ion-card>
                  <ion-card-header>
                    <ion-card-title
                      style="color: black; bottom: 10px; text-align: start; margin-left: 10px; font-weight: bold;">DO
                    </ion-card-title>
                    <ion-card-subtitle style="color: black; bottom: 5px; text-align: start; margin-left: 10px;">Normal<span
                        style="color: blue">
                        6 Kolam</span></ion-card-subtitle>
                    <ion-card-subtitle style="color: black; bottom: 5px; text-align: start; margin-left: 10px;">Abnormal<span
                        style="color: blue; justify-self: left">
                        6 Kolam</span></ion-card-subtitle>
                  </ion-card-header>
                </ion-card>
              </ion-col>
            </ion-row>
          </ion-grid>
        </ion-slide>
        <ion-slide>
          <ion-grid>
            <ion-row>
              <ion-col>
                <ion-card>
                  <ion-card-header>
                    <ion-card-title style="color: black; bottom: 10px; text-align: start; margin-left: 10px;">pH
                    </ion-card-title>
                    <ion-card-subtitle style="color: black; bottom: 5px; text-align: start; margin-left: 10px;">Normal<span
                        style="color: blue">
                        6 Kolam</span></ion-card-subtitle>
                    <ion-card-subtitle style="color: black; bottom: 5px; text-align: start; margin-left: 10px;">Abnormal<span
                        style="color: blue; justify-self: left">
                        6 Kolam</span></ion-card-subtitle>
                  </ion-card-header>
                </ion-card>
              </ion-col>
              <ion-col>
                <ion-card>
                  <ion-card-header>
                    <ion-card-title
                      style="color: black; bottom: 10px; text-align: start; margin-left: 10px; font-weight: bold;">DO
                    </ion-card-title>
                    <ion-card-subtitle style="color: black; bottom: 5px; text-align: start; margin-left: 10px;">Normal<span
                        style="color: blue">
                        6 Kolam</span></ion-card-subtitle>
                    <ion-card-subtitle style="color: black; bottom: 5px; text-align: start; margin-left: 10px;">Abnormal<span
                        style="color: blue; justify-self: left">
                        6 Kolam</span></ion-card-subtitle>
                  </ion-card-header>
                </ion-card>
              </ion-col>
            </ion-row>
          </ion-grid>
        </ion-slide>
      </ion-slides>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonSlides,
  IonSlide,
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
} from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomePage",
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonToolbar,
    IonSlides,
    IonSlide,
  },
  setup() {
    // Optional parameters to pass to the swiper instance. See https://swiperjs.com/swiper-api for valid options.
    const slideOpts = {
      initialSlide: 1,
      speed: 400,
    };
    return { slideOpts };
  },
});
</script>

<style scoped>
img {
  width: 100%;
  height: 100%;
}

span {
  font-weight: bold;
  color: black;
}
.kartu {
  display: flex;
  flex-direction: column;
  width: 100% !important;
  margin: 0 !important;
  margin-left: 50px;
  height: 100%;
}

#container {
  text-align: center;

  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

ion-card {
  display: flex;
  flex-direction: column;
  width: 100% !important;
  margin: 0 !important;
  background-color: white;
  height: 90%;
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
</style>
