import React from "react";

const ControlPanel = (props) => (
  <div className="containerIngredients">
    <div className="control-panel">
      <div
        onClick={() => {
          props.onAdd("meat");
        }}
        className="button btnIngred"
      >
        Meat
      </div>
      <div
        onClick={() => {
          props.onAdd("salad");
        }}
        className="button btnIngred"
      >
        Salad
      </div>
      <div
        onClick={() => {
          props.onAdd("cheese");
        }}
        className="button btnIngred"
      >
        Cheese
      </div>
      <div
        onClick={() => {
          props.onAdd("bacon");
        }}
        className="button btnIngred"
      >
        Bacon
      </div>
    </div>
  </div>
);

export default ControlPanel;
