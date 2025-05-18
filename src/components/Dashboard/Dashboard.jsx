import React from 'react';
import { useLoaderData } from 'react-router';
import UserListTable from '../UserListTable/UserListTable';

const Dashboard = () => {

    const allUsersList = useLoaderData()

    return (
        <div className='lg:w-9/12 mx-auto my-10 p-1'>
            <h3 className='py-5 text-2xl font-rancho'>Dashboard</h3>

            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Mail</th>
                        </tr>
                    </thead>
                    {
                        
                        allUsersList.map(user => <UserListTable user={user}></UserListTable>)
                    }
                </table>
            </div>
        </div>
    );
};

export default Dashboard;