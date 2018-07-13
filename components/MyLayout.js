import Header from './Header'



const layoutStyle = {
    margin: 20, 
    padding: 15, 
    border: '1px solid #CCC',
    color: (125,75,200)

}

const Layout = (props) => (
    <div style={layoutStyle}> 
       <Header /> 
       {props.children}
     </div> 
)

export default Layout
