import React from 'react'
import{Input, Select, Button} from 'antd'
import AddAccount from './AddAccount'

const Option  = Select.Option


class Filter extends React.Component{

    state={
        filters: {
            name:"",
            sex:"3"
        },
       visible: false
    }

    nameChange = (e) => {
        this.setState({
            filters: {
                ...this.state.filters,
                name:e.target.value
            }
        })
    }

    sexChange = (value) =>{
        this.setState({
            filters: {
                ...this.state.filters,
                sex:value
            }
        })
    }

    search= () =>{
        this.props.setFilters(this.state.filters)
    }

    add = () => {
        this.setState({
            visible:true
        })
    }

    hideModal = () => {
        this.setState({
            visible:false
        })
    }

    render () {
        return (
            <div style={{marginBottom:"20px", background:"white", padding:"15px 10px",border:"1px solid #e8e8e8"}}>

                <span style={{textAlign:"center", lineHeight:"32px", margin:"0px 10px"}}>姓名：</span>
                <Input value={this.state.filters.name} placeholder="请输入姓名" style={{width:"150px"}} onChange={this.nameChange} />

                <span style={{textAlign:"center", lineHeight:"32px", margin:"0px 10px"}}>性别：</span>
                <Select value={this.state.filters.sex} style={{ width: "150px" }} onChange={this.sexChange}>
                    <Option value="1">男</Option>
                    <Option value="2">女</Option>
                    <Option value="3">全部</Option>
                </Select>

                <Button type="primary" icon="search" style={{marginLeft: "20px"}} onClick={this.search}>搜索</Button>

                <Button type="primary" icon="plus" style={{marginLeft: "20px"}} onClick={this.add}>新增账户</Button>

                {
                    this.state.visible
                    ?
                    <AddAccount visible={this.state.visible} hideModal={this.hideModal} setAddNum={this.props.setAddNum} />
                    :
                    null
                }
                
            </div>
        )
    }
}

export default Filter 
