const zod = require("zod");

const patientVerify = zod.object({
    username : zod.string(),
    password : zod.string()
})

const doctorVerify = zod.object({
    username : zod.string(),
    password : zod.string()
})

module.exports = {
    patientVerify,
    doctorVerify
}