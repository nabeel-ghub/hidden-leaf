// src/components/MapLibreView.tsx
"use client";
import { useEffect } from "react";
import { MapContainer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "maplibre-gl/dist/maplibre-gl.css";
import L from "leaflet";
import "@maplibre/maplibre-gl-leaflet"; 
import userMarker from '~/_images/logo_left.png';

const MapLibreTileLayer = () => {
  const map = useMap();

  useEffect(() => {
    const layer = L.maplibreGL({
    style: "https://api.maptiler.com/maps/openstreetmap/style.json?key=cwnkSwLaOP2NIDCL3che",
    });
    layer.addTo(map);
    map.attributionControl.addAttribution(" ");
    return () => {
      map.removeLayer(layer);
    };
  }, [map]);

  return null;
};

const MapLibreView = () => {
    const customIcon = L.icon({
        iconUrl: userMarker.src,
        iconSize: [100, 100],
        iconAnchor: [40, 22.5],
        popupAnchor: [0, 0],
    })

  return (
    <>
    <MapContainer
      center={[12.900733, 74.845644]}
      zoom={16}
      style={{ height: "100%", width: "100%" }}
    >
     <MapLibreTileLayer/>
        <Marker position={[12.900733, 74.845644]}
                icon={customIcon} 
                draggable={false}
                >
          <Popup closeButton={false} autoClose={false} closeOnClick={false}>
            <div style={{
                color: "black",
                padding: "0",
                fontFamily: "var(--font-outfit)",
                fontSize: "14px",
                fontWeight: "500",
                maxWidth: 200,
                maxHeight: 100,
            }}>Hidden Leaf Cafe</div>
          </Popup>
        </Marker>
    </MapContainer>
    </>
  );
};

export default MapLibreView;