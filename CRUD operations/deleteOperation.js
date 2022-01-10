const deleteOperation=async(idOfModel,modelName)=>{
    try {
        // LOGGER
        console.log(" DELETING ", idOfModel," FROM ",modelName );

        // UPDATE EXISTING DATA OF MODEL MODEL
        return await modelName.deleteOne({_id:idOfModel}).then((response)=>{
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