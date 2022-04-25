/*eslint-disable */

import React,{useContext, useState} from 'react';
import './App.css';
import { Navbar,Nav,NavDropdown,Form,Button,FormControl,Container } from 'react-bootstrap';
import item from './data.js'
import { Link, Route, Switch } from 'react-router-dom';
import Detail from './detail.js'
import axios from 'axios';
import Cart from './Cart.js'

let 재고context = React.createContext();        //props를 대신해서 쓸 context의 범위 생성


function App() {

  let [shoes, shoes변경] = useState(item);                    //중요데이터는 최상위 컴포넌트에서 관리하도록 하는것이 관습
  let [show, showChange] = useState(false);
  let [재고, 재고변경] = useState([10,11,12])
  
  return (

    // Nav bar
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home" >머니몰</Navbar.Brand>
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
        <재고context.Provider value={재고}>               {/*범위할당*/}
        {
        show === true
        ?<ItemList shoes={shoes}/>
        : null
        }
        </재고context.Provider>
        <Button variant="info" onClick={()=>{
          axios.get('https://codingapple1.github.io/shop/data2.json')           //axios를 이용한 ajax 요청
          .then((result)=>{
            ajax변경(result.data);
            shoes변경([...shoes, ...result.data]);
          })
          .catch(()=>{console.log('실패')})      
          }}>더보기</Button>
      {/* <MoreList ajax데이터={ajax데이터} />     */}
      </Route>
      

        {/* 상세페이지 */}

      <Route path='/detail/:id'>
        <Detail shoes={shoes} 재고={재고}/>
        {/* <MoreList ajax데이터={ajax데이터}/> */}
      </Route>

      <Route path="/cart">
        <Cart></Cart>
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
          let 재고 =useContext(재고context);                //context 사용
          return(
            <div className='col-md-4' key={i}>
              { item.img }
              <h4>{ item.title }</h4>
              <p>{ item.content } & { item.price }</p>
            {재고[i]}
            </div>
          )
        })
        }
      </div>
    

    </div>
  )
}

// function MoreList(props){
//   return(
//     <div className='container'>
//       <div className='row'>
//         { props.ajax데이터.map(function(b,i){
//           return(
//             <div className='col-md-4' key={i}>
//               <h4>{ b.title }</h4>
//               <p>{ b.content } & { b.price }</p>
              
//             </div>
            
//           )
//         })
//         }
//       </div>
//     </div>
//   )
// }

export default App;
