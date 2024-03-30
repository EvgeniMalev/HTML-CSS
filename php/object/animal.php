<!DOCTYPE html>
<html>
<body>

<?php
class Animal {
  public $type;
  public $breed;
  public $color; 
  public function __construct($type, $breed, $color) {
    $this->type = $type;  
    $this->breed = $breed;
    $this->color = $color;
  }
  public function message() {
    return "Animal " . $this->type . " " . $this->breed . " is " . $this->color . ".";
  }
}

$myAnimal = new Animal("Dog", "German sheeper", "black");
echo $myAnimal->message();
echo "<br>";
$myAnimal = new Animal("Cat", "Balkan", "white");
echo $myAnimal->message();
?>

</body>
</html>
