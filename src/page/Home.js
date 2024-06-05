import React, { useEffect, useState } from "react";
import { Card } from "../component/Card";
import { getData, postData } from "../ulti/api";

export const Home = ({ isCheckAll }) => {
  const [lstImage, setLstImage] = useState();
  const [lstFavorite, setlstFavorite] = useState();
  useEffect(() => {
    postData("https://api.waifu.pics/many/sfw/waifu", { exclude: [] }).then(
      (res) => {
        setLstImage(res.files);
      }
    );
    // getData("https://localhost:3003/api/admin").then((res) => {
    //   setlstFavorite(res.data);
    // });
  }, []);
  return (
    <div className="row flex w-full h-screen bg-white" style={{}}>
      {lstImage
        ? lstImage.map((i, j) => {
            const isFavorite = lstFavorite
              ? lstFavorite.some((a) => a.files === i)
              : false;
            return (
              <div className="col-3" key={j}>
                <Card isFavorite={isCheckAll || isFavorite} src={i} />
              </div>
            );
          })
        : "Empety"}
    </div>
  );
};
