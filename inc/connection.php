<?php
 $host = 'localhost'; // адрес сервера
 $db_name = 'sitedb'; // имя базы данных
 $user = 'root'; // имя пользователя
 $password = ''; // пароль

 $connect = mysqli_connect($host, $user, $password, $db_name);
 if (!$connect){
    echo 'Error connecting to database';
 }else{
    echo 'Connecting complite';
    
    if (isset($_GET['formSubmit'])){
        $nameForm = $_GET['name'];
        $loginForm = $_GET['login'];
        $password = md5($_GET['password']);

        $name = '"'.$connect->real_escape_string($nameForm).'"';
        $login = '"'.$connect->real_escape_string($loginForm).'"';
        $password = '"'.$connect->real_escape_string($password).'"';
        $query2 = "INSERT INTO user (name) VALUES ($name)";
        $query = "INSERT INTO userinfo (login,password) VALUES ($login,$password)";
        $resault = $connect->query($query);
        $resault2 = $connect->query($query2);
        if ($resault){
        }
        
    }
}
