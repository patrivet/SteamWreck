
import React, { FunctionComponent } from 'react';
import GameCardLarge from '../GameCardLarge/GameCardLarge';
import GameCardMedium from '../GameCardMedium/GameCardMedium';
import Recommendation from './../../../types/Recommendation';
import './RecommendationList.scss';

// Use an Interface (named Props) to define the props this component will take.
interface Props {
  recommendations: Array<Recommendation>;
  addRemoveFav: Function;
}

// FIX ME- we need a global spinner component & use below in "loading data"
const RecommendationList: FunctionComponent<Props> = (props) => {

  const firstRecGame = props.recommendations[0];
  const allOtherRecGames = props.recommendations.slice(1, props.recommendations.length);

  return (
    <div>
      {(!props.recommendations.length)
        ?
        <div className="container">
          <div className="center">
            <img src="https://workbench.tv/content/tutorials/2016-10-21_RingOfFire/assets/RingOfFire.gif"
              title="LoadingData" alt="Spinner" />
          </div>
        </div>
        :
        <>
          <div>
            <div className="bestWreck">
              Our Best Wreck
            </div>
            <div className="cardLarge">
              <GameCardLarge recGame={firstRecGame} addRemoveFav={props.addRemoveFav} />
            </div>
          </div>
          <br />
          <br />
          <br />
          <div>
            <div className="otherWrecks">
              Other Good (enough) Wrecks
            </div>
            <div className="cardMedium">
              {allOtherRecGames.map((game) => {
                return <GameCardMedium recGame={game} addRemoveFav={props.addRemoveFav} />
              })}
            </div>
          </div>
          <br />
          <br />
        </>
      }
    </div>
  )
};

export default RecommendationList;
