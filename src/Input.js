import React from "react";
import { connect } from "react-redux";
import { guessWord, getSecretWord } from "./actions";

export class UnconnectedInput extends React.Component {
  constructor(props) {
    super(props);

    this.inputBox = React.createRef();
  }

  submitGuessedWord = (e) => {
    e.preventDefault();
    const guessedWord = this.inputBox.current.value;
    if (guessedWord && guessedWord.length > 0) {
      this.props.guessWord(guessedWord);
    }

    this.inputBox.current.value = "";
  };

  render() {
    const contents = this.props.success ? null : (
      <form className="">
        <input
          data-test="input-box"
          ref={this.inputBox}
          id="word-guess"
          type="text"
          placeholder="Enter guess"
        />
        <button
          data-test="submit-btn"
          type="submit"
          onClick={this.submitGuessedWord}
        >
          Guess
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
