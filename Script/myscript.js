function Click(){
  updateLike(++counter);
}

function updateLike(val){
  document.getElementById("label").innerHTML = val;
}
