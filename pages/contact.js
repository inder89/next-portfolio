import Link from 'next/link';
import Layout from '../components/Layout';
import MapView from '../components/MapView';
import MapStyled from '../components/styled/MapStyled';

export default () => (
  <div>
    <Layout title="Contact Me">
      <Link href="/">
        <a>Go to home</a>
      </Link>
      <MapStyled>
        <MapView />
      </MapStyled>
    </Layout>
  </div>
);
