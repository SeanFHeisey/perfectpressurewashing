function topHeader() {
    const headerTop = document.getElementById('top-header');
    const headerMain = document.getElementById('main-header');
    const scrollPosition = window.scrollY;
    headerMain.style.top = `${Math.max(50 - scrollPosition, 0)}px`; // Main header adjusts as well
    headerTop.style.top = `${Math.max(-50, -scrollPosition)}px`;
}

document.addEventListener('DOMContentLoaded', function() {
    topHeader(); // ensure header initial position is 0px
    window.addEventListener('scroll', topHeader);
});
