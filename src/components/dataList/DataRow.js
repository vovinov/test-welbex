import React from 'react';

import './datalist.css';

function DataRow({item}) {

    return (
        <tr>
            <td>{item.date}</td>
            <td>{item.name}</td>
            <td>{item.count}</td>
            <td>{item.distance}</td>
        </tr>
    )
}

export default DataRow;
