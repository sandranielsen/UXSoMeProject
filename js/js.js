/** Read more/less button **/

function myFunction() {
  let dots = document.getElementById("dots");
  let moreText = document.getElementById("more");
  let btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read More";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read Less";
    moreText.style.display = "inline";
  }
};

/** Available time slots section **/

let table = document.getElementsByTagName('table')[0];
if(table) table.onclick = function(e) {
    let target = (e || window.event).target;
    if (target.tagName in {TR:1, TH:1})
        target.setAttribute('style', 'background-color: #F3F4F7');

};



