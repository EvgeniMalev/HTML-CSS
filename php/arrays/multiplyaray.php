<?php

$array1 = [2, 4, 6, 8];
$array2 = [3, 5, 7, 9];

$result = [];

for ($i = 0; $i < min(count($array1), count($array2)); $i++) {
    $result[] = $array1[$i] * $array2[$i];
}

echo "Result:\n";
print_r($result);

?>
