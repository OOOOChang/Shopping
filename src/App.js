/*eslint-disable */

import React,{useState} from 'react';
import './App.css';
import { Navbar,Nav,NavDropdown,Form,Button,FormControl,Container } from 'react-bootstrap';
import item from './data.js'
import { Link, Route, Switch } from 'react-router-dom';
import Detail from './detail.js'

function App() {

  let [shoes, shoes변경] = useState(item);                    //중요데이터는 최상위 컴포넌트에서 관리하도록 하는것이 관습
  let [show, showChange] = useState(false);
  
  return (

    // Nav bar
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">머니몰</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>홈</Nav.Link>
              <Nav.Link>쇼핑</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>


    <Switch>
      {/* 메인페이지 */}

      <Route exact path='/'>
        <Mainpage show={show} showChange={showChange} />
      
        {
        show === true
        ?<ItemList shoes={shoes}/>
        : null
        }
      </Route>

        {/* 상세페이지 */}

      <Route path='/detail/:id'>
        <Detail shoes={shoes} />
      </Route>

      <Route path='/:id'>
        <div>아무거나</div>
      </Route>
      
    </Switch>    
    </div>
  );
}



function Mainpage(props){
  return(
    <div className='jumbo'>
      <div className='jumbotitle'>
        <p>20% 시즌 할인!</p>
      </div>
      <div className='jumbotext'>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for calling<br />
          extra attention to featured content or information.
        </p>
      </div>
      <div className='jumbobtn'>
        <p>
          <Button onClick={()=>{ props.showChange(!props.show)}} variant="info">할인상품 보기</Button>
        </p>
      </div>
    </div>
  )
}


function ItemList(props){
  return(
    <div className='container'>
      <div className='row'>
        { props.shoes.map(function(item,i){
          return(
            <div className='col-md-4' key={i}>
              { item.img }
              <h4>{ item.title }</h4>
              <p>{ item.content } & { item.price }</p>
            </div>
          )
        })
        }
      </div>
    </div>
  )
}

export default App;
