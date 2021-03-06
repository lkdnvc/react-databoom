import React from 'react';
import numeral from 'numeral'

import ru from 'numeral/languages/ru';
numeral.language('ru', ru);
numeral.language('ru');


class CarRow extends React.Component {

  constructor(props) {
    super(props);
    this.car = {};
  }

  render() {
    this.car = this.props.carData;
    var car = this.car;
    return (
      <div>
        <div className="car-row">
          <div className="car-row__pic">
            <img src={this.props.carData.carlistImage} width="220" height="160" alt=""/>
          </div>
          <div className="car-row__desc">
            <a href={"/car-view/" + this.props.carData.id} ><h2>{this.props.carData.carlistTitle}</h2></a>
            <p>{this.props.carData.carlistSubtitle}</p>
          </div>
          <p className="car-row__your-status">
            <i className="status-ok"></i>Вы выйграли!
          </p>
          <ul className="car-row__data price">
            <li>
              <i className="rouble-icon"></i>
              <p>Стоимость покупки</p>
              <h3>{numeral(car.max_bid.value).format('0,0[.]00')} <em className="rouble">Р</em></h3>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

CarRow.defaultProps = {};

export default CarRow;
