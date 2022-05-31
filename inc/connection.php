<?php
 $host = 'localhost'; // адрес сервера
 $db_name = 'sitedb'; // имя базы данных
 $user = 'root'; // имя пользователя
 $password = ''; // пароль

 $connect = mysqli_connect($host, $user, $password, $db_name);
 if (!$connect){
    echo 'Error connecting to database' . '<br>';
 }else{
    echo 'Connecting complite' . '<br>';
    
    if (isset($_POST['formSubmit'])){
        $name = $connect->real_escape_string($_POST['name']);
        $login = $connect->real_escape_string($_POST['login']);
        $password = $connect->real_escape_string($_POST['password']);

        $password = md5($password);

        $query1 = "SELECT * FROM user WHERE login = '$login'";

        $res = $connect->query($query1);
        $user = mysqli_fetch_assoc($res);

        if ($user){
            echo "<script>alert(\"К сожалению такой пользователь уже существует! Придумайте другой логин!\");</script>"; 
        }else{
            echo "<script>alert(\"Вы вошли на сайт. Добро пожаловать ".$_SESSION['login']."\");</script>";    
            $query = "INSERT INTO user (name,login,password) VALUES ('$name','$login','$password')";
            $resault = $connect->query($query);
        }   
        $connect->close();
    }  

    if(isset($_POST ['formLogin'])){
        $loginl = $connect->real_escape_string($_POST['loginl']);
        $passwordl = $connect->real_escape_string($_POST['passwordl']);

        $passwordl = md5($passwordl);

        $query2 = "SELECT * FROM user WHERE login = '$loginl' and password = '$passwordl'";

        $res2 = $connect->query($query2);
        $userlogin = mysqli_fetch_assoc($res2);

        if($userlogin){
            echo "<script>alert(\"Добро пожаловать!\");</script>";
        }else{
            echo "<script>alert(\"неверный логин или пароль!\");</script>";
            exit();
        }
        $connect->close();
    }
    

    session_start();
    $visit_count = 1;

    if (isset($_SESSION["visit_count"])) {
        $visit_count = $_SESSION["visit_count"] + 1;
    }

    $_SESSION["visit_count"] = $visit_count;  
}