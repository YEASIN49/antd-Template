import { configureStore } from '@reduxjs/toolkit'
import authReducer from './Reducers/authReducer'
import navReducer from './reducers/navReducer'
// import dashboardReducer from './reducers/dashboardReducer'
// import crudReducer from './reducers/crudReducer'

const store = configureStore({
    reducer: {
        nav: navReducer,
        auth: authReducer,
    }
})

export default store