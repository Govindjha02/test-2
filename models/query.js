const mongoose=require('mongoose')


const querySchema=mongoose.Schema({
    email:String,
    query:String,
    status:{type:String,default:'way to reply'}
})





module.exports=mongoose.model('query',querySchema)