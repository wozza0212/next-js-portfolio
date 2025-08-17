import { useState, useEffect } from "react";
import PICTURES from "../../../public/data/pictures";
import Image from "next/image";

const Gallery = () => {
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    setInterval(() => {
      setIndex((storedIndex) => {
        return (storedIndex + 1) % PICTURES.length;
      });
    }, 3000);
  }, []);

  console.log("index", index);

  return (
    <div>
      <h1>Gallery</h1>
      <p>{`${PICTURES[index].path}`}</p>
      <Image
        src={`/${PICTURES[index].path}`}
        height={400}
        width={400}
        alt="Gallery Pics"
      ></Image>
    </div>
  );
};

export default Gallery;
