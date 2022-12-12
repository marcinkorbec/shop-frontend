import Card from 'react-bootstrap/Card';
import './ProductCardHomepage.css';

export const ProductCard = (width) => {
  return (
    <Card style={width}>
      <div className='card-img-container'>
        <Card.Img variant='top' src={require('../../assets/img/Zdjęcie produktu.png')} />
      </div>
      <Card.Body>
        <Card.Title>Długa dwuliniowa nazwa produktu</Card.Title>
        <Card.Text>
          <span id='card-price'>1 119,00</span>&nbsp; <span id='zl'>zł</span>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
