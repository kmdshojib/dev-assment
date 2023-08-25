import React from "react";
import CovidMap from "../Components/CovidMap";
import { useApiQuery } from "../api/api";
import { CountryData, CovidData, HistoricalData } from "../types/types";
import LineGraph from "../Components/LineGarph";
import Spinner from "../Components/Spinner";
import { ResponsiveContainer } from "recharts";
import PieChartComponent from "../Components/PieGraph";

const CartsAndMaps: React.FC = () => {
  const {
    data: allCovid,
    error: allCovidError,
    isLoading: allCovidLoading,
  } = useApiQuery<CovidData, Error>("/all", "covidData");

  const {
    data: countries,
    error: countriesError,
    isLoading: countriesLoading,
  } = useApiQuery<CountryData[], Error>("/countries", "countries");

  const {
    data: historical,
    error: historicalError,
    isLoading: historicalLoading,
  } = useApiQuery<
    {
      cases: HistoricalData;
      deaths: HistoricalData;
      recovered: HistoricalData;
    },
    Error
  >("/historical/all?lastdays=all", "historical");

  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="mt-2 text-gray-700">
        Upon clicking on the marker you will find the popup.
      </h2>
      {countriesLoading ? (
        <Spinner />
      ) : (
        <CovidMap covidData={countries || []} />
      )}
      <h2 className="mt-2 text-gray-700">
        LineChart which shows total cases deaths and recovered
      </h2>
      {historical ? (
        <ResponsiveContainer className="flex justify-center items-center ml-2 mr-2">
          <LineGraph
            casesData={historical.cases}
            deathsData={historical.deaths}
            recoveredData={historical.recovered}
          />
        </ResponsiveContainer>
      ) : (
        <Spinner />
      )}
      {allCovid ? (
        <div className="ml-5">
          <PieChartComponent data={allCovid} />
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default CartsAndMaps;
