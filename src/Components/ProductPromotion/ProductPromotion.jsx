import './ProductPromotion.css';

export const ProductPromotion = () => {
  return (
    <div className='c23'>
      <div className='promotion-container'>
        <div className='promotion-header'>
          <div className='good-ocasion'>
            <img src={require('../../assets/img/piggy-bank-01.png')} alt='' />
            <p>Dobra okazja!</p>
          </div>
          <div className='timer'>
            <p>2d : 05h : 25min</p>
          </div>
        </div>
      </div>
      <div className='promotion-image-container'>
        <div className='promotion-image' />
      </div>
      <div className='promotion-title-container'>
        <h3>Bateria wannowa otworowa z zestawem prysznicowym</h3>
      </div>
      <div className='promotion-arguments-container'>
        <div className='argument'>
          <img src={require('../../assets/img/x-close.png')} alt='' />
          <p>Dostępne: 31 sztuk</p>
        </div>
        <div className='argument'>
          <img src={require('../../assets/img/x-close.png')} alt='' />
          <p>Korpus baterii wykonany z najwyższej jakości mosiądzu</p>
        </div>
        <div className='argument'>
          <img src={require('../../assets/img/x-close.png')} alt='' />
          <p>Bateria wyposażona w aerator napowietrzający strumień</p>
        </div>
        <div className='promotion-price-container'>
          <div className='promotion-price'>
            <h2>
              1 599,00 <span>zł</span>
            </h2>
          </div>
          <div>
            <button type='button' className='btn btn-light promotion-button'>
              Sprawdź
              <img src={require('../../assets/img/Component 8.png')} alt='' />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
