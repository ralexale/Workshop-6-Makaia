import React from "react";
import { motion } from "framer-motion";
import Ingredient from "../Ingredient/Ingredient";

const Burger = (props) => {
    const burgerIngredients = props.ingredients.map((ingredient, index) => (
        <Ingredient
            key={index}
            id={ingredient}
            onClick={() => props.onIngredientClick(index)}
        />
    ));

    return (
        <motion.div className="burger">
            <Ingredient id="bread-top" />
            {burgerIngredients}
            <Ingredient id="bread-bottom" />
        </motion.div>
    );
};

export default Burger;
