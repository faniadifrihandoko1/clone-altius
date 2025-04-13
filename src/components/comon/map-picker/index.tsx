import { GoogleMap, MarkerF, useJsApiLoader } from "@react-google-maps/api";
import { useEffect, useState } from "react";

interface MapPickerProps {
  lat?: number;
  lng?: number;
  onChange: (lat: number, lng: number) => void;
  markerLabel?: string;
  clickable?: boolean;
  draggable?: boolean;
  zoom?: number;
  center?: {
    lat: number;
    lng: number;
  };
  mapContainerStyle?: React.CSSProperties;
  LoadingComponent?: React.ReactNode;
  enableAutoLocation?: boolean; // Tambahkan prop untuk mengaktifkan/menonaktifkan auto-location
}

const INDONESIA_CENTER = {
  lat: -2.548926,
  lng: 118.0148634,
};

const MapPicker = ({
  lat,
  lng,
  onChange,
  markerLabel = "Lokasi terpilih",
  clickable = true,
  draggable = true,
  zoom = 5,
  center,
  mapContainerStyle = {
    height: "400px",
    width: "100%",
  },
  LoadingComponent = <div>Memuat peta...</div>,
  enableAutoLocation = true, // Default true, bisa diubah dari parent component
}: MapPickerProps) => {
  const [currentPosition, setCurrentPosition] = useState({
    lat: lat || INDONESIA_CENTER.lat,
    lng: lng || INDONESIA_CENTER.lng,
  });

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBx8g6pjqhWmdrzityfcpuY-e0tZdhl1ls",
  });

  // Effect untuk mengambil lokasi pengguna secara otomatis
  useEffect(() => {
    if (enableAutoLocation && !lat && !lng) {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const newLat = position.coords.latitude;
            const newLng = position.coords.longitude;
            setCurrentPosition({ lat: newLat, lng: newLng });
            onChange(newLat, newLng); // Panggil onChange untuk update parent component
          }
          // (error) => {
          //   // Jika user menolak atau gagal, gunakan default Indonesia
          //   setCurrentPosition(INDONESIA_CENTER);
          //   onChange(INDONESIA_CENTER.lat, INDONESIA_CENTER.lng); // Panggil onChange untuk update parent component
          // }
        );
      } else {
        // Browser tidak support geolocation
        setCurrentPosition(INDONESIA_CENTER);
        onChange(INDONESIA_CENTER.lat, INDONESIA_CENTER.lng); // Panggil onChange untuk update parent component
      }
    }
  }, [enableAutoLocation, lat, lng]);

  // Effect untuk update currentPosition jika lat/lng berubah dari parent
  useEffect(() => {
    if (lat && lng) {
      setCurrentPosition({ lat, lng });
    }
  }, [lat, lng]);

  const handleMapClick = (e: google.maps.MapMouseEvent) => {
    if (clickable && e.latLng) {
      const newLat = e.latLng.lat();
      const newLng = e.latLng.lng();
      setCurrentPosition({ lat: newLat, lng: newLng });
      onChange(newLat, newLng);
    }
  };

  const handleMarkerDrag = (e: google.maps.MapMouseEvent) => {
    if (draggable && e.latLng) {
      const newLat = e.latLng.lat();
      const newLng = e.latLng.lng();
      setCurrentPosition({ lat: newLat, lng: newLng });
      onChange(newLat, newLng);
    }
  };

  if (!isLoaded) return <>{LoadingComponent}</>;

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      center={center || currentPosition}
      zoom={zoom}
      onClick={handleMapClick}
    >
      <MarkerF
        position={currentPosition}
        draggable={draggable}
        onDragEnd={handleMarkerDrag}
        label={markerLabel}
      />
    </GoogleMap>
  );
};

export default MapPicker;
