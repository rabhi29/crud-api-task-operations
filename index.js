const express = require('express'); //library intall panirukom
const mongoose=require('mongoose');
const dotenv=require('dotenv');

const app = express();//app nu oru object create panirukom ithula thaan routes, middleware ellam call panuvom
dotenv.config();

const routerproduct = require('./routes/product.route');
const product = require('./models/productmodel');//imprting the schema file in index.js


app.use(express.json());//to covert all the req into json
app.use('/api/products',routerproduct);
app.listen(3000);// express "app" irukula athu listen panitey irukum antha portal aa(3000)
mongoose.connect(process.env.MANGODB_STRING)
   .then(() => console.log('Connected!'));


//app.get('/testApi', (req, res) => { //route handler sends the get req to the url"/" "
 //  res.send('Hello World') //ithula antha arrow function vanthu callback function maari act aagum
 //})
 //app.post('/api/products',async(req,res)=>{
  //  try{
  //    const product= await Product.create(req.body);
  //    res.status(200).json(product);
  //  }
  //  catch(error){
  //    res.status(500).json({message:error.message})

  //  }
 //})
//  app.get('/api/products',async(req,res)=>{
//    try{
//      const product1=await Product.find({});
//      res.status(200).json(product1);
//    }
//    catch(error){
//    res.status(500).json({message:error.message})

//    }
// })
//to get asingle id
// app.get('/api/products/:id', async (req, res) => {
//   try{
//     const {id} = req.params;
//     const product = await Product.findById(id);//in the product swchema structure it search for the id
//     res.status(200).json(product);
//   }
//   catch(error){
//     res.status(500).json({message: error.message});
//   }
// })
// //Update a product
// app.put('/api/products/:id', async (req, res) => {
//    try{
//     const {id} = req.params;
//     const product = await Product.findByIdAndUpdate(id, req.body);//first find the id in the correct position
//     if(!product){
//      return res.status(404).json({message: 'Product not found'});
//     }
//     const updatedProduct = await Product.findById(id);
//      res.status(200).json(updatedProduct);
//    }
//    catch(error){
//      res.status(500).json({message: error.message});
//    }
//  })

//  // Delete a product
// app.delete('/api/products/:id', async (req, res) => {
//   try{
//     const {id} = req.params;
//     const product = await Product.findByIdAndDelete(id);

//     if(!product){
//       return res.status(404).json({message: 'Product not found'});
//     }
//     res.status(200).json({message: "Product Deleted Succesfully"})
//   }
//   catch(error){
//     res.status(500).json({message: error.message});
//   }
// })

