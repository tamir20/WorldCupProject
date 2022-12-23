import style from "./style.module.css";
import * as React from 'react';
import RightPanel from './RightPanel';
import {updateBet} from './DBUtil';

function defaultScore(score){
    if (score === 0){
        return 0
    }
    if (!score){
        return '-'
    }
    return score
}

function handleClick(setMatches, matches, matchID){
    let newMatches = matches.DB.map(item => 
        {
          if (item.matchID === matchID){
            updateBet(item, matches, setMatches);
            return {...item, editMode: !item.editMode}; //gets everything that was already in item, and updates "done"
          }
          return item; // else return unmodified item 
        });
    let result = {...matches, DB: newMatches}
    setMatches(result);
}

function handleUpdateCountryA(e, setMatches, matches, matchID){
    let newMatches = matches.DB.map(item => 
        {
          if (item.matchID === matchID){
            return {...item, countryABet: e.target.value}; //gets everything that was already in item, and updates "done"
          }
          return item; // else return unmodified item 
        });
    let result = {...matches, DB: newMatches}
    setMatches(result);
}

function handleUpdateCountryB(e, setMatches, matches, matchID){
    let newMatches = matches.DB.map(item => 
        {
          if (item.matchID === matchID){
            return {...item, countryBet: e.target.value}; //gets everything that was already in item, and updates "done"
          }
          return item; // else return unmodified item 
        });
    let result = {...matches, DB: newMatches}
    setMatches(result);
}

function MatchEdit({match, setMatches, matches}) {
    return (
        <>
            <div className={style.match}>
            <div className={style.LeftPanel}>
                {/* <button className={style.button42}>X</button> */}
                <button className={style.buttonEdit} onClick={() => {handleClick(setMatches, matches, match.matchID)}}>OK</button>
            </div>
                <div className={style.display}>
                    {/* {match.name} */}
                    {/* {match.points} */}
                    <div className={style.groupTitle}>
                    {match.groupTitle}
                    </div>
                    <div className={style.informationHub}>
                        <div className={style.countryHub}>
                            <div className={style.countryImageHolder}>
                                <img className={style.countryImage} src={match.countryAImage}  alt="Country A"/>
                            </div>
                            <div className={style.countryTextHolder}>
                            <p className={style.countryText}>{match.countryALabel}</p>
                            </div>
                        </div>
                        <div className={style.closedBetDiv}>
                            <input className={style.numberInput} defaultValue={defaultScore(match.countryABet)} onChange={(e) => {handleUpdateCountryA(e, setMatches, matches, match.matchID)}}/>
                        </div>
                        <div className={style.finalScoreDiv}>
                            <p className={style.finalScoreText}>{defaultScore(match.countryAScore)}</p>
                        </div>
                        <div className={style.PointsHub}>
                            <div className={style.PointsHubTextDiv}>
                                <p className={style.PointsHubText}>{defaultScore(match.points)}</p>
                            </div>
                            <div className={style.PointsHubLabelDiv}>
                                <p className={style.PointsHubLabel}>Points</p>
                            </div>
                        </div>
                        <div className={style.finalScoreDiv}>
                            <p className={style.finalScoreText}>{defaultScore(match.countryBScore)}</p>
                        </div>
                        <div className={style.closedBetDiv}>
                        <input className={style.numberInput} defaultValue={defaultScore(match.countryBet)} onChange={(e) => {handleUpdateCountryB(e, setMatches, matches, match.matchID)}}/>
                        </div>
                        <div className={style.countryHub}>
                            <div className={style.countryImageHolder}>
                                <img className={style.countryImage} src={match.countryBImage} alt="Country B"/>
                            </div>
                            <div className={style.countryTextHolder}>
                                <p className={style.countryText}>{match.countryBLabel}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <RightPanel match={match} />
            </div>
        </>
    )
  }
  
  export default MatchEdit;