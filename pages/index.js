import Link from 'next/link';
import Layout from '../components/Layout';
import Carousel from 'nuka-carousel';


const Index = () => {
  
  return (
  <Layout title="Home">
    
    <Link href="/about">
      <a>Go to about</a>
    </Link>
    <p>Welcome to the home page</p>
    <Carousel>
      <img src="../static/slide1.jpg" />
      <img src="../static/slide2.jpg" />
      <img src="../static/slide3.jpg" />
    </Carousel>
    <h2>Full Scope Optometric Services</h2>
  </Layout>
  )
}
export default Index;