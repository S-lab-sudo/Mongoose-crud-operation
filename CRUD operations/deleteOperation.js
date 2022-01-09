const deleteOperation=async(modelName,idUnderModel)=>{
    try {
        // LOGGER
        console.log(" DELETING ", idUnderModel," FROM ",modelName );

        // UPDATE EXISTING DATA OF MODEL MODEL
        return await dataSaver.deleteOne({_id:idUnderModel}).then((response)=>{
            console.log(" DELETED ",response);
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
    module.exports=deleteOperation