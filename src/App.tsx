import React, { useState, ChangeEvent, useEffect } from "react";
import TodoLayout from "./component/layout/todoLayout";
import CustomTextInput from "./component/TextInput/CustomTextInput";
// import Button from "./component/Button/Button";
import TodoList, { ITodoMap } from "./component/List/TodoList";
import { Col, DatePicker, Input, message, Row , Button, Checkbox , Form, Layout } from 'antd';
import TableLayout from "./component/Table/TableLayout";
import { UserOutlined , LockOutlined } from '@ant-design/icons';
import './style/globalStyle.css';

function App() {
  
  const [loading,setLoading] = useState(false);
  
  const [username,setUsername] = useState<string>('');
  
  const [password,setPassword] = useState<string>('');
  
  const [todoList, setTodoList] = useState<Array<ITodoMap>>([
    {
      todo: "hello",
      isCompleted: false,
    },
  ]);
 

  const [date, setDate] = useState<any>(null);

  const handleChange = (value:any) => {
    debugger;
    message.info(`Selected Date: ${value ? value.format('YYYY-MM-DD') : 'None'}`);
    setDate(value._d);
  };
  
  const [todo, setTodo] = useState<string>("");

  const onHandleChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setUsername(event.target.value);
  };
  const onHandlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setPassword(event.target.value);
  };
  const handleSubmit =()=>{
    console.log('handle submit hit');
    console.log('username and password: ',username,password);
  }

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };
  
  const Demo = () => {
    const onFinish = (values:any) => {
      console.log('Success:', values);
    };
  }
  
    const onFinishFailed = (errorInfo:any) => {
      console.log('Failed:', errorInfo);
    };
  
 
  useEffect(() => {
    const fetchRequest = async ()=>{
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      const todo = await response.json();
      debugger;
      return todo;
    }

    fetchRequest()
    .then((success)=>{
      debugger;
    })
    .catch((error)=>{
      debugger;
    })
    
  }, []);
  const onHandleClick = () => {
    if (todo) {
      setTodoList((prev) => [...prev, { todo, isCompleted: false }]);
      setTodo("");
    }
  };

  return (
    <div className='setBackground animated fadeIn delay-1s' >
    <Row style={{display:'flex',flexWrap:'wrap'}} >  
      <Col span={12}></Col>
        <Col
      style={{
        display:'flex',justifyContent:'center' , flexDirection:'column', height:'100vh' 
      }}
      span={12}
      >
        <div className='animated slideInDown delay-1s' >

      <Row className='slideInDown delay-1s'  style={{width:'50%',justifyContent:'center',display:'flex'}} >
      <img src={require('./assets/logo/logo.png')}  />
      </Row> 
        </div>
      {/* <Row style={{width:'50%'}} >
      <Input value={username} onChange={onHandleChange} className='onFocusChangeColor' size='middle' placeholder="Username" prefix={<UserOutlined />} />
      </Row>
      <br/>
      <Row style={{width:'50%'}} >
      <Input type='password' onChange={onHandlePasswordChange} required={true} className='onFocusChangeColor' size='middle' placeholder="Password" prefix={<LockOutlined />} />
      </Row>
      <Row style={{width:'50%',marginTop:10}} >
      <Button onClick={handleSubmit} className='animated slideInUp delay-2s' style={{width:'100%',backgroundColor:'#265D0C',borderColor:'white'}}  type='primary' size='large'  loading={loading} >
          Log In
        </Button>
      </Row> 
      */}
     <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      // onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >

      <Form.Item
        // label="Username"
        name="username"
        
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input 
        placeholder={'Username'}
        prefix={<UserOutlined />}
        />
      </Form.Item>

      <Form.Item
        // label="Password"
        
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >

        <Input.Password 
        placeholder={'Password'}
        prefix={<LockOutlined />}
        />
      </Form.Item>

      
      <Form.Item className='animated slideInUp delay-2s' >
        <Button style={{width:'100%',backgroundColor:'#265D0C',borderColor:'#265D0C'}}  type="primary" htmlType="submit">
          Login
        </Button>
      </Form.Item>
    
    </Form>
      </Col>
    </Row> 
  </div>

  );
}

export default App;
