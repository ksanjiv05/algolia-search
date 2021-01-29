import React, { useState } from "react";
import drive from "../../img/drive.png";
import confluence from "../../img/confluence.png";
import jira from "../../img/jira.png";
import { Link } from "react-router-dom";

const IMAGE = {
  drive,
  confluence,
  jira,
};
export default function IconButton({ iconData }) {
  const [data] = useState(iconData || []);
  const iconImg = data.map((item) => (
    <Link key={item.id} to={item.link}>
      <img className="home-logo-margin" src={IMAGE[item.imgName]} alt="" />
    </Link>
  ));
  return <div>{iconImg}</div>;
}
