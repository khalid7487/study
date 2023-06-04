import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import ReferralLink from "./ReferralLink";
import Login from "./Loign";

function App() {
  return (
    <Router>
      {/* <Route path="/login">
        <ReferralLink />
        <Login />
      </Route> */}

      {/* ?token=abc12H)/ */}
      <Route path="/(home|referral)">
        <Login />
      </Route>

      {/* other routes */}
    </Router>
  );
}

export default App;
