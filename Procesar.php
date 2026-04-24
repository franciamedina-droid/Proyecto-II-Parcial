<?php

$nombre = htmlspecialchar($_POST['nombre']);
$edad = (int) $_POST['edad'];

echo 'Hola,' . $Nombre . '.';
echo 'Tienes' . $Edad . 'Años.';

?>