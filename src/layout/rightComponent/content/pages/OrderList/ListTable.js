import React from 'react' 
import ReactDOM from 'react-dom'
import {Table, Button, Modal,List, message} from 'antd'
import ReactHTMLTableToExcel from 'react-html-table-to-excel'
import{getAction, postAction} from '@/axios'

class ListTable extends React.Component{

    state = {
        columns: [
            {
              title: '姓名',
              dataIndex: 'name',
			  fixed: 'left',
			  width:100
            },
            {
              title: '性别',
              dataIndex: 'sex',
			  width:100
            },
            {
              title: '婚姻',
              dataIndex: 'marrige',
			  width:100
            },
            {
              title: '手机',
              dataIndex: 'phone',
			  width:150
            },
            {
                title: '身份证号码',
                dataIndex: 'idCard',
				className: "id-card-td",
            },
            {
                title: '预约日期',
                dataIndex: 'dateTime',
				width:150
            },
            {
                title: '体检日期',
                dataIndex: 'checkTime',
				width:150
            },
            {
                title: '体检状态',
                dataIndex: 'orderState',
				width:150,
				render: (text) => {
					if (text === "1") {
						return (<span>未体检</span>)
					} else if (text === "3") {
						return (<span>已取消</span>)
					} else if (text === "4") {
						return (<span>已体检</span>)
					}
				}
            },
            {
                title: '操作',
				fixed: 'right',
				width: 150,
                dataIndex: 'handle',
                render:(text,record) => {
                    if (record.orderState === "1") {
                        return (
                            <Button type="primary" onClick={this.checkOver.bind(this, record)}>体检完成</Button>
                        )
                    } else {
                        return(<span>-</span>)
                    }
                },
            }
        ],
        filters: {
            name:"",
            sex:"3",
            marrige:"2",
            dateTime:"",
            checkTime:"",
            orderState:"0"
        },
        data: [
            // {
            //     key:1,
            //     id:"", // 标识
            //     name:"李安安",//姓名
            //     sex:"1",//性别  男1女2全部3（移动端已定义，不可修改）
            //     marrige:"0",// 婚姻  未婚0已婚1全部2 （移动端已定义，不可修改）
            //     phone:"13971689350",// 手机
            //     idCard:"429001198904257217",// 身份证
            //     dateTime:"2019/6/21",// 预约时间
            //     checkTime:"2019/6/21",//体检时间，如已经预约，尚未体检，此处返回""
            //     orderState:"1",//当前订单状态 未体检1已体检4全部0
            //     projects:["基本检查","肛肠检查","前列腺检查","肠胃检查","四肢检查","眼科","儿科"]
            // }
        ],
        pagination: {
            current:1,
            pageSize:10,
            showQuickJumper:true,
            total:null,
            showTotal:(total) =>(`共${total}条数据`)
        },
        currentRecord:null,
        visible: false
    };

    componentDidMount(){
		if (this.refs['table']) {
		    const tableCon = ReactDOM.findDOMNode(this.refs['table'])
		    const table = tableCon.querySelector('table')
		    table.setAttribute('id', 'geren')
		}
        // this.getData();
    }
	
	// 下载excel
	getDownLoadData = () => {
		// let idCardTds = window.document.getElementsByClassName("id-card-td");
		// let i;
		// for (i = 0; i < idCardTds.length; i++) {
		// 	idCardTds[i].setAttribute("style","mso-number-format:'/\@'")
		// }
		if (window.document.body.clientWidth > 900) {
			window.document.getElementById("downLoadBtn").click();
		} else{
			message.warn("请在电脑上下载当前页面预约列表", 5)
		}
	}

    getData = (current=this.state.pagination.current, pageSize=this.state.pagination.pageSize) => {
        let customerSex = (this.state.filters.sex === "3") ? "" : this.state.filters.sex;
        let customerMarried = (this.state.filters.marrige === "2") ? "" : this.state.filters.marrige;
        let orderState = (this.state.filters.orderState === "0") ? "" : this.state.filters.orderState;
        getAction("/manage/order/query/list/v1",{
            customerName:this.state.filters.name,
            customerSex,
            customerMarried,
            appointmentTime:this.state.filters.dateTime,
            checkTime:this.state.filters.checkTime,
            orderState,
            pageNum: current,
            pageSize:pageSize
        }).then(
            (res) => {
                if (res.success) {
                    let data = [];
                    res.obj.orderInfoResponse.forEach(
                        (item, index) => {
                            data.push({
                                key:index + 1,
                                id:item.orderId,
                                name:item.customerName,
                                sex:item.customerSex,
                                marrige:item.customerMarried,
                                phone:item.customerPhone,
                                idCard:item.customerCard,
                                dateTime:item.appointmentTime,
                                checkTime:item.checkTime,
                                orderState:item.orderState,
                                projects:item.projects
                            })
                        }
                    )
                    this.setState({
                        data,
                        pagination: {
                            ...this.state.pagination,
                            current,
                            total:res.obj.total
                        }
                    })
                } else {
                    message.warn(res.obj)
                }
            }
        )
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

    checkOver = (record) =>{
        this.setState({
            currentRecord:record,
            visible:true
        })
    }

    handleOk = () => {
        postAction("/manage/order/check/create/v1",{
            orderId: this.state.currentRecord.id
        }).then(
            (res) => {
                if (res.success) {
                    this.setState({
                        visible:false
                    })
                    this.getData()
                } else {
                    message.warn(res.obj)
                }
            }
        )
    }

    handleCancel = () => {
        this.setState({
            visible:false
        })
    }

    render(){
		let perce = (window.document.body.clientWidth > 900) ? {x:"100%"}:{x:"200%"}
		
        return (
            <div className="personalList" style={{background:"white",padding:"15px",border:"1px solid #e8e8e8"}}>
                <Table
					ref='table'
					title={
						() => (<Button type="primary" onClick={this.getDownLoadData}>导出当前页面预约列表</Button>)
					}
                    columns={this.state.columns}
                    dataSource={this.state.data}
                    pagination={this.state.pagination}
                    onChange={this.handleTableChange}
                    bordered
					scroll={perce}
                />

                <Modal
                    title="项目明细"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    {
                        this.state.currentRecord
                        ?
                        <List
                            size="small"
                            bordered
                            dataSource={this.state.currentRecord.projects}
                            renderItem={(item, index) => <List.Item>{index+1}，{item}</List.Item>}
                        />
                        :
                        null
                    }
                </Modal>
				
				<span style={{display:"none"}}>
				    <ReactHTMLTableToExcel
				        id="downLoadBtn"
				        table="geren"
				        filename="个人预约列表"
				        buttonText="导出当前个人预约列表"
				        sheet=""
				    />
				</span>
            </div>
        )
    }
}

export default ListTable