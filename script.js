if(window.innerWidth < 650){
  let rimg = document.getElementsByClassName('responsiveimg');
  rimg[0].src = '/assets/rimg4.jpeg';
  rimg[1].src = '/assets/rimg2.jpeg'
  rimg[1].style.objectPosition = 'bottom';
  rimg[2].src = '/assets/rimg3.jpeg';
  rimg[2].style.objectPosition = 'top';
  rimg[3].src = '/assets/rimg1.jpeg';
}


const app = document.getElementById('typewriter');

  const typewriter = new Typewriter(app, {
    loop: true,
    delay: 75,
  });

  typewriter
    .typeString('a Web Developer.')
    .pauseFor(1000)
    .deleteAll()
    .typeString('a Python Developer.')
    .pauseFor(1000)
    .deleteAll()
    .typeString('an AI/ML Enthusiast.')
    .pauseFor(1000)
    .deleteAll()
    .typeString('an Astrophile.')
    .pauseFor(1000)
    .deleteAll()
    .typeString('a YouTuber.')
    .pauseFor(1000)
    .deleteAll()
    .start();
    
const app2 = document.getElementById('profession');

  const profession = new Typewriter(app2, {
    loop: true,
    delay: 75,
  });

  profession
    .typeString('Web Developer')
    .pauseFor(1000)
    .deleteAll()
    .typeString('Python Developer')
    .pauseFor(1000)
    .deleteAll()
    .typeString('AI/ML Enthusiast')
    .pauseFor(1000)
    .deleteAll()
    .start();


function activateme(i){
    navlinks = document.getElementsByClassName('navlinks');
    smalllinks = document.getElementsByClassName('smalllinks');
    for(let j=0;j<navlinks.length;j++){
        if(j==i){
            navlinks[i].classList.add('active');
            smalllinks[i].classList.add('active');
        }
        else{
            navlinks[j].classList.remove('active');
            smalllinks[j].classList.remove('active');
        }
    }
   
}

var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      autoplay:{
        delay:5000
      }
    });

var swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 1,
    // spaceBetween: 10,
    // grid:{
    //   rows:2,
    // },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    });



function checkmyscroll(){
    let mynavbar =  document.getElementById('navbar');

    if(window.scrollY < 10){
        mynavbar.style.transitionDuration = '0.5s';
        mynavbar.style.backgroundColor = 'transparent';
    }
    else{
        mynavbar.style.backgroundColor = '#050d18d9';
        mynavbar.style.transitionDuration = '0.5s';
    }

    let myarrow = document.getElementById('scrollup');
    let mymusic = document.getElementById('mymusic');
   
    if(window.scrollY < 20){
      myarrow.style.transitionDuration = '0.5s';
      myarrow.style.opacity = 0;
      myarrow.style.visibility = 'hidden';
      mymusic.style.transitionDuration = '0.5s';
      mymusic.style.opacity = 0;
      mymusic.style.visibility = 'hidden';
    }
    else{
      myarrow.style.transitionDuration = '0.5s';
      myarrow.style.opacity = 1;
      myarrow.style.visibility = 'visible';
      mymusic.style.transitionDuration = '0.5s';
      mymusic.style.opacity = 1;
      mymusic.style.visibility = 'visible';
    }
}

let count = 0;
function togglebtn(){
  let ham = document.getElementById('hamburger');
  let mysmallnav =  document.getElementById('smallnav');
  if (count%2==0){
    ham.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
    count++;
    mysmallnav.style.transitionDuration ='0.5s';
    mysmallnav.style.transform = 'translateY(0%)';

  }
  else{
    ham.innerHTML = `<i class="fa-solid fa-bars"></i>`;
    count++;
    mysmallnav.style.transitionDuration ='0.5s';
    mysmallnav.style.transform = 'translateY(-100%)';
  }
}

let musiccount=0;
function playmymusic(){
  let yo = document.getElementById('myaudio');
  let myi = document.getElementById('musiccontainer');
  if(musiccount%2==0){
    myi.innerHTML = `<i id="mymusic" class="fa-solid fa-pause mymusic" style="padding:10px 13px; visibility:visible;" onclick="playmymusic()"></i>`;
    yo.play();
    musiccount++;
  }
  else{
    myi.innerHTML = `<i id="mymusic" class="fa-solid fa-play mymusic" style="visibility:visible;" onclick="playmymusic()"></i>`;
    yo.pause();
    musiccount++;
  }
}

function success(event){
  event.preventDefault()
  alert("Your message has been sent!");
  window.location="";
}   

