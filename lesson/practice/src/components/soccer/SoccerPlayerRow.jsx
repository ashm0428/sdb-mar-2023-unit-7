
const SoccerPlayerRow = (props) => {
    const { firstName, lastName, position, team, jerseyNumber } = props.soccerPlayer
    return ( 
        <>
            {/* <h2>Hello from SoccerPlayerRow</h2> */}
        <tr>
          <td>{firstName}</td>
          <td>{lastName}</td>
          <td>{position}</td>
          <td>{team}</td>
          <td>{jerseyNumber}</td>
        </tr>
        </>
     );
}
 
export default SoccerPlayerRow;