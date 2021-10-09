const jwt = require('jsonwebtoken')
const user = require('../models/Usuario')
const aes = require('../helpers/aes.cipher')
const authService ={
    signToken: async function(id){
        return jwt.sign({id}, 'my App', {
            expiresIn: 60 * 60 * 24 * 365
        })
    },

    login: async function(data){
        try {
            const {nombreusuario, contraseña}= data;
            let pass = aes.encrypt(contraseña);
            let userExists = await user.findOne({
                   where:{
                    nombreusuario: nombreusuario,
                    contraseña: pass}
                
            });
            if(!userExists)
            {
                return{
                    code:400,
                    error: true,
                    msg: "Los datos de ingreso no son validos"

                }
            }
            const token = await this.signToken(userExists.id)
            return{
                user: userExists,
                code: 200,
                token
            }
        } catch (error) {
            return error
        }
    },

    register: async function(userData){
        try {
            let pass = aes.encrypt(userData.contraseña)
            console.log(userData.nombreusuario)
            userData.contraseña = pass
            await userData.save();
            let token = await this.signToken(userData._id)
            return {               
                user: userData,
                code: 200,
                token
            }
        } catch (error) {
            return error
        }
    }
}

module.exports= authService