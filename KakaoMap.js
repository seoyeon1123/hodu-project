const container = document.getElementById('map');
const options = {
    center: new kakao.maps.LatLng(33.4423464, 126.5714548),
    level: 3
};

const map = new kakao.maps.Map(container, options);
// 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타33.4423464, 126.5714548입 컨트롤을 생성합니다
const mapTypeControl = new kakao.maps.MapTypeControl();

// 지도에 컨트롤을 추가해야 지도위에 표시됩니다
// kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

// 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
const zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

const markerPosition = new kakao.maps.LatLng(33.4423464, 126.5714548);
const marker = new kakao.maps.Marker({
    position : markerPosition
});

marker.setMap(map);

