// 모든 클래스가 "button"인 요소를 선택
const buttons = document.querySelectorAll('.download-button');

// 각 버튼에 대해 이벤트 리스너 등록
buttons.forEach(button => {
    button.addEventListener('click', function() {
        // 텍스트 파일 생성
        const textContent = 'Hello, I am HODU!';
        const blob = new Blob([textContent], { type: 'text/plain' });

        // a 태그를 생성하여 다운로드 링크 설정
        const downloadLink = document.createElement('a');
        downloadLink.href = window.URL.createObjectURL(blob);
        downloadLink.download = 'HODU_file.txt';

        // a 태그 클릭 및 제거
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    });
});
