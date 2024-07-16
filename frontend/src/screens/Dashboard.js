import React, { useEffect, useState } from 'react'
import './Dashboard.css';
import { getStocks } from '../service/stockGetService';
import { connect } from 'react-redux';
import { stockAction, stockSymbolAction } from '../actions/actions';
import { options } from '../constants/common-constants';
import Select from 'react-select'
import DisplayTable from '../components/DisplayTable'


function Dashboard(props) {
    console.log('props in Main container',props);
    const [selectedStockSymbol, setSelectedStockSymbol] = useState(options[0]);
    const handleSymbolSelect = (item) => {
        setSelectedStockSymbol(item);
    }
    useEffect(() => {
        getStocks(selectedStockSymbol||"").then((res) => {
            if (res.data && res.data.stocks) {
                console.log("res in alert if", res.data.data);
                props.stockAction([...res.data.stocks])    
            }
        }).catch((err) => {
            throw err
        })
    }, [selectedStockSymbol])



    return (
        <div className='dashboard'>
            <Select
                options={options}
                defaultValue={selectedStockSymbol}
                onChange = {(item)=>handleSymbolSelect(item)}
            />
            <DisplayTable
                tableData={props.stockArr}
                // tableheaders={}
            />
        </div>
    )
}

const mapStateToProps = (state) => {
    // console.log("state",state)
   return {
    //    stockSymbol: state,
       stockArr: state.stocks && state.stocks.stocks && state.stocks.stocks.stock
   };
};
const mapDispatchToProps = (dispatch) => {
   return {
        stockAction: (data) => dispatch(stockAction(data)),
        stockSymbolAction:(data)=>dispatch(stockSymbolAction(data)),
   };
};
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);