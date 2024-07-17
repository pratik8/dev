import React, { Component } from "react";
import ShowQuestions from "./Components/showQuestions";

class App extends Component {
  state = {
  };

 render() {
    return (
      <div className="main__wrap">
        <main className="container">
          <div>
            <ShowQuestions /> 
          </div>
        </main>
      </div>
    );
  }
}

export default App;