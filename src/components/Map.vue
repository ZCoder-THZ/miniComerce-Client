<template>
    <div id="mapContainer"></div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "../public/Tween.js";
import "../public/leaflet.curve.js";

export default {
    name: "LeafletMap",
    props: {
        initialLatitude: {
            type: Number,
            // default: 46.05,
        },
        initialLongitude: {
            type: Number,
            // default: 11.05,
        },
        initialZoom: {
            type: Number,
            default: 16,
        },
    },
    mounted() {
        this.map = L.map("mapContainer").setView(
            [this.initialLatitude, this.initialLongitude],
            this.initialZoom
        );
        L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
            attribution:
                '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(this.map);
        var customPane = this.map.createPane("customPane");
        var canvasRenderer = L.canvas({ pane: "customPane" });
        customPane.style.zIndex = 399;
        L.marker([this.initialLatitude, this.initialLongitude]).addTo(this.map);
    },
    beforeUnmount() {
        // if (this.map) {
        //     this.map.remove();
        // }
    },
};
</script>


<style scoped>
#mapContainer {
    width: 35vw;
    height: 90vh;
}
</style>
