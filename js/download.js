const buttons = document.getElementsByClassName('download-button');

for (const button of buttons) {
    button.addEventListener('click', function() {
        const imageUrl = 'img/img_cat_png.png';

        fetch(imageUrl)
            .then(response => response.blob())
            .then(blob => {

                const downloadLink = document.createElement('a');
                downloadLink.href = window.URL.createObjectURL(blob);
                downloadLink.download = 'hodu-img.png';


                document.body.appendChild(downloadLink);
                downloadLink.click();
                document.body.removeChild(downloadLink);
            });
    });
}
