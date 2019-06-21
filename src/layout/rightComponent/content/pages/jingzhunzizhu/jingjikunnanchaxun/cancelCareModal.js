import React, {Component} from 'react';
import {Modal, Form, Radio, Input, Button} from 'antd';
const FormItem = Form.Item
const RadioGroup = Radio.Group;
const {TextArea} = Input;

class Care extends Component {

    constructor(props){
        super(props);
        this.state = {
            data: [
                {
                    "code": "1",
                    "name": "真实家庭经济困难学生"
                }
            ],
            textareaVisible: true,
            disabled: false,
            attentionRemark: '',
            attentionReason: 1
        }
    }

    hideModal = () => {
        // 重置form表单
        this.props.form.resetFields()
        this.props.handleCancel()
    }
    handleOk = () => {
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                // console.log('Received values of form: ', values);
                // this.props.form.resetFields()
                // values可以取到对应的属性值
                // 调接口发送请求
                this.props.handleOk({
                    attentionRemark: this.state.attentionRemark,
                    attentionReason: this.state.attentionReason
                });
                // 重置form表单
                this.props.form.resetFields();
                this.setState({
                    attentionRemark: '',
                    attentionReason: 1
                })
            }
        });

    }
    // 显示底部的textarea
    handleChange = (e) => {
        let choose = e.target.value;
        this.setState({
            textareaVisible: false,
            attentionReason: choose
        })
    };

    handlerBlurTips = (e) => {
        let value = e.target.value;
        if (value.length > 15) {
            this.setState({
                disabled: true
            });
        } else {
            this.setState({
                attentionRemark: value,
                disabled: false
            });
        }
    };

    render() {
        const {getFieldDecorator} = this.props.form
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
                    title="设置取消关注原因"
                    visible={this.props.visible}
                    onOk={this.handleOk}
                    onCancel={this.hideModal}
                    okText="确认"
                    cancelText="取消"
                    footer={null}
                >
                    <div style={{padding: '0 30px'}}>
                        <Form>
                            <FormItem label='选择原因' {...formItemLayout}>
                                {getFieldDecorator('reason',
                                    {
                                        initialValue: '1'
                                    }
                                )(
                                    <RadioGroup onChange={(e) => {
                                        this.handleChange(e)
                                    }}>
                                        {
                                            this.state.data.map((item, index) => (
                                                <Radio
                                                    key={index}
                                                    title={item.name}
                                                    value={item.code}
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
                                    // {
                                    //     initialValue:'年级'
                                    // }
                                )(
                                    <TextArea rows={4} placeholder='请输入原因（不超过15个字）' onChange={(e) => {
                                        this.handlerBlurTips(e)
                                    }}/>
                                )}
                            </FormItem>
                            <FormItem style={{textAlign: 'right'}}>
                                <Button onClick={this.handleOk} type='primary'
                                        disabled={this.state.disabled}>确认</Button>
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