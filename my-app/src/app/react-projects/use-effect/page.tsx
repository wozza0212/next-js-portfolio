"use client";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import Image from "next/image";

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
      {img ? (
        <div>
          <Image alt={"Digimin Pic"} src={img} width={400} height={500}></Image>
        </div>
      ) : (
        <div>
          <h2>Loading</h2>
        </div>
      )}
    </main>
  );
};

export default useEffectProject;
