const express = require("express");
const cors = require("cors");
const path = require("path");
require("./Connection/Connection");
const patientApi = require("./Routes/Patients");
const doctorApi = require("./Routes/Doctors");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/patient", patientApi);
app.use("/api/doctor", doctorApi);   

// if (process.env.NODE_ENV !== 'production') {
//     app.use(express.static(path.resolve(__dirname, "Front-End", "dist")));
    
//     app.get('/', (req, res) => {
//         res.sendFile(path.resolve(__dirname, "Front-End", "dist", "index.html"));
//     });
// }

app.get('/', (req, res) => {
    res.json("hello from backend")
})

if (process.env.NODE_ENV !== 'production') {
    const port = 8080;
    app.listen(port, () => {
        console.log(`listening to the port ${port}`);
    });
}

module.exports = app;