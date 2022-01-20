import { connect } from "mongoose";

export const startConection = async () => {
    try {
        const db = await connect('mongodb+srv://nugget:nugget123@cluster0.oduuk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
    console.log(db.connection.name)
    }
    catch(error) {
         console.log(error)
    }
    
}