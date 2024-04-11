import React from 'react'

const Myheading = ({name, text, price=500}) => {
    const a = text;
    const obj = {
        abb:12,
        ccd : 2323,
    }

    const {abb, ccd} = obj;
  return (
    <>
    <h1>{name}</h1> <div> {a}</div>
    < MyheadingLittle value={price} />
    <main> This is main </main>
    <footer>This is footer. {abb}</footer>
      <MyheadingLittle />
    </>
  )
}

const MyheadingLittle = ({value}) => {
    const a = "sfkjag";
  return (
    <>

    <h4>{value}Little</h4> <div> {a}</div>
    </>
  )
}

const MyheadingLittle3 = () => <h4>Little3</h4>
const MyheadingLittle4 = () => <h4>Little4</h4>


export default Myheading

export {MyheadingLittle3, MyheadingLittle4}