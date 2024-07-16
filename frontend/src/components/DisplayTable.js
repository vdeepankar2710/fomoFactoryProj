import React, { useEffect, useState } from 'react'
import './DisplayTable.css'

export default function DisplayTable(props) {

    return (
        <div className='display-table-container'>
            <div className='table-container'>
                <table>
                    {props.tableHeaders && props.tableHeaders.map((header, count) => {
                        if (count > 6) {
                            return null;
                        }
                        return (
                            <th key={`${header.name}${header.id}`}>
                                {header.label}
                            </th>
                        );
                    })}
                    {props.tableData && props.tableData.map((rowData, rowCount) =>
                        <tr key={`row-${rowCount}`}>
                            {props.tableHeaders &&
                                props.tableHeaders.map((header, count) =>
                                {
                                    if (count > 6) return;
                                    return(<td key={`${header.name}${header.id}`}>
                                        {rowData[`${header.name}`]}{ (typeof rowData[`${header.name}`]==='boolean')?(rowData[`${header.name}`===true]) ?"Yes":"No":""}
                                    </td>)
                                    }
                                )
                            }
                        </tr>
                    )}
                </table>
            </div>
        </div>
    )
}