import { useEffect, useState } from "react";

export default function view(props) {
    
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const fetchUsers = async () => {
            const res = await fetch(`https://jsonplaceholder.typicode.com/users/`+props.userId)
            const json = await res.json();
            setUsers(json);    
        }
        fetchUsers();
    }, []);
  
    return (
        <>
        <p>Props Value { props.userId }</p>
          <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <td>{ users.id }</td>
                </tr>
                <tr>
                    <th>Name</th>
                    <td>{ users.name }</td>
                </tr>
                <tr>
                    <th>Username</th>
                    <td>{ users.username }</td>
                </tr>
            </thead>
          </table>
        </>
    );
} 