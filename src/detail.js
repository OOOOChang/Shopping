/* eslint-disable */
import React,{useEffect, useState} from 'react';
import { Button } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import './detail.scss';


//styled-components 사용법, 첫자는 대문자
let Box = styled.div`                          
        padding : 20px;
        color : blue;
        `

function DetailPage(props){

    let [alertShow, alertShow변경] = useState(true);
    let [테스트, 테스트변경] = useState('');

    useEffect(()=>{
        let 타이머 = setTimeout(()=>{
            alertShow변경(false)
        }, 2000)
        return ()=>{ clearTimeout(타이머) }             //setTimeout의 오류를 방지하기위해 필수 
    },[alert]);             //특정 State가 변경될때를 지정하고 싶을때,  그냥 []만 쓰면, 실행될때 한번 작동하고 끝남


    
    let {id} = useParams();                    // 라우터의 useParams 훅
    let history = useHistory();
    let test
    


    return(
    props.shoes.map(function(a,i){
        test = {id}.id                            //{id}값을 숫자로 치환.
        if(a.id == test){                         // 배열의 id와 test가 일치하면 해당 객체를 이용하여 페이지생성
            return(
                <div key={i} className="container">
                    <div className='red'>Detail</div>
                    <input onChange={ (e)=>{테스트변경(e.target.value);console.log(테스트) } } />
                    {
                        alertShow === true
                        ? <AlertBox />
                        : null
                    }
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

function AlertBox(){
    return(
    <div className='my-alert'><p>재고가 얼마 남지 않았습니다!</p></div>
    )
}

export default DetailPage