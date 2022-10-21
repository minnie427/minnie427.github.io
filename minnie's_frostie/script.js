





/* Draggable coding */
window.onload = function(){

    let draggableDiv = Array.from(document.getElementsByClassName("Draggable"));
    for(let draggg of draggableDiv){
        draggg.addEventListener("mousedown",dragStart);
    }
    console.log (draggableDiv);
    let dragTarget = null;
    let dragStartX, dragStartY, dragObjLeft, dragObjTop;

    let cont = document.querySelector('.container');
    let layer = document.querySelectorAll('.layer');

    cont.onscroll = function(){
        let X = cont.scrollTop;
        layer[0].style.left = X/4 + 'px';
        layer[1].style.left = X/8 + 'px';
    }

/*     let images = [...document.querySelectorAll('.img')];
    let slider = document.querySelector('.slider');
    let sliderWidth;
    let imageWidth;
    let current = 0;
    let target = 0;
    let ease = .05
 */


    
var bottomPage = document.getElementById('bottomPage');
bottomPage.addEventListener('dragover', handleDragOver, false);
bottomPage.addEventListener('drop', handleFileSelect, false);

function dragStart(e){

    dragTarget = e.target;
    console.log(e.target);
    dragObjLeft = e.target.offsetLeft;
    dragObjTop = e.target.offsetTop;
    dragStartX = e.pageX;
    dragStartY = e.pageY;

    window.addEventListener("mousemove", dragMove);
    window.addEventListener("mouseup", dragEnd);
}

function dragMove(e){
    /* console.log(e); */
    dragTarget.style.position = 'absolute';
    dragTarget.style.left = dragObjLeft + (e.pageX - dragStartX) +  "px"; 
    dragTarget.style.top = dragObjTop + (e.pageY - dragStartY) +  "px"; 
}

function dragEnd(){
    window.removeEventListener("mousemove", dragMove);
}

function randomPosition(el){
    el.style.position = 'absolute';
    el.style.left = getRandomFloatRange(0, window.innerWidth - el. offsetWidth) + "px";
    el.style.top = getRandomFloatRange(0, window.innerHeight - el.offsetHeight) + "px";
}




}

/* This is the sound effect code for each draggable element.
I've recorded all the sound and edited and applied them to the button individually. 
I was thinking of just adding sound effects of drop or bells but I wanted to make the user experience more fun and creative!
And when I was showing my work to few people for testing, once I had my own voice recording to each toppings, 
they all wanted to click everything to see what kind of sound they have! 
so I think it definitely worked in drawing more intrest and attention to them. Also, I enjoyed recording them so much. I had so much fun doing this hahaha :) */

var cream1 = new Audio();
cream1.src = "audio/cream1.mp3"

var cream2 = new Audio();
cream2.src = "audio/cream2.mp3"

var cream3 = new Audio();
cream3.src = "audio/cream3.mp3"

var cream4 = new Audio();
cream4.src = "audio/cream4.mp3"

var haribo = new Audio();
haribo.src = "audio/haribo1.mp3"

var haribo2 = new Audio();
haribo2.src = "audio/haribo2.mp3"

var cookie1 = new Audio();
cookie1.src = "audio/cookie1.mp3"

var cookie2 = new Audio();
cookie2.src = "audio/cookie2.mp3"

var chocolate1 = new Audio();
chocolate1.src = "audio/chocolate1.mp3"

var chocolate2 = new Audio();
chocolate2.src = "audio/chocolate2.mp3"

var chocolate3 = new Audio();
chocolate3.src = "audio/chocolate3.mp3"

var cherry = new Audio();
cherry.src = "audio/cherry.mp3"

var strawberry = new Audio();
strawberry.src = "audio/strawberry.mp3"

var blueberry = new Audio();
blueberry.src = "audio/blueberry.mp3"

var raspberry = new Audio();
raspberry.src = "audio/raspberry.mp3"

var watermelon = new Audio();
watermelon.src = "audio/watermelon.mp3"

var brocoli = new Audio();
brocoli.src = "audio/brocoli.mp3"

var tomato = new Audio();
tomato.src = "audio/tomato.mp3"

var cucumber = new Audio();
cucumber.src = "audio/cucumber.mp3"


/* Sound effects added to modal buttons */
var done = new Audio();
done.src = "audio/fairy.mp3"

var gotIt = new Audio();
gotIt.src = "audio/pop1.mp3"



/* This is all the failed trials of implementing modal popups */

/* const modal = document.querySelector('#modal');
const openModal = document.querySelector('.open-button');
const closeModal = document.querySelector('.close-button');

openModal.addEventListener('click', () => {
    modal.showModal();
}) 

closeModal.addEventListener('click', () => {
    modal.close();
})  */

/* const open = document.getElementById('open');
const modalContainer = document.getElementById('modalContainer');
const close = document.getElementById('close');

open.addEventListener('click', () => {
    modalContainer.classList.add('show');
})

close.addEventListener('click', () => {
    modalContainer.classList.remove('show');
})
 */

/* document.getElementById("open").addEventListener("click", function(){
    document.getElementByClassname("modalContainer")[0].classList.add("active");
});

document.getElementById("close").addEventListener("click", function(){
    document.getElementByClassname("modalContainer")[0].classList.remove("active");
});

 */

