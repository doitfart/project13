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
  document.getElementById("mchenry-library").style.opacity = 1;
  document.getElementById("mchenry-library").disabled = false;
  document.getElementById("porter-study").style.opacity = 1;
  document.getElementById("porter-study").disabled = false;
  document.getElementById("se-library").style.opacity = 1;
  document.getElementById("se-library").disabled = false;
  document.getElementById("stevenson-library").style.opacity = 1;
  document.getElementById("stevenson-library").disabled = false;
  document.getElementById("namaste-lounge").style.opacity = 1;
  document.getElementById("namaste-lounge").disabled = false;
  document.getElementById("tf-commons").style.opacity = 1;
  document.getElementById("tf-commons").disabled = false;
 
  var lively = document.getElementById("lively");
  var moderate = document.getElementById("moderate");
  var quiet = document.getElementById("quiet");
  var yes = document.getElementById("yes");
  var no = document.getElementById("no");
  var inside = document.getElementById("inside");
  var outside = document.getElementById("outside");
  var both = document.getElementById("both");

  if (moderate.checked == true && yes.checked == true && both.checked == true) {
    document.getElementById("porter-study").style.opacity = 0;
    document.getElementById("porter-study").disabled = true;
    document.getElementById("se-library").style.opacity = 0;
    document.getElementById("se-library").disabled = true;
    document.getElementById("stevenson-library").style.opacity = 0;
    document.getElementById("stevenson-library").disabled = true;
    return;
  }
  else if (quiet.checked == true && yes.checked == true && inside.checked == true) {
    document.getElementById("mchenry-library").style.opacity = 0;
    document.getElementById("mchenry-library").disabled = true;
    document.getElementById("se-library").style.opacity = 0;
    document.getElementById("se-library").disabled = true;
    document.getElementById("namaste-lounge").style.opacity = 0;
    document.getElementById("namaste-lounge").disabled = true;
    document.getElementById("tf-commons").style.opacity = 0;
    document.getElementById("tf-commons").disabled = true;
    return;
  }
  else if (lively.checked == true && yes.checked == true && inside.checked == true) {
    document.getElementById("mchenry-library").style.opacity = 0;
    document.getElementById("mchenry-library").disabled = true;
    document.getElementById("porter-study").style.opacity = 0;
    document.getElementById("porter-study").disabled = true;
    document.getElementById("stevenson-library").style.opacity = 0;
    document.getElementById("stevenson-library").disabled = true;
    document.getElementById("namaste-lounge").style.opacity = 0;
    document.getElementById("namaste-lounge").disabled = true;
    document.getElementById("tf-commons").style.opacity = 0;
    document.getElementById("tf-commons").disabled = true;
    return;
  }
  else {
    return;
  }
}

function reset() {
  document.getElementById("mchenry-library").style.opacity = 1;
  document.getElementById("mchenry-library").disabled = false;
  document.getElementById("porter-study").style.opacity = 1;
  document.getElementById("porter-study").disabled = false;
  document.getElementById("se-library").style.opacity = 1;
  document.getElementById("se-library").disabled = false;
  document.getElementById("stevenson-library").style.opacity = 1;
  document.getElementById("stevenson-library").disabled = false;
  document.getElementById("namaste-lounge").style.opacity = 1;
  document.getElementById("namaste-lounge").disabled = false;
  document.getElementById("tf-commons").style.opacity = 1;
  document.getElementById("tf-commons").disabled = false;
  return;
}

