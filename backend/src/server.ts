import express from 'express';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

let tweets = [
  { id: 1, content: "sahra!", author: "zak", createdAt: new Date() }
];

app.get('/', (req, res) => {
  res.json(tweets);
});
app.post('/', (req, res) => {
  const { content, author } = req.body;
  console.log(req.body)
  const newTweet = {
    id: tweets.length + 1,
    content,
    author,
    createdAt: new Date()
  };
  tweets.unshift(newTweet);
  res.status(201).json(newTweet);
 
});
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});