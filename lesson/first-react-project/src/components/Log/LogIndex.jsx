import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from "reactstrap";
import LogCreate from "./LogCreate";
import LogTable from "./LogTable";

const LogIndex = (props) => {
    const [driverLogs, setDriverLogs] = useState([]);

    async function getAllLogs() {
        let url = `http://localhost:4000/log/view-owner`;
        let myHeaders = new Headers();
        myHeaders.append("Authorization", props.token);

        const requestOptions ={
            headers: myHeaders,
            method: "GET",
        };

        try {
            const response = await fetch(url, requestOptions);
            const data = await response.json();
            console.log(data);
            setDriverLogs(data.log);
        } catch (error) {
            console.error(error.message);
        };
    }

    useEffect(() => {
        if(props.token){ 
            getAllLogs();
        }
    }, [props.token]);
        

    return(
        <>
        <Container>
            <Row>
                <Col md="4">
                    <LogCreate  token={props.token} getAllLogs={getAllLogs} />
                </Col>
                <Col md="8">
                    <LogTable driverLogs={driverLogs} token={props.token} getAllLogs={getAllLogs}/>
                </Col>
            </Row>
        </Container>
    
        </>
    )
};

export default LogIndex