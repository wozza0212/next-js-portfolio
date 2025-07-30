"use client";
import type { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";
import { ChangeEvent } from "react";
import styles from "./index.module.css";

interface User {
  query?: string;
}

const projectOne: NextPage = () => {
  const [userQuery, setUserQuery] = useState<User>({ query: "" });

  const updateUserQuery = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setUserQuery({ query: e.target.value });
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
            />
            <button>Search</button>
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
