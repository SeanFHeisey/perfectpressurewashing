function topHeader() {
    const headerTop = document.getElementById('top-header');
    const headerMain = document.getElementById('main-header');
    if (window.scrollY === 0) {
        headerTop.style.top = '0px'; // show header
        headerMain.style.top = '50px';
    } else {
        headerTop.style.top = '-50px'; // hide header
        headerMain.style.top = '0px';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', topHeader);
});
