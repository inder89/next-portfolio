import Link from 'next/link';
import Layout from '../components/Layout';
import MapView from '../components/MapView';
import MapStyled from '../components/styled/MapStyled';

export default () => (
  <div>
    <Layout>
      <MapStyled>
        <MapView />
      </MapStyled>
    </Layout>
  </div>
);
