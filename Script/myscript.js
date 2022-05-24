function openSection(idSection) {
    closeSection();
    document.getElementById(idSection).style.display = "block";
    document.body.style.overflow = 'hidden';
}
function closeSection()
{
    let content;
    content = document.getElementsByClassName("mainform");
    for (i = 0; i < content.length; i++) {
        content[i].style.display = "none";
    }
    document.body.style.overflow = 'visible';
}

let val = 0;
let like = document.getElementById("like");
like.addEventListener("click", function(){ 
    this.classList.toggle("active");
    document.getElementById("label").innerHTML = val = 1 - val;

});

let form = document.querySelector('.js-form'),
    formInputs = document.querySelectorAll('.js-input');


form.onsubmit = function(){

    formInputs.forEach(function (input) {
        if (input.value === '') {
            input.classList.add('error');

        } else {
            input.classList.remove('error');
        }
    });
    return false;
}