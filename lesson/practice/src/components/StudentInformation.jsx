function StudentInformation(props){
    return(
        <>
        <h2>{props.student.name}</h2>
        <ul>
            <li>Age: {props.student.age}</li>
            <li>City/State: {props.student.city}, {props.student.state}</li>
            <li>Favorite Meals: {props.student.favoriteFoods.join(", ")}</li>
        </ul>
        </>
    );
}

export default StudentInformation;