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

$("slug").append("<button id='slug1'>Sammy</button>");

$("slug1").click(function(){
    $("slug1").toggleClass("pop")
    
});


