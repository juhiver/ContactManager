import React, { Component } from 'react'

class AddContact extends Component {

    constructor(props) {
        super(props);
        this.nameInput = React.createRef();
        this.emailInput = React.createRef();
        this.phoneInput = React.createRef();

    }
    onSubmit = e => {
        e.preventDefault();
        const contact = {
            name: this.nameInput.current.value,
            email: this.emailInput.current.value,
            phone: this.phoneInput.current.value
        }
        console.log(contact);
    }

    static defaultProps = {
        name: 'Abc',
        email: 'abc@gmail.com',
        phone: '12345678'
    };

    render() {
        const { name, email, phone } = this.props;

        return (
            <div className="rounded mb-3">
                <div className="card-header ">
                    <h4>Add Contact</h4>
                </div>
                <div className="card-body">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" className="form-control form-control-lg"
                                placeholder="Enter Name..." defaultValue={name} ref={this.nameInput} ></input>
                        </div>

                        <div className="form-group">
                            <label htmlFor="name">Email</label>
                            <input type="email" name="email" className="form-control form-control-lg"
                                placeholder="Enter Email..." defaultValue={email} ref={this.emailInput} ></input>
                        </div>

                        <div className="form-group">
                            <label htmlFor="name">Phone</label>
                            <input type="phone" name="phone" className="form-control form-control-lg"
                                placeholder="Enter Phone..." defaultValue={phone} ref={this.phoneInput}></input>
                        </div>
                        <input type="submit" value="Add Contact" className="btn  btn-success"></input>

                    </form>
                </div>
            </div >
        )
    }
}
export default AddContact;