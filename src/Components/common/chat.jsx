import React from 'react';
import { useNavigate } from 'react-router-dom';

const Chat = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 flex items-center justify-center px-4 py-20 sm:py-10">
      <div className="bg-[#111111] rounded-2xl shadow-lg max-w-md w-full overflow-hidden border border-yellow-400">
        <div className="bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-300 p-6 text-center">
          <h2 className="text-3xl font-bold text-black drop-shadow">💬 Chat Feature</h2>
          <p className="text-black text-sm mt-1 font-medium">Real-time messaging is on its way!</p>
        </div>

        <div className="p-6 text-white">
          <p className="mb-4 text-base">
            We're building an exciting <span className="text-yellow-400 font-semibold">chat experience</span> so you can:
          </p>

          <ul className="list-disc list-inside text-sm space-y-2 text-gray-300">
            <li>Connect instantly with matched club partners</li>
            <li>Share plans, interests & vibes in real time</li>
            <li>Get support from our AI-powered chatbot</li>
            <li>Enjoy a private, safe & verified conversation</li>
          </ul>

          <div className="bg-yellow-100 p-4 rounded-xl mt-6 text-center border border-yellow-300">
            <p className="text-yellow-800 font-semibold">🚧 Under Development</p>
            <p className="text-yellow-700 text-sm mt-1">Estimated Launch: Coming months. Stay connected!</p>
          </div>

          <p className="text-center text-xs text-gray-400 mt-6 italic">
            Sorry for the inconvenience. Your social experience is worth the wait! 💛
          </p>

          {/* Go Back Button */}
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => navigate(-1)}
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-6 rounded-full transition duration-300 shadow-md hover:shadow-lg"
            >
              ← Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
