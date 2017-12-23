// configuration
const env = process.env.NODE_ENV||'development'; //constante env tjrs en majuscule, variable qui ne change pas. NODE_ENV est l'environnement utilise
const config = require(`../../config/${env}`); // require un fichier config en fonction d'environnement

module.exports = function (req,res){
  config.DB('message').insert({
    message:req.body.message,
    debZ:req.body.debZ,
    finZ:req.body.finZ
  })
  	.then((rows) => {
            return res.status(201).json({
                statusCode: 201,
				errors:[],
            data:'message crée'
            })
        })
    .catch(function(err){
      return res.status(404).json({
        statusCode:404,
        error:'erreur',
        data:{}
      })
    })
}