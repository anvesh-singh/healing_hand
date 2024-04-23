const mongoose=require('mongoose');
mongoose.connect(process.env.BACKEND_URL);
const patientSchema = new mongoose.Schema({
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
    Password: {
        type: String,
        required: true
    },
    address: {
        street: String,
        city: String,
        state: String,
        zip: String
    },
    medicalHistory: [{
            condition: String,
            diagnosisDate: Date,
            treatment: String
        }],
    appointments: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Appointment'
        }],
    report:[String]
});
 const Patient = mongoose.model('Patient', patientSchema);
 module.exports={Patient};
