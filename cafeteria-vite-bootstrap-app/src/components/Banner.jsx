import { Carousel, Container, Image} from 'react-bootstrap';

const Banner = () => {
    let itensCororsel = [
        {   
            src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            alt: "Café",
            header: "Primeira imagem",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. "
        },
        {   
            src: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            alt: "Café",
            header: "Segunda imagem",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. "
        },
        {   
            src: "https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            alt: "Café",
            header: "Terceira imagem",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. "
        },
    ];

    return (
    <Container fluid="sm">
        <Carousel>
            
            {itensCororsel.map((item, i) => {
                return (
                <Carousel.Item key={i}>
                    <Image 
                        className="imgCarousel"
                        fluid 
                        src={item.src}
                        alt={item.alt}
                    />
                    <Carousel.Caption>
                        <h3>{item.header}</h3>
                        <p>{item.description}</p>
                    </Carousel.Caption>
                </Carousel.Item>
                );   
            })}
            
        </Carousel>
    </Container>

  )
}

export default Banner