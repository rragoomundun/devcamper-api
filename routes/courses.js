const router = require('express').Router({ mergeParams: true });

// Bootcamps controller methods
const { getCourses } = require('../controllers/courses');

router.route('/').get(getCourses);

module.exports = router;
