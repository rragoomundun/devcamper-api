const router = require('express').Router({ mergeParams: true });

// Courses controller methods
const { getReviews, getReview, addReview } = require('../controllers/reviews');

const Review = require('../models/Review');
const advancedResults = require('../middlewares/advancedResults');

const { protect, authorize } = require('../middlewares/auth');

router
  .route('/')
  .get(
    advancedResults(Review, {
      path: 'bootcamp',
      select: 'name description'
    }),
    getReviews
  )
  .post(protect, authorize('user', 'admin'), addReview);

router.route('/:id').get(getReview);

module.exports = router;