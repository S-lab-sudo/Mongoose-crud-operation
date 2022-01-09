const sampleModel=require('./sampleMongooseModel')
const crud=require('./CRUD operations/crud');
const save=async(username,email,password)=>{
    const data={username,email,password}
    const saveData=new sampleModel(data)
    const isSaved=await saveData.save()
    console.log(isSaved)
}
const read=async(id)=>{
    const data={_id:id}
    const dataFromDatabase=await sampleModel.find({_id:id}).then(response=>response).catch(err=>console.log(err))
    console.log(dataFromDatabase)
}
const update=async(id,objData)=>{
    const isUpdated=await sampleModel.updateOne({_id:id},{$set:objData}).then(response=>response).catch(err=>console.log(err))
    console.log(isUpdated)
}
const delet=async(id,objData)=>{
    const isDeleted=await sampleModel.deleteOne({_id:id}).then(response=>response).catch(err=>console.log(err))
    console.log(isDeleted)
}

// NOW JUST CALL FUCNTIONS IT'S EASY PISY