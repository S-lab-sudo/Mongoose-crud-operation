const mongoose=require('mongoose')
const sampleSchema=mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})
const sampleModel=mongoose.model('modelName',sampleSchema)
module.exports=sampleModel