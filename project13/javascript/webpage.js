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
 
  // Get all the link elements
var links = document.querySelectorAll(".myLink");


// Add event listeners to the links
links.forEach(function(link) {
  link.addEventListener("click", function(event) {
    event.preventDefault();
    var target = this.getAttribute("data-target");
   
    // Hide all button containers
    var buttonContainers = document.querySelectorAll("[data-button-container]");
    buttonContainers.forEach(function(container) {
      container.classList.add("hidden");
    });
   
    // Show the relevant button container
    var targetContainer = document.getElementById(target);
    if (targetContainer) {
      targetContainer.classList.remove("hidden");
    }
  });
});


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

/*
function toggleStudySpots() {
  document.getElementById("button1").style.display = 'block';
  document.getElementById("button4").style.display = 'block';
  document.getElementById("button2").style.display = 'block';
  document.getElementById("button3").style.display = 'block';
  document.getElementById("button5").style.display = 'block';
  document.getElementById("button6").style.display = 'block';

  document.getElementById("button7a").style.display = 'none';
  document.getElementById("button7b").style.display = 'none';
  document.getElementById("button7c").style.display = 'none';
  document.getElementById("button8a").style.display = 'none';
  document.getElementById("button8b").style.display = 'none';
  document.getElementById("button9").style.display = 'none';
  document.getElementById("button10").style.display = 'none';
  document.getElementById("button11a").style.display = 'none';
  document.getElementById("button11b").style.display = 'none';
  document.getElementById("button11c").style.display = 'none';
  document.getElementById("button12a").style.display = 'none';
  document.getElementById("button12b").style.display = 'none';
  document.getElementById("button12c").style.display = 'none';
  document.getElementById("button12d").style.display = 'none';
  document.getElementById("button13").style.display = 'none';
  document.getElementById("button14").style.display = 'none';
  document.getElementById("button15").style.display = 'none';
  document.getElementById("button16").style.display = 'none';
  document.getElementById("button17").style.display = 'none';
  document.getElementById("button18").style.display = 'none';
  document.getElementById("button19").style.display = 'none';
  document.getElementById("button20").style.display = 'none';
  document.getElementById("button21").style.display = 'none';
  document.getElementById("button22").style.display = 'none';
  document.getElementById("button23").style.display = 'none';
  return;
}

function toggleAnimalSightings() {
  document.getElementById("button7a").style.display = 'block';
  document.getElementById("button7b").style.display = 'block';
  document.getElementById("button7c").style.display = 'block';
  document.getElementById("button8a").style.display = 'block';
  document.getElementById("button8b").style.display = 'block';
  document.getElementById("button9").style.display = 'block';
  document.getElementById("button10").style.display = 'block';
  document.getElementById("button11a").style.display = 'block';
  document.getElementById("button11b").style.display = 'block';
  document.getElementById("button11c").style.display = 'block';

  document.getElementById("button1").style.display = 'none';
  document.getElementById("button4").style.display = 'none';
  document.getElementById("button2").style.display = 'none';
  document.getElementById("button3").style.display = 'none';
  document.getElementById("button5").style.display = 'none';
  document.getElementById("button6").style.display = 'none';
  document.getElementById("button12a").style.display = 'none';
  document.getElementById("button12b").style.display = 'none';
  document.getElementById("button12c").style.display = 'none';
  document.getElementById("button12d").style.display = 'none';
  document.getElementById("button13").style.display = 'none';
  document.getElementById("button14").style.display = 'none';
  document.getElementById("button15").style.display = 'none';
  document.getElementById("button16").style.display = 'none';
  document.getElementById("button17").style.display = 'none';
  document.getElementById("button18").style.display = 'none';
  document.getElementById("button19").style.display = 'none';
  document.getElementById("button20").style.display = 'none';
  document.getElementById("button21").style.display = 'none';
  document.getElementById("button22").style.display = 'none';
  document.getElementById("button23").style.display = 'none';
  return;  
}

function toggleCafes() {
  document.getElementById("button12a").style.display = 'block';
  document.getElementById("button12b").style.display = 'block';
  document.getElementById("button12c").style.display = 'block';
  document.getElementById("button12d").style.display = 'block';
  document.getElementById("button13").style.display = 'block';
  document.getElementById("button14").style.display = 'block';
  document.getElementById("button15").style.display = 'block';
  document.getElementById("button16").style.display = 'block';
  document.getElementById("button17").style.display = 'block';
  document.getElementById("button18").style.display = 'block';
 
  document.getElementById("button1").style.display = 'none';
  document.getElementById("button4").style.display = 'none';
  document.getElementById("button2").style.display = 'none';
  document.getElementById("button3").style.display = 'none';
  document.getElementById("button5").style.display = 'none';
  document.getElementById("button6").style.display = 'none';
  document.getElementById("button7a").style.display = 'none';
  document.getElementById("button7b").style.display = 'none';
  document.getElementById("button7c").style.display = 'none';
  document.getElementById("button8a").style.display = 'none';
  document.getElementById("button8b").style.display = 'none';
  document.getElementById("button9").style.display = 'none';
  document.getElementById("button10").style.display = 'none';
  document.getElementById("button11a").style.display = 'none';
  document.getElementById("button11b").style.display = 'none';
  document.getElementById("button11c").style.display = 'none';
  document.getElementById("button19").style.display = 'none';
  document.getElementById("button20").style.display = 'none';
  document.getElementById("button21").style.display = 'none';
  document.getElementById("button22").style.display = 'none';
  document.getElementById("button23").style.display = 'none';
  return;
}

function togglePhotoOps() {
  document.getElementById("button19").style.display = 'block';
  document.getElementById("button20").style.display = 'block';
  document.getElementById("button21").style.display = 'block';
  document.getElementById("button22").style.display = 'block';
  document.getElementById("button23").style.display = 'block';

  document.getElementById("button1").style.display = 'none';
  document.getElementById("button4").style.display = 'none';
  document.getElementById("button2").style.display = 'none';
  document.getElementById("button3").style.display = 'none';
  document.getElementById("button5").style.display = 'none';
  document.getElementById("button6").style.display = 'none';
  document.getElementById("button7a").style.display = 'none';
  document.getElementById("button7b").style.display = 'none';
  document.getElementById("button7c").style.display = 'none';
  document.getElementById("button8a").style.display = 'none';
  document.getElementById("button8b").style.display = 'none';
  document.getElementById("button9").style.display = 'none';
  document.getElementById("button10").style.display = 'none';
  document.getElementById("button11a").style.display = 'none';
  document.getElementById("button11b").style.display = 'none';
  document.getElementById("button11c").style.display = 'none';
  document.getElementById("button12a").style.display = 'none';
  document.getElementById("button12b").style.display = 'none';
  document.getElementById("button12c").style.display = 'none';
  document.getElementById("button12d").style.display = 'none';
  document.getElementById("button13").style.display = 'none';
  document.getElementById("button14").style.display = 'none';
  document.getElementById("button15").style.display = 'none';
  document.getElementById("button16").style.display = 'none';
  document.getElementById("button17").style.display = 'none';
  document.getElementById("button18").style.display = 'none';
  return;
} */


