// 모든 클래스가 "download-button"인 요소를 선택
const buttons = document.getElementsByClassName('download-button');

// 각 버튼에 대해 이벤트 리스너 등록
for (const button of buttons) {
    button.addEventListener('click', function() {
        // 이미지 파일 경로 (이 부분을 실제 이미지 파일 경로로 변경)
        const imageUrl = 'img/img_cat_png.png';

        // 이미지 파일을 가져와 Blob 생성
        fetch(imageUrl)
            .then(response => response.blob())
            .then(blob => {
                // a 태그를 생성하여 다운로드 링크 설정
                const downloadLink = document.createElement('a');
                downloadLink.href = window.URL.createObjectURL(blob);
                downloadLink.download = 'hodu-img.png'; // 다운로드될 파일명

                // a 태그 클릭 및 제거
                document.body.appendChild(downloadLink);
                downloadLink.click();
                document.body.removeChild(downloadLink);
            });
    });
}
