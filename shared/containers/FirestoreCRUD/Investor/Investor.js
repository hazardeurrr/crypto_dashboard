import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Input from '@iso/components/uielements/input';
import Modal from '@iso/components/Feedback/Modal';
import LayoutContentWrapper from '@iso/components/utility/layoutWrapper';
import Box from '@iso/components/utility/box';
import ContentHolder from '@iso/components/utility/contentHolder';
import Popconfirms from '@iso/components/Feedback/Popconfirm';
import investorActions from '@iso/redux/investors/actions';
import Nomics from "nomics";
import { Doughnut } from 'react-chartjs-2';
import * as d3 from 'd3-scale-chromatic'

import { EditIcon, DeleteIcon } from '@iso/config/icon.config';
import {
  ActionBtn,
  Fieldset,
  Form,
  Label,
  TitleWrapper,
  ActionWrapper,
  ComponentTitle,
  TableWrapper,
  ButtonHolders,
} from './Investor.styles';
import ReactChart2 from '../../Charts/ReactChart2/ReactChart2';
const {
  saveIntoFireStore,
  loadFromFireStore,
  resetFireStoreDocuments,
  toggleModal,
  update,
} = investorActions;

const nomics = new Nomics({
  apiKey: "de93c1ddf9f11e36f31b3e020a23ba3647d6365c"
});

