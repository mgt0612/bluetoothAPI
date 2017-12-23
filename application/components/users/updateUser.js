// configuration
const env = process.env.NODE_ENV||'development'; //constante env tjrs en majuscule, variable qui ne change pas. NODE_ENV est l'environnement utilise
const config = require(`../../config/${env}`); // require un fichier config en fonction d'environnement
const db = config.DB;

module.exports = function (req,res){
    config.DB('user').update({
        blueAdd:req.body.blueAdd,
        nomApp:req.body.nomApp,
        numero:req.body.numero,
        u_nom:req.body.u_nom,
		u_prenom:req.body.u_prenom
        }

    )
    .where({
        u_id:req.u_id
    })
    .then(function(rows){
        return res.status(201).json({
            statusCode:201,
            errors:erreur,
            data:'utilisateur modifié'
        })
    })
    .catch(function(err){
        return res.status(401).json({
            statusCode:401,
            error:err,
            data:{}
        })
    })
}