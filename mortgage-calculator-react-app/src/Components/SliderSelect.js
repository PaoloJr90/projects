import React from "react";
import SliderComponent from "./Common/SliderComponent";

const SliderSelect = () => {
  return (
    <>
      <SliderComponent
        label="Property Value"
        min={100000}
        max={500000}
        defaultValue={150000}
        step={25000}
        onChange={(event) => console.log(event.target.value)}
        unit="$"
        amount={3000}
      />
      <SliderComponent
        label="Down Payment"
        min={0}
        max={50}
        defaultValue={20}
        step={5}
        onChange={(event) => console.log(event.target.value)}
        unit="$"
        amount={500}
      />
      <SliderComponent
        label="Loan Amount"
        min={0}
        max={50}
        defaultValue={20}
        step={5}
        onChange={(event) => console.log(event.target.value)}
        unit="$"
        amount={700}
      />
    </>
  );
};

export default SliderSelect;
