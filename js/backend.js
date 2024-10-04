function topHeader() {
    const header = document.getElementById('top-header');
    if (window.scrollY === 0) {
        header.style.top = '0'; // show header
    } else {
        header.style.top = '-50px'; // hide header
    }
}

document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', topHeader());
});
