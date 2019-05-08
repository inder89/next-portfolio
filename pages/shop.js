import Link from 'next/link';
import Layout from '../components/Layout';

export default () => (
  <Layout title="Shop">
    <Link href="/">
      <a>Go to home</a>
    </Link>
    <p>This is the shop page</p>
  </Layout>
);
