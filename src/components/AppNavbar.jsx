import Navbar from 'react-bootstrap/Navbar'

const AppNavbar = ({theme = "light", ...props}) => {
  return (
    <Navbar bg={theme}>
      <Navbar.Brand href="#home">{props.title}</Navbar.Brand>
    </Navbar>
  )
}

export default AppNavbar;