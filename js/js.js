/** Available time slots section **/

let table = document.getElementsByTagName('table')[0];
if(table) table.onclick = function(e) {
    let target = (e || window.event).target;
    if (target.tagName in {TR:1, TH:1})
        target.setAttribute('style', 'background-color: #F3F4F7');

};

/** Modal section **/
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Opens the modal when the users clicks on the button
btn.onclick = function() {
  modal.style.display = "block";
}

// Closes the modal When the user clicks on the cross
span.onclick = function() {
  modal.style.display = "none";
}

// Closes the modal when the user clicks anywhere outside of it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

/** Read more/less button **/

function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn1");

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

