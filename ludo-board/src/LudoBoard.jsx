import { useState } from "react";

export default function LudoBoard() {
  let [moves, setMoves] = useState({ blue: 0, purple: 0, green: 0 });

  let updateBlue = () => {
    // console.log(moves.blue);
    setMoves((prevMoves) => {
      return {
        ...prevMoves,
        blue: prevMoves.blue + 1,
      };
    });
  };

  let updatePurple = () => {
    setMoves((prevMoves) => {
      return {
        ...prevMoves,
        purple: prevMoves.purple + 1,
      };
    });
  };

  let updateGreen = () => {
    setMoves((prevMoves) => {
      return {
        ...prevMoves,
        green: prevMoves.green + 1,
      };
    });
  };

  return (
    <>
      <h3>Ludo Game</h3>
      <div className="container">
        <p>Blue moves ={moves.blue} </p>
        <button style={{ backgroundColor: "blue" }} onClick={updateBlue}>
          +1
        </button>
        <p>Purple moves ={moves.purple} </p>
        <button style={{ backgroundColor: "purple" }} onClick={updatePurple}>
          +1
        </button>
        <p>Green moves ={moves.green} </p>
        <button style={{ backgroundColor: "green" }} onClick={updateGreen}>
          +1
        </button>
      </div>
    </>
  );
}
