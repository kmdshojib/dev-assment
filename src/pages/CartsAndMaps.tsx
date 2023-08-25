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

  console.log(countries);
  return (
    <div className="flex flex-col justify-center items-center">
      <CovidMap covidData={countries || []} />
      {/* <div>LineChart which shows total cases deaths and recovered</div> */}
      {historical ? (
        <ResponsiveContainer className="flex justify-center items-center">
          <LineGraph
            casesData={historical.cases}
            deathsData={historical.deaths}
            recoveredData={historical.recovered}
          />
        </ResponsiveContainer>
      ) : (
        <Spinner />
      )}
      {allCovid && <PieChartComponent data={allCovid} />}
    </div>
  );
};

export default CartsAndMaps;
