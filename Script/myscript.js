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

const buff = {
    login_kamaeff: 'kamaeff',
    password_kamaeff: 'qwerty123'   
}


function deletepos(){
    pass.classList.remove('pos');
    repass.classList.remove('pos');
    pass.classList.add('error');
    repass.classList.add('error');
}


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
            if (login.value == buff.login_kamaeff){
                input.classList.remove('pos');
                input.classList.add('error');
                return false;
            }else{
                input.classList.remove('error');
                input.classList.add('pos');
            }  
        }  
    });

    let loginr = login.value; 
    if (login.value == buff.login_kamaeff){
        deletepos();
        console.log('Same person');
        document.getElementById('message').innerHTML = 'Такой пользователь уже существует!';
        return false;
    } 

    if (pass.value.length < 8 ){
        document.getElementById("message").innerHTML = "Пароль должен быть не менее 8 символов";
        console.log('not 8 symbols');
        deletepos();
        return false;  
    }

    if(!re.test(pass.value)){
        deletepos();
        console.log('not english words');
        document.getElementById('message').innerHTML = 'Пароль не содержит английский буквы!';
        return false; 
    }

    if ((pass.value == repass.value) && pass.value != '' && repass.value != '' && input.value != ''){     
    console.log('Yes');
        document.getElementById('message').innerHTML = '';
        form.submit();
    }else {
        console.log('No');
        deletepos();
        document.getElementById('message').innerHTML = 'Пароли не совпадают!';
        return false;
    } 
}


let formL = document.querySelector('.js-form-login'),
    formLogin = document.querySelectorAll('.js-input-login');
let loginL = document.getElementById('login-enter'),
    passwordL = document.getElementById('password-enter');

formL.onsubmit = function(){
    formLogin.forEach(function(input){
        if (input.value === ''){
            input.classList.add('error');
            console.log('No');
            document.getElementById('messageL').innerHTML = 'Строчки не могут быть пустыми!';
            return false; 
        }  
    });
    if (loginL.value == buff.login_kamaeff){
        loginL.classList.remove('error');
        loginL.classList.add('pos');
        console.log('login yes');
        if (passwordL.value == buff.password_kamaeff){
            passwordL.classList.remove('error');
            passwordL.classList.add('pos');
            console.log('yes');
            formL.submit();
            document.getElementById('messageL').innerHTML = '';
        }
        else{
            loginL.classList.remove('pos');
            loginL.classList.add('error');
            passwordL.classList.remove('pos');
            passwordL.classList.add('error');
            console.log('no');
            document.getElementById('messageL').innerHTML = 'Не верно введен логин или пароль!';
            return false;
        }
    }
    else{
        loginL.classList.remove('pos');
        loginL.classList.add('error');
        passwordL.classList.remove('pos');
        passwordL.classList.add('error');
        console.log('no');
        document.getElementById('messageL').innerHTML = 'Не верно введен логин или пароль!';
        return false;
    }
    return false;
}
