// configuration
const env = process.env.NODE_ENV||'development'; //constante env tjrs en majuscule, variable qui ne change pas. NODE_ENV est l'environnement utilise
const config = require(`../../config/${env}`); // require un fichier config en fonction d'environnement
const db = config.DB;

module.exports = function (req,res){
    config.DB('message').update({
        message:req.body.message,
		debZ:req.body.debZ,
		finZ:req.body.finZ
        }

    )
    .where({
        m_id:req.m_id
    })
    .then(function(rows){
        return res.status(201).json({
            statusCode:201,
            errors:[],
            data:'message modifié'
        })
    })
    .catch(function(err){
        return res.status(401).json({
            statusCode:401,
            error:'errors',
            data:{}
        })
    })
}