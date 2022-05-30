//Open and close section
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

//like animation
let val = 0;
let like = document.getElementById("like");
like.addEventListener("click", function(){ 
    this.classList.toggle("active");
    document.getElementById("label").innerHTML = val = 1 - val;

});

//input protector
let form = document.querySelector('.js-form'),
    formInputs = document.querySelectorAll('.js-input');
let pass = document.getElementById('password'),
    repass = document.getElementById('repassword'),
    login = document.getElementById('login');

let re = new RegExp('^[a-zA-Z0-9]+$');

form.onsubmit = function(){
    formInputs.forEach(function (input) {  
        if (input.value === '') {   
            input.classList.add('error');  
            input.classList.remove('pos'); 
            console.log('inputs none');
            if (pass.value === '' || repass.value === ''){
                document.getElementById('message').innerHTML = 'Пароли не могут быть пустыми!';
                return false;
            }
        }else{ 
            input.classList.remove('error');
            input.classList.add('pos');
        }  
    });
    if (pass.value.length < 8 ){
        document.getElementById("message").innerHTML = "Пароль должен быть не менее 8 символов";
        console.log('not 8 symbols');
        pass.classList.remove('pos');
        repass.classList.remove('pos');
        pass.classList.add('error');
        repass.classList.add('error');
        return false;  
    }

    if(!re.test(pass.value)){
        pass.classList.remove('pos');
        repass.classList.remove('pos');
        pass.classList.add('error');
        repass.classList.add('error');
        console.log('not english words');
        document.getElementById('message').innerHTML = 'Пароль не содержит английский буквы!';
        return false; 
    }
     
    if ((pass.value == repass.value) && pass.value != '' && repass.value != '' && input.value != ''){     
        console.log('Yes');
        document.getElementById('message').innerHTML = '';
        form.submit();
    }
    else {
        console.log('No');
        pass.classList.remove('pos');
        repass.classList.remove('pos');
        pass.classList.add('error');
        repass.classList.add('error');
        document.getElementById('message').innerHTML = 'Пароли не совпадают!';
        return false;
    } 
}