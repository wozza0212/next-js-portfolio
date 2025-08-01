import type { NextPage } from "next";
import Link from "next/link";

const Tutorial: NextPage = () => {
  return (
    <main>
      <div>
        <h2>React Hooks tutorials</h2>
        <Link href={"./react-projects/use-state"}>Project one</Link>
        <Link href={"./react-projects/use-effect"}>Project two</Link>
      </div>
    </main>
  );
};

export default Tutorial;
