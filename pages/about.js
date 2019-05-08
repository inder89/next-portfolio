import Link from 'next/link';
import Layout from '../components/Layout';

export default () => (
  <Layout title="About">
    <Link href="/">
      <a>Go to home</a>
    </Link>
    <p>Greg Luke</p>
    <img src="/static/greg.jpg" alt="this is the owner" height="200px" />
  </Layout>
);
