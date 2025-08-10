if(window.innerWidth < 650){
  let rimg = document.getElementsByClassName('responsiveimg');
  rimg[0].src = '/assets/rimg4.webp';
  rimg[1].src = '/assets/rimg2.webp'
  rimg[1].style.objectPosition = 'bottom';
  rimg[2].src = '/assets/rimg3.webp';
  rimg[2].style.objectPosition = 'top';
  rimg[3].src = '/assets/rimg1.webp';
  rimg[4].src = '/assets/rsunset.webp';
  rimg[4].style.objectPosition = 'bottom left';
}
else{
  let rimg = document.getElementsByClassName('responsiveimg');
  rimg[0].src = '/assets/snow.webp';
  rimg[1].src = '/assets/beach.webp';
  rimg[2].src = '/assets/manali.webp';
  rimg[3].src = '/assets/infi.webp';
  rimg[4].src = '/assets/sunset.webp';
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


var swiper3 = new Swiper(".mySwiper3", {
      slidesPerView: 3,
      spaceBetween: 30,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints:{
        1300:{
          slidesPerView: 3,
        },
        900:{
          slidesPerView: 2,
        },
        100:{
          slidesPerView: 1,
        }
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
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
    document.body.style.overflowY = 'hidden';
  }
  else{
    ham.innerHTML = `<i class="fa-solid fa-bars"></i>`;
    count++;
    mysmallnav.style.transitionDuration ='0.5s';  
    mysmallnav.style.transform = 'translateY(-100%)';
    document.body.style.overflowY = 'visible';  
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
  document.getElementById('mymodal').style.display = "flex";
  document.getElementById('myusername').value="";
  document.getElementById('useremail').value="";
  document.getElementById('usermessage').value="";
  setTimeout(() => {
    document.getElementById('mymodal').style.display = "none";
    document.getElementById('mymodal').focus();
    window.location="";
  }, 4000);
}   

function checkinput(z){
  if(z==1){
    let myusername = document.getElementById('myusername');
    let check1 = document.getElementById('check1');
    let check5 = document.getElementById('check5');
    if (myusername.value == ""){
      check1.style.display = "inline-block";
      check5.style.display = "none";
      myusername.style.outlineColor = 'red';
    }
    else if(myusername.value.length<2){
      check1.style.display = "none";
      check5.style.display = "inline-block";
      myusername.style.outlineColor = 'red';
    }
    else{
      check1.style.display = "none";
      check5.style.display = "none";
      myusername.style.outlineColor = '#31ac01';
    }
  }
  if(z==2){
    let useremail = document.getElementById('useremail');
    if (useremail.value == ""){
      let check2 = document.getElementById('check2');
      check2.style.display = "inline-block";
      let check4 = document.getElementById('check4');
      check4.style.display = "none";
      useremail.style.outlineColor = 'red';
    }
  else if(useremail.value !==""){
      check2.style.display = "none";
      check4.style.display = "inline-block";
      try{
        let emailarray =  useremail.value.split('@');
        let emailarray2 =  emailarray[1].split('.');
        if(emailarray2.length-1==1){
          let emailarray3 = emailarray2[1].length;
          if(emailarray.length-1==1 && (emailarray3>=2 && emailarray3<=3)){
            useremail.style.outlineColor = '#31ac01';
            check2.style.display = "none";
            check4.style.display = "none";
          }
          else{
            useremail.style.outlineColor = 'red';
            check4.style.display = "inline-block";
          }
        }

        else if(emailarray2.length-1>1){
          let endbefore = emailarray2[emailarray2.length-2].length;
          let end = emailarray2[emailarray2.length-1].length;
          if(emailarray.length-1==1 && (endbefore>=2 && endbefore<=3) && (end>=2 && end<=3)){
            useremail.style.outlineColor = '#31ac01';
            check2.style.display = "none";
            check4.style.display = "none";
          }
          else{
            useremail.style.outlineColor = 'red';
            check4.style.display = "inline-block";
          }
        }

        else{
            useremail.style.outlineColor = 'red';
            check4.style.display = "inline-block";
        }
      }
      catch(error){
       
      }
    }
  }
  if(z==3){
    let usermessage = document.getElementById('usermessage');
    if (usermessage.value == ""){
      let check3 = document.getElementById('check3');
      check3.style.display = "inline-block";
      usermessage.style.outlineColor = 'red';
    }
    else{
      check3.style.display = "none";
      usermessage.style.outlineColor = '#31ac01';
    }
  }
 
  let useremail = document.getElementById('useremail');
  if(useremail.style.outlineColor == 'rgb(49, 172, 1)'){
    document.getElementById('submitbtn').type = "submit";
  }
  else if(useremail.style.outlineColor == 'red' || useremail.style.outlineColor == ''){
    document.getElementById('submitbtn').type = "button";
  }
}

function checkpoint(){
  let myusername = document.getElementById('myusername');
  let useremail = document.getElementById('useremail');
  let usermessage = document.getElementById('usermessage');

  if(myusername.value.length<2){
    myusername.focus();
  }
  else if(useremail.style.outlineColor == 'red'){
    useremail.focus();
  }
  else if(usermessage.value==""){
    usermessage.focus();
  }
  else{
    useremail.focus();
  }
}