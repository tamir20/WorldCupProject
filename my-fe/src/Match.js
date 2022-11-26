
import style from "./style.module.css";
import * as React from 'react';

function Match({match}) {
    return (
        <div className={style.match}>
            {/* {match.name} */}
            {/* {match.points} */}
            <div className={style.groupTitle}>
            {match.groupTitle}
            </div>
            <div className={style.informationHub}>
                <div className={style.countryHub}>
                    <div className={style.countryImageHolder}>
                        <img className={style.countryImage} src={match.countryAImage} />
                    </div>
                    <div className={style.countryTextHolder}>
                    <p className={style.countryText}>{match.countryALabel}</p>
                    </div>
                </div>
                <div className={style.closedBetDiv}>
                    <p className={style.closedBetText}>({match.countryABet})</p>
                </div>
                <div className={style.finalScoreDiv}>
                    <p className={style.finalScoreText}>{match.countryAScore}</p>
                </div>
                <div className={style.PointsHub}>
                    <div className={style.PointsHubTextDiv}>
                        <p className={style.PointsHubText}>{match.points}</p>
                    </div>
                    <div className={style.PointsHubLabelDiv}>
                        <p className={style.PointsHubLabel}>Points</p>
                    </div>
                </div>
                <div className={style.finalScoreDiv}>
                    <p className={style.finalScoreText}>{match.countryBScore}</p>
                </div>
                <div className={style.closedBetDiv}>
                    <p className={style.closedBetText}>({match.countryBet})</p>
                </div>
                <div className={style.countryHub}>
                    <div className={style.countryImageHolder}>
                        <img className={style.countryImage} src={match.countryBImage} />
                    </div>
                    <div className={style.countryTextHolder}>
                        <p className={style.countryText}>{match.countryBLabel}</p>
                    </div>
                </div>
            </div>
        </div>
    )
  }
  
  export default Match;