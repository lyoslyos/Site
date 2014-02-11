<?php

//On se connecte a la base de donnee
mysql_connect('localhost', 'root', '');
mysql_select_db('forum');


$admin='lyos';


//Nom du fichier de laccueil
$url_home = 'index.php';

//Nom du design
$design = 'default';


/******************************************************
----------------------Initialisation-------------------
******************************************************/
include('init.php');
?>