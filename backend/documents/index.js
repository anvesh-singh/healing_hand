module.exports = ({
  patientname,
  doctorname,
  patientphone,
  doctorphone,
  ChiefComplaints,
  Diagnostics,
  MedicinesPrescribed,
  DoctorsAdvice,
}) => {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Medical Report</title>
    <style>
        /* Reset default margin and padding */
        body, h1, h2, p {
            margin: 0;
            padding: 0;
        }

        /* Global styles */
        body {
            font-family: Arial, sans-serif;
            font-size: 14px;
            color: #333;
            background-color: #f5f5f5;
        }

        .container {
            max-width: 800px;
            margin: 20px auto;
            padding: 20px;
            background-color: #fff;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        h1, h2 {
            color: #007bff; /* Blue color for headings */
        }

        p {
            margin-bottom: 10px;
        }

        /* Header styles */
        .header {
            text-align: center;
            margin-bottom: 30px;
        }

        .hospital-info, .doctor-info {
            float: left;
            width: 50%;
        }

        .hospital-info h1, .hospital-info p {
            color: #333;
        }

        .doctor-info h2, .doctor-info p {
            color: #333;
        }

        .hospital-logo {
            float: right;
            max-width: 150px;
            margin-top: 20px;
        }

        /* Section heading styles */
        .section-heading {
            background-color: #007bff;
            color: #fff;
            padding: 10px 20px;
            margin-bottom: 20px;
        }

        /* Appointment details styles */
        .appointment-details p {
            margin-bottom: 5px;
            color: #666;
        }

        /* Content section styles */
        .content-section {
            margin-bottom: 30px;
            padding: 20px;
            border: 1px solid #ddd;
            border-radius: 5px;
            background-color: #fff;
        }

        .content-section h2 {
            color: #007bff;
            margin-bottom: 15px;
        }

        .content-section p {
            margin-bottom: 10px;
            color: #333;
        }

        /* Signature styles */
        .signature {
            float: right;
            margin-top: 20px;
            text-align: right;
        }

        .signature p {
            margin-bottom: 0;
            color: #666;
        }
    </style>
</head>
<body>
    <div class="container">
        <!-- Header with hospital logo and doctor's name -->
        <div class="header">
            <div class="hospital-info">
                <h1>HEALING_HAND</h1>
                <p>Hospital Address</p>
                <p>Contact Information</p>
            </div>
            <div class="doctor-info">
                <h2>${doctorname}</h2>
                <p>Doctor Specialization</p>
                <p>${doctorphone}</p>
            </div>
            <img class="hospital-logo" src="hospital-logo.png" alt="Hospital Logo">
        </div>

        <!-- Appointment details section -->
        <div class="section-heading">Appointment Details</div>
        <div class="content-section">
            <p>Patient Name: ${patientname}</p>
            <p>Contact Information: ${patientphone}</p>
            <p>Appointment ID: 123456</p>
            <p>Date: January 1, 2023</p>
            <p>Time: 10:00 AM</p>
        </div>

        <!-- Chief Complaints section -->
        <div class="section-heading">Chief Complaints</div>
        <div class="content-section">
            <p>${ChiefComplaints}</p>
        </div>

        <!-- Diagnostics section -->
        <div class="section-heading">Diagnostics</div>
        <div class="content-section">
            <p>${Diagnostics}</p>
        </div>

        <!-- Medicines Prescribed section -->
        <div class="section-heading">Medicines Prescribed</div>
        <div class="content-section">
            <p>${MedicinesPrescribed}</p>
        </div>

        <!-- Doctor's Advice section -->
        <div class="section-heading">Doctor's Advice</div>
        <div class="content-section">
            <p>${DoctorsAdvice}</p>
        </div>

        <!-- Signature section -->
        <div class="signature">
            <p>${doctorname}</p>
            <p>${doctorphone}</p>
            <p>HEALING HAND</p>
        </div>
    </div>
</body>
</html>
`;
};
