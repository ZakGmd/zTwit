import { useState } from 'react'

interface TweetFormProps {
  onSubmit: (content: string) => void;
}

const TweetForm: React.FC<TweetFormProps> = ({ onSubmit }) => {
  const [content, setContent] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (content.trim()) {
      onSubmit(content)
      setContent('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <textarea
        className="w-full p-2 border border-gray-300 rounded-lg resize-none"
        rows={3}
        placeholder="What's happening?"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button
        type="submit"
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Tweet
      </button>
    </form>
  )
}

export default TweetForm

