import { useApiQuery } from "../api/api";

const CartsAndMaps: React.FC = () => {
  const {
    data: allCovid,
    error,
    isLoading,
  } = useApiQuery<{ message: string }, Error>("/covid-19/all", "covidData");
  console.log({ allCovid });
  return (
    <div className="flex justify-center items-center">
      <div>Hello</div>
    </div>
  );
};

export default CartsAndMaps;
