import { useEffect, useRef } from "react";
import { useGoogleMapsLoader } from "../hook/useGoogleMapsLoader";

function GoogleMapPicker({ mapAddress, onAddressChange }) {
  const mapRef = useRef(null);
  const isLoaded = useGoogleMapsLoader();

  useEffect(() => {
    if (!isLoaded || !mapRef.current) return;

    const map = new window.google.maps.Map(mapRef.current, {
      center: { lat: 13.736717, lng: 100.523186 },
      zoom: 13,
    });

    const marker = new window.google.maps.Marker({
      map,
      draggable: true,
    });

    const geocoder = new window.google.maps.Geocoder();

    map.addListener("click", (event) => {
      const { latLng } = event;
      marker.setPosition(latLng);

      geocoder.geocode({ location: latLng }, (results, status) => {
        if (status === "OK" && results[0]) {
          onAddressChange(results[0].formatted_address);
        }
      });
    });
  }, [isLoaded, onAddressChange]);

  return (
    <div className="container mx-auto px-4 pt-10">
      <h2 className="text-[36px] font-medium mb-3">แผนที่</h2>
      
      <input
        type="text"
        value={mapAddress || ""}
        readOnly
        placeholder="คลิกเลือกตำแหน่งในแผนที่"
        className="w-full text-sm border border-gray-300 rounded-md p-2 mb-4 bg-gray-50"
      />

      {!isLoaded ? (
        <div className="w-full h-64 rounded-xl border border-gray-200 flex items-center justify-center bg-gray-50">
          <p className="text-gray-500">กำลังโหลดแผนที่...</p>
        </div>
      ) : (
        <div
          ref={mapRef}
          className="w-full h-[345px] rounded-lg border-2 overflow-hidden"
        />
      )}
    </div>
  );
}

export default GoogleMapPicker;