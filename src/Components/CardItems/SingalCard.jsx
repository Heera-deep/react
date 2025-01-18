import React, { useEffect, useState } from 'react'

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

const SingalCard = () => {
    const storedCardData = localStorage.getItem('selectedCard');
    const cardData = storedCardData ? JSON.parse(storedCardData) : null;

  return (
    <>

<Container className=' py-5'>
    {cardData ? (
    
    <Card style={{ width: '38rem' }} >
                      <Card.Img variant="top" className='cardImgs' src={cardData.img} />
                      <Card.Body>
                      <div className='d-flex justify-content-between'>
                      <Card.Title>{cardData.cardTitle}</Card.Title>
                            <Card.Title>ID {cardData.id}</Card.Title>
                       </div>
                        <Card.Title>Price {cardData.price}</Card.Title>
    
                        <Card.Text>
                          {cardData.content}
                        </Card.Text>
                      </Card.Body>
                    </Card>      
                     ) : (
                        <p>Loading...</p>
                      )}
</Container>

    </>
  );
}

export default SingalCard
