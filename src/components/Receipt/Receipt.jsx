import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

// Actions
const reset = () => ({
    type: "reset",
});

const Receipt = (props) => {
    const total = props.burgersArray.reduce((sum, price) => price + sum, 0);

    return (
        <main className="h-screen w-screen grid place-items-center">
            <div className="receipt ">
                {props.burgersArray.map((price, key) => (
                    <h2 className="receipt-row" key={key}>{`Burger ${
                        key + 1
                    } x $ ${price}`}</h2>
                ))}
                <h1>{`Total: $${total}`}</h1>

                <Link to="/">
                    <div className="btnConfirm">Return to builder</div>
                </Link>
                <div className="button Reset" onClick={props.reset}>
                    Reset
                </div>
                <img
                    className="bob"
                    src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMTk4NmExN2NiNmZjZTQ4YzMzNmEzNzRmNDZlMzUzOTBhZTE1NGZlOSZjdD1z/3ohs4CoKEBL9QNUglq/giphy.gif"
                    alt=""
                />
            </div>
        </main>
    );
};

const mapStateToProps = (state) => ({
    burgersArray: state,
});

export default connect(mapStateToProps, { reset })(Receipt);
