import React from 'react';
import ProgrammingLanguage from './ProgrammingLanguage';

function VoteApp() {
  return (
    <main role="main">
      <div class="jumbotron">
        <div class="container">
          <h1 class="display-3">Language Vote App v3</h1>
          &copy; CloudAcademy ❤ DevOps 2023 v3.0.0
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <ProgrammingLanguage id="csharp" logo="csharp.jpg"/>
          </div>
          <div class="col-md-4">
            <ProgrammingLanguage id="python" logo="python.png"/>
          </div>
          <div class="col-md-4">
            <ProgrammingLanguage id="javascript" logo="javascript.png"/>
          </div>
        </div>
        <hr></hr>
        <div class="row">
          <div class="col-md-4">
            <ProgrammingLanguage id="go" logo="go.png"/>
          </div>
          <div class="col-md-4">
            <ProgrammingLanguage id="java" logo="java.png"/>
          </div>
          <div class="col-md-4">
            <ProgrammingLanguage id="nodejs" logo="nodejs.png"/>
          </div>
        </div>
      </div>
    </main>
  )
}

//export VoteApp - allows the ReactDOM.render within the index.js file to use it
export default VoteApp;