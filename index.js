function show(id) {
    document.getElementById(id).style.visibility = "visible";
  }

  function hide(id) {
    document.getElementById(id).style.visibility = "hidden";
  }

  function changeImageToDM(id) {

    document.getElementById(id).src = "assets/DM-2.png";
}

function showDisplay(id){
  document.getElementById(id).style.display = "block";
}

function hideDisplay(id){
  document.getElementById(id).style.display = "none";
}