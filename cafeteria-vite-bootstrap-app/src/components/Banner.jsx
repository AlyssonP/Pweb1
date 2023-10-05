import { Carousel, Container, Image} from 'react-bootstrap';

let dataNull = {
    id: 1,
    src: "https://images.unsplash.com/photo-1602984338060-bfddce132ebc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "404",
    header: "Not found Itens",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. "}


const Banner = ({itens = [dataNull]}) => {
    return (
    <Container fluid="sm">
        <Carousel>
            {itens.map((item) => {
                return (
                <Carousel.Item key={item.id}>
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