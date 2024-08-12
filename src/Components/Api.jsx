import React, { useState, useEffect } from 'react';
import { ButtonComponent } from './Button';

const Api = () => {
    const [userList, setUserList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [renderedList, setRenderedList] = useState(null); // Add state to hold the rendered list

    const fetchAllUser = async () => {
        try {
            setLoading(true);
            const apiRes = await fetch('https://dummyjson.com/users');
            const result = await apiRes.json();
            if (result?.users) {
                setUserList(result.users);
            } else {
                setUserList([]);
            }
        } catch (err) {
            console.log("Can't fetch all users");
        } finally {
            setLoading(false); // Set loading to false in both success and error cases
        }
    };

    useEffect(() => {
        fetchAllUser();
    }, []);

    const apiCall = () => {
        const output = loading ? (
            <h3>Loading...</h3>
        ) : (
            userList && userList.length > 0 ? (
                userList.map((userItem) => (
                    <li key={userItem.id}>{userItem.firstName} {userItem.lastName}</li>
                ))
            ) : (
                <p>No users found.</p>
            )
        );
        setRenderedList(output); // Set the output in the state
    }

    return (
        <div>
            <h1>Users</h1>
            <ButtonComponent apiCall={apiCall} />
            <ul>{renderedList}</ul> {/* Render the output here */}
        </div>
    );
}

export default Api;
