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

/**
 * Ingredients: ["bacon", "salad", "cheese", "meat"]
 */

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
        {/* <img
          className="bgBob"
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/41913a6a-946b-4407-a2ec-94e984e429a1/d7bpq17-1e2e9f09-a42d-4909-95e7-2cf36296d35c.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQxOTEzYTZhLTk0NmItNDQwNy1hMmVjLTk0ZTk4NGU0MjlhMVwvZDdicHExNy0xZTJlOWYwOS1hNDJkLTQ5MDktOTVlNy0yY2YzNjI5NmQzNWMuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.EFz-aDvtMT4t9kfmI7oJrJ8QKGAE_ueazh6r3xzIXBs"
          alt=""
        /> */}
        <div className="containerAll">
          <ControlPanel
            onAdd={(x) => {
              this.addIngredient(x);
            }}
          />
          <h3># Burgers added: {this.props.burgersArray.length}</h3>
          <h2>
            Burger {this.props.burgersArray.length + 1} : $ {this.getPrice()}
          </h2>

          <div className="btnConfirm">
            <div className="button btnRed" onClick={() => this.handleConfirm()}>
              Confirm
            </div>
            <Link to="/receipt">
              <div className="button btnRed">See receipt</div>
            </Link>
          </div>
        </div>
        <div className="builder">
          <Burger
            ingredients={this.state.ingredients}
            onIngredientClick={(index) => this.removeIngredient(index)}
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
