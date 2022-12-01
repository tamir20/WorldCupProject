
import style from "./style.module.css";
import * as React from 'react';
import LeftPanel from './LeftPanel'
import RightPanel from './RightPanel'

function defaultScore(score){
    if (score === 0){
        return 0
    }
    if (!score){
        return '-'
    }
    return score
}

function MatchEdit({match}) {
    return (
        <>
            <div className={style.match}>
            <div className={style.LeftPanel}>
                {/* <button className={style.button42}>X</button> */}
                <button className={style.buttonEdit}>OK</button>
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
                            <input className={style.numberInput}/>
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
                            <input className={style.numberInput}/>
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