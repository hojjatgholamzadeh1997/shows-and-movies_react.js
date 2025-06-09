import { useEffect, useState } from "react";

const useFetchForAllDatas = (url) => {
  const [isPending, setIsPending] = useState(true);
  const [isThereError, setIsThereError] = useState(false);
  const [datas, setDatas] = useState([]);
  
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        setDatas(result);
        setIsPending(false);
      })
      .catch((error) => {
        console.log("ERROR Fetching Data!");
        console.log("ERROR:");
        console.log(error);
        setIsPending(false);
        setIsThereError(true);
      });

  }, [url]);
  
  return [isPending, isThereError, datas];
}

export default useFetchForAllDatas;
