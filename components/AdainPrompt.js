import { useState } from 'react';
import { FiSend } from 'react-icons/fi'; 



const AdainPrompt = () => {
  const [userInput, setUserInput] = useState('');
  const [response, setResponse] = useState('');

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/ask', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question: userInput }),
      });

      const data = await response.json();
      setResponse(data.response);
    } catch (error) {
      console.error('Error fetching AI response:', error);
    }
  };

  
    return (
      <div className="p-4 mx-8 bg-space1-4 rounded-xl shadow-md">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={userInput}
            onChange={handleInputChange}
            className="w-full p-2 rounded-xl text-xs border border-adainyellow focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Type us how we may improve on our products and win GIFTS..."
          />
          <button
            type="submit"
            className="mt-2 px-4 py-2 bg-blue-500 text-adainwhite rounded-md focus:outline-none hover:bg-blue-600 flex items-center"
          >
            <span className="mr-2">Send</span>
            <FiSend size={20} />
          </button>
        </form>
        {response && (
          <div className="mt-4">
            <p className="font-medium">AI Response:</p>
            <p className="mt-2 bg-adainyellow p-4 rounded-md shadow-md">{response}</p>
          </div>
        )}
      </div>
    );
  };
  
  export default AdainPrompt;
  