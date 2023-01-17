import React, { useState, useEffect } from 'react';
import Vote from './Vote';
import axios from 'axios';
import Image from 'react-bootstrap/Image';

interface IProgrammingLanguageProps{
  id: string;
  logo: string;
}

interface ICodeDetail {
  usecase: string;
  rank: number;
  homepage: string;
  votes: number;
}

interface ILanguage {
  codedetail: ICodeDetail;
}

function ProgrammingLanguage ({ id, logo }: IProgrammingLanguageProps) {
  const [loaded, setLoaded] = useState(false);
  const [language, setLanguage] = useState<ILanguage>({ codedetail: { usecase: '', rank: 0, votes: 0, homepage: '' } });

  useEffect(() => {
    async function fetchData () {
      const APIHOSTPORT = `${window._env_.REACT_APP_APIHOSTPORT}`;
      const url = `http://${APIHOSTPORT}/languages/${id}`;
      await axios.get(url).then(
        response => {
          const lang = response.data as ILanguage;
          setLanguage(lang);
          setLoaded(true);
        }
      );
    }
    fetchData().catch(err => console.log(err));
  }, [id]);

  const usecase = language.codedetail.usecase;
  const rank = language.codedetail.rank;
  const homepage = language.codedetail.homepage;
  const votecount = language.codedetail.votes;

  return (
    <>
      { loaded
        ? (
            <div className="container">
              <p><Vote id={id} count={votecount}/></p>
              <p><b>Uses</b>: {usecase}</p>
              <p><b>Rank</b>: {rank}</p>
              <p><a href={homepage} target="blank">{homepage}</a></p>
              <div className="container">
                <div className="row">
                  <div className="col">
                    <div className="parent">
                      <Image src={`./img/${logo}`} alt="logo" width={100}/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        : (<div></div>)
      }
    </>
  );
}

// export ProgrammingLanguage - allows the VoteApp component to import it
export default ProgrammingLanguage;
