const task= require('../models/productmodel');
//posting a product
const CreateProduct = async(req,res) =>{
    try{
        const product= await task.create(req.body);
        res.status(200).json(product);
      }
      catch(error){
        res.status(500).json({message:error.message})
   
      }
}
const getProduct = async(req,res) =>{
    try{
        const product1=await task.find({});
        res.status(200).json(product1);
      }
      catch(error){
      res.status(500).json({message:error.message})
   
      }
}
//getting a single product
const getoneprdct= async(req,res)=>{
    try{
        const {id} = req.params;
        const product = await task.findById(id);//in the product swchema structure it search for the id
        res.status(200).json(product);
      }
      catch(error){
        res.status(500).json({message: error.message});
      }
}
//updating or changing a product
const updateproduct = async(req,res)=>{
    try{
        const {id} = req.params;
        const product = await task.findByIdAndUpdate(id, req.body);//first find the id in the correct position
        if(!product){
         return res.status(404).json({message: 'Product not found'});
        }
        const updatedProduct = await task.findById(id);
         res.status(200).json(updatedProduct);
       }
       catch(error){
         res.status(500).json({message: error.message});
       }
}
//deleting a product
const deleteproduct=async(req,res)=>{
    try{
        const {id} = req.params;
        const product = await task.findByIdAndDelete(id);
    
        if(!product){
          return res.status(404).json({message: 'Product not found'});
        }
        res.status(200).json({message: "Product Deleted Succesfully"})
      }
      catch(error){
        res.status(500).json({message: error.message});
      }
}
module.exports={
    CreateProduct,
    getProduct, 
    getoneprdct,
    updateproduct,
    deleteproduct
};