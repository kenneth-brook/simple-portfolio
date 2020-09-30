window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.paddingTop = "20px";
    document.getElementById("logo").style.fontSize = "25px";
    document.getElementById("pic").style.width = "75px";
  } else {
    document.getElementById("navbar").style.paddingTop = "50px";
    document.getElementById("logo").style.fontSize = "40px";
    document.getElementById("pic").style.width = "150px";
  }
}
