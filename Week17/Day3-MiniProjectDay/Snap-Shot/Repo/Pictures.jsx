import React, { useState, useEffect } from 'react';
import '../Pictures.css';
import PicturesControls from './PicturesControls';

export default function Pictures({ query, collectionName }) {
  // Pexels API key
  const API_KEY = 'qw6HvDYxnr5oO6duTLuT3iKm0Q5QIFrjvbSBtUP0haNX0NNEg5pAbZv2';
  const [images, setImages] = useState([]);
  const [ page, setPage ] = useState(1);
  const [ perPage, setPerPage ] = useState(20);
 
  // Fetch images from Pexels API when the component mounts
  useEffect(() => {
    const fetchPictures = async () => {
      try {
        const response = await fetch(
          `https://api.pexels.com/v1/search?query=${query}&per_page=${perPage}&page=${page}`,
          {
            headers: {
              Authorization: API_KEY,
            },
          }
        );

        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`API error: ${response.status} - ${errorText}`);
        }

        const data = await response.json();
        setImages(data.photos);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchPictures();
  }, [query,  page, perPage]);

  return (
    <>
      {/* Header section with collection name */}
      <div className='headerPicture'>
        <h1>{collectionName.charAt(0).toUpperCase() + collectionName.slice(1)}</h1>
      </div>

      {/* Image gallery */}
      <div className='picBox'>
        {images && images.length > 0 ? (
          images.map((image) => (
            <img
              key={image.id}
              src={image.src.medium}
              alt={`Image by ${image.photographer}`}
            />
          ))
        ) : (
          <p>Loading images...</p>
        )}
      </div>
      <PicturesControls 
      page={page}
      setPage={setPage}
      perPage={perPage}
      setPerPage={setPerPage}
      />
    </>
  );
}