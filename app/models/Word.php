<?php 

class Word {
	public $name;
	protected $db;
	
	/*
	public $dsn = 'mysql:dbname=id12685325_english_play;host=localhost';
    public $user = 'id12685325_mysql';
    public $password = '10buboukrnetQQ$';
	*/

	public $dsn = 'mysql:dbname=english_play;host=localhost';
    public $user = 'mysql';
    public $password = 'mysql';

	public function __construct() {
	$this->db = new PDO($this->dsn, $this->user, $this->password);
	}

	public function query($sql, $params = []) {
		$stmt = $this->db->prepare($sql);
		if (!empty($params)) {
			foreach ($params as $key => $val) {
				$stmt->bindValue(':'.$key, $val);
			}
		}
		$stmt->execute();
		return $stmt;
	}

	public function row($sql, $params = []) {
		$result = $this->query($sql, $params);
		return $result->fetchAll(PDO::FETCH_ASSOC);
	}

	public function column($sql, $params = []) {
		$result = $this->query($sql, $params);
		return $result->fetchColumn();
	}
}