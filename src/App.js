import React from "react";
import Congrats from "./Congrats";
import GuessedWords from "./GuessedWords";
import Input from "./Input";
import "./App.css";
import { connect } from "react-redux";
import { getSecretWord } from "./actions";

export class UnconnectedApp extends React.Component {
  
  componentDidMount() {
    this.props.getSecretWord();
  }
  render() {
    const {success, secretWord, guessedWords} = this.props;
    return (
      <div className="App">
        <h1>Jotto</h1>
        <Congrats success={success} />
        <Input secretWord={secretWord} />
        <GuessedWords
          guessedWords={guessedWords}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { success, secretWord, guessedWords } = state;
  return { success, secretWord, guessedWords };
};

export default connect(mapStateToProps, { getSecretWord })(UnconnectedApp);
