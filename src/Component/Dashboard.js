import React, { Component } from 'react';
import axios from 'axios';
import './css/Dashboard.css'

class Dashboard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            users: [
                {
                    userId: '',
                    userName: '',
                    password: '',
                    mobileNo: '',
                    emailId: '',
                    authorize: '',
                    userRoll: { rollId: '', rollName: '' }
                },

            ]
        }

        // const headings = [
        //     userId,
        //     userName,
        //     password,
        //     mobileNo,
        //     emailId,
        //     authorize,
        //     userRoll
        // ];
    }

   
    componentDidMount() {
        var usersData = [];
        const token = localStorage.getItem('token')
        axios.get(`http://10.0.2.252:5000/users/getUsersByAuthType?authType=all`, {
            headers: {
                'authorization': `Bearer ${token}`,
            }
        })
            .then(res => {
                usersData = res.data;
                console.log(usersData);
                this.setState({ users:usersData });
            })
    }

    renderTableHeader() {
        let header = Object.keys(this.state.users[0])
        let index = header.indexOf("password");
        header.splice(index,1);
        return header.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    renderTableData = () => {
        return this.state.users.map((user, index) => {
            const u = user;
            if(u.userRoll == null){
                u.userRoll = '';
            }
           
            return (
                <tr key={u.userId}>
                    <td>{u.userId}</td>
                    <td>{u.userName}</td>
                    <td>{u.mobileNo}</td>
                    <td>{u.emailId}</td>
                    <td>{u.authorize}</td>
                    <td>{u.userRoll.rollName}</td>
                    <td>{<button type="text">Reject</button>}</td>
                    <td>{<button type="text">View</button>}</td>
                    <td>{<button type="text">Edit</button>}</td>
                </tr>
            )
            
        })
    }

    render() {
        return (
            <div>
                <input type="text" name="AllUsersType" /> 
                <input type="text" name="searchData" /> 

                <h2 id='title'>Users Data</h2>
                <div className="container">
                    <table id='students'>
                          <tbody>
                            <tr>{this.renderTableHeader()}</tr>
                            {this.renderTableData()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Dashboard;