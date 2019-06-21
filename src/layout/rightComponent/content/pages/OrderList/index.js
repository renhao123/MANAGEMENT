import React from 'react';
import Filter from './Filter';
import ListTable from './ListTable'

class OrderList extends React.Component {

    state={
        filters: {
            name:"",
            sex:"3",
            marrige:"2",
            dateTime:"",
            checkTime:"",
            orderState:"0"
        }
    }

    setFilters = (filters) => {
        this.setState({
            filters
        })
    }

    render() {
        return (
            <div style={{width:"100%", padding:"15px"}}>
                <Filter setFilters = {this.setFilters} />
                <ListTable filters = {this.state.filters} />
            </div>
        );
    }
}

export default OrderList;