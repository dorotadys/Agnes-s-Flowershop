// front page photos interchange

let imageSources = ["vendors\\img\\tulips-2068692_1920.jpg", "vendors\\img\\white-daisy-flowers-white-baby-s-breath-flowers-64736.jpg", "vendors\\img\\pink-petaled-flower-boquette-122734.jpg", "vendors\\img\\colorful-tulips-343957.jpg" ];

let index=0;
setInterval(function(){
    if (index === imageSources.length) {
        index = 0;
    }
    document.getElementById("img1").src = imageSources[index];
    index ++;
}, 6000);

function myMove() {
    let elem = document.getElementById("hero-text");
    let pos = 0; 
    let id = setInterval(frame, 10);
    function frame() {
        if (pos == 350) {
            clearInterval(id);
        } else {
            pos++; 
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
        }
    }

// florist image fade in 

const floristImg = document.getElementsByClassName('florist')[0];

function photoRotateIn () {
    if (window.pageYOffset > 340) {
        floristImg.classList.add('florist');
    } else {
        floristImg.classList.remove('florist')
    }
}
window.addEventListener('scroll', photoRotateIn, false)


// clock

function todaysDate(){
    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth();
    let year = today.getFullYear(); 
    document.getElementById('clock').innerHTML = day + month + year
}

//document.getElementById('clock').innerHTML = d

// days till xmas
function calc() {
    today = new Date();

    xmas = new Date("December 24, " + today.getFullYear());

    if (today > xmas) {
        xmas.setYear(today.getFullYear() + 1);
    }

    msPerDay = 24 * 60 * 60 * 1000;
    timeLeft = (xmas.getTime() - today.getTime());
    e_daysLeft = timeLeft / msPerDay;
    daysLeft = Math.floor(e_daysLeft);
    e_hrsLeft = (e_daysLeft - daysLeft) * 24;


    var c = document.getElementsByClassName("xmas");
    var i;
    for (i = 0; i < c.length; i++) {

        c[i].innerHTML = "There are " + daysLeft + " days untill Christmas " 
    }
    
}
setInterval(calc, 0);

// days till valentines day
function calc2() {
    today = new Date();

    valentines = new Date("February 14, " + today.getFullYear());

    if (today > valentines) {
        valentines.setYear(today.getFullYear() + 1);
    }

    msPerDay = 24 * 60 * 60 * 1000;
    timeLeft = (valentines.getTime() - today.getTime());
    e_daysLeft = timeLeft / msPerDay;
    daysLeft = Math.floor(e_daysLeft);
    e_hrsLeft = (e_daysLeft - daysLeft) * 24;


    var c = document.getElementsByClassName("valentines");
    var i;
    for (i = 0; i < c.length; i++) {

        c[i].innerHTML = " and " + daysLeft + " days untill Valentines"
    }
    
}
setInterval(calc2, 0);

document.getElementsByClassName('user').input()