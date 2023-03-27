import React from "react";
import { motion } from "framer-motion";

const ControlPanel = (props) => (
    <div className="containerIngredients">
        <div className="control-panel">
            <motion.div
                whileTap={{ rotate: [0, -90] }}
                transition={{ type: "spring", stiffness: 100 }}
                onClick={() => {
                    props.onAdd("meat");
                }}
                className="button btnIngred"
            >
                Meat
                <img
                    src="https://i.ibb.co/j5pNMKs/DALL-E-2023-03-26-19-29-34-pixelated-cooked-meat-removebg-preview.png"
                    alt="carne"
                    className="h-8 ml-1"
                />
            </motion.div>
            <motion.div
                whileTap={{ rotate: [0, -90] }}
                transition={{ type: "spring", stiffness: 100 }}
                onClick={() => {
                    props.onAdd("salad");
                }}
                className="button btnIngred"
            >
                Salad
                <img
                    src="https://i.ibb.co/2FB2tc8/DALL-E-2023-03-26-19-25-33-lechuga-en-horizontal-pixeleada-png-removebg-preview.png"
                    alt="carne"
                    className="h-8 ml-1"
                />
            </motion.div>
            <motion.div
                whileTap={{ rotate: [0, -90] }}
                transition={{ type: "spring", stiffness: 100 }}
                onClick={() => {
                    props.onAdd("cheese");
                }}
                className="button btnIngred"
            >
                Cheese
                <img
                    src="https://i.ibb.co/PTJ0YXf/DALL-E-2023-03-26-19-25-19-pixel-cheese-png-removebg-preview.png"
                    alt="carne"
                    className="h-8 ml-1"
                />
            </motion.div>
            <motion.div
                whileTap={{ rotate: [0, -90] }}
                transition={{ type: "spring", stiffness: 100 }}
                onClick={() => {
                    props.onAdd("bacon");
                }}
                className="button btnIngred"
            >
                Bacon
                <img
                    src="https://i.ibb.co/Xp7vj96/DALL-E-2023-03-26-19-30-16-pixelated-cooked-bacon-removebg-preview.png"
                    alt="carne"
                    className="h-8 ml-1"
                />
            </motion.div>
        </div>
    </div>
);

export default ControlPanel;
