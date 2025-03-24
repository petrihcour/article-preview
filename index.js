const shareButton = document.querySelector('.icon-button');
const popup = document.getElementById('popup');

// popup.style.display = 'none';

shareButton.addEventListener('click', function() {
    if (popup.style.display === 'block') {
        popup.style.display = 'none';
    } else {
        popup.style.display = 'block'
    }
});