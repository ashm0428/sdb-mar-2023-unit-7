import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";


const LogTableRow = (props) => {
    const {date, mode, totalHours, totalMiles, licensePlate, _id} = props.driverLog;
    let formattedDate = date.split("T")[0]
    
    const navigate = useNavigate();

    async function handleDelete() {
        let url = `http://localhost:4000/log/delete/` + _id;

        let myHeaders = new Headers();
        myHeaders.append("Authorization", props.token);

        let requestOptions = {
            headers: myHeaders,
            method: "DELETE",
        }

        try {
            const response = await fetch(url, requestOptions);
            const data = await response.json();
            console.log(data)
            // refresh the table after it has been deleted
            props.getAllLogs();
        } catch (error) {
            console.error(error.message)
        }

    }

    return ( 
        <tr>
            <td>{formattedDate}</td>
            <td>{mode}</td>
            <td>{totalHours}</td>
            <td>{totalMiles}</td>
            <td>{licensePlate}</td>
            <td>
                <Button color="warning" onClick={() => navigate(`/update/${_id}`)}>Update</Button>
            </td>
            <td>
                <Button color="danger" onClick={handleDelete}>Delete</Button>
            </td>
        </tr>
     );
}
 
export default LogTableRow;