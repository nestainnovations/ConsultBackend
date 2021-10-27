const express = require("express");
const router = express.Router();
const DoctorCtrl = require("../controllers/doctorController");

router.get("/getAllDoctors", DoctorCtrl.apiGetAllDoctors);
router.post("/createDoctor", DoctorCtrl.apiCreateDoctor);
router.post("/updateDoctor", DoctorCtrl.apiUpdateDoctor);
router.get("/getDoctorbyPhone", DoctorCtrl.apiGetDoctorByPhone);

module.exports = router;
