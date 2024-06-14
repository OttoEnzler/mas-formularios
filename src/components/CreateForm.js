import React, { useState } from 'react';
import ShowFormData from "./ShowFormData";
import './CreateForm.css'

const CreateForm = (props) => {
    //states
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [newUser, setNewUser] = useState(null);
    const [showFormData, setShowFormData] = useState(false);

    // Manejar Errores
    const [nameError, setNameError] = useState("");
    const [lastnameError, setLastnameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    //crea el usuario
    const createUser = (e) => {
        e.preventDefault();
        const newUser = {
            name,
            lastname,
            email,
            password,
            confirmPassword
        }
        console.log(newUser);
        setNewUser(newUser);
        setShowFormData(true);
    }
    //para mostrar los datos del form
    const formData = () => {
        if (showFormData) {
            return <ShowFormData items={newUser} />
        } else {
            return "";
        }
    }
    //Manejar Errores
    const handleName = (e) => {
        setName(e.target.value);
        if (e.target.value.length < 2) {
            setNameError("El nombre debe tener al menos dos caracteres");
        }
        else {
            setNameError("");
        }
    }

    const handleLastname = (e) => {
        setLastname(e.target.value);
        if (e.target.value.length < 2) {
            setLastnameError("El apellido debe tener al menos dos caracteres");
        } else {
            setLastnameError("");
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if (e.target.value.length < 5) {
            setEmailError("El email debe tener al menos 5 caracteres");
        } else {
            setEmailError("");
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length < 8) {
            setPasswordError("La contraseña debe tener al menos 8 caracteres");
        }
        else {
            setPasswordError("");
        }
    }

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        if (e.target.value !== password) {
            setConfirmPasswordError("Las contraseñas no coinciden");
        }
        else {
            setConfirmPasswordError("");
        }
    }

    return (
        <div>
            <div>
                <form className="form" onSubmit={createUser}>
                    <div>
                        <label>Name: </label>
                        <input type="text" value={name} onChange={handleName} />
                        {
                            nameError ?
                                <p style={{ color: 'red' }}>{nameError}</p> :
                                ''
                        }
                    </div>
                    <div>
                        <label>Lastname: </label>
                        <input type="text" value={lastname} onChange={handleLastname} />
                        {
                            lastnameError?
                                <p style={{ color:'red' }}>{lastnameError}</p> :
                                ''
                        }
                    </div>
                    <div>
                        <label>Email: </label>
                        <input type="email" value={email} onChange={handleEmail} />
                        {
                            emailError?
                                <p style={{ color:'red' }}>{emailError}</p> :
                                ''
                        }
                    </div>
                    <div>
                        <label>Password: </label>
                        <input type="password" value={password} onChange={handlePassword} />
                        {
                            passwordError?
                                <p style={{ color:'red' }}>{passwordError}</p> :
                                ''
                        }
                    </div>
                    <div>
                        <label>Confirm Password: </label>
                        <input type="password" value={confirmPassword} onChange={handleConfirmPassword} />
                        {
                            confirmPasswordError?
                                <p style={{ color:'red' }}>{confirmPasswordError}</p> :
                                ''
                        }
                    </div>
                    <input type="submit" value="Create User" />
                </form>
            </div>
            <div>{formData()}</div>
        </div>
    );
}
export default CreateForm;