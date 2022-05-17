import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function contactUs() {
    
        const [users, setUsers] = useState([]);
        useEffect(() => {
            const fetchUsers = async () => {
                const res = await fetch('https://jsonplaceholder.typicode.com/users')
                const json = await res.json();
                setUsers(json);    
            }
            fetchUsers();
        }, []);
  let listUsers = users.map(user => { 
    return ( <tr key={user.id}>
       <td>{user.id}</td>
       <td>{user.name}</td>
       <td>{user.username}</td>
       <td>{user.email}</td>
       <td>
         <Link href={ '/users/'+user.id }>
           <a className="btn btn-primary mt-2">Go</a>
         </Link>
       </td>
     </tr>)
   });
    return (
        <>
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {listUsers}
            </tbody>
          </table>
        </>
    );
} 