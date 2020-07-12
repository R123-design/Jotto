import React from "react";

export default function Congrats(props) {
  console.log("Props", props);
  const { success } = props;
  const message = "Congrats You Guessed the correct word";
  if (success) {
    return (
      <div data-test="component-congrats">
        <span data-test="congrats-message">{message}</span>
      </div>
    );
  } else {
    return <div data-test="component-congrats" />;
  }
}
