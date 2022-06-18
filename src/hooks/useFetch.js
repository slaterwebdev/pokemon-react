import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [error, setError] = useState(null);
  const [data , setData] = useState(null);

  useEffect(() =>{
    fetch(url)
    .then(response => {
      if(response.status !== 200) {
        throw Error('Error retrieving data from within the server')
      }
      return response.json()
    })
    .then(data => {
      setError(null);
      setData(data);
    })
    .catch(err => {
      setError(err.message); 
    })
  },[url]) 

  return {data, setData};
}
 
export default useFetch;