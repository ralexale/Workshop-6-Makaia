import React from "react";

const Ingredient = (props) => {
    switch (props.id) {
        case "bread-top":
            return (
                <div className="bread-top">
                </div>
            );
        default:
            return (
                <div onClick={() => props.onClick()} className={props.id}></div>
            );
    }
};

export default Ingredient;
