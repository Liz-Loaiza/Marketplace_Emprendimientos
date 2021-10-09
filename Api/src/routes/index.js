const express = require('express');
const router =express.Router();
const usuario =require('../models/Usuario')
const authService =require('../services/auth.service')
const producto = require('../models/Producto')
const categoria= require('../models/Categorias')
//routes
router.get('/',async(req,res)=>{  
    res.send('Enviando datos get ...')  
});

router.post('/registro', async(req, res) => {
  
  try {
    const user = new usuario(req.body)
    console.log(user.nombreusuario)
    const userData = await authService.register(user)
   // res.status(200).json(userData)
    res.send(userData)
   
  } catch (error) {
  return res.status(500).json({
  mensaje: 'Ocurrio un error',
  error
  })
  }
  });

  router.post('/',async(req,res)=>{
    //  res.send(new Item(req.body));
    //const item=new Item(req.body);
    //await item.save();
    res.send('Enviando datos post ...');
  });  

  router.post('/producto', async(req, res) => {
    const body = req.body;
    try {
      console.log("hola")
    const productDB = await producto.create(body);
    res.status(200).json(productDB);
    } catch (error) {
    return res.status(500).json({
    mensaje: 'Ocurrio un error',
    error
    })
    }
    });
    
    router.get('/producto/:id', async(req, res)=>{

      const _id=req.params.id;
  
      try {
  
          const prodDB= await producto.findOne({_id});
          res.json(prodDB);
          
      } catch (error) {
  
          return res.status(500).json({
  
              mensaje:'Ocurrio un error',
              error
          })
          
      }  
  });
  
  //Get con todos los documentos
  
  router.get('/productos',async(req,res)=>{
  
      try {
  
          const prodDB=await producto.find();
          res.json(prodDB);
          
      } catch (error) {
  
          return res.status(500).json({
  
              mensaje:'Ocurrio un error',
              error
          })
      }    
  });
  router.get('/categorias',async(req,res)=>{
  
    try {

        const categoriaDB=await categoria.find();
        res.json(categoriaDB);
        
    } catch (error) {

        return res.status(500).json({

            mensaje:'Ocurrio un error',
            error
        })
    }    
});
 //Delete 

router.delete('/producto/:id', async(req,res)=>{
  const _id=req.params.id;

  try {

      const prodDB=await producto.findByIdAndDelete({_id});
      if(!prodDB){ 
          return res.status(400).json({ 
              mensaje: 'No se encontró el id indicado', error 
          }) 
      } 
      res.json(prodDB);
      
  } catch (error) {

      return res.status(500).json({

          mensaje:'Ocurrio un error',
          error
      })
      
  }
});

//Actualizar 

router.put('/producto/:id', async(req,res)=>{

  const _id=req.params.id;
  const body =req.body;

  try {

      const prodDB= await producto.findByIdAndUpdate(_id,body,{new:true});
      res.json(prodDB);      
  } catch (error) {

      return res.status(500).json({

          mensaje:'Ocurrio un error',
          error
      })
      
  }
})

//---------------auth routes
 router.post('/login', async (req,res)=>{
    try {
      const {nombreusuario, contraseña} = req.body
      if(!nombreusuario || !contraseña)
      {
        return res.status(400).json('usuario y password requeridos')
      }
      let token = await authService.login(req.body)
      if(token)
      {
        res.status(token.code).json(token)
      }
    } catch (error) {
      res.send(error)
    }
}),
/*router.post('/register', async (req,res)=>{
  try {
    const user = new User(req.body)
    const userData = await authService.register(user)
    res.send(userData)
  } catch (error) {
    res.send(error)
  }
}) */

module.exports = router