function filter() {
  document.getElementById("button1").style.display = 'block';
  document.getElementById("button4").style.display = 'block';
  document.getElementById("button2").style.display = 'block';
  document.getElementById("button3").style.display = 'block';
  document.getElementById("button5").style.display = 'block';
  document.getElementById("button6").style.display = 'block';

  /*document.getElementById("button7a").style.display = 'none';
  document.getElementById("button8a").style.display = 'none';
  document.getElementById("button9").style.display = 'none';
  document.getElementById("button10").style.display = 'none';
  document.getElementById("button11a").style.display = 'none';
  
  document.getElementById("button12a").style.display = 'none';
  document.getElementById("button13").style.display = 'none';
  document.getElementById("button14").style.display = 'none';
  document.getElementById("button15").style.display = 'none';
  document.getElementById("button16").style.display = 'none';
  document.getElementById("button17").style.display = 'none';
  document.getElementById("button18").style.display = 'none';
  
  document.getElementById("button19").style.display = 'none';
  document.getElementById("button20").style.display = 'none';
  document.getElementById("button21").style.display = 'none';
  document.getElementById("button22").style.display = 'none';
  document.getElementById("button23").style.display = 'none'; */
 
  var lively = document.getElementById("lively");
  var moderate = document.getElementById("moderate");
  var quiet = document.getElementById("quiet");
  var yes = document.getElementById("yes");
  var no = document.getElementById("no");
  var inside = document.getElementById("inside");
  var outside = document.getElementById("outside");
  var both = document.getElementById("both");

  if (moderate.checked == true && yes.checked == true && both.checked == true) {
    document.getElementById("button4").style.display = 'none';
    document.getElementById("button2").style.display = 'none';
    document.getElementById("button3").style.display = 'none';
    return;
  }
  else if (quiet.checked == true && yes.checked == true && inside.checked == true) {
    document.getElementById("button1").style.display = 'none';
    document.getElementById("button2").style.display = 'none';
    document.getElementById("button5").style.display = 'none';
    document.getElementById("button6").style.display = 'none';
    return;
  }
  else if (lively.checked == true && yes.checked == true && inside.checked == true) {
    document.getElementById("button1").style.display = 'none';
    document.getElementById("button4").style.display = 'none';
    document.getElementById("button3").style.display = 'none';
    document.getElementById("button5").style.display = 'none';
    document.getElementById("button6").style.display = 'none';
    return;
  }
  else {
    return;
  }
}


