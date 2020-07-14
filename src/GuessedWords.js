import React from "react";
import PropTypes from "prop-types";
import "./GuessWords.css";

export default function GuessedWords(props) {
  let contents;
  if (props.guessedWords.length === 0) {
    contents = (
      <span data-test="guess-instructions">Try to guess the secret word</span>
    );
  } else {
    const guessedWordsRows = props.guessedWords.map((word, index) => {
      return (
        <tr data-test="guessed-word" key={index}>
          <td>{word.guessedWord}</td>
          <td>{word.letterMatchCount}</td>
        </tr>
      );
    });
    contents = (
      <div data-test="guessed-words" className="content">
        <h3>Guessed Words</h3>
        <table className="topPadding">
          <thead>
            <tr>
              <th className="guess">Guess</th>
              <th className="letters">Matching Letters</th>
            </tr>
          </thead>
          <tbody className="table">{guessedWordsRows}</tbody>
        </table>
      </div>
    );
  }
  return <div data-test="component-guessed-words">{contents}</div>;
}

GuessedWords.propTypes = {
  // guessedWords: PropTypes.arrayOf(
  //   PropTypes.shape({
  //     guessedWords: PropTypes.string.isRequired,
  //     letterMatchCount: PropTypes.number.isRequired,
  //   })
  // ).isRequired,
};
