import axios from "axios";

const URL = "https://akabab.github.io/superhero-api/api/all.json";

export const fetchNames = async (query) => {
  const { data } = await axios.get(URL, {
    params: {
      q: query,
    //   name: "name",
    //   id:'id'
    
    },
  });

  return data;
};