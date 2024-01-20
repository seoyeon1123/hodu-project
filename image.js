function showMore() {
    const imageList = document.getElementById("img_layout");
    let pageToFetch = 1;
    let loading = false;
    let totalImages = 0;
    const maxImages = 6;

    const fetchImages = async (pageNum) => {
        try {
            loading = true;
            const response = await fetch(`https://picsum.photos/v2/list?page=${pageNum}&limit=3`);
            if (!response.ok) {
                throw new Error('네트워크 응답에 문제가 있습니다.');
            }

            const datas = await response.json();
            console.log(datas);
            makeImageList(datas);
        } catch (error) {
            console.error('데이터를 가져오는데 문제가 발생했습니다 :', error);
        } finally {
            loading = false;
        }
    };

    const makeImageList = (datas) => {
        let rowContainer = document.createElement("p");
        datas.forEach((item, index) => {
            if (totalImages < maxImages) {
                const img = document.createElement("img");
                img.src = item.download_url;
                img.className = "image-body-content";
                rowContainer.appendChild(img);
                totalImages++;

                if (index > 0 && (index + 1) % 3 === 0) {
                    imageList.appendChild(rowContainer);
                    rowContainer = document.createElement("p");
                }
            }
        });

        if (totalImages % 3 !== 0) {
            imageList.appendChild(rowContainer);
        }

        if (totalImages >= maxImages) {
            window.removeEventListener('scroll', handleScroll);
        }
    };

    const infinityScroll = () => {
        if (!loading && window.innerHeight + document.documentElement.scrollTop + 10 >= document.documentElement.offsetHeight) {
            fetchImages(pageToFetch += 1);
        }
    };

    const throttledInfinityScroll = throttle(infinityScroll, 3000);
    window.addEventListener('scroll', throttledInfinityScroll);

    fetchImages(pageToFetch);
}

// 스로틀링 함수
// 쓰로틀링 함수 정의
const throttle = (callback, delay) => {
    let timer = null;
    return () => {
        if (timer === null) {
            timer = setTimeout(() => {
                callback();
                timer = null;
            }, delay);
        }
    };
};

// 스크롤 이벤트에 대한 쓰로틀링 적용
const throttledFetchImages = throttle(fetchImages, 1000); // 1000ms(1초) 간격으로 쓰로틀링

// 스크롤 이벤트에 쓰로틀링 함수 연결
window.addEventListener('scroll', throttledFetchImages);

// 초기 이미지 로드
fetchImages();

