function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
  }
 
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
  }
 
  var dropdown = document.getElementsByClassName("dropdown-btn");
  var activeDropdown = null;
  
  for (var i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function() {
      if (activeDropdown && activeDropdown !== this) {
        activeDropdown.classList.remove("active");
        activeDropdown.nextElementSibling.style.display = "none";
      }
  
      this.classList.toggle("active");
      var dropdownContent = this.nextElementSibling;
  
      if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
      } else {
        dropdownContent.style.display = "block";
      }
  
      activeDropdown = this;
    });
  }
  
 


$(document).ready(function() {
  // Open the pop-up when the button is clicked
  $('.popupButton').click(function() {
    var target = $(this).data('target');
    $('#' + target).fadeIn();
    $('.overlay').fadeIn();
  });

  // Close the pop-up when the close button is clicked
  $('.closeButton').click(function() {
    $('.overlay').fadeOut();
    $('.popup').fadeOut();
  });
});



function filter() {
  document.getElementById(mchenry).style.opacity = 1;
  document.getElementById(porter).style.opacity = 1;
  document.getElementById(se).style.opacity = 1;
  document.getElementById(stevensonlib).style.opacity = 1;
  document.getElementById(namaste).style.opacity = 1;
  document.getElementById(tfc).style.opacity = 1;
 
  var lively = document.getElementById("lively");
  var moderate = document.getElementById("moderate");
  var quiet = document.getElementById("quiet");
  var yes = document.getElementById("yes");
  var no = document.getElementById("no");
  var inside = document.getElementById("inside");
  var outside = document.getElementById("outside");
  var both = document.getElementById("both");


  if (moderate.checked == true && yes.checked == true && both.checked == true) {
    document.getElementById(porter).style.opacity = 0;
    document.getElementById(se).style.opacity = 0;
    document.getElementById(stevensonlib).style.opacity = 0;
  }
  else if (quiet.checked == true && yes.checked == true && inside.checked == true) {
    document.getElementById(mchenry).style.opacity = 0;
    document.getElementById(se).style.opacity = 0;
    document.getElementById(namaste).style.opacity = 0;
    document.getElementById(tfc).style.opacity = 0;
  }
  else if (lively.checked == true && yes.checked == true && inside.checked == true) {
    document.getElementById(mchenry).style.opacity = 0;
    document.getElementById(porter).style.opacity = 0;
    document.getElementById(stevensonlib).style.opacity = 0;
    document.getElementById(namaste).style.opacity = 0;
    document.getElementById(tfc).style.opacity = 0;
  }
}

