import React from "react";
import { connect } from "react-redux";
import { guessWord, getSecretWord } from "./actions";

export class UnconnectedInput extends React.Component {
  render() {
    const contents = this.props.success ? null : (
      <form className="">
        <input
          data-test="input-box"
          id="word-guess"
          type="text"
          placeholder="Enter guess"
        />
        <button
          data-test="submit-btn"
          type="submit"
          onClick={() => this.props.guessWord("train")}
        >
          Submit
        </button>
      </form>
    );
    return <div data-test="component-input">{contents}</div>;
  }
}

const mapStateToProps = ({ success }, ownProps) => {
  return { success };
};

export default connect(mapStateToProps, { guessWord })(UnconnectedInput);
