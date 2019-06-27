import React from 'react'
import Filter from './Filter'
import TableList from './TableList'

class Account extends React.Component{

    state= {
        filters: {
            name:"",
            sex:"3"
        },
        addNum: 0
    }

    setFilters = (filters) => {
        this.setState({
            filters
        })
    }

    setAddNum = () => {
        this.setState({
            addNum:this.state.addNum + 1
        })
    }

    render () {
        return (
            <div style={{width:"100%", padding:"15px"}}>
                <Filter setFilters = {this.setFilters} setAddNum = {this.setAddNum} />
                <TableList filters = {this.state.filters} addNum={this.state.addNum} />
            </div>
        )
    }
}

export default Account