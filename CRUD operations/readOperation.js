const read=async(idOfModel,modelName)=>{
    try {
        // LOGGER
        console.log(" READING DOCUMENT ", idOfModel," FROM ",modelName );

        // FINDING DATA FROM MODEL
        return await modelName.find({_id:idOfModel}).then((response)=>{
            console.log(" DATA FROM READING RESPONSE WAS ",response);
            return response;
        }).catch(error=>{
            console.log('AN SERVER ERROR OCCURED AS ',error);
            return false;
        })
    } catch (error) {
        console.log('AN SERVER ERROR OCCURED AS ',error);
        return false;
    }
    }
    module.exports=read