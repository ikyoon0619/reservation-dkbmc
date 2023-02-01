<script setup>
import { ref } from "vue";
import { LMap, LRectangle } from "@vue-leaflet/vue-leaflet";
import "leaflet/dist/leaflet.css";

const zoom = ref(8);
</script>
<template>
    <div style="height: 600px; width: 800px">
        <l-map ref="map" v-model:zoom="zoom" :center="[47.41322, -1.219482]" :crs="CRS.Simple">
            <l-rectangle
                :lat-lngs="[
                    [46.334852, -1.509485],
                    [46.342596, -1.328731],
                    [46.241487, -1.190568],
                    [46.234787, -1.358337],
                    [46.294733, -1.234567],
                ]"
                :fill="true"
                color="#35495d"
            />
        </l-map>
    </div>
</template>
<style></style>