function reset() {
  document.getElementById("button1").style.display = 'none';
  document.getElementById("button4").style.display = 'none';
  document.getElementById("button2").style.display = 'none';
  document.getElementById("button3").style.display = 'none';
  document.getElementById("button5").style.display = 'none';
  document.getElementById("button6").style.display = 'none';
  return;
}


const sidebarLinks = document.getElementsByClassName('sidebar-link');
const buttons = document.getElementsByClassName('hidden-button');
let currentButton = null;

Array.from(sidebarLinks).forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault(); 

    const targetButtonId = link.getAttribute('data-target');
    const targetButton = document.getElementById(targetButtonId);

    if (currentButton !== targetButton) {
      if (currentButton) {
        currentButton.style.display = 'none';
        button7a.style.display = 'none';
        button7b.style.display = 'none';
        button7c.style.display = 'none';
        button8a.style.display = 'none';
        button8b.style.display = 'none';
        button11a.style.display = 'none';
        button11b.style.display = 'none';
        button11c.style.display = 'none';
        button10a.style.display = 'none';
        button10b.style.display = 'none';
        button12a.style.display = 'none';
        button12b.style.display = 'none';
        button12c.style.display = 'none';
        button12d.style.display = 'none';
      }
      targetButton.style.display = 'block';
      currentButton = targetButton;
     } else {
      
      targetButton.style.display = 'none';
      currentButton = null;
    }
  });
});
<<<<<<< Updated upstream
  
document.addEventListener('click', function(event) {
  const targetElement = event.target;

  // Check if the clicked element is outside the sidebar area
  if (!targetElement.classList.contains('sidebar-link') && !targetElement.classList.contains('hidden-button')) {
    if (currentButton) {
      currentButton.style.display = 'none';
      currentButton = null;
    }
  }
});
=======

document.getElementById('MButton1').addEventListener('click', function(event) {
  event.preventDefault();

  var button7a = document.getElementById('button7a');
  var button7b = document.getElementById('button7b');
  var button7c = document.getElementById('button7c');

  if (button7a.style.display === 'block' && button7b.style.display === 'block' && button7c.style.display === 'block') {
    button7a.style.display = 'none';
    button7b.style.display = 'none';
    button7c.style.display = 'none';
  } else {
    button7a.style.display = 'block';
    button7b.style.display = 'block';
    button7c.style.display = 'block';
  }
  button8a.style.display = 'none';
  button8b.style.display = 'none';
  button11a.style.display = 'none';
  button11b.style.display = 'none';
  button11c.style.display = 'none';
  button10a.style.display = 'none';
  button10b.style.display = 'none';
  button12a.style.display = 'none';
  button12b.style.display = 'none';
  button12c.style.display = 'none';
  button12d.style.display = 'none';
});


