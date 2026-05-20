const urlParams = new URLSearchParams(window.location.search);

const username = urlParams.get('name');
if (username) {
    document.getElementById('display-user').textContent += username + "!";
}