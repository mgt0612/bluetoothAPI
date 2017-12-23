module.exports =  {
	PORT: 8080,
	DB: require('knex') ({
		  client: 'mysql',
	connection: {
		host : 'db716315292.db.1and1.com',
		user : 'dbo716315292',
		password : 'kzw75319',
		database : 'db716315292'
	}
	})
};