  var btn = document.getElementById("btn");
  var i = 0;
btn.onclick = function() {
    if (i < 10 ){
        i++;
    } 
    btn.innerHTML = i ;
}