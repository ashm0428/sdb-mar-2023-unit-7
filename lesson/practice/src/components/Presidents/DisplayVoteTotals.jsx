function DisplayVoteTotals(props){
    const {name, count}= props.presidentVoteInfo
    return(<>
    <p>{name} had a total vote count of {count}</p>
    </>);
}

export default DisplayVoteTotals;