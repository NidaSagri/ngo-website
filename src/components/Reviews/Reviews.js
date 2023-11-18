import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Reviews.css';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [username, setUsername] = useState('');
  const [review, setReview] = useState('');

  useEffect(() => {
    axios.get('https://ngo-website-mu.vercel.app/api/reviews')
      .then((response) => setReviews(response.data))
      .catch((error) => console.error(error));
  }, []);

  const handleSubmit = () => {
    axios.post('https://ngo-website-mu.vercel.app/api/reviews', { username, review })
      .then((response) => setReviews([...reviews, response.data]))
      .catch((error) => console.error(error));

      if((!review)){
        alert("Please submit a Review");
      }
      else{
        alert("Review submitted successfully!");
      }

    // Clear Form
    setUsername('');
    setReview('');
  };

  return (
    <div className="App">
      <h1>Community Page</h1>

      <div className="form-container">
        <input
          type="text"
          placeholder="Your Name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <textarea
          placeholder="Write your review here..."
          value={review}
          onChange={(e) => setReview(e.target.value)}
        />
        <button className='reviewBtn' onClick={handleSubmit}>Submit Review</button>
      </div>
      <div className="reviews-container">
        {reviews.map((r) => (
          <div key={r._id} className="review">
            <strong>{r.username}</strong>
            <div>{r.review}</div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Reviews;
