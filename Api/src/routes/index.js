const express = require('express');
const router =express.Router();
const usuario =require('../models/Usuario')


//routes
router.get('/',async(req,res)=>{
   // const items =await Item.find();
    res.send('Enviando datos get ...')
  //  res.send(items);
});
router.post('/registro', async(req, res) => {
  const body = req.body;
  try {
  const userDB = await usuario.create(body);
  res.status(200).json(userDB);
  } catch (error) {
  return res.status(500).json({
  mensaje: 'Ocurrio un error',
  error
  })
  }
  });
router.post('/',async(req,res)=>{
  res.send('enviando post')
  //  res.send(new Item(req.body));
  //const item=new Item(req.body);
  //await item.save();
 // res.send(item);
});

router.get('/:id',async(req,res)=>{    
    //res.send('Enviando datos get ...')
    //const item = await Item.findById(req.params.id);
   // res.send(item);
});

//---------------auth routes
/* router.post('/login', async (req,res)=>{
    try {
      const {email, password} = req.body
      if(!email || !password)
      {
        return res.status(400).json('Contraseña y password requeridos')
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
router.post('/register', async (req,res)=>{
  try {
    const user = new User(req.body)
    const userData = await authService.register(user)
    res.send(userData)
  } catch (error) {
    res.send(error)
  }
}) */

module.exports = router
