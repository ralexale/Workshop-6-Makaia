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
    <div className="btnConfirm receipt">
      {/* <img
        className="bgBob"
        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/41913a6a-946b-4407-a2ec-94e984e429a1/d7bpq17-1e2e9f09-a42d-4909-95e7-2cf36296d35c.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQxOTEzYTZhLTk0NmItNDQwNy1hMmVjLTk0ZTk4NGU0MjlhMVwvZDdicHExNy0xZTJlOWYwOS1hNDJkLTQ5MDktOTVlNy0yY2YzNjI5NmQzNWMuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.EFz-aDvtMT4t9kfmI7oJrJ8QKGAE_ueazh6r3xzIXBs"
        alt=""
      /> */}
      {props.burgersArray.map((price, key) => (
        <h2 className="receipt-row" key={key}>{`Burger ${
          key + 1
        } x $ ${price}`}</h2>
      ))}
      <h1>{`Total: $${total}`}</h1>

      <div className="btnConfirm">
        <Link to="/">
          <div className="button confitmBtn">Return to builder</div>
        </Link>
        <div className="button confitmBtn" onClick={props.reset}>
          Reset
        </div>
      </div>
      <img
        className="bob"
        src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMTk4NmExN2NiNmZjZTQ4YzMzNmEzNzRmNDZlMzUzOTBhZTE1NGZlOSZjdD1z/3ohs4CoKEBL9QNUglq/giphy.gif"
        alt=""
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  burgersArray: state,
});

export default connect(mapStateToProps, { reset })(Receipt);
