import React from 'react' 
import ReactDOM from 'react-dom'
import {Table, Button, message} from 'antd'
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import{getAction} from '@/axios'

class ListTable extends React.Component{

    state = {
        columns: [
            {
              title: '联系人',
              dataIndex: 'contacts',
            },
			{
			  title: '手机',
			  dataIndex: 'contactPhone',
			},
            {
              title: '单位',
              dataIndex: 'company'
            },
            {
                title: '创建日期',
                dataIndex: 'createDate'
            }
        ],
		filters: {
		    contacts:"", // 联系人
			contactPhone:"", // 联系电话
		    company:"", // 单位名称
		    createDate:"" // 创建日期
		},
        data: [
       //         {
       //             key:1,
       //             groupBuyingId:"", // 标识
       //             contacts:"李安安",//联系人
				   // contactPhone:"13971689350",// 联系电话
       //             company:"某某单位名称",// 单位名称
       //             createDate:""// 创建日期
       //         }
        ],
        pagination: {
            current:1,
            pageSize:20,
            showQuickJumper:true,
            total:null,
            showTotal:(total) =>(`共${total}条数据`)
        },
    };

    componentDidMount(){
    	if (this.refs['table']) {
            const tableCon = ReactDOM.findDOMNode(this.refs['table'])
            const table = tableCon.querySelector('table')
            table.setAttribute('id', 'danwei')
        }
        this.getData();
    }

    getData = (current=this.state.pagination.current, pageSize=this.state.pagination.pageSize) => {
		let {company,contacts,contactPhone,createDate} = this.state.filters;
		getAction("/manage/project/groupBuying/query/v1",{
			company,contacts,contactPhone,createDate,pageSize,
			pageNum:current
		 }).then(
			 (res) => {
				if (res.success) {
					res.obj.forEach(
						(item, index) => {item.key = index + 1}
					)
					this.setState({
						data:res.obj
					})
				} else {
				 message.warn(res.obj)
				}
			 }
		 )
    };

	// table 分页点击
    handleTableChange = (pagination) => {
        this.setState({
            pagination:{
                ...this.state.pagination,
                current:pagination.current,
            }
        }, ()=>{
            this.getData()
        })
    };
    
    // 下载excel
    getDownLoadData = () => {
    	// 请求最新的已经预约的数据
    	// 在回调中下载excel
    	window.document.getElementById("downBtn").click();
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            filters:{...nextProps.filters}
        }, () =>{
            this.getData()
        })
    }

    render(){
        return (
            <div style={{background:"white",padding:"15px",border:"1px solid #e8e8e8"}}>
            
                <Table
					ref='table'
                	title={() => (<Button type="primary" onClick={this.getDownLoadData}>导出当前页面预约列表</Button>)}
                    columns={this.state.columns}
                    dataSource={this.state.data}
                    pagination={this.state.pagination}
                    onChange={this.handleTableChange}
                    bordered
                />
                
                <span style={{display:"none"}}>
	                <ReactHTMLTableToExcel
	                    id="downBtn"
	                    table="danwei"
	                    filename="单位预约列表"
	                    buttonText="导出单位预约列表"
	                    sheet=""
	                />
                </span>
            </div>
        )
    }
}

export default ListTable