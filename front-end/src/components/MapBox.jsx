import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon, divIcon } from "leaflet";
import homeMarker from "../assets/images/homeMarker.png";
import MarkerClusterGroup from "react-leaflet-cluster";

const MapBox = ({ markers }) => {
  const customIcon = new Icon({
    iconUrl: homeMarker,
    iconSize: [45, 45],
  });

  const createCustomClusterIcon = (cluster) => {
    return new divIcon({
      html: `<div class="flex items-center justify-center rounded-full bg-[#405D72] text-white text-xl w-12 h-12">
               ${cluster.getChildCount()}
             </div>`,
      className: "custom-cluster-icon", // Use a custom class to ensure default Leaflet styles don't interfere
      iconSize: [40, 40], // Set icon size to match the custom HTML size
    });
  };

  return (
    <MapContainer
      center={[23.588, 58.3829]}
      zoom={10}
      className="h-full w-5/6 rounded-3xl shadow-2xl"
    >
      <TileLayer
        url="https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.{ext}"
        attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        ext="png"
        minZoom={0}
        maxZoom={20}
      />
      <MarkerClusterGroup
        chunkedLoading
        iconCreateFunction={createCustomClusterIcon}
      >
        {markers.map((marker, index) => (
          <Marker key={index} position={marker.coordinates} icon={customIcon}>
            <Popup>
              <div className="flex flex-col h-fit w-96 justify-center pl-3 p-">
                <img
                  src={marker.popUpImage}
                  alt="Map View"
                  className="h-36 w-72 object-cover rounded-md shadow-lg"
                />
                <h1 className="text-2xl text-black mt-5">
                  {marker.popUpTitle}
                </h1>
                <p className="text-base">{marker.popUpPrice} USD</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>
    </MapContainer>
  );
};

export default MapBox;
