import { useState, useEffect } from "react";
import PICTURES from "../../../public/data/pictures";
import Image from "next/image";
import thing from "../../../public/assets/pictures/bridge.jpeg"

const Gallery = () => {
  const [index, setIndex] = useState(0);

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
