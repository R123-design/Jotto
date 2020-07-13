import React from "react";
import PropTypes from "prop-types";
import './Congrats.css'

export default function Congrats(props) {

  const { success } = props;
  const message = "Congrats You Guessed the correct word";
  if (success) {
    return (
      <div data-test="component-congrats">
        <span data-test="congrats-message" className="congo">{message}</span>
      </div>
    );
  } else {
    return <div data-test="component-congrats" />;
  }
}

Congrats.propTypes = {
    success: PropTypes.bool.isRequired,
}
