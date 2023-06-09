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