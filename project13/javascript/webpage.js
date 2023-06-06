function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
  }
 
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
  }

  //* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
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

//id for individual button
var BSlink = document.getElementById("BS1");
var TestButton1 = document.getElementById("BSbutton");
BSlink.addEventListener("click", function() {
  if (TestButton1.classList.contains("hidden")) {
    TestButton1.classList.remove("hidden");
  } else {
    TestButton1.classList.add("hidden");
  }
});