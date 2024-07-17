import React, { useEffect, useState } from 'react'
import './Dashboard.css';
import { getStocks } from '../service/stockGetService';
import { connect } from 'react-redux';
import { stockAction, stockSymbolAction } from '../actions/actions';
import { options, headers } from '../constants/common-constants';
import Select from 'react-select'
import DisplayTable from '../components/DisplayTable'


function Dashboard(props) {
    console.log('props in Main container',props);
    const [selectedStockSymbol, setSelectedStockSymbol] = useState(options[0]);
    const handleSymbolSelect = (item) => {
        setSelectedStockSymbol(item);
    }

    const handleStockGet = () => {
        getStocks(selectedStockSymbol||"").then((res) => {
            if (res.data && res.data.stocks) {
                props.stockAction([...res.data.stocks])    
            }
        }).catch((err) => {
            throw err
        })
    } 

    useEffect(() => {
        handleStockGet()
    }, [selectedStockSymbol])

    useEffect(() => {
        setInterval(() => {
        handleStockGet()
        }, 5000) 
    }, [])

    


    return (
        <div className='dashboard'>
            <Select
                options={options}
                defaultValue={selectedStockSymbol}
                onChange = {(item)=>handleSymbolSelect(item)}
            />
            <DisplayTable
                tableData={props.stockArr || []}
                tableHeaders={headers}
            />
        </div>
    )
}

const mapStateToProps = (state) => {
    // console.log("state",state)
   return {
       stockArr: state.stocks && state.stocks.stock
   };
};
const mapDispatchToProps = (dispatch) => {
   return {
        stockAction: (data) => dispatch(stockAction(data)),
        stockSymbolAction:(data)=>dispatch(stockSymbolAction(data)),
   };
};
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);