export default function Investors(props) {
  const { investors, investor, modalActive } = useSelector(
    (state) => state.Investors
  );

  const showTotal = () => {
    let tot = 0.0
    stateWallet.forEach(a => tot += parseFloat(a.value_total))
      return 'Total value : ' + tot.toFixed(2) + ' $'
    }

  const randomRGB = () => '#' + Math.floor(Math.random()*16777215).toString(16);

    const saveWalletToLocalStorage = (array) => {
      localStorage.setItem('wallet', JSON.stringify(array))
    }
  
    const [stateWallet, setStateWallet] = useState([]);
    const [chartLabels, setChartLabels] = useState([]);
    const [chartNumbers, setChartNumbers] = useState([]);


  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(loadFromFireStore());
    const storedWallet = JSON.parse(localStorage.getItem('wallet'))
    if(storedWallet != null && storedWallet != undefined){
      setStateWallet(storedWallet)
      callAPI(storedWallet)
      
    }
  }, [dispatch]);
  const handleRecord = (actionName, investor) => {
    if (investor.update && actionName !== 'delete') actionName = 'update';
    dispatch(saveIntoFireStore(investor, actionName));
    const newWallet = JSON.parse(JSON.stringify(investor))
    if(actionName == 'delete'){
      let filteredArray = stateWallet.filter(item => item !== investor)
      setStateWallet(filteredArray)
      saveWalletToLocalStorage(filteredArray);
      setChartNumbers(filteredArray.map(a => a.value_total))
      setChartLabels(filteredArray.map(a => a.name))
    }
    else if(actionName != 'update'){
      let newArr = [...stateWallet, newWallet]
      setStateWallet(newArr)
      saveWalletToLocalStorage(newArr);
      callAPI(newArr)
    } else {
      let newArr = [...stateWallet]
      newArr[newArr.findIndex(a => a == investor)] = investor
      setStateWallet(newArr)
      saveWalletToLocalStorage(newArr);
      callAPI(newArr)
    }
  };
  const resetRecords = () => {
    dispatch(resetFireStoreDocuments());
  };

  const handleModal = (investor = null) => {
    if(investor != null)
      investor.update = true
    dispatch(toggleModal(investor));
  };

  const callAPI = (arr) => {
    //API call to nomics
    let tickers = []
    arr.forEach(element => {
      tickers.push(element.name)
    });
    if(tickers.length > 0) 
      nomics.currenciesTicker({ids: tickers, interval: ['1d']}).then(data => {
        let newArr = []
        arr.forEach(element => {
          let e = element;
          let f = data.find(a => a.currency == e.name)
          e.investment_count = (f.price)
          e.value_total = parseFloat(f.price * e.company_name).toFixed(2)
          e.investment_count = parseFloat(e.investment_count).toFixed(2)
          e.location = f.logo_url
          newArr.push(e)
        });
        setStateWallet(newArr)
        // setChartData({
        //   labels: newArr.map(a => a.name),
        //   datasets: [
        //     {
        //       data: newArr.map(a => a.value_total)
        //     },
        //   ],
        // })
        setChartNumbers(newArr.map(a => a.value_total))
        setChartLabels(newArr.map(a => a.name))
      });
      
  }

  const onRecordChange = (key, event) => {
    if (key) investor[key] = event.target.value;
    dispatch(update(investor));
  };

  const onRecordChange2 = (key, event) => {
    if (key) investor[key] = event.target.value.toUpperCase();
    dispatch(update(investor));
  };

  const dataSource = [];
  Object.keys(investors).map((investor, index) => {
    return dataSource.push({
      ...investors[investor],
      key: investor,
    });
  });

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {},
  };

  const columns = [
    {
      dataIndex: 'location',
      key: 'location',
      
      render: (text, row) => {
       return <img src={row.location} width='30' height='30'/>
     }
   },
    {
      title: 'Currency',
      dataIndex: 'name',
      key: 'name',
      sorter: (a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      },
    },
    {
      title: 'Amount',
      dataIndex: 'company_name',
      key: 'company_name',
      sorter: (a, b) => {
         if (parseFloat(a.company_name) < parseFloat(b.company_name)) return -1;
         if (parseFloat(a.company_name) > parseFloat(b.company_name)) return 1;
        return 0;
      },
    },
    {
         title: 'Price of token ($)',
         dataIndex: 'investment_count',
         key: 'investment_count',
         width: '190px',
         sorter: (a, b) => {
           if (parseFloat(a.investment_count) < parseFloat(b.investment_count)) return -1;
           if (parseFloat(a.investment_count) > parseFloat(b.investment_count)) return 1;
          return 0;
         }
       },
    {
      title: 'Total value ($)',
      dataIndex: 'valueTotal',
      key: 'value_total',
      sorter: (a, b) => {
         if (parseFloat(a.value_total) < parseFloat(b.value_total)) return -1;
         if (parseFloat(a.value_total) > parseFloat(b.value_total)) return 1;        return 0;
      },
      render: (text, row) => {
        return (parseFloat(row.company_name) * parseFloat(row.investment_count)).toFixed(2)
      }
    },
    
    // {
    //   title: 'Job Title',
    //   dataIndex: 'job_title',
    //   key: 'job_title',
    //   sorter: (a, b) => {
    //     if (a.job_title < b.job_title) return -1;
    //     if (a.job_title > b.job_title) return 1;
    //     return 0;
    //   },
    // },
    // {
    //   title: 'Location',
    //   dataIndex: 'location',
    //   key: 'location',
    //   sorter: (a, b) => {
    //     if (a.location < b.location) return -1;
    //     if (a.location > b.location) return 1;
    //     return 0;
    //   },
    // },
    // {
    //   title: 'Number of Investments',
    //   dataIndex: 'investment_count',
    //   key: 'investment_count',
    //   width: '190px',
    //   sorter: (a, b) =>
    //     parseInt(a.investment_count, 10) - parseInt(b.investment_count, 10),
    // },
    // {
    //   title: 'Number of Exists',
    //   dataIndex: 'exists_count',
    //   key: 'exists_count',
    //   width: '160px',
    //   sorter: (a, b) =>
    //     parseInt(a.exists_count, 10) - parseInt(b.exists_count, 10),
    // },
    {
      title: 'Actions',
      width: '60px',
      key: 'action',
      render: (text, row) => {
        return (
          <ActionWrapper>
            <a onClick={() => handleModal(row)} href="# ">
              <EditIcon size={18} />
            </a>

            <Popconfirms
              title="Are you sure to delete this record?"
              okText="Yes"
              cancelText="No"
              placement="topRight"
              onConfirm={() => handleRecord('delete', row)}
            >
              <a className="deleteBtn" href="# ">
                <DeleteIcon size={18} />
              </a>
            </Popconfirms>
          </ActionWrapper>
        );
      },
    },
  ];
  

  function calculatePoint(i, intervalSize, colorRangeInfo) {
    var { colorStart, colorEnd, useEndAsStart } = colorRangeInfo;
    return (useEndAsStart
      ? (colorEnd - (i * intervalSize))
      : (colorStart + (i * intervalSize)));
  }

   /* Must use an interpolated color scale, which has a range of [0, 1] */
   function interpolateColors(dataLength, colorScale, colorRangeInfo) {
    var { colorStart, colorEnd } = colorRangeInfo;
    var colorRange = colorEnd - colorStart;
    var intervalSize = colorRange / dataLength;
    var i, colorPoint;
    var colorArray = [];
  
    for (i = 0; i < dataLength; i++) {
      colorPoint = calculatePoint(i, intervalSize, colorRangeInfo);
      colorArray.push(colorScale(colorPoint));
    }
  
    return colorArray;
  }

  return (
    <LayoutContentWrapper>
      <h1 style={{fontSize: 35}}>{showTotal()}</h1>

      <Box>
        <ContentHolder style={{ marginTop: 0, overflow: 'hidden' }}>
          <TitleWrapper>
            <ComponentTitle>Composition of wallet</ComponentTitle>

            <ButtonHolders>
              <ActionBtn type="danger" onClick={() => callAPI(stateWallet)}>
                Update prices
              </ActionBtn>

              <ActionBtn type="primary" onClick={() => {handleModal(null)}}>
                Add new crypto
              </ActionBtn>
            </ButtonHolders>
          </TitleWrapper>

          

          <Modal
            visible={modalActive}
            onClose={() => dispatch(toggleModal(null))}
            title={investor.update ? 'Update crypto' : 'Add New crypto'}
            okText={investor.update ? 'Update crypto' : 'Add crypto'}
            onOk={() => {handleRecord('insert', investor)
              dispatch(toggleModal(null))}}
            onCancel={() => dispatch(toggleModal(null))}
          >

            
            <Form>
              <Fieldset>
                <Label>Ticker</Label>
                <Input
                  label="Name"
                  placeholder="Enter ticker of cryptocurrency (ex: BTC, ETH...)"
                  value={investor.name}
                  onChange={(e) => onRecordChange2('name', e)}
                />
              </Fieldset>

              <Fieldset>
                <Label>Amount</Label>
                <Input
                  number = "true"
                  label="Company Name"
                  placeholder="Enter the amount of crypto you have"
                  value={investor.company_name}
                  onChange={(e) => onRecordChange('company_name', e)}
                />
              </Fieldset>

              {/* <Fieldset>
                <Label>Job TItle</Label>
                <Input
                  label="Job Title"
                  placeholder="Enter the job title"
                  value={investor.job_title}
                  onChange={(e) => onRecordChange('job_title', e)}
                />
              </Fieldset>

              <Fieldset>
                <Label>Location</Label>
                <Input
                  label="Location"
                  placeholder="Enter Description"
                  value={investor.location}
                  onChange={(e) => onRecordChange('location', e)}
                />
              </Fieldset>

              <Fieldset>
                <Label>Number of Investments</Label>
                <Input
                  label="Number of Investments"
                  placeholder="Enter number of investments"
                  value={investor.investment_count}
                  onChange={(e) => onRecordChange('investment_count', e)}
                />
              </Fieldset>

              <Fieldset>
                <Label>Number of Exists</Label>
                <Input
                  label="Number of Exists"
                  placeholder="Enter Number of Exists"
                  value={investor.exists_count}
                  onChange={(e) => onRecordChange('exists_count', e)}
                />
              </Fieldset> */}
            </Form>
          </Modal>

          <TableWrapper
            rowKey="key"
            columns={columns}
            loading={props.isLoading}
            dataSource={stateWallet}
            className="isoSimpleTable"
            pagination={{
              // defaultPageSize: 1,
              hideOnSinglePage: true,
              total: dataSource.length,
              showTotal: (total, range) => {
                return `Showing ${range[0]}-${range[1]} of ${dataSource.length} Results`;
              },
            }}
          />
        </ContentHolder>
      </Box>
      <Doughnut 
          
          data={{
           labels: chartLabels,
           datasets: [
             {
               data: chartNumbers,
               backgroundColor: interpolateColors(chartLabels.length, d3.interpolateOranges, {
                colorStart: 0.15,
                colorEnd: 1,
                useEndAsStart: true,
              }),
             },
           ],
         }} />

    </LayoutContentWrapper>

  );
}
