const topBtn = document.getElementById('top__btn');

window.onscroll = () => {
    if(window.pageYOffset > 250) {
        topBtn.style.visibility = 'visible';
    } else {
        topBtn.style.visibility = 'hidden';
    }
}

topBtn.onclick = () => {
    window.scrollTo(0,0);
}