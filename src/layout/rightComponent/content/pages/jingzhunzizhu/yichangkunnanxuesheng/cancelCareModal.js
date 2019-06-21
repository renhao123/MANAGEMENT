import React, {Component} from 'react';
import {Modal, Form, Radio, Input, Button} from 'antd';

const FormItem = Form.Item
const RadioGroup = Radio.Group;
const {TextArea} = Input;

class Care extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    "code": "1",
                    "name": "真实贫困生"
                },
                {
                    "code": "2",
                    "name": "已取消资助资格"
                }
            ],
        }
    }


    hideModal = () => {
        this.props.handleCancel()
    }
    
    handleOk = () => {
        this.props.handleOk();

    }

    render() {
        const {getFieldDecorator} = this.props.form;
        const formItemLayout = {
            labelCol: {
                span: 4
            },
            wrapperCol: {
                span: 20
            },
        };
        return (
            <React.Fragment>
                <Modal
                    title="查看预警处理结果"
                    visible={this.props.visible}
                    onOk={this.handleOk}
                    onCancel={this.hideModal}
                    okText="确认"
                    cancelText="取消"
                    footer={null}
                >
                    <div style={{padding: '0 30px'}}>
                        <Form>
                            <FormItem label='处理原因' {...formItemLayout}>
                                {getFieldDecorator('reason',
                                    {
                                        initialValue: '1'
                                    }
                                )(
                                    <RadioGroup>
                                        {
                                            this.state.data.map((item, index) => (
                                                <Radio
                                                    key={index}
                                                    title={item.name}
                                                    value={item.code}
                                                    disabled={true}
                                                >
                                                    {item.name}
                                                </Radio>
                                            ))
                                        }
                                    </RadioGroup>
                                )}
                            </FormItem>
                            <FormItem label='备注' {...formItemLayout}>
                                {getFieldDecorator('mark',
                                    {
                                        rules: [{
                                            max: 15,
                                            message: '请输入不超过15个字',
                                        }]
                                    }
                                )(
                                    <TextArea rows={4} disabled={true}/>
                                )}
                            </FormItem>
                            <FormItem style={{textAlign: 'right'}}>
                                <Button onClick={this.handleOk} type='primary'>确认</Button>
                                <Button onClick={this.hideModal} style={{marginLeft: '10px'}}>取消</Button>
                            </FormItem>
                        </Form>
                    </div>


                </Modal>

            </React.Fragment>
        );
    }
}

Care = Form.create()(Care)
export default Care;