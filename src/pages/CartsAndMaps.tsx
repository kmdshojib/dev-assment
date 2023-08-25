import React from "react";
// import CovidMap from "../Components/CovidMap";
import { useApiQuery } from "../api/api";
import { CountryData, CovidData, HistoricalData } from "../types/types";
import LineGraph from "../Components/LineGarph";
import Spinner from "../Components/Spinner";

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
  } = useApiQuery<{ message: string; CountryData: CountryData[] }, Error>(
    "/countries",
    "countries"
  );

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

  console.log(allCovid);
  return (
    <div className="flex justify-center items-center">
      {/* <CovidMap covidData={countries?.CountryData || []} /> */}
      {historical ? (
        <LineGraph
          casesData={historical.cases}
          deathsData={historical.deaths}
          recoveredData={historical.recovered}
        />
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default CartsAndMaps;
