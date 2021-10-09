const mongoose =require('mongoose');
const Schema = mongoose.Schema;
const productoSchema = new Schema({
nombre_producto: {type: String},    
descripcion_producto: {type: String},    
precio: {type: Number},
id_categoria: {type: mongoose.ObjectId}
},
{collection : 'Producto'}
);

module.exports= mongoose.model('producto', productoSchema);
//export default usuario;