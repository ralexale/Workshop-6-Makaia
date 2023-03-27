import React, { Component } from "react";
import Burger from "../Burger/Burger";
import ControlPanel from "../ControlPanel/ControlPanel";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

// Actions
const confirmBurger = (price) => ({
    type: "addBurger",
    price,
});

const prices = {
    bacon: 10,
    salad: 2,
    cheese: 5,
    meat: 20,
};

class Builder extends Component {
    state = {
        ingredients: [],
    };

    getPrice = () => {
        const pricesArray = this.state.ingredients.map((ingredient) => {
            return prices[ingredient];
        });
        const price = pricesArray.reduce((ant, act) => {
            return ant + act;
        }, 0);
        return price;
    };

    addIngredient = (idIngrediente) => {
        const newIngredients = this.state.ingredients.slice();
        newIngredients.push(idIngrediente);
        this.setState({ ingredients: newIngredients });
    };

    removeIngredient = (index) => {
        console.log(index);
        const newIngredients = this.state.ingredients.slice();
        newIngredients.splice(index, 1);
        this.setState({ ingredients: newIngredients });
    };

    handleConfirm = () => {
        this.props.confirmBurger(this.getPrice());
        this.setState({ ingredients: [] });
    };

    render() {
        return (
            <div className="container">
                <div className="containerAll ">
                    <ControlPanel
                        onAdd={(x) => {
                            this.addIngredient(x);
                        }}
                    />

                    <article className="bg-cartel bg-center bg-fill bg-no-repeat  flex  flex-col gap-4 items-center p-14 relative">
                        <h3>Burgers added: {this.props.burgersArray.length}</h3>
                        <h2 className="mb-12">
                            Burger {this.props.burgersArray.length + 1} : ${" "}
                            {this.getPrice()}
                        </h2>
                        <img
                            src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWI0OGI0YWY2NzlhNDNkZjZiZWM1MzIzNzU3N2E0OWVkZTZiYTY1NCZjdD1z/qU181i0UyaVAp6uJtv/giphy.gif"
                            alt="bob"
                            className="h-20 absolute top-[110px]"
                        />
                    </article>

                    <div className="confirmBtnss">
                        <div
                            className="button btnRed"
                            onClick={() => this.handleConfirm()}
                        >
                            Confirm
                        </div>
                        <Link to="/receipt">
                            <div className="button btnRed">See receipt</div>
                        </Link>
                    </div>
                </div>
                <div>
                    <Burger
                        ingredients={this.state.ingredients}
                        onIngredientClick={(index) =>
                            this.removeIngredient(index)
                        }
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    burgersArray: state,
});

export default connect(mapStateToProps, { confirmBurger })(Builder);
