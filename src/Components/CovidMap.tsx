import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngTuple } from "leaflet";
import { CountryData } from "../types/types";

interface CovidMapProps {
  covidData: CountryData[];
}

const CovidMap: React.FC<CovidMapProps> = ({ covidData }) => {
  const [selectedCountry, setSelectedCountry] = useState<CountryData | null>(
    null
  );

  const url: string = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";

  return (
    <MapContainer
      center={[20, 0]}
      zoom={4}
      scrollWheelZoom={false}
      className="h-[35vh] rounded-xl "
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url={url}
      />

      {covidData.map((countryData, index) => (
        <Marker
          key={index + 1}
          position={
            [
              countryData.countryInfo.lat,
              countryData.countryInfo.long,
            ] as LatLngTuple
          }
          eventHandlers={{
            mouseover: () => setSelectedCountry(countryData),
            mouseout: () => setSelectedCountry(null),
          }}
        >
          {selectedCountry === countryData && (
            <Popup>
              <div>
                <h2>{countryData.country}</h2>
                <p>Cases: {countryData.cases}</p>
                <p>Deaths: {countryData.deaths}</p>
                <p>Recovered: {countryData.recovered}</p>
                <p>Total Number of ACtive: {countryData.active}</p>
              </div>
            </Popup>
          )}
        </Marker>
      ))}
    </MapContainer>
  );
};

export default CovidMap;
