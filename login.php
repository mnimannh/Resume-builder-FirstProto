<?php
    include('./controller/connection.php');
    if (isset($_POST['submit'])) {
        $email = $_POST['email'];
        $password = $_POST['pass'];
if (empty($email) || empty($password)) {
        echo '<script>
                window.history.back();
              </script>';             
                //  alert("All fields are required!");
        echo "Email and password fields are required";
        exit;
    }
$sql = "select * from login where email = '$email' and password = '$password'";
        $result = mysqli_query($conn, $sql);  
        $row = mysqli_fetch_array($result, MYSQLI_ASSOC);  
        $count = mysqli_num_rows($result);  
        
        if($count == 1){  
            header("Location: ./views/layout.php");
        }  
        else{  
            echo  '<script>
                   
                        window.location.href = "index.php";
                        alert("Login failed. Invalid username or password!!")
                    </script>';
        }     
    }
    
    ?>