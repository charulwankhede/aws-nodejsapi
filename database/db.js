import mongoose from 'mongoose';




// Charul28

const dbConnection = async () => {
    const DB_URI ="mongodb+srv://charulwankhede:Charul28@job-portal.eozl3.mongodb.net/"
    try {
        await mongoose.connect(DB_URI, { useUnifiedTopology: true });
        console.log("Database connected successfully");
    } catch (error) {
        
        console.log('Error while connecting with the database ')
    }
}

export default dbConnection;