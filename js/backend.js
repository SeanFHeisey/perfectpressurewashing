function changeHeaderIcons() {
    const iconBookmark = document.getElementById('bookmark');
    const iconMail = document.getElementById('mail');
    const iconPhone = document.getElementById('phone');
    if (iconBookmark) {
        console.log('gooda');
    }
    if (iconMail) {
        console.log('goodb');
    }
    if (iconPhone) {
        console.log('goodc');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    window.onload = function() {
        changeHeaderIcons();
    };
});

