
import { useRouter } from 'next/router';
import Layout from '../../components/layout';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const UserDetails = () => {
    const router = useRouter();
    const [user, setUser] = useState([]);

    useEffect(() => {
        async function fetchUser() {
        await fetch(`https://jsonplaceholder.typicode.com/users/${router.query.id}`)
            .then(res => res.json())
            .then(data => setUser(data))
        }
        fetchUser();
    }, []);
  return (
    <div>
        <Link href="/contact-us">
            <a className="btn btn-success mt-2">Go Back</a>
        </Link>
        <h1>User Details</h1>
        Hi {user.name}
        
    </div>
  )
}

export default UserDetails;

UserDetails.getLayout = function getLayout(page) {
    return (
      <Layout>
        <NestedLayout>{page}</NestedLayout>
      </Layout>
    )
  }
  