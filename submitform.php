<?php

$con = new mysqli('localhost', 'root', '1234', 'dynamicinput');
//cack connection
if($con->connect_errno){
echo "Failed to connect to MySQL: " . $con -> connect_error;
exit();
}
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $request_body = file_get_contents('php://input');
    $data = json_decode($request_body, true);
    foreach($data['productData'] as $product){
        $name = $product['name'];
        $price = $product['price'];
        $sql = "insert into products (name,price) values('$name','$price')";
        mysqli_query($con,$sql);
    }
}

?>