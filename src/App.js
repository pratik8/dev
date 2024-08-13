import React, { Component } from 'react';
import ShowQuestions from './Components/showQuestions';
import ErrorBoundary from './Components/ErrorBoundary';

import { ScoreContextWrapper } from './ContextApi/scoreContext';

class App extends Component {
  state = {};

  render() {
    return (
      <div className="main__wrap">
        <main className="container">
          <div>
            <ErrorBoundary>
              <ScoreContextWrapper>
                <ShowQuestions />
              </ScoreContextWrapper>
            </ErrorBoundary>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
