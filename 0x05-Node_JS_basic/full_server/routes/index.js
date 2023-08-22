const { AppController } = require("../controllers/AppController");
const { StudentsController } = require("../controllers/StudentsController");

const router = require("express").Router();

router.get("/", AppController.getHomepage);
router.get("/students", StudentsController.getAllStudents);
router.get("/students/:major", StudentsController.getAllStudentsByMajor);

export default router;
