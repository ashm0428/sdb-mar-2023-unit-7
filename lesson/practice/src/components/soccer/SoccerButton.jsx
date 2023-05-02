import React, { useState } from 'react';
import SoccerPlayerTable from "./SoccerPlayerTable";
// import { soccerArray } from "./data";


const SoccerButton = (props) => {

    const [soccerPlayerData, setSoccerPlayerData] = useState([]);

    // function getAllSoccerPlayers() {
    //     setSoccerPlayerData(soccerArray);
    // }

    async function getAllPlayers() {
        let url = "http://localhost:4000/player/view-all";
        try {
            let response = await fetch(url);
            let data = await response.json();
            setSoccerPlayerData(data.player)
        } catch (error) {
            console.log(error);
        }
    }

    return ( 
        <>
        <div className='btn'>
            <button onClick={getAllPlayers}>View All Soccer Players</button>
        </div>
        <SoccerPlayerTable soccerPlayerData={soccerPlayerData} />
        </>
     );
}
 
export default SoccerButton;