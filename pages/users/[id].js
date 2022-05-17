
import { useRouter } from 'next/router';
import Layout from '../../components/layout';
import Link from 'next/link';
import ViewUser from '../../components/users/view';

const UserDetails = () => {
    const router = useRouter();
  return (
    <div>
        <Link href="/">
            <a className="btn btn-success mt-2">Go Back</a>
        </Link>
        <h1>User Details</h1>
        <ViewUser userId={router.query.id}></ViewUser>
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
  