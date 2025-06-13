import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";

const Loading = () => {
  return <FontAwesomeIcon icon={faArrowsRotate} spin fontSize={32} />;
};

export default Loading;
