import { Fragment } from "react";

const a = "200ssf";

const MyHeading = () => <h1>Heading</h1>;

function App() {
  return (
    <Fragment>
    <div>
      <MyHeading />
      <h1>Welocme page 1 {a}</h1>
      <p> This is a paragraph.</p>
    </div>
    </Fragment>
  )
}

export default App;