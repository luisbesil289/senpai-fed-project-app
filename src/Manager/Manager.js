import React from 'react';
import AppContext from '../AppContext';
import ManagerNavBar from './Manager/ManagerNavBar';
import './Manager.css';



class Manager extends React.Component {
    static contextType = AppContext;
    render() {

        return (
            <div>
<ManagerNavBar />
            </div>
        )
    };
}
export default Manager;



