import React, { useEffect } from 'react'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardObject from './CardObject.json'

import { NavLink } from 'react-router-dom';
import { MdOutlinePlace } from "react-icons/md";
import { CiTimer } from "react-icons/ci";
import { BiRupee } from "react-icons/bi";

const card = () => {

    useEffect(() => {
        const imgs = document.getElementsByClassName('cardImgs');
        const foodOff = document.getElementsByClassName('foodOff');
        Array.from(imgs).forEach((img) => {
          img.style.height = "230px";
          img.style.objectFit = "cover";
        });
        Array.from(foodOff).forEach((off) => {
          off.style.position = "absolute";
          off.style.color = "white";
          off.style.right = "6px";
          off.style.top = "6px";
          off.style.backgroundColor = "#080808b0";
          off.style.fontSize = "13px";
          off.style.padding = "6px 8px";
        });
      }, []);
      
    
  return (
    <>
<Container className=' py-5'>
  <h2 className='text-center mb-5'>Order food & groceries. Discover best restaurants.  </h2>
    <Row className='gy-4'>
             {CardObject.map((item)=>(
          <Col key={item.id}>
                    <Card style={{ width: '22rem' }} >
                  <Card.Img variant="top" className='cardImgs' src={item.img} />
                  <Card.Body>
          <div className='d-flex justify-content-between'>
                        <Card.Title>{item.cardTitle}</Card.Title>
                        <Card.Text className='foodOff'>{item.off}% off</Card.Text>
                        <h6 style={{fontSize:"15px", textWrap:"nowrap"}}>
                          <CiTimer />&nbsp;
                          {item.time}</h6>
          </div>
                        <Card.Title>
                          <del  style={{color:"black", fontWeight:"600", fontSize:'18px'}}> {item.price}</del>&nbsp;
                          <BiRupee />
                          <span style={{color:"red", fontWeight:"600", fontSize:'20px'}}>
  {Math.floor(item.price - (item.price * item.off / 100))}
  </span>
                           
                           </Card.Title>
                        <Card.Title>
                          <MdOutlinePlace />&nbsp;
                          {item.place}</Card.Title>
                    <Card.Text>
                      {item.content}
                    </Card.Text>
                    <NavLink to="./SingalCard" onClick={() => {
            localStorage.setItem("selectedCard", JSON.stringify(item));
          }}
><Button variant="success" >Order Now</Button></NavLink>
                  </Card.Body>
                </Card>
          </Col>
                 ))}
    </Row>
</Container>
    </>
  )
}

export default card
