const update=async(objectDataToUpdate,modelName,idUnderModel)=>{
    try {
        // LOGGER
        console.log(" UPDATING ", idUnderModel," FROM ",modelName );

        // UPDATE EXISTING DATA OF MODEL MODEL
        return await modelName.updateOne({_id:idUnderModel},{$set:objectDataToUpdate}).then((response)=>{
            console.log(" UPDATED ",response);
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
    module.exports=update