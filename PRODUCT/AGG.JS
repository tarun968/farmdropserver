const ProductModel = require('./productsDB')
 
exports.FindAll = async (req,res) =>{
    const {pageNo} = req.query;
    const data = await ProductModel.find({}).limit(3*1).skip((parseInt(pageNo) - 1)*3)
    if(!data){
        return res.json({error:'Error in the database'})
    }
    console.log(data)
    return res.json({message:data})
}
exports.FindAllProducts = async (req,res) =>{
    const {pageNo} = req.query;
    const data = await ProductModel.find({})
    if(!data){
        return res.json({error:'Error in the database'})
    }
    console.log(data,pageNo)
    return res.json({message:data})
}
exports.FindbyName = async (req,res) =>{
    const query = req.query.Name
    const data = await ProductModel.find({})
    var array = [];
    data.forEach(element => {
        if (element.NameofProduct.toLowerCase().includes(query)){
            array.push(element)
        }
    });
    return res.json({message:array})
}
exports.FindbyID = async (req,res) =>{
    const query = req.query.ID
    const data = await ProductModel.find({})
    var array = [];
    data.forEach(element => {
        if (element._id.toString().toLowerCase().includes(query)){
            array.push(element)
        }
    });
    return res.json({message:array})
}
exports.FindbyAdder = async (req,res) =>{
    const query = req.query.Adder
    const data = await ProductModel.find({})
    var array = [];
    data.forEach(element => {
        if (element.AddedBy.toLowerCase().includes(query)){
            array.push(element)
        }
    });
    return res.json({message:array})
}
exports.FindbyRating = async (req,res) =>{
    const query = req.query.Rating
    console.log('Query',query)
    const data = await ProductModel.find({})
    var array = [];
    data.forEach(element => {
        if (element.Rating >= query){
            array.push(element)
        }
    });
    return res.json({message:array})
}