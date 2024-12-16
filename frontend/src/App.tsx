import { useState, useEffect } from 'react'
import TweetForm from './components/tweetForm';
import TweetList from './components/tweetList';


interface Tweet {
  id: number;
  content: string;
  author: string;
  createdAt: string;
}

function App() {
  const [tweets, setTweets] = useState<Tweet[]>([])

  useEffect(() => {
    fetchTweets()
  }, [])

  const fetchTweets = async () => {
    const response = await fetch('http://localhost:3000/')
    const data = await response.json()
    setTweets(data)
  }

  const addTweet = async (content: string) => {
    const response = await fetch('http://localhost:3000/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ content, author: 'zak' }),
    })
    const newTweet = await response.json()
    setTweets([newTweet, ...tweets])
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Twitter Clone</h1>
      <TweetForm onSubmit={addTweet} />
      <TweetList tweets={tweets} />
    </div>
  )
}

export default App

