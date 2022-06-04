import React, { useState } from 'react';
import 'antd/dist/antd.css';
// import './index.css';
import { Menu, Button } from 'antd';
import Test from '../Test';
import {setItem} from '../../Redux/Reducers/navReducer'
import { BrowserRouter, Route, Routes, Navigate, useNavigate } from 'react-router-dom'


import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons';
import { useDispatch } from 'react-redux';


function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem('Option 1', '/option1', <PieChartOutlined />),
  getItem('Option 2', '/option2', <DesktopOutlined />),
  // getItem('Option 3', '3', <ContainerOutlined />),
  getItem('Navigation One', 'sub1', <MailOutlined />, [
    getItem('Option 5', '5'),
    getItem('Option 6', '6'),
    getItem('Option 7', '7'),
    getItem('Option 8', '8'),
  ]),
  getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
    getItem('Submenu', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')]),
  ]),
];

const LeftMenu = () => {
    const [collapsed, setCollapsed] = useState(false);
    const dispatch = useDispatch()
    let navigate = useNavigate();
    // const [item, setItem] = useState('1');

    
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const setKey = e => {
    
      console.log(e)
      // dispatch(setItem(e.key))
      // <Navigate to='/option1' />
      navigate(`${e.key}`)
  }


  return (
    <div
      style={containerStyles}
    >
     
      <Menu
        defaultSelectedKeys={['1']}
        onSelect={e => setKey(e)}
        mode="inline"
        theme="light"
        inlineCollapsed={collapsed}
        items={items}
        style={{...menuStyles, width: collapsed ? null : '280px' }}
      />
       <Button
        type="primary"
        onClick={toggleCollapsed}
        style={toggleStyles}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
        
      
    </div> 
  );
};


// JSS Styles
const toggleStyles = {
    marginTop: '8px',
//     padding: '20px',
    borderRadius: '0 10px 10px 0',
//     outline: 'none',
    pointerEvents: 'auto'
  }

const containerStyles = {
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
    height: '100%',
    pointerEvents: 'none',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  }
  const menuStyles = {
    maxWidth: '360px',
    height: '100%',
    pointerEvents: 'auto'
  }

export default LeftMenu;