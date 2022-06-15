let navtoggle =false;
function navbar(){
    if(navtoggle===false){
        document.getElementById("nav-links").style.height="250px";
        document.getElementById("icon").classList.remove("fa-bars");
        document.getElementById("icon").classList.add("fa-xmark");

        navtoggle=true;
    }
    else{
        document.getElementById("nav-links").style.height="0px";
        document.getElementById("icon").classList.remove("fa-xmark");
        document.getElementById("icon").classList.add("fa-bars");
        navtoggle=false;
    }
}

window.onscroll=function(){
    if(window.pageYOffset>=200){
        document.getElementById("header").style.background= 'linear-gradient(to bottom right,#FDFCFB,#FFBD6F)';
        document.getElementById("container").style.background='linear-gradient(to bottom right,#FDFCFB,#FFBD6F)';
        document.getElementById("header").style.flexWrap="wrap";
        document.getElementById("header").style.height="60px";
        document.getElementById("logo").style.color="#c17e04";
        document.getElementById("nav-links").style.color="black";
        document.getElementById("header").style.boxShadow="0px 0px 10px grey";
    }
    else{
        document.getElementById("header").style.background="transparent";
        document.getElementById("container").style.background="transparent";
        // document.getElementById("header").style.flexWrap="nowrap";
        document.getElementById("header").style.height="80px";
        document.getElementById("logo").style.color="white";
        document.getElementById("nav-links").style.color="white";
        document.getElementById("header").style.boxShadow="none";

    }

    if(window.pageYOffset>=1500){
        document.getElementById("vid").onplay();
    }
    else
    {
        document.getElementById("vid").onpause();
    }

}