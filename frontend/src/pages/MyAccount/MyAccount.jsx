import React, { useEffect, useState } from 'react'
import api from "../../services/api";
import { Container } from './myAccountStyle';
import Header from "../../components/header/Header";

const MyAccount = () => {

    const [userDetail, setUserDetail] = useState("");
    const [isEditing, setIsEditing] = useState(false);
    const [updatedUserData, setUpdatedUserData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        birthday: "",
        password: "",
        confirmPassword: ""
    });
    const [passwordsMatch, setPasswordsMatch] = useState(true);

    useEffect(() => {
        api.get(`/getProfile`).then(({ data }) => {
            setUserDetail(data);

            setUpdatedUserData({
                firstName: data.first_name,
                lastName: data.last_name,
                email: data.email,
                birthday: data.birthday,
                password: "",
                confirmPassword: "",
            });
        });
    }, []);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleCancelClick = () => {
        setIsEditing(false);
        setUpdatedUserData({
            firstName: userDetail.first_name,
            lastName: userDetail.last_name,
            email: userDetail.email,
            birthday: userDetail.birthday,
            password: "",
            confirmPassword: "",
        });
    };

    const handleFieldChange = (fieldName, value) => {
        setUpdatedUserData((prevData) => ({
            ...prevData,
            [fieldName]: value,
        }));
    };

    const handleSaveClick = async () => {
        if (updatedUserData.password === updatedUserData.confirmPassword) {
            try {
                const response = await api.put(`/users`, updatedUserData);
                setIsEditing(false);
            } catch (error) {
                console.error(error);
            }
        } else {
            setPasswordsMatch(false);
        }
    };

    return (

        <Container>
            <form className='form-details'>
                <h2>My Account</h2>
                <div className="line"></div>
                <label>
                    First Name:
                    {isEditing ? (
                        <input type="text" value={updatedUserData.firstName} onChange={(e) => handleFieldChange("firstName", e.target.value)} />
                    ) : (
                        <span>{userDetail.first_name}</span>
                    )}
                </label>
                <label>
                    Last Name:
                    {isEditing ? (
                        <input type="text" value={updatedUserData.lastName} onChange={(e) => handleFieldChange("lastName", e.target.value)} />
                    ) : (
                        <span>{userDetail.last_name}</span>
                    )}
                </label>
                <label>
                    Email:
                    {isEditing ? (
                        <input type="text" value={updatedUserData.email} onChange={(e) => handleFieldChange("email", e.target.value)} />
                    ) : (
                        <span>{userDetail.email}</span>
                    )}
                </label>
                <label>
                    Birthday:
                    {isEditing ? (
                        <input type="date" value={userDetail.birthday ? updatedUserData.birthday.slice(0, 10) : ""} onChange={(e) => handleFieldChange("birthday", e.target.value)} />
                    ) : (
                        <span>{userDetail.birthday ? userDetail.birthday.slice(0, 10) : ""}</span>
                    )}
                </label>
                <label>
                    Password:
                    {isEditing ? (
                        <input type="password" value={updatedUserData.password} onChange={(e) => handleFieldChange("password", e.target.value)} />
                    ) : (
                        <span>******</span>
                    )}
                </label>

                {isEditing && (
                    <label>
                        Confirm Password:
                        <input type="password" value={updatedUserData.confirmPassword} onChange={(e) => handleFieldChange("confirmPassword", e.target.value)} />
                    </label>
                )}
            </form>
            <div className='group-button'>
                {isEditing ? (
                    <>
                        <button onClick={handleCancelClick}>Cancel</button>
                        <button onClick={handleSaveClick}>Save</button>
                    </>
                ) : (
                    <button onClick={handleEditClick}>Edit</button>
                )}
            </div>
        </Container>
    );
}

export default MyAccount;
