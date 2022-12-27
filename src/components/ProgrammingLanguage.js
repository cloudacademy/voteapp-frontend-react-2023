import React, { useState, useEffect } from 'react';
import Vote from './Vote';
import axios from 'axios';

function ProgrammingLanguage (props) {
  const APIHOSTPORT = `${window._env_.REACT_APP_APIHOSTPORT}`;

  const [loaded, setLoaded] = useState(false);
  const [language, setLanguage] = useState({});

  useEffect(() => {
    var url = `http://${APIHOSTPORT}/languages/${props.id}`;
    console.log(`URL->${url}`);
    axios.get(url).then(
      response => {
        setLanguage(response.data)
        setLoaded(true);
      }
    );
  }, []);

  return (
    <div>
      {
        (() => {
          if (loaded) {
            var usecase = language.codedetail.usecase;
            var rank = language.codedetail.rank;
            var homepage = language.codedetail.homepage;
            var votecount = language.codedetail.votes;
            return (
              <div class="container">
                <h2>{props.name}</h2>
                <p><Vote id={props.id} count={votecount}/></p>
                <p><b>Uses</b>: {usecase}</p>
                <p><b>Rank</b>: {rank}</p>
                <p><a href={homepage} target="blank">{homepage}</a></p>
                <div class="container">
                  <div class="row">
                    <div class="col">
                      <div class="parent">
                        <img src={`./img/${props.logo}`} alt="logo" class="center-block"/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          }
          else {
            return (
              <div></div>
            )
          }
        })()
      }
    </div>
  )
}

//export ProgrammingLanguage - allows the VoteApp component to import it
export default ProgrammingLanguage;