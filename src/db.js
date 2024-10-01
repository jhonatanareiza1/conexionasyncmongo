import mongoose from 'mongoose';

export const connectdb = async ()=>{
try{
    await mongoose.connect('mongodb://localhost:27017');
    console.log(">>>estamos conectados a la base de datos");
} catch(err){
    console.error("ni mierda con esta base de datos", err);
}

    
}