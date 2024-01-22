const container = document.getElementById('map');
const options = {
    center: new kakao.maps.LatLng(33.4423464, 126.5714548),
    level: 3
};

const map = new kakao.maps.Map(container, options);
// 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타33.4423464, 126.5714548입 컨트롤을 생성합니다

const marker = new kakao.maps.Marker({
    position : options.center,
});

marker.setMap(map);