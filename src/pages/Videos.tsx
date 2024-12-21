import React, { useEffect } from 'react';

export default function Videos() {
  useEffect(() => {
    // Directly redirect to the homepage
    window.location.href = "https://video-functionality.vercel.app/";
  }, []); // Empty dependency array to ensure this runs only once, on mount

  return null; // No UI needed, the user is redirected immediately
}
