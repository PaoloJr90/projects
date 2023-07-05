import React from "react";
import SliderComponent from "./Common/SliderComponent";

const SliderSelect = () => {
  return (
    <>
      <SliderComponent
        min={0}
        max={50}
        defaultValue={20}
        step={5}
        onChange={(event) => console.log(event.target.value)}
      />
    </>
  );
};

export default SliderSelect;
