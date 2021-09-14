import React, { Component, lazy } from 'react';
import { Row, Col } from 'antd';
import basicStyle from '@iso/assets/styles/constants';


const Doughnut = lazy(() => import('./Components/Doughnut/Doughnut'));
const DynamicDoughnut = lazy(() =>
  import('./Components/DynamicDoughnut/DynamicDoughnut')
);
const Pie = lazy(() => import('./Components/Pie/Pie'));
const Line = lazy(() => import('./Components/Line/Line'));
const Bar = lazy(() => import('./Components/Bar/Bar'));
const HorizontalBar = lazy(() =>
  import('./Components/HorizontalBar/HorizontalBar')
);
const Radar = lazy(() => import('./Components/Radar/Radar'));
const Polar = lazy(() => import('./Components/Polar/Polar'));
const Bubble = lazy(() => import('./Components/Bubble/Bubble'));
const MixedData = lazy(() => import('./Components/Mix/Mix'));
const RandomizedDataLine = lazy(() =>
  import('./Components/RandomizedLine/RandomizedLine')
);
const PageHeader = lazy(() => import('@iso/components/utility/pageHeader'));
const Box = lazy(() => import('@iso/components/utility/box'));
const LayoutWrapper = lazy(() =>
  import('@iso/components/utility/layoutWrapper')
);
const ContentHolder = lazy(() =>
  import('@iso/components/utility/contentHolder')
);
export default class extends Component {

  constructor(props) {
    super(props);
    if(props.data == undefined){
      this.data = {
        labels: ['Empty wallet'],
        datasets: [
          {
            data: [1],
          },
        ],
      };
    } else {
      this.data = props.data
    }
    this.total = props.total
  }
  
  render() {
    const { rowStyle, colStyle, gutter } = basicStyle;
    return (
      <LayoutWrapper className="isoMapPage">
        <PageHeader>Your wallet</PageHeader>
        <Row style={rowStyle} gutter={gutter} justify="start">
          <Col md={24} xs={24} style={colStyle}>
            <Box>
              <ContentHolder>
                <Doughnut data={this.data} total={this.total}/>
              </ContentHolder>
            </Box>
          </Col>
        </Row>

       
      </LayoutWrapper>
    );
  }
}
