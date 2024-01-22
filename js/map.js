document.addEventListener("DOMContentLoaded", function () {
    const mapContainer = document.getElementById('map');
    const mapOption = {
        center: new kakao.maps.LatLng(33.4423464, 126.5714548),
        level: 3
    };

    const map = new kakao.maps.Map(mapContainer, mapOption);
});