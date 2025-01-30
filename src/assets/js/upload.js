
(function () {
    const uploaders = document.querySelectorAll('.js-upload');
    Array.from(uploaders, uploader => {
        const upload = uploader.querySelector('.js-upload-value'),//input
            placeholder = uploader.querySelector('.js-upload-placeholder'),//image
            remove = uploader.querySelector('.js-upload-remove');//delet

        if (!upload || !placeholder || !remove) {
            console.error('One or more required elements are missing in uploader:', uploader);
            return;
        }

        upload.addEventListener('change', function (event) {
            const img = this.files[0];
            if (img) {
                let reader = new FileReader();
                reader.readAsDataURL(img);
                reader.onloadend = () => {
                    uploader.classList.add('has-image');
                    placeholder.src = reader.result;
                };
            }
        });

        remove.addEventListener("click", () => {
            upload.value = null;
            uploader.classList.remove('has-image');
            placeholder.src = '';
        });
    });
})();
