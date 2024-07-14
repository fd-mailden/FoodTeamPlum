<template>
  <section class="location" :id="SECTION_ANCHORS.partners">
    <div class="location__head container">
      <h3 class="under-title">Наші Партнери</h3>
      <UITitle>foodtemplum</UITitle>
    </div>
    <div class="map-box">
      <article class="map">
        <div id="mapContainer" class="basemap" :style="{ width: '100%',  }"></div>
      </article>
      <article class="address-list">
        <AddressMapCard v-for="(marker, index) in markers"
                        :key="index"
                        @click="highlightMarker(marker, index)"
                        :address="marker.address"
                        :partner-name="marker.partnerName"
                        :phone="marker.phone"
        />

      </article>
    </div>
  </section>
</template>
<script>
import UITitle from "~/components/Title.vue";
import AddressMapCard from "~/components/partners/AddressMapCard.vue";
import mapboxgl from "mapbox-gl";
import {SECTION_ANCHORS} from "~/constants/NavigationList.js";

export default {
  name: "PartnersLocation",
  computed: {
    SECTION_ANCHORS() {
      return SECTION_ANCHORS
    }
  },
  components: {UITitle, AddressMapCard},
  data() {
    return {
      map: null,
      markers: [
        {
          lng: 30.598448464339075,
          lat: 50.44226403623706,
          info: 'м. Київ., вул. Басейна 21В',
          mapMarker: null,
          popup: null,
          address: 'м. Київ., вул. Басейна 21В',
          partnerName: 'назва',
          phone: '+380 84 754 84 79'
        },
        {
          lng: 30.5536936944446,
          lat: 50.43900520674275,
          info: 'м. Київ., вул. Басейна 21В',
          mapMarker: null,
          popup: null,
          address: 'м. Київ., вул. Басейна 21В',
          partnerName: 'назва',
          phone: '+380 84 754 84 79'
        },
        {
          lng: 30.524833955277696,
          lat: 50.439598035779994,
          info: 'м. Київ., вул. Басейна 21В',
          mapMarker: null,
          popup: null,
          address: 'м. Київ., вул. Басейна 21В',
          partnerName: 'назва',
          phone: '+380 84 754 84 79'
        },
        {
          lng: 30.54980365295401,
          lat: 50.43306336306069,
          info: 'м. Київ., вул. Басейна 21В',
          mapMarker: null,
          popup: null,
          address: 'м. Київ., вул. Басейна 21В',
          partnerName: 'назва',
          phone: '+380 84 754 84 79'
        },
      ],
      activeMarkerIndex: null,
      accessToken: useRuntimeConfig().public.mapBoxToken || '',
    };
  },
  mounted() {
    this.activeMarkerIndex = null;
    mapboxgl.accessToken = this.accessToken;
    this.map = new mapboxgl.Map({
      container: 'mapContainer', // container ID
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: [30.598448464339075, 50.44226403623706], // starting position [lng, lat]
      zoom: 10 // starting zoom
    });

    this.markers.forEach((marker, index) => {
      const popup = new mapboxgl.Popup({offset: 25}).setText(marker.info);
      const mapMarker = new mapboxgl.Marker()
          .setLngLat([marker.lng, marker.lat])
          .setPopup(popup)
          .addTo(this.map);
      this.markers[index] = {...marker, mapMarker, popup};
    });
  },
  methods: {
    highlightMarker(marker, index) {
      // Сбрасываем выделение предыдущего активного маркера
      if (this.activeMarkerIndex !== null) {
        this.markers[this.activeMarkerIndex].popup.remove();
      }

      // Устанавливаем новый активный маркер
      this.activeMarkerIndex = index;
      this.map.flyTo({center: [marker.lng, marker.lat], zoom: 12});
      marker.popup.addTo(this.map);
    }
  }
}
</script>

<style lang="scss" scoped>
.location {
  padding-top: 150px;
  color: $primary;
  background-image: url("~/assets/images/location-bg.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding-bottom: 150px;
  overflow: visible;


  &__head {
  }
}

.address-list {
  display: flex;
  flex-direction: column;
  gap: 3px;
  width: 35%;
  max-height: 700px;
  overflow-y: auto;
  @media (max-width: $lg) {
    flex-direction: row;
    gap: 0px;
    width: 100%;
    margin-bottom: 25px;
    overflow-x: scroll;
    ::-webkit-scrollbar {
      display: none;
    }
    scrollbar-width: none; /* Hide scrollbar */
    -ms-overflow-style: none;

  }

}

.map-box {
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  @media (max-width: $lg) {
    flex-direction: column-reverse;

  }
}

.map {
  width: 65%;
  height: 600px;
  @media (max-width: $lg) {
    width: 100%;
    height: 400px;
  }
}

.basemap {
  width: 100%;
  height: 600px;
  @media (max-width: $lg) {
    height: 400px;
  }
}
</style>