document.getElementById('MButton2').addEventListener('click', function(event) {
  event.preventDefault();

  var button8a = document.getElementById('button8a');
  var button8b = document.getElementById('button8b');

  if (button8a.style.display === 'block' && button8b.style.display === 'block') {
    button8a.style.display = 'none';
    button8b.style.display = 'none';
  } else {
    button8a.style.display = 'block';
    button8b.style.display = 'block';
  }
  button7a.style.display = 'none';
  button7b.style.display = 'none';
  button7c.style.display = 'none';
  button11a.style.display = 'none';
  button11b.style.display = 'none';
  button11c.style.display = 'none';
  button10a.style.display = 'none';
  button10b.style.display = 'none';
  button12a.style.display = 'none';
  button12b.style.display = 'none';
  button12c.style.display = 'none';
  button12d.style.display = 'none';
});

document.getElementById('MButton4').addEventListener('click', function(event) {
  event.preventDefault(); 
  var button11a = document.getElementById('button11a');
  var button11b = document.getElementById('button11b');
  var button11c = document.getElementById('button11c');

  if (button11a.style.display === 'block' && button11b.style.display === 'block' && button11c.style.display === 'block') {
    button11a.style.display = 'none';
    button11b.style.display = 'none';
    button11c.style.display = 'none';
  } else {
    button11a.style.display = 'block';
    button11b.style.display = 'block';
    button11c.style.display = 'block';
  }
  button7a.style.display = 'none';
  button7b.style.display = 'none';
  button7c.style.display = 'none';
  button8a.style.display = 'none';
  button8b.style.display = 'none';
  button10a.style.display = 'none';
  button10b.style.display = 'none';
  button12a.style.display = 'none';
  button12b.style.display = 'none';
  button12c.style.display = 'none';
  button12d.style.display = 'none';
});

document.getElementById('MButton3').addEventListener('click', function(event) {
  event.preventDefault();

  var button10a = document.getElementById('button10a');
  var button10b = document.getElementById('button10b');

  if (button10a.style.display === 'block' && button10b.style.display === 'block') {
    button10a.style.display = 'none';
    button10b.style.display = 'none';
  } else {
    button10a.style.display = 'block';
    button10b.style.display = 'block';
  }
  button7a.style.display = 'none';
  button7b.style.display = 'none';
  button7c.style.display = 'none';
  button8a.style.display = 'none';
  button8b.style.display = 'none';
  button11a.style.display = 'none';
  button11b.style.display = 'none';
  button11c.style.display = 'none';
  button12a.style.display = 'none';
  button12b.style.display = 'none';
  button12c.style.display = 'none';
  button12d.style.display = 'none';
});


document.getElementById('MButton5').addEventListener('click', function(event) {
  event.preventDefault();

  var button12a = document.getElementById('button12a');
  var button12b = document.getElementById('button12b');
  var button12c = document.getElementById('button12c');
  var button12d = document.getElementById('button12d');

  if (button12a.style.display === 'block' && button12b.style.display === 'block' && button12c.style.display === 'block' && button12d.style.display === 'block') {
    button12a.style.display = 'none';
    button12b.style.display = 'none';
    button12c.style.display = 'none';
    button12d.style.display = 'none';
  } else {
    button12a.style.display = 'block';
    button12b.style.display = 'block';
    button12c.style.display = 'block';
    button12d.style.display = 'block';
  }
  button7a.style.display = 'none';
  button7b.style.display = 'none';
  button7c.style.display = 'none';
  button8a.style.display = 'none';
  button8b.style.display = 'none';
  button11a.style.display = 'none';
  button11b.style.display = 'none';
  button11c.style.display = 'none';
  button10a.style.display = 'none';
  utton10b.style.display = 'none';
    
});




>>>>>>> Stashed changes
