import { useEffect, useState } from 'react';

export function useGoogleMapsLoader() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (window.google) {
      setIsLoaded(true);
      return;
    }

    const script = document.createElement('script');
    const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
    
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
    script.async = true;
    script.defer = true;
    
    script.onload = () => {
      console.log('Google Maps loaded successfully');
      setIsLoaded(true);
    };
    
    script.onerror = () => {
      console.error('Failed to load Google Maps');
    };
    
    document.head.appendChild(script);
  }, []);

  return isLoaded;
}