import React from "react";
import IconButton from "./HelperView/IconButton";
import imgData from "../temp/Icon";
export default function Home() {
  return (
    <div className="home-margin">
      <div className="home-body-margin">
        <p className="home-title-text">
          <span className="home-title-text-span">01</span> Connect your services
        </p>
        <p className="home-text-p">
          Documents and data will be synced to your computer for lightning-fast
          navigation.
        </p>
        <IconButton iconData={imgData} />
        <p className="home-text-bottom">
          Done connection services?
          <span className="home-text-bottom-span"> Back to search</span>
        </p>
      </div>
    </div>
  );
}
