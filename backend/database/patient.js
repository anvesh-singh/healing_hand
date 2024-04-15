const mongoose=require('mongoose');
// mongoose.connect("mongodb+srv://anveshsingh444:Anveshsingh01@cluster0.9hupwlq.mongodb.net/HEALING_HAND");
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
        type: Number,
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
        }]
});
 const Patient = mongoose.model('Patient', patientSchema);
 module.exports={Patient};
