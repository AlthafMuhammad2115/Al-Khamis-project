var nav = document.querySelector(".nav_bar");
var text = document.querySelectorAll('.clr')
var moon = document.querySelectorAll(".moonclick");
var navheight = document.getElementById("nav_bar").offsetHeight;
var imgheight = document.getElementById("img").offsetHeight;
var aboutheight = document.getElementById("about").offsetHeight;
var assetheight = document.getElementById("asset").offsetHeight;
var serviceheight = document.getElementById("service").offsetHeight;
var testimonialheight = document.getElementById("testimonials").offsetHeight;
var main = document.getElementById("main");
var para = document.querySelectorAll("i,h1,h2,h3,h4,h5,button");
console.log(para);
var p = document.querySelectorAll("p,h6");
var eachone = document.querySelectorAll(".line-con,.line-footer,.client_box");
var image = document.querySelectorAll(".client_box img ,.sm_client_img img");
var overlay = document.querySelectorAll(".overlay-s1 ,.overlay");
var border = document.querySelectorAll(".border_bottom");
var building = document.querySelector(".dark_mode_color");
var small_list=document.querySelector('#small');



// moon toggle -dark mode
toggle = false;
moon[0].addEventListener("click",toggling= () => {
  toggle = !toggle;

  if (toggle) {
    moon[0].style.fontSize = "25px";
    moon[0].innerHTML = '<i class="bi bi-brightness-high"></i>';
    moon[0].style.transition = "color 0.5s";


    window.addEventListener("scroll", () => {

      if (window.scrollY > 120) {
        nav.style.backgroundColor = "#282220";
        nav.style.transition = "background-color 0.2s";
        nav.style.boxShadow = "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px";
        moon[0].style.color = "#fff";
        moon[1].style.color = "#fff";
    
        for (var i = 0; i < 8; i++) {
          text[i].style.color = "#fff";
          text[i].style.transition = "color 0.5s";
        }
      } else {
        moon[0].style.color = "";
        moon[1].style.color = "";
        nav.style.backgroundColor = "";
        nav.style.boxShadow = "";
        for (var i = 0; i < 8; i++) {
          text[i].style.color = "";
        }
      }
    });

    main.style.backgroundColor = "#232220";
    main.style.transition = "background-color 0.2s ease-in";
    building.style.color = "#000";
    small_list.style.backgroundColor="#232220"

    border.forEach(function (border) {
      border.style.borderBottom = "1px solid #EEEEEE";
    });

    p.forEach(function (p) {
        p.style.color = "#AFAFAF";
        p.style.transition = "color 0.2s ease-in";
    });

    para.forEach(function (paragraph,index) {
      if (index != 15) {

      paragraph.style.color = "#EEEEEE";
      paragraph.style.transition = "color 0.2s ease-in";
    }

    });

    eachone.forEach(function (each) {
      each.style.backgroundColor = "#EEEEEE";
      each.style.transition = "background-color 0.2s ease-in";
    });

    image.forEach(function (image) {
      image.style.border = "#EEEEEE 2px solid";
      image.style.transition = "border 0.2s ease-in";
    });

    overlay.forEach(function (overlay) {
      overlay.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    });
  } else {
    moon[0].innerHTML = '<i class="bi bi-moon"></i>';
    main.style.backgroundColor = "";
    small_list.style.backgroundColor=""

    
  
    window.addEventListener("scroll", () => {

      if (window.scrollY > 120) {
        nav.style.backgroundColor = "white";
        nav.style.transition = "background-color 0.2s";
        nav.style.boxShadow = "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px";
        moon[0].style.color = "#282828";
        moon[1].style.color = "#282828";
    
        for (var i = 0; i < 8; i++) {
          text[i].style.color = "#282828";
        }
      } else {
        moon[0].style.color = "";
        moon[1].style.color = "";
        nav.style.backgroundColor = "";
        nav.style.boxShadow = "";
        for (var i = 0; i < 8; i++) {
          text[i].style.color = "";
        }
      }
    });

    border.forEach(function (border) {
      border.style.borderBottom = "1px solid #EEEEEE";
    });

    p.forEach(function (p, index) {
      if (index != 15) {
        p.style.color = "";
      }
    });

    para.forEach(function (paragraph) {
      paragraph.style.color = "";
    });

    eachone.forEach(function (each) {
      each.style.backgroundColor = "";
    });

    image.forEach(function (image) {
      image.style.border = "";
    });

    overlay.forEach(function (overlay) {
      overlay.style.backgroundColor = "";
    });
  }
});
// home toogle large screen
text[2].addEventListener("click", () => {
  window.scrollTo(0, 0);
});

