const create=async(dataToCreate,modelName)=>{
try {
    // LOGGER
    console.log(" CREATING NEW ", modelName," FOR ",dataToCreate );

    // DATA TO SAVE IN MODEL
    const dataSaver=new modelName(dataToCreate);

    // SAVE DATA TO MODEL
    return await dataSaver.save().then((response)=>{
        console.log("USER CREATED ",response);
        return true;
    }).catch(error=>{
        console.log('AN SERVER ERROR OCCURED AS ',error);
        return false;
    })
} catch (error) {
    console.log('AN SERVER ERROR OCCURED AS ',error);
    return false;
}
}
module.exports=create