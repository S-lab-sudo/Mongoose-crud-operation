const createOperation=require('./createOperation')
const deleteOperation=require('./deleteOperation')
const updateOperation=require('./updateOperation')
const readOperation=require('./readOperation')

const crud={createOperation,deleteOperation,updateOperation,readOperation}

module.exports=crud