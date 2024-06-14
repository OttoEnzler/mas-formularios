import React from "react";
import './ShowFormData.css'

const ShowFormData = ({items}) => {
    return (
        <div>
            <h1>Your Form Data</h1>
            <table>
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>{items.name}</td>
                    </tr>
                    <tr>
                        <td>Lastname</td>
                        <td>{items.lastname}</td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td>{items.email}</td>
                    </tr>
                    <tr>
                        <td>Password</td>
                        <td>{items.password}</td>
                    </tr>
                    <tr>
                        <td>Confirm Password</td>
                        <td>{items.confirmPassword}</td>
                    </tr>   
                </tbody>
            </table>
        </div>

    );
}
export default ShowFormData;