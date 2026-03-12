"use client";
import { useEffect, useState } from "react";
// 1. CSS imports are safe at the top
import "leaflet/dist/leaflet.css";
import userMarker from "~/_images/logo_left.png";

const MapLibreView = () => {
  const [mapLib, setMapLib] = useState<any>(null);

  useEffect(() => {
    // 2. We import EVERYTHING inside useEffect so the server never sees it
    const loadMap = async () => {
      const L = await import("leaflet");
      const ReactLeaflet = await import("react-leaflet");
      
      setMapLib({
        L,
        ...ReactLeaflet
      });
    };

    loadMap();
  }, []);

  // 3. Show a placeholder while the browser loads the libraries
  if (!mapLib) {
    return <div className="h-full w-full bg-[#f2ebd8] animate-pulse rounded-md" />;
  }

  // Destructure the components from our state
  const { L, MapContainer, TileLayer, Marker, Popup } = mapLib;

  const customIcon = L.icon({
    iconUrl: userMarker.src,
    iconSize: [80, 80],
    iconAnchor: [40, 80],
    popupAnchor: [0, -70],
  });

  return (
    <MapContainer
      center={[12.900733, 74.845644]}
      zoom={16}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://api.maptiler.com/maps/openstreetmap/{z}/{x}/{y}.jpg?key=cwnkSwLaOP2NIDCL3che"
      />
      
      <Marker position={[12.900733, 74.845644]} icon={customIcon}>
        <Popup closeButton={false}>
          <div className="fontOutfit text-black text-sm font-medium">
            Hidden Leaf Cafe
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapLibreView;