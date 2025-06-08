import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [isPending, setIsPending] = useState(true);
  const [isThereError, setIsThereError] = useState(false);
  const [datas, setDatas] = useState([]);
  
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        setDatas(result);
        setInterval(() => {
          setIsPending(false);
        }, 500);
      })
      .catch((error) => {
        console.log("ERROR Fetching Data!");
        console.log("ERROR:");
        console.log(error);
        setInterval(() => {
          setIsPending(false);
        }, 500);
        setIsThereError(true);
      });

  }, [url]);
  
  return [isPending, isThereError, datas];
}

export default useFetch;
