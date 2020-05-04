function init(){
    let toogleIn = document.querySelector('.toogle--in');
    let toogleOut = document.querySelector('.toogle-out');
    let body = document.querySelector('body');
    let popUp = document.querySelector('.pop--up');
    let links = document.querySelectorAll('.nav--container li');

    function animationStart(){
        popUp.style.transform = 'translate(scale(0))';
        popUp.style.visibility = 'visible';
        popUp.style.opacity = '0';
      setTimeout(function(){
        popUp.style.transform = 'translate(scale(1))';
        popUp.style.opacity = '1';
      }, 500)
    }

    function animationEnd(){
        popUp.style.opacity = '0';
        popUp.style.visibility = 'hidden';
    }
    let linksArr = Array.from(links)

    linksArr.forEach(function(arr){
        arr.addEventListener('click', animationEnd);
    })
    toogleIn.addEventListener('click', animationStart);
    toogleOut.addEventListener('click', animationEnd);
}

init();

