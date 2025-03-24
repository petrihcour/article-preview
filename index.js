const shareButton = document.querySelector('.icon-button');
const popup = document.getElementById('popup');
const closePopup = document.getElementById('close-popup');

popup.style.display = 'none';

shareButton.addEventListener('click', function() {
    popup.style.display = 'block';
})

closePopup.addEventListener('click', function() {
    popup.style.display = 'none';
})