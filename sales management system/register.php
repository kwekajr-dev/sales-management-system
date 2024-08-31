<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>sales management System</title>
    <link rel="stylesheet" href="register.css" />
</head>
<body>
    <div class="container">
    <h1><b><center>SALES MANAGEMENT SYSTEM</center></b></h1>
    
    <div class="box">
     <form action="registerProcessing.php" method="post">
        <div>
            <label for="fullName">Full Name</label><br>
            <input type="text" class="small" id="fullName" name="fullName" ><br>
        </div>

        <div>
            <label for="address">Address</label><br>
            <input type="text" id="address" class="small" name="address"><br>
        </div>

        <div>
            <label for="Email">Email</label><br>
            <input type="email" id="Email" class="small" name="Email"><br>
        </div>
        <div>
            <label for="password">Password</label><br>
            <input type="password" id="password" class="small" name="password"><br>
        </div>

        <div>
            <label for="new_password">Confirm Password</label><br>
            <input type="password" id="new_password" class="small" name="new_password"><br><br>
        </div>

        <button type="submit" id="submit">Create Account</button>
        <p>Already registered? <a href="login.php">Login</a></p>
     </form>
     
    </div>
    </div>
     <img src="product/OIP (5).jpeg" alt="mother fucking bussiness" >
     <div class="para">
        <p>"Efficient system for technological improvement of sales management and business process"</p>
     </div>
     <div class="tufa">
      <footer>All right are reserved &copy2024</footer>
     </div>
   
   <script src="js/register.js"></script>
</body>
</html>
