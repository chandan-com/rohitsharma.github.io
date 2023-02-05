var toggler = document.getElementById("toggler-content");
var toggleContents = document.getElementById("toggle-content");
document.addEventListener("click", function(){ 
     toggleContents.classList.toggle("displayed");
});


window.onclick = function(event){
  if (!event.target.matches("#toggle-content")){
    var dropdown = document.getElementsByClassName("toggle-content");


    for(var i = 0; i > dropdown.length; i++){
      var dropped = dropdown[i];
      
      if( dropped.classList.contains('display')){
        dropped.classList.remove('display');
      }
    }
  }
}
