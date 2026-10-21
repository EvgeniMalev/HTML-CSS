
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $a = (float) $_POST["a"];
    $b = (float) $_POST["b"];
    $c = (float) $_POST["c"];

    if ($a == 0) {
        echo "<p>Коефициентът a трябва да е различен от 0.</p>";
    } else {

        $D = $b * $b - 4 * $a * $c;

        echo "<h3>Резултат:</h3>";
        echo "<p>Дискриминанта D = " . $D . "</p>";

        if ($D > 0) {
            $x1 = (-$b + sqrt($D)) / (2 * $a);
            $x2 = (-$b - sqrt($D)) / (2 * $a);

            echo "<p>Два реални корена:</p>";
            echo "x1 = " . $x1 . "<br>";
            echo "x2 = " . $x2;

        } elseif ($D == 0) {
            $x = -$b / (2 * $a);

            echo "<p>Един двоен корен:</p>";
            echo "x = " . $x;

        } else {
            echo "<p>Уравнението няма реални корени.</p>";

            $real = -$b / (2 * $a);
            $imaginary = sqrt(-$D) / (2 * abs($a));

            echo "Комплексни корени:<br>";
            echo "x1 = " . $real . " + " . $imaginary . "i<br>";
            echo "x2 = " . $real . " - " . $imaginary . "i";
        }
    }
}
?>
