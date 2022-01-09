const read=async(modelName,idUnderModel)=>{
    try {
        // LOGGER
        console.log(" READING DOCUMENT ", idUnderModel," FROM ",modelName );

        // FINDING DATA FROM MODEL
        return await dataSaver.find({_id:idUnderModel}).then((response)=>{
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