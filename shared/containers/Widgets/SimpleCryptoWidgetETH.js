import React from 'react';


export default  class SimpleCryptoWidgetETH extends React.PureComponent {
  constructor(props) {
      super(props);
      this._ref = React.createRef();
  }
componentDidMount() {
      const script = document.createElement('script');
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js'
      script.async = true;
      script.innerHTML = JSON.stringify(  {
        "symbol": "COINBASE:ETHUSD",
        "width": "100%",
        "height": "200",
        "locale": "fr",
        "dateRange": "1M",
        "colorTheme": "light",
        "trendLineColor": "rgba(73, 133, 231, 1)",
        "underLineColor": "rgba(109, 158, 235, 0.3)",
        "underLineBottomColor": "rgba(41, 98, 255, 0)",
        "isTransparent": false,
        "autosize": false,
        "largeChartUrl": ""
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
