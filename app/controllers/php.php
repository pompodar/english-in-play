	<?php 
	$db;
	
	/*
	public $dsn = 'mysql:dbname=id12685325_english_play;host=localhost';
    public $user = 'id12685325_mysql';
    publ$password = '10buboukrnetQQ$';
	*/

	$dsn = 'mysql:dbname=english_play;host=localhost';
    $user = 'mysql';
    $password = 'mysql';

	$db = new PDO($dsn, $user, $password);
	

		 try {
    $sql = "SELECT * FROM word";
    $query = $db->query($sql);
    $result = [];
while ($row = $query->fetch(PDO::FETCH_OBJ))
  {
     $result[] = $row;
  }
echo json_encode($result);
}
catch (PDOException $e) {
    print $e->getMessage();
    }




		    	    
		