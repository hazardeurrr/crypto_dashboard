import React from 'react';


export default  class MarketCapTV extends React.PureComponent {
  constructor(props) {
      super(props);
      this._ref = React.createRef();
  }
componentDidMount() {
      const script = document.createElement('script');
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-screener.js'
      script.async = true;
      script.innerHTML = JSON.stringify({
        "width": '100%',
        "height": 350,
        "defaultColumn": "overview",
        "screener_type": "crypto_mkt",
        "displayCurrency": "USD",
        "colorTheme": "light",
        "locale": "fr"
      })
      this._ref.current.appendChild(script);
  }
  render() {
      return(
      <div class="tradingview-widget-container" ref={this._ref}>
          <div class="tradingview-widget-container__widget"></div>
         
      </div>
      );
  }
 
}
