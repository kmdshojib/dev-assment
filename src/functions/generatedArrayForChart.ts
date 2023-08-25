import axios from "axios";

const dataArray: any = [];

const fetchData = async () => {
  try {
    const res = await axios.get("https://disease.sh/v3/covid-19/all");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

(async () => {
  const data = await fetchData();
  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      let label = key.charAt(0).toUpperCase() + key.slice(1);
      label = label.replace(/([A-Z])/g, " $1");
      const value = typeof data[key] === "number" ? data[key] : data[key];
    
      dataArray.push({ name: label, value });
    }
  }

})();

export default dataArray;
