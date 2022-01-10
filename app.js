// DOTENV CONFIGURATION
require('dotenv').config()

// LIBRARY
const mongoose=require('mongoose');

// USER MODULES AND MODELS
const sampleModel=require('./sampleMongooseModel')
const crud=require('./CRUD operations/crud');
const DB=process.env.DB

mongoose.connect(DB).then(()=>console.log("Connection Successful")).catch(()=>console.log("An error occured while connecting to database"))

const create=async(data,modelName,)=>{
    // VALIDATIONS OF DATA

    const isSaved=await crud.createOperation(data,modelName)
    console.log(isSaved)
}

const read=async(userId,modelName)=>{
    // VALIDATIONS OF DATA

    const isDataRecieved=await crud.readOperation(userId,modelName)
    console.log(isDataRecieved)
}

const update=async(data,modelName,userId)=>{
    // VALIDATIONS OF DATA
    
    const isDataUpdated=await crud.updateOperation(data,modelName,userId)
    console.log(isDataUpdated)
}

const deleteIt=async(userId,modelName)=>{
    // VALIDATIONS OF DATA

    const isDeleted=await crud.deleteOperation(userId,modelName)
    console.log(isDeleted)
}

// NOW JUST CALL FUCNTIONS IT'S EASY PISY

// TO SAVE DO THE FOLLOWING
// save({username:"Santosh",email:"s@gmail.com",password:"santosh123"},sampleModel)

// TO READ DATA DO THE FOLLOWING
// read('61dc2d104a49a954317ace61',sampleModel)

// TO UPDATE VALUE
// update({username:"Sann",email:"some@gmail.com"},sampleModel,'61dc2d104a49a954317ace61')

// TO DELETE VALUE
// deleteIt('61dc2d104a49a954317ace61',sampleModel)

