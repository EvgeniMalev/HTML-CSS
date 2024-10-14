<!DOCTYPE html>
<html>
<body>

<?php
define("WELCOME_MESSAGE", "Welcome to Our Website!");


function displayGreeting($name) {
    echo "<h1>" . WELCOME_MESSAGE . " Hello, " . $name . "!</h1>";
}


$users = [
    ["name" => "Alice", "role" => "Admin"],
    ["name" => "Bob", "role" => "Editor"],
    ["name" => "Charlie", "role" => "Subscriber"],
    ["name" => "Diana", "role" => "Guest"]
];


function displayUserRole($role) {
    echo "<p>Your role is: " . $role . "</p>";
}


foreach ($users as $user) {
    displayGreeting($user["name"]);
    displayUserRole($user["role"]);

    if ($user["role"] == "Admin") {
        echo "<p><strong>Note:</strong> You have full access to the site.</p>";
    } elseif ($user["role"] == "Editor") {
        echo "<p><strong>Note:</strong> You can edit content but have limited access to settings.</p>";
    } elseif ($user["role"] == "Subscriber") {
        echo "<p><strong>Note:</strong> You can view and comment on content.</p>";
    } else {
        echo "<p><strong>Note:</strong> You are browsing as a guest. Sign up for more features!</p>";
    }

    echo "<hr>";
}
?>

</body>
</html>
