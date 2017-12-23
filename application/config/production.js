module.exports =  {
	PORT: process.env.PORT || 3000,
	DB: require('knex') ({
		  client: 'mysql',
	connection: {
		host : 'us-cdbr-iron-east-05.cleardb.net',
		user : 'b5ec7853c9f666',
		password : '1bcceeae',
		database : 'heroku_da630351594f1dc'
	}
	})
};