"use client";
import { NextPage } from "next";
import { useEffect, useState } from "react";

interface Digimon {
  name?: string;
  img?: string;
  level?: string;
}

const data = await fetch("https://digimon-api.vercel.app/api/digimon/").then(
  (response) => response.json()
);
const randomNum = data.length;

const digiNumber = Math.floor(Math.random() * randomNum);

const endpoint: string = "https://digimon-api.vercel.app/api/digimon/";

const useEffectProject: NextPage = () => {
  const [digimon, setDigimon] = useState<Digimon>({});
  useEffect(() => {
    fetch(endpoint)
      .then((response) => response.json())
      .then((randomDigimon) => {
        console.log("digimon", randomDigimon[digiNumber]);
        setDigimon(randomDigimon[digiNumber]);
      });
  }, []);

  console.log(digimon);
  const { name, img, level } = digimon;

  return (
    <main>
      <h1>Digimon</h1>
      <h3>{name}</h3>
      <h3>{level}</h3>
      <h3>{img}</h3>
    </main>
  );
};

export default useEffectProject;
