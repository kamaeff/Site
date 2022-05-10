let counter = 0;

function valid()
{
    let form = document.querySelector('.header__form_registr')
    let search = form.querySelectorAll('.search')
    let errors = form.querySelectorAll('.error');
    let password = form.querySelector('.search--password')
    let passwordConfirmation= form.querySelector('.search--password-confirmation')
    let flag =true

    if(errors){
        for(let i=0; i<errors.length; i++)
        {       
            errors[i].remove()
            flag = false
        }
    }

    for(let i=0;i<search.length;i++)
    {
        if(!search[i].value)
        {
            let error = document.createElement('div')
            error.className = 'error'
            error.style.color = 'red'
            error.style.fontSize = '12px'
            error.innerHTML = 'Заполните поле'
            form[i].parentElement.insertBefore(error, search[i])
            flag = false
        }
    }

    if(password.value != passwordConfirmation.value)
    {
        let error = document.createElement('div')
        error.className = 'error'
        error.style.color = 'red'
        error.innerHTML = 'Пароли не совпадают'
        password.parentElement.insertBefore(error, password)
        flag =false
    }
    if(flag)
    {
        alert("Регистрация прошла успешна")
    
    }
}


function openSection(idSection) {
    closeSection();
    document.getElementById(idSection).style.display = "block";
    document.body.style.overflow = 'hidden';
}
function closeSection()
{
    let content;
    content = document.getElementsByClassName("header__form");
    for (i = 0; i < content.length; i++) {
        content[i].style.display = "none";
    }
    document.body.style.overflow = 'visible';
}

function Click() {
    updateLike(counter=1);
}

function updateLike(val) {
    document.getElementById("label").innerHTML = val;

}

var like = document.getElementById("like");
like.addEventListener("click", function(){
    this.classList.add("active");
});