let hero =document.getElementById('hero')
let item =document.getElementById('item')
let start =document.getElementById('start')
let second =document.getElementById('second')
let minutes =document.getElementById('minutes')
let timenumbar =document.getElementById('time')
let gameover =document.getElementById('gameover')
let num1 =document.getElementById('num1')
let num2 =document.getElementById('num2')
let relod =document.getElementById('relod')
console.log(time.style);
relod.addEventListener('click',function(){
    numbar =0
 Theminut= 0
 second.innerHTML =numbar
 minutes.innerHTML =Theminut    
    item.style.display = 'block'
 timenumbar.style.display='flex'
 hero.style.display = 'block'
 gameover.style.display = 'none'



})
start.addEventListener('click',function(){
    item.style.display = 'block'
    start.style.display = 'none'
    hero.style.display = 'block'
    timenumbar.style.display='flex'
    var time= setInterval(() => {
        numbar++
        second.innerHTML =numbar
        if (numbar == 60) {
            numbar =0
        second.innerHTML =numbar
        Theminut++
        minutes.innerHTML =Theminut
    
            // clearInterval(time)
        }
    }, 700);
})

var numbar=0
var Theminut= 0





document.addEventListener('keydown' ,function(e){
    // console.log(e.code);
    
   
    if(e.code == 'Space'){
        hero.classList.add('hero')

        hero.style.animation = ' jum 1.4s'
        setTimeout(() => {
    hero.style.animation = ' xxxx 2s'
    
        }, 1850);
    }
 
  
})

var chek =setInterval(() => {
    var iteme =parseInt( window.getComputedStyle(item).getPropertyValue("right"))
var heroe =parseInt(window.getComputedStyle(hero).getPropertyValue("bottom"))
// console.log(heroe);
if (heroe <=108 && iteme>=942 && iteme<=1139 ) {
 clearInterval(time)
 gameover.style.display = 'block'
 item.style.display = 'none'
 timenumbar.style.display='none'
 hero.style.display = 'none'

 console.log(numbar , Theminut);

 num1.innerHTML =numbar
 num2.innerHTML =Theminut


    // alert('Game Over')
}
}, 10);


// if (heroe >= 24 && iteme>=942 && iteme<=1139  ) {
//     alert(heroe)
// }