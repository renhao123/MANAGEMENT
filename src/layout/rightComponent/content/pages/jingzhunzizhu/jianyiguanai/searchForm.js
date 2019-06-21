import React, { Component } from 'react';
import {Form,Select,Input,Button} from 'antd'
const FormItem=Form.Item
const Option=Select.Option
class Search extends Component {
    constructor(){
        super()
        this.state={
            yearSelect:[2018,2017,2016,2015],
            collge:['法学院','经济学院','管理学院'],
            major:['经济学','国际金融','金融学'],
            classList:['1001班','1002班','1003班'],
            poorLevel:['一级贫困','二级贫困'],
            fundingType:['国家一等助学金','国家二等助学金'],
            status:['已处理','未处理']
        }
    }
    handleSubmit=()=>{
        const {handles}=this.props
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                handles(values)
            //   console.log('Received values of form: ', values);
            }
        });
    }
    render() {
        const {getFieldDecorator}=this.props.form
        const {yearSelect,collge,major,classList,status}=this.state
        return (
            <React.Fragment>
                <Form layout='inline' style={{padding:'15px'}}>
                    <FormItem label='选择条件：'>
                        {getFieldDecorator('year',
                            // {
                            //     initialValue:'年级'
                            // }
                        )(
                            <Select style={{width:100}}  placeholder='年级'>
                                {yearSelect.map((item,index)=>(
                                    <Option key={index} value={item}>{`${item}级`}</Option>
                                ))}
                            </Select>
                        )}
                    </FormItem>
                    <FormItem >
                        {getFieldDecorator('collge',
                           
                        )(
                            <Select style={{width:100}} placeholder='院系选择'>
                                <Option value='0'>全部</Option>
                                {collge.map((item,index)=>(
                                    <Option key={index} value={item}>{item}</Option>
                                ))}
                            </Select>
                        )}
                    </FormItem>
                    <FormItem >
                        {getFieldDecorator('major',
                            
                        )(
                            <Select style={{width:100}} placeholder='专业选择'>
                                <Option value='0'>全部</Option>
                                {major.map((item,index)=>(
                                    <Option key={index} value={item}>{item}</Option>
                                ))}
                            </Select>
                        )}
                    </FormItem>
                    <FormItem >
                        {getFieldDecorator('class',
                            
                        )(
                            <Select style={{width:100}} placeholder='班级选择'>
                                <Option value='0'>全部</Option>
                                {classList.map((item,index)=>(
                                    <Option key={index} value={item}>{item}</Option>
                                ))}
                            </Select>
                        )}
                    </FormItem>                  
                    
                   
                    <FormItem >
                        {getFieldDecorator('status',
                            
                        )(
                            <Select style={{width:100}} placeholder='处理状态'>
                                <Option value='0'>全部</Option>
                                {status.map((item,index)=>(
                                    <Option key={index} value={item}>{item}</Option>
                                ))}
                            </Select>
                        )}
                    </FormItem>
                    <FormItem >
                        {getFieldDecorator('nameOrcode',
                            
                        )(
                            <Input placeholder='请输入姓名/一卡通/学号'></Input>
                        )}
                    </FormItem>
                    <FormItem >
                        {getFieldDecorator('nameOrcode',
                            
                        )(
                            <Button type="primary" icon="search" onClick={this.handleSubmit}>搜  索 </Button>
                        )}
                    </FormItem>
                </Form>

                
               
                
            </React.Fragment>
        );
    }
}
Search=Form.create()(Search)
export default Search;