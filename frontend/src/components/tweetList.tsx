interface Tweet {
    id: number;
    content: string;
    author: string;
    createdAt: string;
  }
  
  interface TweetListProps {
    tweets: Tweet[];
  }
  
  const TweetList: React.FC<TweetListProps> = ({ tweets }) => {
    return (
      <div className="space-y-4">
        {tweets.map((tweet) => (
          <div key={tweet.id} className="bg-white p-4 rounded-lg shadow">
            <p className="text-gray-800">{tweet.content}</p>
            <div className="mt-2 text-sm text-gray-500">
              <span>{tweet.author}</span>
              <span className="mx-1">·</span>
              <span>{new Date(tweet.createdAt).toLocaleString()}</span>
            </div>
          </div>
        ))}
      </div>
    )
  }
  
  export default TweetList
  
  