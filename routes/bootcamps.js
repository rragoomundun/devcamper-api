const router = require('express').Router();

// Bootcamps controller methods
const {
  getBootcamps,
  getBootcamp,
  getBootcampsInRadius,
  createBootcamp,
  updateBootcamp,
  deleteBootcamp,
  bootcampPhotoUpload
} = require('../controllers/bootcamps');

// Include other ressource routers
const courseRouter = require('./courses');

// Re-route into other resource routers
router.use('/:bootcampId/courses', courseRouter);

router.route('/radius/:zipcode/:distance').get(getBootcampsInRadius);

router.route('/:id/photo').put(bootcampPhotoUpload);

router
  .route('/')
  .get(getBootcamps)
  .post(createBootcamp);

router
  .route('/:id')
  .get(getBootcamp)
  .put(updateBootcamp)
  .delete(deleteBootcamp);

module.exports = router;
