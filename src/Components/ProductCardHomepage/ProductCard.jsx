import Card from 'react-bootstrap/Card';
import './ProductCardHomepage.css';

export const ProductCard = (width) => {
  const price = 1119;
  return (
    <Card style={width}>
      <div className='card-img-container'>
        <Card.Img variant='top' src={require('../../assets/img/Zdjęcie produktu.png')} />
      </div>
      <Card.Body>
        <Card.Title>Długa dwuliniowa nazwa produktu</Card.Title>
        <Card.Text>
          <span id='card-price'>{price.toLocaleString('pl-PL', { minimumFractionDigits: 2 })}</span>
          &nbsp; <span id='zl'>zł</span>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
