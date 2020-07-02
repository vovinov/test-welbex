import React from 'react';
import DataRow from './DataRow';

import './datalist.css';

const DataList = ({data}) => {


    return (
        <tbody>
            {data.map((item, index) => {
                return (
                    <DataRow item={item} key={index} />
                )
            })}
        </tbody>
    )
}

export default DataList;