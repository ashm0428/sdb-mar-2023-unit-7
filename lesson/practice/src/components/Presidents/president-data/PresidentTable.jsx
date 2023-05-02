import PresidentRow from "./PresidentRow";

const PresidentTable = (props) => {
    return (
        <>
        <h2>{props.tableTitle}</h2>
        <table>
        <thead>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Year</th>
                <th>Year Passed</th>
                <th>Age</th>
            </tr>
        </thead>
        <tbody>
            {props.presidentData.map((president) => <PresidentRow president={president}/> )}
            
        </tbody>
      </table>
      </>
    );
  };
  
  export default PresidentTable;
  