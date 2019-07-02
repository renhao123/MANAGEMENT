import React from 'react' 
import {Table, Button, Modal,List, message} from 'antd'
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
                render:(text) => (
                	text 
                	?
                	text 
                	: 
                	<span>
	                	<span style={{color:"red"}}>未联系</span>
	                	<span style={{color:"#1890ff",float:"right", cursor:"pointer"}} onClick={this.showModal.bind(this,"1")}>已联系?</span>
                	</span>
                )
            },
            {
                title: '体检日期',
                dataIndex: 'checkTime',
                render:(text) => (
                	text 
                	? 
                	text 
                	: 
                	<span>
	                	<span style={{color:"red"}}>未体检</span>
	                	<span style={{color:"#1890ff",float:"right", cursor:"pointer"}} onClick={this.showModal.bind(this,"2")}>已体检?</span>
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
        data2: [],
        pagination: {
            current:1,
            pageSize:10,
            showQuickJumper:true,
            total:null,
            showTotal:(total) =>(`共${total}条数据`)
        },
        currentRecord:null,
        visible: false,
        title:""
    };

    componentDidMount(){
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
    		visible: false
    	})
    }
    
    handleOk = () =>{
    	//关闭弹窗
    	this.hideModal();
    	// 判断是修改预约时间还是修改体检时间，修改成功后在回调中重新加载table
    	if (this.state.title === "1") { // 修改预约时间
    		this.getData()
    	} else { // 修改体检时间
    		this.getData()
    	}
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

    componentWillReceiveProps(nextProps){
        this.setState({
            filters:{...nextProps.filters}
        }, () =>{
            this.getData()
        })
    }

    render(){
    	let title = (this.state.title === "1")? "请选择单位预约日期":"请选择单位体检日期";
        return (
            <div style={{background:"white",padding:"15px",border:"1px solid #e8e8e8"}}>
                <Table
                	title={() => (<Button type="primary">导出预约列表</Button>)}
                    columns={this.state.columns}
                    dataSource={this.state.data}
                    pagination={this.state.pagination}
                    onChange={this.handleTableChange}
                    bordered
                />
                
                <Table
                    columns={columns2}
                    dataSource={this.state.data2}
                    pagination={false}
                    bordered
                    style={{display:"none"}}
                />
                
                <Modal
                    title={title}
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.hideModal}
                >
                    
                </Modal>
            </div>
        )
    }
}

export default ListTable