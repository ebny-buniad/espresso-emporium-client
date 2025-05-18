import React, { use } from 'react';

const UserListTable = ({ user }) => {
    console.log(user)

    const { _id, name, address, email } = user

    return (
        <tbody>
            <tr>
                <th>{_id}</th>
                <td>{name}</td>
                <td>{address}</td>
                <td>{email}</td>
            </tr>
        </tbody>
    );
};

export default UserListTable;