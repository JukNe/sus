import { Routes, Route } from "react-router-dom";
import Score from "../pages/score";
import Results from "../pages/results";
import Header from "./header";
import { connect, useDispatch } from "react-redux";
import { ISessionState } from "../redux/types";
import { useEffect } from "react";
import { getSessions } from "../redux/session/actions";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSessions());
  }, []);

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Score />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </div>
  );
};

const mapStateToProps = (state: ISessionState) => {
  return {
    session: state.session,
    loading: state.loading,
  };
};

export default connect(mapStateToProps)(App);
