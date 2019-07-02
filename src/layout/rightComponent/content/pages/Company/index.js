import React from 'react'
import Filter from './Filter';
import ListTable from './ListTable'

class Company extends React.Component{
	
	state={
        filters: {
            name:"",
	        company:"",
	        dateTime:"",
	        checkTime:""
        }
    }

    setFilters = (filters) => {
        this.setState({
            filters
        })
    }
    
	render(){
		return (
			<div style={{width:"100%", padding:"15px"}}>
                <Filter setFilters = {this.setFilters} />
                <ListTable filters = {this.state.filters} />
            </div>
		)
	}
}


export default Company