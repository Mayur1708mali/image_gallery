'use client';

import { useState, useEffect } from 'react';
import ImageCard from './components/ImageCard';
import ImageSearch from './components/ImageSearch';

export default function Home() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('Rose');
  const APIKEY = process.env.NEXT_PUBLIC_PIXABAY_API;

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${APIKEY}&q=${term}&image_type=photo`)
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [APIKEY, term]);

  return (
    <>
      <div className='container mx-auto'>
        <ImageSearch searchImage={(text: string): void => setTerm(text)} />

        {isLoading && images.length === 0 ? (
          <h1 className='text-6xl text-center mx-auto mt-32'>
            NO IMAGES FOUND
          </h1>
        ) : null}

        <div className='grid grid-cols-4 gap-4'>
          {images.map((image) => (
            <ImageCard key={image['id']} image={image} />
          ))}
        </div>
      </div>
    </>
  );
}
