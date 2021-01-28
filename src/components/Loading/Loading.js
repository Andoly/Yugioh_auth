import React from "react";
import { LoadingComponent } from "./styles";

const Loading = () => {
  return (
    <LoadingComponent className="lds-ellipsis">
      {Array.from(new Array(4)).map((_, index) => (
        <div key={index} />
      ))}
    </LoadingComponent>
  );
};

export default Loading;
