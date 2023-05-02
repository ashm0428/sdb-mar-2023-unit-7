import DisplayVoteTotals from "./DisplayVoteTotals";

function PresidentVoting(){
    const votes = [
        { name: "Abe Lincoln", count: 139033 },
        { name: "Stephen Douglas", count: 115509 },
      ];
    return<>   
        <h2>Hello from President Voting</h2>
        {votes.map((vote, index) =><DisplayVoteTotals key={index} presidentVoteInfo = {vote}/>)}
        {/* <DisplayVoteTotals presidentVoteInfo = {votes[0]}/>
        <DisplayVoteTotals presidentVoteInfo = {votes[1]}/> */}
        </>
}


export default PresidentVoting;