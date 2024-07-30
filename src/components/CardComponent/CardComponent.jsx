import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import "./CardComponent.css"
function CardComponent({name, img, url}) {
return (
    <Card className='Card_div'>
    <Card.Img className='Card-img' variant="top" src={img} />
    <Card.Body>
        <Link to={url}>
        <Button  variant="primary" className='button mt-0'>{name}</Button>
        </Link>
    </Card.Body>
    </Card>
);
}

export default CardComponent;