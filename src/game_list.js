'use strict';

class GameProduct extends React.Component {
  render() {
    return (
      <div className="game-card">
        <div className="game-image">
          <img src={this.props.picture} alt="" draggable="false" />
        </div>
        <div className="game-details">
          <div className="game-price">
            <div className="game-discount">
              -
              {Math.round(
                (this.props.discountPrice / this.props.fullPrice) * 100,
              )}
              %
            </div>
            <div>
              <div className="game-price--full">R$ {this.props.fullPrice}</div>
              <div className="game-price--discount">
                R$ {this.props.discountPrice}
              </div>
            </div>
          </div>
          <div className="game-retailer">
            <img src="/assets/steam.png" alt="" draggable="false" />
          </div>
        </div>
        <button className="game-button">Comprar</button>
      </div>
    );
  }
}

let rockstarDOM = document.querySelector('#rockstar-game-list');
ReactDOM.render(
  [...Array(4)].map((x, i) => (
    <GameProduct
      key={i}
      picture={`/assets/games/rockstar/game_${i + 1}.jpg`}
      fullPrice={Math.floor(Math.random() * (300 - 100 + 1)) + 100 + 0.99}
      discountPrice={Math.floor(Math.random() * (100 - 50 + 1)) + 50 + 0.07}
    />
  )),
  rockstarDOM,
);

let devolverDOM = document.querySelector('#devolver-game-list');
ReactDOM.render(
  [...Array(4)].map((x, i) => (
    <GameProduct
      key={i}
      picture={`/assets/games/devolver/game_${i + 1}.jpg`}
      fullPrice={Math.floor(Math.random() * (100 - 70 + 1)) + 100 + 0.99}
      discountPrice={Math.floor(Math.random() * (70 - 25 + 1)) + 25 + 0.07}
    />
  )),
  devolverDOM,
);
