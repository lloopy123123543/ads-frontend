<?php

$pdo = new PDO('mysql:host=localhost;dbname=test_db','root','root');

$prepare = $pdo -> prepare('INSERT INTO test (id) values  (:id)');
$prepare -> bindValue(':id', 112113);
$prepare -> execute();
if (isset($_GET['add'])){
    echo 'ADS';
}

else if (isset($_GET['id'])) {
    echo 'show ads';
}

else if (isset($_get['all'])) {
    echo 'show all';
}