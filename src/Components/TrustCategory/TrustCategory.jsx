import Card from 'react-bootstrap/Card';

export const TrustCategory = (props) => {
  return (
    <Card style={props}>
      <div className='card-img-container'>
        <Card.Img variant='top' src={require('../../assets/img/Zdjęcie produktu.png')} />
      </div>
      <Card.Body>
        <Card.Title>Nazwa podkategorii</Card.Title>
      </Card.Body>
    </Card>
  );
};
