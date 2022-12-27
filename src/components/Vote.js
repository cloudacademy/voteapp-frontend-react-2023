import React, { useState } from 'react';
import axios from 'axios'

function Vote (props) {
  const APIHOSTPORT = `${window._env_.REACT_APP_APIHOSTPORT}`;

  const [vote, setVote] = useState(props.count);

  const handleClick = async () => {
    //implement the handleClick function which will be called when the user clicks on the voting button
    //this invokes an AJAX request to the API to vote on the current programming language
    var url = `http://${APIHOSTPORT}/languages/${props.id}/vote`;
    await axios.get(url).then(response => setVote(vote+1))
  };

  return (
    <div id={props.id}>
      <button className='button' onClick={handleClick} type="button" class="btn btn-outline-success">+1</button>
      <div>
        <b>Votes</b>: {vote}
      </div>
    </div>
  )
}

//export Vote - allows the ProgrammingLanguage component to import it
export default Vote;