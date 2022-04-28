let counter = 0;
function Click() {
    updateLike(counter=1);
}

function updateLike(val) {
    document.getElementById("label").innerHTML = val;
}