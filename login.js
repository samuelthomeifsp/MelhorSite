const chooseFile = document.getElementById("image-upload");
const imgPreview = document.getElementById("image-preview");

chooseFile.addEventListener("change", function () {
    const files = this.files;
    if (files && files.length) {
        const selectedFile = files[0];
        const reader = new FileReader();

        reader.addEventListener("load", function () {
            imgPreview.src = reader.result;
        }, false);

        reader.readAsDataURL(selectedFile);
    }
});