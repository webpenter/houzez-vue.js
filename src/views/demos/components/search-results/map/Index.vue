<template>
  <div class="map-wrap">
    <div id="houzez-map-loading" class="houzez-map-loading">
      <!-- Loader markup -->
    </div>

    <!-- All buttons and controls -->

    <div id="map" style="height: 500px;"></div>
  </div>
</template>


<script setup>
import { onMounted } from 'vue'

let map

function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: { lat: 25.9063344, lng: -80.1406093 },
		disableDefaultUI: true,
		zoom: 13,
		styles: [
			// your styles here...
		]
	})

	const contentString = `<div>Map Info Content</div>`

	const infowindow = new google.maps.InfoWindow({
		content: contentString
	})

	const iconBase = './img/'
	const marker = new google.maps.Marker({
		map: map,
		draggable: true,
		icon: iconBase + 'map-marker.png',
		animation: google.maps.Animation.DROP,
		position: { lat: 25.838706, lng: -80.131114 }
	})

	marker.addListener('click', () => {
		infowindow.open(map, marker)
	})
}

onMounted(() => {
	// Dynamically load the Google Maps script
	const script = document.createElement('script')
	script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBek2XjpiEzDMPxnCw6_WJOpzp7Lv4pMN0&callback=initMap'
	script.async = true
	window.initMap = initMap // make it global so callback works
	document.head.appendChild(script)
})
</script>
