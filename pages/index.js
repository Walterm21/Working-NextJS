import Link from 'next/link'
//import Header from '../components/Header.js'
//import MyLayout from '../components/MyLayout.js'
import Layout from '../components/MyLayout.js';


const PostLink = (props) => (
  <li> 
    <Link as={`/p/${props.id}`} href={`/post?title=${props.title}` }> 
      <a> {props.title}</a> 
    </Link> 
  </li> 
)

export default () =>
  <Layout>
    <h1>Mischief Managed</h1> 
      <ul> 
        <PostLink id="hello-nextjs" title="Hello Next.js" /> 
        <PostLink id="learn-nextjs" title="Learn Next.js is awesome"/> 
        <PostLink id="deploy-nextjs" title="Deploy apps with your heart"/> 
      </ul>
  </Layout> 
