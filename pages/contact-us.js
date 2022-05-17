import Head from "next/head";
import Link from "next/link";

export default function contactUs({ users }) {
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
          <Head>
            <title>Contact Us</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          </Head>
          <p>Contact Us</p>
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

contactUs.getLayout = function getLayout(page) {
    return (
      <Layout>
        <NestedLayout>{page}</NestedLayout>
      </Layout>
    )
  }

  contactUs.getInitialProps = async (ctx) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const json = await res.json()
    return { 
      users : json 
    }
  }
  