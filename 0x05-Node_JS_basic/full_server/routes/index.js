import StudentsController from '../controllers/StudentsController';
import AppController from '../controllers/AppController';

const router = require('express').Router();

router.get('/', AppController.getHomepage);
router.get('/students', StudentsController.getAllStudents);
router.get('/students/:major', StudentsController.getAllStudentsByMajor);

export default router;
