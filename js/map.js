const container = document.getElementById('map');
const options = {
    center: new kakao.maps.LatLng(33.4423464, 126.5714548),
    level: 3
};

const map = new kakao.maps.Map(container, options);
const mapTypeControl = new kakao.maps.MapTypeControl();

map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

const zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

const markerPosition = new kakao.maps.LatLng(33.4423464, 126.5714548);
const marker = new kakao.maps.Marker({
    position : markerPosition
});

marker.setMap(map);