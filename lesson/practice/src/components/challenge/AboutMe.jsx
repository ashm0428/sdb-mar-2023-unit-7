function AboutMe(){
    let city = "Oakley";
    let state = "Utah"
    return(
        <>
            <h1>Ashlee Lindstrom</h1>
            <p>I grew up in {city}, {state}</p>
            <ul style={{ listStyle: "square" }}>
            <li style={{color: "purple", listStyle: "none", textDecorationLine: "underline"}}>Places I have visited recently:</li>
                <li style={{color: "blue"}}>St. George, Utah</li>
                <li style={{color: "green"}}>Logan, Utah</li>
                <li style={{color: "orange"}}>Fruita, Colorado</li>
            </ul>
        </>
    );
}

export default AboutMe;