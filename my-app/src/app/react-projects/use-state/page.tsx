"use client";
import type { NextPage } from "next";
import Link from "next/link";
import { KeyboardEvent, useState } from "react";
import { ChangeEvent } from "react";
import styles from "./index.module.css";

const endpoint:string = 'https://digimon-api.vercel.app/api/digimon/name/:name'

interface User {
  query?: string;
}

const projectOne: NextPage = () => {
  const [userQuery, setUserQuery] = useState<User>({ query: "" });

  const searchQuery = () => {
    window.open(`https://google.com/search?q=${userQuery.query}`, "_blank");
  };

  const updateUserQuery = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setUserQuery({ query: e.target.value });
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      searchQuery();
    }
  };
  return (
    <main>
      <div>
        <div>
          <h1>Hello Thomas</h1>
          <div className={styles.form}>
            <input
              className={styles.input}
              value={userQuery.query}
              onChange={updateUserQuery}
              onKeyDown={handleKeyPress}
            />
            <button onClick={searchQuery}>Search</button>
          </div>
        </div>
        <div>
          <h2>React Hooks tutorials</h2>
          <Link href={"./react-projects"}></Link>
        </div>
      </div>
    </main>
  );
};

export default projectOne;
