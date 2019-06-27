import React from 'react'
import { Divider,Table, message, Popconfirm} from 'antd'

class TableList extends React.Component{
    state={
        columns: [
            {
                title: '账户',
                dataIndex: 'account'
            },
            {
              title: '姓名',
              dataIndex: 'name'
            },
            {
              title: '性别',
              dataIndex: 'sex',
              render:(text) => (text === "1"?"男":"女")
            },
            {
                title: '操作',
                dataIndex: 'handle',
                render:(text,record) => {
                    return (
                        <span>
                            <span style={{color:"#1890ff",cursor:"pointer"}}>编辑</span>
                            <Divider type="vertical" />
                            <span style={{color:"#1890ff",cursor:"pointer"}} onClick={this.initPassWord.bind(this, record)}>初始化密码</span>
                            <Divider type="vertical" />
                            <Popconfirm
                                title="确认删除当前账户？"
                                onConfirm={this.confirm.bind(this, record)}
                                okText="确认"
                                placement="topRight"
                            >
                                <span style={{color:"#1890ff",cursor:"pointer"}}>删除</span>
                            </Popconfirm>
                        </span>
                    )
                }
            }
        ],
        filters: {
            name:"",
            sex:"3"
        },
        data: [
            {
                key:1,
                id:"",
                account: "test1",
                name:"李医生",
                sex:"1",
            },
            {
                key:2,
                id:"",
                account: "test2",
                name:"韩医生",
                sex:"2"
            }
        ],
    }


    componentDidMount(){
        this.getData();
    }

    getData = () => {
        let params = {
            ...this.state.filters,
        }
        console.log('params:', params);
    };

    componentWillReceiveProps(nextProps){
        console.log(nextProps)
        this.setState({
            filters:{...nextProps.filters}
        }, () =>{
            this.getData()
        })
    }

    initPassWord = (record) =>{
        message.warning("功能开发中！！！")
        message.success("密码初始化成功，初始化密码为：!23qaz", 10)
    }

    confirm = (e) => {
        console.log(e);
        // 调取删除接口
        // 重新加载Table
        // 弹出成功提示
        message.success('删除成功');
    }

    render(){
        return(
            <div style={{background:"white",padding:"15px",border:"1px solid #e8e8e8"}}>
                <Table
                    columns={this.state.columns}
                    dataSource={this.state.data}
                    pagination={false}
                    bordered
                />
            </div>
        )
    }
}

export default TableList