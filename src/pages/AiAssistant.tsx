// import React from 'react';

// export default function AiAssistant() {
//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold text-green-800 mb-4">AI Eco Assistant</h1>
//       <p className="text-gray-600">Coming soon...</p>
//     </div>
//   );
// }

import { useEffect } from "react";

function AiAssistant() {
  useEffect(() => {
    window.location.href = "https://buildify-sand.vercel.app/";
  }, []);

  return null; // You can add a loading spinner if needed
}

export default AiAssistant;
