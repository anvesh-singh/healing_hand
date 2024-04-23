const mongoose=require('mongoose');
const {Appointments}=require('./appointment')
mongoose.connect(process.env.BACKEND_URL);
const doctorSchema = new mongoose.Schema({
    FirstName: {
        type: String,
        required: true
    },
    LastName: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true,
        unique: true
    },
    Phone: {
        type: String,
        required: true
    },
    Password:{
        type: String,
        required: true,
    },
    address: {
        street: String,
        city: String,
        state: String,
        zip: String
    },
    appointments: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Appointment'
        }],
    rating:{
        reviews:[String],
        avgrating:Number,
        totalrating:Number
    }
});
 const Doctor = mongoose.model('Doctor', doctorSchema);
 module.exports={Doctor}
