<script setup>
import Header from "@/components/common/Header";
// import Map from "@/components/Map.vue";
import MapLeaflet from "@/components/MapLeaflet.vue";
// import SideMenu from "@/components/SideMenu.vue";
</script>
<template>
    <Header></Header>
    <div class="office">
        <!-- <Map></Map>
        <SideMenu></SideMenu> -->
        <MapLeaflet></MapLeaflet>
    </div>
</template>

<style>
.office {
    display: grid;
    grid-template-columns: 1fr 320px;
    border-radius: 6px;
    border: 1px solid #ccd8e4;
    height: 100%;
    background: white;
    max-width: 1500px;
    margin: 0 auto;
}
</style>
