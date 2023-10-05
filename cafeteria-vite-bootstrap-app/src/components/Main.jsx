import {Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useState } from 'react';

import Banner from "./Banner";

import "./Main.css";

const Main = () => {
  let itensCororsel = [
    {   
        id: 1,
        src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        alt: "Café",
        header: "Primeira imagem",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. "
    },
    {   
        id: 2,
        src: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        alt: "Café",
        header: "Segunda imagem",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. "
    },
    {   
        id: 3,
        src: "https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        alt: "Café",
        header: "Terceira imagem",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. "
    },
  ];

  let itensCard = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1523368749929-6b2bf370dbf8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Card Title",
      text:"Some quick example text to build on the card title and make up the bulk of the card's content.",
      textButton: "Go somewhere"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1426260193283-c4daed7c2024?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1776&q=80",
      title: "Card Title",
      text:"Some quick example text to build on the card title and make up the bulk of the card's content.",
      textButton: "Go somewhere"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1504087697492-238a6bf49ce8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Card Title",
      text:"Some quick example text to build on the card title and make up the bulk of the card's content.",
      textButton: "Go somewhere"
    },
  ];

  const [contador, setContador] = useState(1);

  const [stateBtnLogin, setStateBtnLogin] = useState("primary");

  const handleClickContador = (event) => {
    console.log(`Contador: ${contador}.`);
    setContador(contador + 1);
  };

  const handleClickLogin = (event) => {
    console.log("Login");
    setStateBtnLogin("success");
  }

  return (
  <main>
    {/* <Banner/> */}
    <p>Contador é: {contador}</p>
    <Button variant="primary" onClick={handleClickContador}>
      Contar
    </Button>

    <p>João</p>
    <Button variant={stateBtnLogin} onClick={handleClickLogin}>
      Login
    </Button>

    <Banner itens={itensCororsel}/>

    <Container className="mt-4">
      <Row>
        {itensCard.map((item) => {
          return (
            <Col key={item.id}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={item.src} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.text}</Card.Text>
                  <Button variant="primary">{item.textButton}</Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>

  </main>
  )
}

export default Main