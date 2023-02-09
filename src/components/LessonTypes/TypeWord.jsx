import React from "react";
import useSound from "use-sound";
import clickSound from "../../sounds/click.mp3";
import { Button, PopoverBody, UncontrolledPopover } from "reactstrap";
import { randomize } from "utils";
import { capitalize } from "utils";
import { Letters } from "utils";

const randomLetter = () => Letters[Math.floor(Math.random() * Letters.length)];

const TypeWord = ({ word, done, setDone }) => {
  const translations = require("assets/data/translations.json");
  const translation = translations[word];
  const availableLetters = React.useMemo(
    () =>
      randomize([
        ...translation.split(""),
        ...new Array(Math.max(0, Math.min(5, 20 - translation.length)))
          .fill(0)
          .map(randomLetter),
      ]),
    []
  );

  const [revealed, setRevealed] = React.useState(false);
  const [lettersUsed, setLettersUsed] = React.useState([]);
  const [lettersFilled, setLettersFilled] = React.useState(0);

  const [playClick] = useSound(clickSound, { volume: 0.3 });

  const write = (letter, index) => {
    if (letter === translation[lettersFilled]) {
      if (lettersFilled === translation.length - 1) {
        setRevealed(true);
        setDone(true);
      }
      setLettersUsed([...lettersUsed, index]);
      setLettersFilled(lettersFilled + 1);
      playClick();
    }
  };

  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center w-75"
      style={{ gap: "1.5rem" }}
    >
      <h2 className="text-white text-center">
        Écris la traduction du mot suivant :
      </h2>

      <div className="d-flex gap-4 w-100 justify-content-center align-items-center text-white">
        <h3
          className="font-secondary text-white border border-white rounded px-2 py-1 mb-0 tracking-in-expand shadow"
          style={{
            animationDelay: "0.2s",
            textShadow: "0px 1px 1px #000",
          }}
        >
          {capitalize(word)}
        </h3>

        <div
          className="mx-4 fade-in"
          style={{
            animationDelay: "1s",
          }}
        >
          <i className="fa fa-long-arrow-right" style={{ fontSize: "2rem" }} />
        </div>

        <h3
          id="translate"
          className="font-secondary text-info border border-info rounded px-2 py-1 mb-0 slide-in-right shadow"
          onClick={() => setRevealed(true)}
          style={{
            cursor: revealed ? "default" : "pointer",
            animationDelay: "0.4s",
          }}
        >
          <div
            style={{
              transition: "0.6s -webkit-filter linear",
              userSelect: "none",
              textShadow: "0px 1px 1px #000",
              filter: revealed ? "blur(0)" : "blur(5px)",
            }}
          >
            {capitalize(translation)}
          </div>
          {!revealed && (
            <UncontrolledPopover
              trigger="hover focus"
              placement="right"
              target="translate"
            >
              <PopoverBody>Clique pour voir la traduction !</PopoverBody>
            </UncontrolledPopover>
          )}
        </h3>
      </div>

      <div
        className="d-flex justify-content-center align-items-center mt-5 p-2"
        style={{
          gap: "0.7rem",
          borderTop: "0.1rem dashed white",
          borderBottom: "0.1rem dashed white",
          width: "100vw",
          background: "linear-gradient(to left, #ffffff30 45%, #26af74c0 55%)",
          backgroundSize: "400% 100%",
          backgroundPosition: done ? "left" : "right",
          transition: "all 1.2s ease",
        }}
      >
        {availableLetters.map((letter, i) => (
          <Button
            key={`btn-${letter}${i}`}
            color="light"
            onClick={() => write(letter, i)}
            disabled={lettersUsed.includes(i)}
            className="d-flex m-0 justify-content-center align-items-center border font-secondary"
            style={{
              width: "3rem",
              height: "3rem",
              fontSize: "1.3rem",
              borderRadius: "50%",
              backgroundColor: "#ffffff20",
            }}
          >
            {letter.toUpperCase()}
          </Button>
        ))}
      </div>

      <div className="d-flex justify-content-center align-items-center px-3 border-bottom">
        {translation.split("").map((letter, i) => (
          <div
            key={`letter-${letter}${i}`}
            className="font-secondary text-center"
            style={{ fontSize: "2rem" }}
          >
            {i < lettersFilled
              ? i === 0
                ? letter.toUpperCase()
                : letter
              : i === lettersFilled
              ? "_"
              : "_"}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TypeWord;
