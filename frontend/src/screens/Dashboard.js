import React, { useEffect, useState } from 'react'
import './Dashboard.css';
import { getStocks } from '../service/stockGetService';
import { connect } from 'react-redux';
import { stockAction, stockSymbolAction } from '../actions/actions';
import { options } from '../constants/common-constants';
import Select from 'react-select'

function Dashboard(props) {
    // console.log('props in Main container',props);
    const [selectedStockSymbol, setSelectedStockSymbol] = useState(options[0]);
    const handleSymbolSelect = (item) => {
        setSelectedStockSymbol(item);
    }
    useEffect(() => {

        getStocks(selectedStockSymbol.name ||"").then((res) => {
            console.log("res from alert actions API", res);
            // setAlertActionsLoading(false)
            if (res.data && res.data.data) {
                console.log("res in alert if", res.data.data);
                // setAlertActionsCount(res.data.data.length);
                props.alertAction(res.data.data)    
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
        </div>
    )
}


const mapStateToProps = (state) => {
    console.log("state",state)
   return {
        stockSymbol:state
   };
};
const mapDispatchToProps = (dispatch) => {
   return {
        stockAction: (data) => dispatch(stockAction(data)),
        stockSymbolAction:(data)=>dispatch(stockSymbolAction(data)),
   };
};
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);