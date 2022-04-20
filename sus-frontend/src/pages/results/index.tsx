//@ts-nocheck
import { useSelector } from "react-redux";
import { IAppState } from "../../redux/types";
import { useState, useEffect } from "react";
import "./index.scss";

const Results = () => {
  const { session } = useSelector((state: IAppState) => state);

  const [score, setScore] = useState(0);

  useEffect(() => {
    setScore(
      session.session.reduce(
        (a, v: number) => (a = a + parseInt(v.rating)),
        0
      ) / session.session.length
    );
  });

  return (
    <div className="global-score">
      <div className="global-average">Global average: {score}</div>
      {session.session
        ? session.session.map((item: any) => (
            <>
              <div className="score-wrapper">
                <div className="score-time">Time: {item.createdAt}</div>
                <div className="score-rating">Rating: {item.rating}</div>
              </div>
            </>
          ))
        : ""}
    </div>
  );
};

export default Results;
