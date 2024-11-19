import React, { useState, useEffect } from "react";

function App() {
  const [dogImage, setDogImage] = useState(null); // State to hold the dog image URL
  const [isLoading, setIsLoading] = useState(true); // State to track loading

  useEffect(() => {
    // Fetch random dog image from API
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        setDogImage(data.message); // Set the image URL from API response
        setIsLoading(false); // Update loading state
      })
      .catch((error) => {
        console.error("Error fetching dog image:", error);
        setIsLoading(false); // Even on error, stop showing "Loading..."
      });
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p> // Show loading text while data is being fetched
      ) : (
        <img src={dogImage} alt="A Random Dog" /> // Display the fetched dog image
      )}
    </div>
  );
}

export default App;
