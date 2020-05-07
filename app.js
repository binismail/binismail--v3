window.addEventListener('load', (e) =>{

  setTimeout(()=>{
    const displayMain = ()=>{

      let main = document.querySelector('.main-web');
      let loader = document.querySelector('.page--loader');
      main.style.display = "block";
      loader.style.opacity = '0';
      loader.style.display = 'none';

      const init = ()=>{
        let toogleIn = document.querySelector('.toogle--in');
       let toogleOut = document.querySelector('.toogle-out');
    let body = document.querySelector('body');
    let popUp = document.querySelector('.pop--up');
    let links = document.querySelectorAll('.nav--container li');

    function animationStart(){
        popUp.style.transform = 'translate(scale(1))';
        popUp.style.visibility = 'visible';
        popUp.style.opacity = '1';
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

   }

    displayMain();
  }, 2000)


})

