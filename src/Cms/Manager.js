import React from 'react';
import AppContext from '../AppContext';
import ManagerNavBar from './ManagerNavBar';
import './Manager.css';



class Manager extends React.Component {
    static contextType = AppContext;
    render() {
        return (
            <div>
                <ManagerNavBar goToMenu={this.props.goToMenu} />
            </div>                       
        )
    };
}
export default Manager;



