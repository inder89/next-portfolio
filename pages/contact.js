import Link from 'next/link';
import Layout from '../components/Layout';

export default () => (
  <Layout title="About">
    
    <Link href="/" >
      <a>Go to home</a>
    </Link>
    <p>Javascript programmer</p>
    <img src="/static/JavaScript-logo.png" alt="JavaScript" height="200px" />
  </Layout>
)

