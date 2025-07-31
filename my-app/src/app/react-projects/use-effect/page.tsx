"use client";
import { NextPage } from "next";
import { useEffect, useState } from "react";

const endpoint: string =
  "https://digimon-api.vercel.app/api/digimon/name/agumon";

const useEffectProject: NextPage = () => {
  useEffect(() => {
    fetch("https://digimon-api.vercel.app/api/digimon/name/agumon")
      .then((response) => response.json())
      .then((json) => console.log("digimon", json));
  });
  return (
    <main>
      <h1>Digimon</h1>
    </main>
  );
};

export default useEffectProject;
