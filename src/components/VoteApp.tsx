import React from 'react';
import ProgrammingLanguage from './ProgrammingLanguage';
import 'bootstrap/dist/css/bootstrap.min.css';

function VoteApp () {
  return (
    <main role="main">
      <div className="jumbotron">
        <div className="container">
          <h1 className="display-3">Language Vote App v3</h1>
          &copy; CloudAcademy ❤ DevOps 2023 v3.0.1
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <ProgrammingLanguage id="csharp" logo="csharp.jpg"/>
          </div>
          <div className="col-md-4">
            <ProgrammingLanguage id="python" logo="python.png"/>
          </div>
          <div className="col-md-4">
            <ProgrammingLanguage id="javascript" logo="javascript.png"/>
          </div>
        </div>
        <hr></hr>
        <div className="row">
          <div className="col-md-4">
            <ProgrammingLanguage id="go" logo="go.png"/>
          </div>
          <div className="col-md-4">
            <ProgrammingLanguage id="java" logo="java.png"/>
          </div>
          <div className="col-md-4">
            <ProgrammingLanguage id="nodejs" logo="nodejs.png"/>
          </div>
        </div>
      </div>
    </main>
  );
}

// export VoteApp - allows the ReactDOM.render within the index.js file to use it
export default VoteApp;