text[3].addEventListener("click", () => {
  window.scrollTo(0, imgheight - navheight);
});
text[4].addEventListener("click", () => {
  window.scrollTo(0, imgheight + aboutheight + assetheight - navheight);
});

text[5].addEventListener("click", () => {
  window.scrollTo(
    0,
    imgheight +
      aboutheight +
      assetheight +
      serviceheight +
      testimonialheight -
      navheight
  );
});

//home toggle small screen

var small_button=document.querySelectorAll('.small_scroll')

small_button[0].addEventListener("click", () => {
  window.scrollTo(0, 0);
});

small_button[1].addEventListener("click", () => {
  window.scrollTo(0, imgheight - navheight);
});
small_button[2].addEventListener("click", () => {
  window.scrollTo(0, imgheight + aboutheight + assetheight - navheight);
});

small_button[3].addEventListener("click", () => {
  window.scrollTo(
    0,
    imgheight +
      aboutheight +
      assetheight +
      serviceheight +
      testimonialheight -
      navheight
  );
});

// window scroll
toggler=window.addEventListener("scroll", () => {

  if (window.scrollY > 120) {
    nav.style.backgroundColor = "white";
    nav.style.transition = "background-color 0.5s";
    nav.style.boxShadow = "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px";
    moon[0].style.color = "#282828";
    moon[1].style.color = "#282828";

    text.forEach(function(text){
      text.style.color = "#282828";
      text.style.transition = "color 0.5s";
    })
    
  } else {
    moon[0].style.color = "";
    moon[1].style.color = "";
    nav.style.backgroundColor = "";
    nav.style.boxShadow = "";
    text.forEach(function(text){
      text.style.color = "";
    })
  }
});
// button-list
var show = document.querySelector(".ham");
var list = document.getElementById("small");
toggleham=false;
show.addEventListener("click", () => {
  list.classList.toggle("sm-list");
  toggleham=!toggleham;
  if(toggleham){
    show.innerHTML='<i class="bi bi-x"></i>';
    show.style.transition='all 1s ease-in-out'
  }else{
    show.innerHTML='<i class="bi bi-list"></i>';
    show.style.transition='all 1s ease-in-out'


  }

});

// show address on map

function showaddress() {
  if (confirm("Are you sure you want to be redirected to the location?")) {
    window.location.href = "https://maps.app.goo.gl/Qx1766kFfZ4vHT6N6";
  } else {
    console.log("Redirection cancelled.");
  }
}

//testimonial-slider

var right = document.getElementById("right");
var left = document.getElementById("left");
var wrap = document.getElementById("wrapper");
var length = wrap.children.length;
var count = 0;

right.addEventListener(
  "click",
  (slideright = () => {
    if (count < length - 1) {
      count++;
    } else {
      count = 0;
    }
    slide();
  })
);

left.addEventListener("click", () => {
  if (count > 0) {
    count--;
  } else {
    count = length - 1;
  }
  slide();
});

var slide = () => {
  wrap.style.transform = `translateX(${-count * wrap.offsetWidth}px)`;
  wrap.style.transition = "transform 0.5s ease-in-out";
};

// on hover
var hover = document.querySelectorAll(".clr");

function mouseenter(i) {
  hover[i].addEventListener("mouseenter", () => {
    hover[i].style.color = "orange";
  });
}

function mouseleave(i) {
  hover[i].addEventListener("mouseleave", () => {
    hover[i].style.color = "#282828";
  });
}
window.addEventListener("scroll", () => {
  if (window.screenY > 120) {
    mouseenter(2);
    mouseleave(2);
  }
});

// redirect

function redirect(x) {
  if (
    confirm(
      "Are you sure you want to be redirected to the our social media page"
    )
  ) {
    window.location.href = x;
  } else {
    console.log("Redirection cancelled.");
  }
}

//dark mode
