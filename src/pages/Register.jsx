import React, { useState } from 'react';
import { useNavigate } from 'react-router';

export const Register = () => {
    const navigate = useNavigate();
    const [formValues, setFormValues] = useState({
        name: "",
        email: "",
        username: "",
        password: "",
        confirmPassword: "",
    });

    const [errors, setErrors] = useState({
        nameError: "",
        emailError: "",
        usernameError: "",
        passwordError: "",
        confirmPasswordError: "",
    });

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const usernameRegex = /^\S+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    const redirectToHomepage = () => {
        navigate(`/`)
      }

    const handleChangeForm = (e) => {
        const value = e.target.value;
        const fieldName = e.target.name;

        if (fieldName == "name") {
            setFormValues({...formValues, name: value });
            setErrors({
                ...errors,
                nameError: value.length < 3 ? "Name must be at least 3 characters long" : null,
            });
        }

        if (fieldName == "email") {
            setFormValues({...formValues, email: value });
            setErrors({
                ...errors,
                emailError: !emailRegex.test(value.toLowerCase())? "Invalid email" : null,
            });
        }

        if (fieldName == "username") {
            setFormValues({...formValues, username: value });
            setErrors({
                ...errors,
                usernameError: !usernameRegex.test(value)? "Username cannot contain spaces" : null,
            });
        }

        if (fieldName == "password") {
            setFormValues({...formValues, password: value });
            setErrors({
                ...errors,
                passwordError: !passwordRegex.test(value)? "Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special case character" : null,
            });
        }

        if (fieldName == "confirmpassword") {
            setFormValues({...formValues, confirmPassword: value });
            setErrors({
                ...errors,
                confirmPasswordError: value !== formValues.password ? "Passwords do not match" : null,
            });
        }
    };

    const handleSubmitForm = (e) => {
        e.preventDefault();
        alert(`Form submission:\n
            Name: ${formValues.name},
            Email: ${formValues.email},
            Username: ${formValues.username},
            Password: ${formValues.password},
        `);
        redirectToHomepage();
    }
    return (
        <div className="container mt-5 pt-5">
            <form className="w-50 mx-auto text-start mt-5">
                <h2>Register</h2>
                <hr />
                <div className="mb-3">
                    <label for="exampleInputName" className="form-label">Name</label>
                    <input type="text" name="name" 
                            className={`form-control ${
                                errors.nameError ? "border-danger" : ""
                                }`}
                            onChange={handleChangeForm}
                            value={formValues.name}
                            id="exampleInputName" required aria-describedby="" />
                    {errors.nameError && (
                        <div id="nameHelp" className="form-text text-danger">
                            {errors.nameError}
                        </div>
                    )}
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" name="email"
                        onChange={handleChangeForm}
                        value={formValues.email}
                        className={`form-control ${
                            errors.emailError ? "border-danger" : ""
                            }`}
                        id="exampleInputEmail1" required aria-describedby="" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        {errors.emailError && (
                        <div id="nameHelp" className="form-text text-danger">
                            {errors.emailError}
                        </div>
                    )}
                </div>
                <div className="mb-3">
                    <label for="exampleInputUsername" className="form-label">Username</label>
                    <input type="text" name="username"
                    className={`form-control ${
                        errors.usernameError ? "border-danger" : ""
                        }`}
                    onChange={handleChangeForm}
                    value={formValues.username}
                    id="exampleInputUsername" required aria-describedby="" />
                    {errors.usernameError && (
                        <div id="nameHelp" className="form-text text-danger">
                            {errors.usernameError}
                        </div>
                    )}
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" name="password" 
                    className={`form-control ${
                        errors.passwordError ? "border-danger" : ""
                        }`}
                    onChange={handleChangeForm}
                    value={formValues.password}
                    id="exampleInputPassword1" required />
                    {errors.passwordError && (
                        <div id="nameHelp" className="form-text text-danger">
                            {errors.passwordError}
                        </div>
                    )}
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword2" className="form-label">Confirm Password</label>
                    <input type="password" name="confirmpassword"
                    className={`form-control ${
                        errors.confirmPasswordError ? "border-danger" : ""
                        }`}
                    onChange={handleChangeForm}
                    value={formValues.confirmPassword}
                    id="exampleInputPassword2" required />
                    {errors.confirmPasswordError && (
                        <div id="nameHelp" className="form-text text-danger">
                            {errors.confirmPasswordError}
                        </div>
                    )}
                </div>
                <div className="mb-3 form-check">
                    <input name="agreement" type="checkbox" className="form-check-input" required id="exampleCheck1" />
                        <label className="form-check-label" for="exampleCheck1">Agree to <a href="#">terms and conditions</a>.</label>
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleSubmitForm}>Register</button>
            </form>
        </div>
    );
}