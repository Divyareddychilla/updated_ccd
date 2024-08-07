import Router from "./router";
import Gqlclient from "./GqlClient";
import './style.scss';


function App() {
  return (
    <Gqlclient>
      <Router />
    </Gqlclient>
  );
}

export default App;