const env = process.env.NODE_ENV || 'development';



module.exports = function(req, res) {

        membre1 = req.params.m1;
        membre2 = req.params.m2;
        membre1 = parseFloat(membre1);
        membre2 = parseFloat(membre2);
        result = membre1 / membre2;
     
        
        return res.status(201).json({
            statusCode:201,
            errors:[],
            data: result
          
        });

}