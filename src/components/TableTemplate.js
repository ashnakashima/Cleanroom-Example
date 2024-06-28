import React from 'react';

function TableTemplate({rows, columns, data}) {
    const generateTable = () => {
        let table = [];
        for(let i=0; i< rows; i++){
            let row = []
            for(let j=0; j< columns; j++){
                row.push(<td key={`${i}-${j}`}>| Row {i + 1} Col {j + 1} </td>);
            }
            table.push(<tr key={i}>{row}</tr>);
        }
        return table;
    };
    return (
        <div style={{fontSize:10}}>
            <table className="border">
                <tbody>
                {generateTable()}
                </tbody>
            </table>
        </div>

    );
}

export default TableTemplate;