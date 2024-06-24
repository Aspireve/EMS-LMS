import React from "react";
import Useravatar from "./useravatar";

type BlogTabletProps = { name: string; url?: string };

const BlogTablet = ({ name, url }: BlogTabletProps) => {
  return (
    <div style={{padding: "2rem 0", borderBottom: "0.5px solid #ccc", margin: "0 2rem 0 0"}}>
      <div style={{display: "flex", margin: "0 1rem 0 0", alignItems: "center"}}>
        <div style={{marginRight: "1rem"}}>
          <div
            style={{
              display: "flex",
              gap: "0.5rem",
              alignItems: "center",
            }}
          >
            <Useravatar name={name} url={url} />
            <p style={{ fontSize: "1rem", fontWeight: "500", margin: 0 }}>
              {name}
            </p>
            <p style={{ margin: 0 }}>Apr 1, 2014</p>
          </div>
          <h3 style={{ fontSize: "1.3rem" }}>Lorem ipsum dolor sit amet.</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, error inventore incidunt itaque quas quo soluta reiciendis rem voluptates repellat ad nisi iure cupiditate at minus cumque ab, magnam consequuntur fugit quis vero, assumenda minima?
          </p>
          <div style={{
            display: "flex",
          }}>
            <p style={{
                backgroundColor: "#ccc",
                padding: "0 0.5rem",
                borderRadius: "1rem",
                marginRight: "0.5rem"
            }}>JavaScript</p>
            <p>10 mins read</p>
          </div>
        </div>
        <img src="https://images.pexels.com/photos/301926/pexels-photo-301926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="blog" style={{ width: "8rem", height: "8rem", objectFit: "cover", margin: "1rem" }} />
      </div>
    </div>
  );
};

export default BlogTablet;
