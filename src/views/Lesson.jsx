import TypeWord from "components/LessonTypes/TypeWord";
import React from "react";
import { Button, Progress } from "reactstrap";
import useSound from "use-sound";
import correctSound from "../sounds/correct.mp3";

const Lesson = () => {
  const exercises = [
    {
      type: "type_word",
      word: "nuage",
    },
    {
      type: "type_word",
      word: "je suis",
    },
    {
      type: "type_word",
      word: "tu es",
    },
  ];
  const [progress, setProgress] = React.useState(0);
  const [exDone, setExDone] = React.useState();
  const [transition, setTransition] = React.useState(false);
  const current = React.useMemo(
    () => (progress === -1 ? { type: "transition" } : exercises[progress]),
    [progress]
  );

  // Sounds when finishing exercices
  const [playCorrect] = useSound(correctSound, { volume: 0.5 });
  React.useEffect(() => {
    if (exDone) playCorrect();
  }, [exDone]);

  // Next exercise
  const nextExercise = () => {
    if (progress === exercises.length - 1) {
      console.log("FINI");
    } else {
      setExDone(false);
      setProgress(-1);
      setTimeout(() => {
        setProgress(progress + 1);
      }, 5);
    }
  };

  return (
    <main>
      <div className="fixed-top w-50 m-auto">
        <div className="position-relative pt-4">
          <div className="progress-info">
            <div className="progress-label">
              <span>Progrès</span>
            </div>
          </div>
          <Progress
            value={String((progress + (exDone ? 1 : 0)) / exercises.length)}
            max="1"
            color={
              progress === exercises.length - 1 && exDone
                ? "yellow"
                : exDone
                ? "success"
                : "default"
            }
          />
        </div>
      </div>

      <div
        className="d-flex justify-content-center align-items-center position-relative text-white pb-7"
        style={{
          height: "100vh",
          background:
            "linear-gradient(150deg, rgb(119 145 248) 15%, rgb(131 67 233) 70%, rgb(132 85 191) 90%)",
        }}
      >
        {current.type === "type_word" ? (
          <TypeWord word={current.word} done={exDone} setDone={setExDone} />
        ) : current.type === "translate" ? (
          <div>TRANSITION</div>
        ) : (
          <div>Rien</div>
        )}
      </div>

      {exDone && (
        <div
          className="d-flex justify-content-end fixed-bottom border-top border-white fade-in"
          style={{
            backgroundColor: "#26af74b0",
          }}
        >
          <Button
            className="m-5 border border-white"
            color="success"
            onClick={nextExercise}
          >
            Suivant
          </Button>
        </div>
      )}
    </main>
  );
};

export default Lesson;
