// image.js 파일
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

function showMore() {
    const imageList = document.getElementById("image-layout");
    let pageToFetch = 1;

    const fetchImages = async () => {
        let loading = false;
        try {
            loading = true;
            const response = await fetch(`https://picsum.photos/v2/list?page=${pageToFetch}&limit=3`);
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
        const rowContainer = document.createElement("div");
        rowContainer.className = "image-row"; // 가로 배치를 위한 클래스 추가
        datas.forEach((item) => {
            const img = document.createElement("img");
            img.src = item.download_url;
            img.className = "container-second-section-img";
            rowContainer.appendChild(img);
        });
        imageList.appendChild(rowContainer);
    };

    // "Show more" 버튼 클릭 시 이미지 추가
    const showMoreButton = document.getElementById("show-more-button");
    if (showMoreButton) {
        showMoreButton.addEventListener('click', async () => {
            await fetchImages();
            pageToFetch += 1;
        });
    }
}

// "Show more" 버튼을 누를 때까지 초기 이미지 로드를 연기
const showMoreButton = document.getElementById("show-more-button");
if (showMoreButton) {
    showMoreButton.addEventListener('click', showMore);
}

const handleScroll = () => {
    let loading = false;
    if (!loading && window.innerHeight + window.scrollY + 10 >= document.documentElement.offsetHeight) {
        fetchImages();
        pageToFetch += 1;
    }
};

const throttledScroll = throttle(handleScroll, 200);
window.addEventListener('scroll', throttledScroll);

// 초기 이미지 로드
showMore();
