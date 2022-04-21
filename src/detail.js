/* eslint-disable */
import React,{useState} from 'react';
import { Button } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';


function DetailPage(props){

    let {id} = useParams();                    // 라우터의 useParams 훅
    let history = useHistory();
    let test


    return(
    props.shoes.map(function(a,i){
        test = {id}.id                            //{id}값을 숫자로 치환.
        if(a.id == test){                         // 배열의 id와 test가 일치하면 해당 객체를 이용하여 페이지생성
            return(
                <div key={i} className="container">
                <div className="row">
                <div className="col-md-6">
                    {a.img}
                </div>
                <div className="col-md-6 mt-4">
                    <h4 className="pt-5">{a.title}</h4>
                    <p>{a.content}</p>
                    <p>{a.price}원</p>
                    <Button variant="info">주문하기</Button> 
                    <Button style={{marginLeft : 5 +'px'}} variant="info" onClick={()=>{history.push('/')}}>뒤로가기</Button> 
                </div>
                </div>
                </div> 
            )
        }
        
    })

    
    )
    
  }

export default DetailPage