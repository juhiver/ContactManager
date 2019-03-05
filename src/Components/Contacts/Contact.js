import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Consumer } from '../../Context';
import axios from 'axios';

import { Link } from 'react-router-dom';

class Contact extends Component {
    state = {
        showContactInfo: false
    };


    /* onShowClick = e => {
        this.setState({
            showContactInfo: !this.state.showContactInfo
        });
    }; */
    onDeleteClick = async (id, dispatch) => {
        try {
            await axios.delete(
                `https://jsonplaceholder.typicode.com/users/${id}`
            );
            dispatch({ type: 'DELETE_CONTACT', payload: id })
        }
        catch (e) {
            dispatch({ type: 'DELETE_CONTACT', payload: id })
        }


    };
    render() {
        const { id, name, email, phone } = this.props.contact;
        const { showContactInfo } = this.state;
        return (<Consumer>{
            value => {
                const { dispatch } = value;
                return (
                    <div className="card card-body mb-3 text-left">
                        <h4>
                            Name : {name}{''}

                            <Link to={`Contact/edit/${id}`}>
                                <i className="fas fa-pencil-alt" style={{
                                    cursor: 'pointer', float: "right", color: 'black', marginLeft: '2rem'
                                }}></i>
                            </Link>

                            <i className="fas fa-trash" style={{
                                cursor: 'pointer', float: "right", color: 'red',
                            }} onClick={this.onDeleteClick.bind(this, id, dispatch)}></i>



                            <i onClick={() => this.setState({ showContactInfo: !this.state.showContactInfo })}
                                className='fas fa-sort-down ' style={{ cursor: 'Pointer' }}></i>

                        </h4>
                        {
                            showContactInfo ? (
                                < ul className="list-group">
                                    <li className="list-group-item ">Email : {email}</li>
                                    <li className="list-group-item ">PhoneNumber : {phone}</li>
                                </ul>) : null
                        }

                    </div >
                );
            }}</Consumer>)
    }
}
Contact.propTypes = {
    contact: propTypes.string.isRequired,

};
export default Contact;
