import { Table } from "reactstrap";
import LogTableRow from "./LogTableRow";

const LogTable = (props) => {
    return ( 
        <>
        <h2>Driver's Log</h2>
        <Table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Mode</th>
                    <th>Total Hours</th>
                    <th>Total Miles</th>
                    <th>License Plate</th>
                </tr>
            </thead>
            <tbody>
                {props.driverLogs.map((driverLog, index) => (
                <LogTableRow key={index} index={index} driverLog={driverLog} token={props.token} getAllLogs={props.getAllLogs}/>
                ))}
            </tbody>
        </Table>
        </>
     );
}
 
export default LogTable;