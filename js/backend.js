function topHeader() {
    const headerTop = document.getElementById('top-header');
    const headerMain = document.getElementById('main-header');
    const scrollPosition = window.scrollY;
    headerTop.style.top = `${Math.max(0, -scrollPosition)}px`; // Top header scrolls out
    headerMain.style.top = `${Math.max(50 - scrollPosition, 0)}px`; // Main header adjusts as well
}

document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', topHeader);
});
