import React from 'react' 
import {Table, Button, Modal,List, message} from 'antd'
import{getAction, postAction} from '@/axios'

class ListTable extends React.Component{

    state = {
        columns: [
            {
              title: '姓名',
              dataIndex: 'name',
            },
            {
              title: '性别',
              dataIndex: 'sex'
            },
            {
              title: '婚姻',
              dataIndex: 'marrige'
            },
            {
              title: '手机',
              dataIndex: 'phone',
            },
            {
                title: '身份证号码',
                dataIndex: 'idCard',
            },
            {
                title: '预约日期',
                dataIndex: 'dateTime',
            },
            {
                title: '体检日期',
                dataIndex: 'checkTime',
            },
            {
                title: '体检状态',
                dataIndex: 'orderState',
                render:(text) => (text === "1"?"未体检":"已体检")
            },
            {
                title: '操作',
                dataIndex: 'handle',
                render:(text,record) => {
                    if (record.orderState === "1") {
                        return (
                            <Button type="primary" onClick={this.checkOver.bind(this, record)}>完成</Button>
                        )
                    } else {
                        return(
                            <Button type="primary" disabled>已完成</Button>
                        )
                    }
                }
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
            //     orderState:"1",//当前订单状态 未体检1已体检2全部0
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
        this.getData();
    }

    getData = (current=this.state.pagination.current, pageSize=this.state.pagination.pageSize) => {
        let customerSex = (this.state.filters.sex === "3") ? "" : this.state.filters.sex;
        let customerMarried = (this.state.filters.marrige === "2") ? "" : this.state.filters.marrige;
        let orderState = (this.state.filters.orderState === "0") ? "" : this.state.filters.orderState;
        getAction("/order/query/list/v1",{
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
        postAction("/order/check/create/v1",{
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
        return (
            <div style={{background:"white",padding:"15px",border:"1px solid #e8e8e8"}}>
                <Table
                    columns={this.state.columns}
                    dataSource={this.state.data}
                    pagination={this.state.pagination}
                    onChange={this.handleTableChange}
                    bordered
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
            </div>
        )
    }
}

export default ListTable