"use client";
import { NextPage } from "next";
import { useRandomFetch } from "../helpers/helpers";
import { DigiFetchObject } from "../helpers/types";
import Image from "next/image";

const data = await fetch("https://digimon-api.vercel.app/api/digimon/").then(
  (response) => response.json()
);
const digiListLength = data.length;

const endpoint: string = "https://digimon-api.vercel.app/api/digimon/";

const useEffectProject: NextPage = () => {
  const digiFetchValues = {
    url: endpoint,
    listLength: digiListLength,
    initialValue: {},
  } as DigiFetchObject;
  const digimon = useRandomFetch(digiFetchValues);

  const { name, img, level } = digimon;

  return (
    <main>
      <h1>Digimon</h1>
      <h3>{name}</h3>
      <h3>{level}</h3>
      {img ? (
        <div>
          <Image
            priority
            alt={"Digimin Pic"}
            src={img}
            width={400}
            height={500}
          ></Image>
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
