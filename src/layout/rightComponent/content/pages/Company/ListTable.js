import React from 'react' 
import ReactDOM from 'react-dom'
import {Table, Button, message} from 'antd'
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import FillTime from './FillTime'
import{getAction, postAction} from '@/axios'

const columns2 = [
    {
      title: '联系人',
      dataIndex: 'name',
    },
    {
      title: '单位',
      dataIndex: 'company'
    },
    {
      title: '手机',
      dataIndex: 'phone',
    },
    {
        title: '预约日期',
        dataIndex: 'dateTime'
    }
]

class ListTable extends React.Component{

    state = {
        columns: [
            {
              title: '联系人',
              dataIndex: 'name',
            },
            {
              title: '单位',
              dataIndex: 'company'
            },
            {
              title: '手机',
              dataIndex: 'phone',
            },
            {
                title: '预约日期',
                dataIndex: 'dateTime',
                render:(text,record) => (
                	text 
                	?
                	text 
                	: 
                	<span>
	                	<span style={{color:"red"}}>未联系</span>
	                	<span style={{color:"#1890ff",float:"right", cursor:"pointer"}} onClick={this.showModal.bind(this,"1", record)}>已联系?</span>
                	</span>
                )
            },
            {
                title: '体检日期',
                dataIndex: 'checkTime',
                render:(text, record) => (
                	text 
                	? 
                	text 
                	: 
                	<span>
	                	<span style={{color:"red"}}>未体检</span>
	                	<span style={{color:"#1890ff",float:"right", cursor:"pointer"}} onClick={this.showModal.bind(this,"2", record)}>已体检?</span>
                	</span>
                )
            }
        ],
        filters: {
            name:"",
	        company:"",
	        dateTime:"",
	        checkTime:""
        },
        data: [
               {
                   key:1,
                   id:"", // 标识
                   name:"李安安",//姓名
                   company:"某某单位名称",
                   phone:"13971689350",// 手机
                   dateTime:"",// 预约时间
                   checkTime:""//体检时间，如已经预约，尚未体检，此处返回""
               }
        ],
        data2: [
        	{
               key:1,
               id:"", // 标识
               name:"李安安",//姓名
               company:"某某单位名称",
               phone:"13971689350",// 手机
               dateTime:"2019/06/09"// 预约时间
            }
        ],
        pagination: {
            current:1,
            pageSize:10,
            showQuickJumper:true,
            total:null,
            showTotal:(total) =>(`共${total}条数据`)
        },
        currentRecord:null,
        visible: false,
        title:"",
    };

    componentDidMount(){
    	if (this.refs['table']) {
            const tableCon = ReactDOM.findDOMNode(this.refs['table'])
            const table = tableCon.querySelector('table')
            table.setAttribute('id', 'danwei')
        }
        this.getData();
    }
    
    showModal = (str, record) => {
    	this.setState({
    		title:str,
    		visible:true,
    		currentRecord:record
    	})
    }
    
    hideModal = () =>{
    	this.setState({
    		timeStr:"",
    		visible: false
    	})
    }

    getData = (current=this.state.pagination.current, pageSize=this.state.pagination.pageSize) => {
//      getAction("/order/query/list/v1",{
//          
//      }).then(
//          (res) => {
//          	let data = [];
//          	this.setState({
//              if (res.success) {
//                      data,
//                      pagination: {
//                          ...this.state.pagination,
//                          current,
//                          total:res.obj.total
//                      }
//                  })
//              } else {
//                  message.warn(res.obj)
//              }
//          }
//      )
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
                	title={() => (<Button type="primary" onClick={this.getDownLoadData}>导出预约列表</Button>)}
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
                
                <Table
					ref='table'
                    columns={columns2}
                    dataSource={this.state.data2}
                    pagination={false}
                    bordered
                    style={{display:"none"}}
                />
                
                {
                	this.state.visible
                	?
                	<FillTime 
                	record={this.state.currentRecord} 
                	title={this.state.title} 
                	visible={this.state.visible} 
                	hideModal={this.hideModal} 
                	getData={this.getData}
                	/>
                	:
                	null
                }
            </div>
        )
    }
}

export default ListTable