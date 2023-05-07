// Using get By ID, and update Drive Log
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Col, Container, Row, Label, FormGroup, Input, Form } from "reactstrap";

const LogEdit = (props) => {
    // UseState variables
    const [mode, setMode] = useState("");
    const [totalHours, setTotalHours] = useState("");
    const [totalMiles, setTotalMiles] = useState("");
    const [licensePlate, setLicensePlate] = useState("");

    const navigate = useNavigate();

    // useParams() from react-router-dom
    const {id} = useParams();
    // useEffect
    useEffect(() => {
        if(props.token) {
            getLogByID();
        }    
    }, [props.token]);

    async function handleSubmit(e) {
        e.preventDefault();
        console.log(id);

        let url = `http://localhost:4000/log/update/` + id;
        
        let bodyObject = {
            mode: mode,
            totalHours: totalHours,
            totalMiles: totalMiles,
            licensePlate: licensePlate,
        }

        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", props.token);

        const requestOptions = {
            headers: myHeaders,
            method: "PATCH",
            body: JSON.stringify(bodyObject),
        }

        try {
            const response = await fetch(url, requestOptions);
            const data = await response.json();
            console.log(data);
            // If it works then go back to the logtable url
            if(data.message === "works from update") {
                navigate("/driver-log");
            }
        } catch (error) {
            console.error(error.message)
        }

    }

    async function getLogByID() {
        let url = `http://localhost:4000/log/` + id;
        let myHeaders = new Headers();
        myHeaders.append("Authorization", props.token);

        const requestOptions  = { 
            headers: myHeaders,
            method: "GET",
         }

         try {
            const response = await fetch(url, requestOptions);
            const data  = await response.json();
            console.log(data);
            setMode(data.log.mode);
            setTotalHours(data.log.totalHours);
            setTotalMiles(data.log.totalMiles);
            setLicensePlate(data.log.licensePlate);
         } catch (error) {
            console.error(error.message)
         }
    }

    

  return ( 
    <>
      <Container>
        <Row>
          <Col md="4">
            <h4>Instructions</h4>
            <p>
              Correct any errors you may find in your record and click the
              update drivers log button.
            </p>
            </Col>
          <Col md="8">
            <Form className='mb-5' onSubmit={handleSubmit}>
                <FormGroup>
                    <Label>Mode: </Label>
                    <Input type="text" value={mode} onChange={(e) => setMode(e.target.value)}/>
                </FormGroup>

                <FormGroup>
                    <Label>Total Hours: </Label>
                    <Input type="number" value={totalHours} step={".5"} onChange={(e) => setTotalHours(e.target.value)}/>
                </FormGroup>

                <FormGroup>
                    <Label>Total Miles: </Label>
                    <Input type="number" value={totalMiles} step={"10"} onChange={(e) => setTotalMiles(e.target.value)}/>
                </FormGroup>

                <FormGroup>
                    <Label>License Plate: </Label>
                    <Input type="text" value={licensePlate} onChange={(e) => setLicensePlate(e.target.value)}/>
                </FormGroup>
                <div className='d-grid gap-2 mb-4'>
                    <Button type='submit' color='success'>Update Log</Button>
                </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}
 
export default LogEdit;
