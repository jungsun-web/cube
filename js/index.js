
/*아티클이 8개 : 아티클에 마우스를 오버하면
#main에 있는 애니메이션이 스탑, 플레이*/
let main = document.querySelector('#main');
let article =document.querySelectorAll('article');

for(let i=0; i<article.length; i++) {
article[i].addEventListener('mouseover', ()=>{
    main.style.animationPlayState ="paused";
});
article[i].addEventListener('mouseout', ()=>{
    main.style.animationPlayState ="running";
  });

}
