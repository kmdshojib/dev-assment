import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngTuple } from "leaflet";
import { CountryData } from "../types/types";



interface CovidMapProps {
  covidData: CountryData[];
}

const CovidMap: React.FC<CovidMapProps> = ({ covidData }) => {
    const url: string = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
  return (
    <MapContainer
      center={[20, 0]}
      zoom={2}
      scrollWheelZoom={false}
      className="h-[35vh] rounded-xl"
    >
      <TileLayer
       attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
       url={url}
      />

      {covidData.map((countryData) => (
        <Marker
          key={countryData.countryInfo._id}
          position={
            [
              countryData.countryInfo.lat,
              countryData.countryInfo.long,
            ] as LatLngTuple
          }
        >
          <Popup>
            <div>
              <h2>{countryData.country}</h2>
              <p>Cases: {countryData.cases}</p>
              <p>Deaths: {countryData.deaths}</p>
              <p>Recovered: {countryData.recovered}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default CovidMap;
