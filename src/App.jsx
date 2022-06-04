import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { connect } from 'react-redux'
import LeftMenu from './Components/Menu/LeftMenu'
import Test from './Components/Test'
import { Spin } from 'antd'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)
  const nav = useSelector(state => state.nav)
  const {isValidating, isAuthenticated, token} = useSelector(state => state.auth)
  
  console.log({nav})
  const {keyItem} = nav

  return (
    <div className="App" style={{
      ...containerStyles,
      flexDirection: 'row',
      alignItems: 'flex-start'
    }}>
        {
          isValidating ? 
           <Spin tip="LOADING..." />
           :
           <BrowserRouter>
              <Routes>
                  <Route 
                    exact={true}
                    path='/option1'
    
                    // element={
                    //   token && isAuthenticated && !isValidating ?
                    //     <Navigate to='/dashboard' />
                    //     : isValidating ? <Spinner /> : <Navigate to='/login' />
                    // }
                    element ={<Test id={'/option1'}/>}
                  />
                  <Route 
                    exact={true}
                    path='/'
    
                    // element={
                    //   token && isAuthenticated && !isValidating ?
                    //     <Navigate to='/dashboard' />
                    //     : isValidating ? <Spinner /> : <Navigate to='/login' />
                    // }
                    element ={<LeftMenu/>}
                  />
              </Routes>
           </BrowserRouter>
        }
    </div>
  )
}

// JSS Styles
const containerStyles = {
  boxSizing: 'border-box',
  margin: 0,
  padding: 0,
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center'
}

// Prop Types
App.propTypes = {
  isAuthenticated: PropTypes.bool,
  isValidating: PropTypes.bool,
  dispatch: PropTypes.func
}

App.defaultProps = {
  isAuthenticated: false,
  isValidating: false,
  dispatch: () => null
}

// const mapStateToProps = state => ({
//   isAuthenticated: state.auth.isAuthenticated,
//   isValidating: state.auth.isValidating
// })

// const mapDispatchToProps = dispatch => ({ dispatch })

// export default connect(mapStateToProps, mapDispatchToProps)(App)

export default App
