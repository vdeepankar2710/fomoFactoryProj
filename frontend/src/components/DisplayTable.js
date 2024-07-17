import React, { useEffect, useState } from 'react'
import './DisplayTable.css'

export default function DisplayTable(props) {
    return (
        <div className='display-table-container'>
            <div className='table-container'>
                <table>
                    {props.tableHeaders && props.tableHeaders.map((header, count) => {
                        return (
                            <th key={`${header.name}${header.id}`}>
                                {header.label}
                            </th>
                        );
                    })}
                    {props.tableData && props.tableData.map((rowData, rowCount) =>
                        <tbody key={`row-${rowCount}`}>
                            {props.tableHeaders &&
                                props.tableHeaders.map((header, count) =>
                                {  
                                    console.log(header)
                                    return (
                                        <td key={`${header.name}${header.id}`}>
                                        {rowData[`${header.name}`]}
                                    </td>)
                                    }
                                )
                            }
                        </tbody>
                    )}
                </table>
            </div>
        </div>
    )
}