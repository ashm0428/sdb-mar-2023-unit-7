const PresidentRow = (props) => {
    const { first, last, year, passed } = props.president;
    return (
      <>
        <tr>
          <td>{first}</td>
          <td>{last}</td>
          <td>{year}</td>
          <td>{passed}</td>
          <td>
            {passed 
                ? passed - year 
                : 2023 - year}
          </td>
        </tr>
      </>
    );
  };
  
  export default PresidentRow;
  