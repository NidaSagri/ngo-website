import React, { useState } from 'react';
import './FeedbackForm.css';

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState('');

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Feedback Submitted!");
    console.log('Feedback:', feedback);
    console.log('Rating:', rating);
  };

  return (
    <>
    <div className="feedbackform">
    <div className="feedback-form-container">
      <h2>Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="feedback">Feedback:</label>
          <textarea
            id="feedback"
            name="feedback"
            value={feedback}
            onChange={handleFeedbackChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="rating">Rating:</label>
          <select
            id="rating"
            name="rating"
            value={rating}
            onChange={handleRatingChange}
            required
          >
            <option value="">Select Rating</option>
            <option value="5">5 - Excellent</option>
            <option value="4">4 - Very Good</option>
            <option value="3">3 - Good</option>
            <option value="2">2 - Fair</option>
            <option value="1">1 - Poor</option>
          </select>
        </div>

        <button className="feedbackBtn" type="submit">Submit</button>
      </form>
    </div>
    </div>
    </>
  );
};

export default FeedbackForm;
