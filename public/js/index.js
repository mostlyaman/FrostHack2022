
function darkmodeteam(){
    document.body.style.backgroundColor = "#0F131C";
//     document.getElementById("theme-toggle").src = "img/moon.svg";
    var x = document.getElementsByClassName("fa-facebook");
    var i;
    for (i = 0; i < x.length; i++) {
          x[i].style.color = "white";
    }
    var x = document.getElementsByClassName("fa-instagram");
    var i;
    for (i = 0; i < x.length; i++) {
          x[i].style.color = "white";
    }
    var x = document.getElementsByClassName("fa-phone");
    var i;
    for (i = 0; i < x.length; i++) {
          x[i].style.color = "white";
    }
    var x = document.getElementsByClassName("fa-linkedin");
    var i;
    for (i = 0; i < x.length; i++) {
          x[i].style.color = "white";
    }
    var x = document.getElementsByClassName("fa-discord");
    var i;
    for (i = 0; i < x.length; i++) {
          x[i].style.color = "white";
    }
    var x = document.getElementsByClassName("fa-envelope");
    var i;
    for (i = 0; i < x.length; i++) {
          x[i].style.color = "white";
    }
    var x = document.getElementsByClassName("fa-map-marked-alt");
    var i;
    for (i = 0; i < x.length; i++) {
          x[i].style.color = "white";
    }
    var x = document.getElementsByClassName("changecolor");
    var i;
    for (i = 0; i < x.length; i++) {
          x[i].style.color = "white";
    }
    document.getElementById("nav-logo").src = "./img/logos/wide-small-white.png";
    $("#code_of_conduct").style.color = "#ffffff";
}

function darkmodementor(){
    document.body.style.backgroundColor = "#0F131C";
//     document.getElementById("theme-toggle").src = "img/moon.svg";
    var x = document.getElementsByClassName("fa-facebook");
    var i;
    for (i = 0; i < x.length; i++) {
          x[i].style.color = "white";
    }
    var x = document.getElementsByClassName("fa-instagram");
    var i;
    for (i = 0; i < x.length; i++) {
          x[i].style.color = "white";
    }
    var x = document.getElementsByClassName("fa-phone");
    var i;
    for (i = 0; i < x.length; i++) {
          x[i].style.color = "white";
    }
    var x = document.getElementsByClassName("fa-linkedin");
    var i;
    for (i = 0; i < x.length; i++) {
          x[i].style.color = "white";
    }
    var x = document.getElementsByClassName("fa-discord");
    var i;
    for (i = 0; i < x.length; i++) {
          x[i].style.color = "white";
    }
    var x = document.getElementsByClassName("fa-envelope");
    var i;
    for (i = 0; i < x.length; i++) {
          x[i].style.color = "white";
    }
    var x = document.getElementsByClassName("fa-map-marked-alt");
    var i;
    for (i = 0; i < x.length; i++) {
          x[i].style.color = "white";
    }
    var x = document.getElementsByClassName("changecolor");
    var i;
    for (i = 0; i < x.length; i++) {
          x[i].style.color = "white";
    }
    document.getElementById("nav-logo").src = "./img/logos/wide-small-white.png";
    document.getElementById("code_of_conduct").style.color = "#ffffff";
}

function darkmodeindex() {
    document.body.style.backgroundColor = "#0F131C";
    document.getElementById("about").style.color = "#FFFFFF";
    var x = document.getElementsByClassName("title");
    var i;
    for (i = 0; i < x.length; i++) {
          x[i].style.color = "#FFFFFF";
    }
    var x = document.getElementsByClassName("mt-3");
    var i;
    for (i = 0; i < x.length; i++) {
          x[i].style.color = "#FFFFFF";
    }
    var x = document.getElementsByClassName("changecolor");
    var i;
    for (i = 0; i < x.length; i++) {
          x[i].style.color = "white";
    }
    var x = document.getElementsByClassName("fa-facebook");
    var i;
    for (i = 0; i < x.length; i++) {
          x[i].style.color = "white";
    }
    var x = document.getElementsByClassName("fa-instagram");
    var i;
    for (i = 0; i < x.length; i++) {
          x[i].style.color = "white";
    }
    var x = document.getElementsByClassName("fa-map-marked-alt");
    var i;
    for (i = 0; i < x.length; i++) {
          x[i].style.color = "white";
    }
    var x = document.getElementsByClassName("fa-phone");
    var i;
    for (i = 0; i < x.length; i++) {
          x[i].style.color = "white";
    }
    var x = document.getElementsByClassName("fa-envelope");
    var i;
    for (i = 0; i < x.length; i++) {
          x[i].style.color = "white";
    }
    var x = document.getElementsByClassName("fa-discord");
    var i;
    for (i = 0; i < x.length; i++) {
          x[i].style.color = "white";
    }
    var x = document.getElementsByClassName("card-flyer");
    var i;
    for (i = 0; i < x.length; i++) {
          x[i].style.borderColor = "white";
    }
    var x = document.getElementsByClassName("panel");
    var i;
    for (i = 0; i < x.length; i++) {
          x[i].style.backgroundColor = "#0F131C";
        x[i].style.borderColor = "#0F131C";
    }
    document.getElementById("cards_landscape_wrap-2").style.backgroundColor = "#0F131C";
//     document.getElementById("theme-toggle").src = "img/moon.svg";
    document.getElementById("code_of_conduct").style.color = "#ffffff";
}

var path= window.location.pathname
if(path === "/mentors" ){
    window.onload = function () {
        darkmodementor();
        $("#code_of_conduct").style.color = "#ffffff";
    };
}else if(path === "/teams"){
    window.onload = function () {
        darkmodeteam();
        $("#code_of_conduct").style.color = "#ffffff";
    };
}else if(path === "/archive"){
    window.onload = function () {
        darkmodementor();
        $("#code_of_conduct").style.color = "#ffffff";
    };
}else{
    window.onload = function () {
        darkmodeindex();
        $("#code_of_conduct").style.color = "#ffffff";
    }
}