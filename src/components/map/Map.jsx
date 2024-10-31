import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Fix leaflet's default icon
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x.src,
  iconUrl: markerIcon.src,
  shadowUrl: markerShadow.src
});

const MyMap = () => {
  return (
    <MapContainer
      className="w-[100%] h-[340px]"
      center={[9.0765, 7.3986]}
      zoom={5}
      // style={{ height: '400px', width: '100%' }}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a to="https://www.openstreetmap.org/copyright"></a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={[9.0765, 7.3986]}>
        <Popup>
          Taking made in Nigeria products. <br /> the world.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MyMap;
