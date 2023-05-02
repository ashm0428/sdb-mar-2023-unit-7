import SoccerPlayerRow from "./SoccerPlayerRow"

const SoccerPlayerTable = (props) => {
    return (
        <>
            <h2 className="header">Soccer Player Table</h2>
            <table>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Position</th>
                    <th>Team</th>
                    <th>Jersey Number</th>
                </tr>
            </thead>
            <tbody>
                {props.soccerPlayerData?.map((soccerPlayer) => <SoccerPlayerRow soccerPlayer={soccerPlayer}/> )}
                
            </tbody>
            </table>
        </>
    )
}

export default SoccerPlayerTable