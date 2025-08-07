import { useEffect, useState } from "react";
import { DigiFetchObject, Digimon, RandomFetchObject } from "./types";

export const useRandomFetch = ({
  url,
  initialValue,
  listLength,
}: RandomFetchObject | DigiFetchObject) => {
  const [result, setResult] = useState<Digimon>(initialValue);
  const randomizer = Math.floor(Math.random() * listLength);
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((randomDigimon) => {
        setResult(randomDigimon[randomizer]);
      });
  }, []);
  return result;
};
