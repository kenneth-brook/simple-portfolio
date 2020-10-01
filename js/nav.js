window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.paddingTop = "20px";
    document.getElementById("skillText1").style.fontSize = "10px";
    document.getElementById("skillText2").style.fontSize = "10px";
    document.getElementById("skillText3").style.fontSize = "10px";
    document.getElementById("skillText4").style.fontSize = "10px";
    document.getElementById("skillText5").style.fontSize = "10px";
    document.getElementById("skillText6").style.fontSize = "10px";
    document.getElementById("skillText7").style.fontSize = "10px";
    document.getElementById("skillText8").style.fontSize = "10px";
    document.getElementById("skillText9").style.fontSize = "10px";
    document.getElementById("skillText10").style.fontSize = "10px";
    document.getElementById("logo").style.fontSize = "18px";
    document.getElementById("pic").style.width = "75px";
  } else {
    document.getElementById("navbar").style.paddingTop = "30px";
    document.getElementById("skillText1").style.fontSize = "20px";
    document.getElementById("skillText2").style.fontSize = "20px";
    document.getElementById("skillText3").style.fontSize = "20px";
    document.getElementById("skillText4").style.fontSize = "20px";
    document.getElementById("skillText5").style.fontSize = "20px";
    document.getElementById("skillText6").style.fontSize = "20px";
    document.getElementById("skillText7").style.fontSize = "20px";
    document.getElementById("skillText8").style.fontSize = "20px";
    document.getElementById("skillText9").style.fontSize = "20px";
    document.getElementById("skillText10").style.fontSize = "20px";
    document.getElementById("logo").style.fontSize = "25px";
    document.getElementById("pic").style.width = "150px";
  }
}
