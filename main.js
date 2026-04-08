const urlParams = new URLSearchParams(window.location.search);

const username = urlParams.get('name');
if (username) {
    document.getElementById('display-user').textContent += username + "!!!";
}

const pfp = urlParams.get('pfp');
if (pfp) {
    const pfpDisplay = document.getElementById('pfp-display')
    const reader = new FileReader();

    reader.addEventListener("load", function () {
        pfpDisplay.src = reader.result;
    }, false);

    reader.readAsDataURL(pfp);
}