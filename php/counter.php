<?php
$file = "counter.txt";

if (!file_exists($file)) {
    file_put_contents($file, "0");
}

$count = (int)file_get_contents($file);

$count++;

file_put_contents($file, $count);
?>

<!DOCTYPE html>
<html lang="bg">
<head>
    <meta charset="UTF-8">
    <title>Брояч на посещения</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin-top: 100px;
        }

        .counter {
            font-size: 48px;
            color: #2c3e50;
            font-weight: bold;
        }
    </style>
</head>
<body>

<h1>Добре дошли!</h1>

<p>Брой посещения:</p>

<div class="counter">
    <?php echo $count; ?>
</div>

</body>
</html>
