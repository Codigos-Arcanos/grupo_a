const database = require('../database/connection')
const jwt = require('jsonwebtoken');
require("dotenv-safe").config();

class AuthController {

    login(request, response){
        const { user, pass} = request.body
        
        if(user == 'icaro' && pass == '123!'){
            const id = 1
            
            const token = jwt.sign({ id }, process.env.SECRET, {
                expiresIn: 300 // expires in 5min
            });
           
            return response.json({ auth: true, token: token });
        }
    }

    logout(request, response){
        response.json({ auth: false, token: null });
    }

    verifyJWT(request, response, next){
        
        const token = request.headers['x-access-token'];
        
        if (!token){
         return response.json({ auth: false, message: 'No token provided.' });
        }
        
        jwt.verify(token, process.env.SECRET, function(err, decoded) {
            
          if (err){
            return response.json({ auth: false, message: 'Failed to authenticate token.' });
          } 
          request.userId = decoded.id;
            next()
        });
    }
    
}

module.exports = new AuthController()