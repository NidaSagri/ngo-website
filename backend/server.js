const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/communityDB');

const communitySchema = new mongoose.Schema({
  username: {
    type: String,
    default: 'userunknown'
  },
  review: {
    type: String,
    required:true
  },
});

const CommunityModel = mongoose.model('Community', communitySchema);

// API Endpoint for Getting Reviews
app.get('/api/reviews', async (req, res) => {
  try {
    const reviews = await CommunityModel.find();
    res.json(reviews);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// API Endpoint for Posting Reviews
app.post('/api/reviews', async (req, res) => {
  const { username, review } = req.body;

  try {
    const newReview = new CommunityModel({ username, review });
    await newReview.save();
    res.json(newReview);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
