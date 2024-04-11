import MyHeading, { MyheadingLittle3 as MyCustomName, MyheadingLittle4 } from "./components/Myheading";

function App() {
  return (
    <>
    <div>
      <MyHeading name="Rajan" text="Nice one" price="23435"/>
      <MyCustomName />
      <MyheadingLittle4 />
      <p> This is a paragraph.</p>
    </div>
    </>
  )
}

export default App;