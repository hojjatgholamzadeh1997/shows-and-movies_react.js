import { useEffect, useState } from "react";

const useFetchForSingularData = (url, name) => {
  const [isPending, setIsPending] = useState(true);
  const [isThereError, setIsThereError] = useState(false);
  const [data, setData] = useState([]);
  
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        setData(result.find((value) => value.name === name));
        setIsPending(false);
      })
      .catch((error) => {
        console.log("ERROR Fetching Data!");
        console.log("ERROR:");
        console.log(error);
        setIsPending(false);
        setIsThereError(true);
      });

  }, [url, name]);
  
  return [isPending, isThereError, data];
}

export default useFetchForSingularData;
