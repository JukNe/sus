import { Button } from "@mui/material";
import { useState } from "react";
import "./index.scss";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import { createSession } from "../../redux/session/actions";
import { useDispatch } from "react-redux";

const Score = () => {
  /*   const labels: { [index: string]: string } = {
    1: "Strongly Disagree",
    2: "Somewhat Disagree",
    3: "Neither Agree or Disagree",
    4: "Somewhat Agree",
    5: "Strongly Agree",
  }; */

  const questions = [
    "I think that I would like to use this system frequently.",
    "I found the system unnecessarily complex.",
    "I thought the system was easy to use.",
    "I think that I would need the support of a technical person to be able to use this system.",
    "I found the various functions in this system were well integrated.",
    "I thought there was too much inconsistency in this system.",
    "I would imagine that most people would learn to use this system very quickly.",
    "I found the system very cumbersome to use.",
    "I felt very confident using the system.",
    "I needed to learn a lot of things before I could get going with this system.",
  ];

  const [question, setQuestion] = useState(0);
  const [value, setValue] = useState<number | null>(null);
  const [score, setScore] = useState<number[]>([]);
  const [isRated, setIsRated] = useState(false);
  const [finalRating, setFinalRating] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const dispatch = useDispatch();

  const handleClick = () => {
    let newScore;
    if (value) {
      if (score[question] % 2 === 0) {
        newScore = 5 - value;
      } else {
        newScore = value - 1;
      }
      setScore([...score, newScore]);
      setQuestion(question + 1);
      setValue(null);
      setIsRated(false);
    }
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    //@ts-ignore
    dispatch(createSession({ rating: finalRating }));

    console.log(finalRating);
  };

  const handleScore = (e: any) => {
    setValue(e.target.value);

    setIsRated(true);

    // Sum the scores and set the final rating
    if (question === questions.length - 1) {
      let sum = score.reduce((a, b) => a + b);
      sum = sum * 2.5;
      console.log(sum.toString());
      setFinalRating(sum.toString());
    }
  };

  /*
 For each of the odd numbered questions, subtract 1 from the score.
For each of the even numbered questions, subtract their value from 5.
Take these new values which you have found, and add up the total score. Then multiply this by 2.5.
 
 */

  return (
    <>
      {question !== questions.length ? (
        <>
          <div className="rating-div">Question {question + 1} / 10</div>
          <div className="rating-div">{questions[question]}</div>
          <div className="rating-div">
            <div style={{ paddingRight: "1em" }}>Strongly Disagree</div>
            <Rating
              name="hover-feedback"
              value={value}
              precision={1}
              size="large"
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              onClick={(e) => {
                handleScore(e);
              }}
              emptyIcon={
                <StarIcon style={{ opacity: 0.5 }} fontSize="inherit" />
              }
            />{" "}
            <div style={{ paddingLeft: "1em" }}> Strongly Agree</div>
          </div>

          {isRated ? (
            <div className="button-container">
              <Button onClick={handleClick} variant="contained">
                Next
              </Button>
            </div>
          ) : (
            ""
          )}
        </>
      ) : !isSubmitted ? (
        <div className="results-wrapper">
          {score.map((item, index: number) => (
            <div className="results">
              <div className="result-question">{questions[index]}</div>
              <div className="result-answer"> {item} / 5 </div>
            </div>
          ))}
          <div className="button-container">
            <Button onClick={handleSubmit} variant="contained">
              Compute
            </Button>
          </div>
        </div>
      ) : (
        <div className="final-rating" style={{ fontWeight: "bold" }}>
          Your rating: {finalRating} / 100
        </div>
      )}
    </>
  );
};

export default Score;
