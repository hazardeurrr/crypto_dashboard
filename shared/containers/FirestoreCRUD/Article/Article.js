import React, { Component, lazy, useState }  from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, DatePicker } from 'antd';
import basicStyle from '@iso/assets/styles/constants';
import Datepicker from '../../../../isomorphic/src/components/uielements/datePicker';

const Line = lazy(() => import('../../Charts/ReactChart2/Components/Line/Line'));

import articleActions from '@iso/redux/articles/actions';
import Input, { Textarea } from '@iso/components/uielements/input';
import Select, {
  SelectOption as Option,
} from '@iso/components/uielements/select';
import Modal from '@iso/components/Feedback/Modal';
import LayoutContentWrapper from '@iso/components/utility/layoutWrapper';
import Box from '@iso/components/utility/box';
import ContentHolder from '@iso/components/utility/contentHolder';
import Popconfirms from '@iso/components/Feedback/Popconfirm';
import { EditIcon, DeleteIcon, IconAnalytics, IconPodium, IconRocket } from '@iso/config/icon.config';

import IsoWidgetsWrapper from '../../Widgets/WidgetsWrapper';
import IsoWidgetBox from '../../Widgets/WidgetBox';
import CardWidget from '../../Widgets/Card/CardWidget';
import ProgressWidget from '../../Widgets/Progress/ProgressWidget';
import moment from 'moment'

import {
  StickerWidgetUnreadMailIcon,
  StickerWidgetImgUploadIcon,
  StickerWidgetMessageIcon,
  StickerWidgetOrderIcon,
  CardWidgetNewMsgIcon,
  CardWidgetVolumeIcon,
  CardWidgetAchievementIcon,
  ProgressDownloadIcon,
  ProgressPieChartIcon,
  ProgressUploadIcon,
  SocialFacebookIcon,
  SocialTwitterIcon,
  SocialGooglePlusIcon,
  SocialLinkedinIcon,
  SocialDribbbleIcon,
} from '@iso/config/icon.config';
import IntlMessages from '@iso/components/utility/intlMessages';


import {
  ActionBtn,
  Fieldset,
  Form,
  Label,
  TitleWrapper,
  ButtonHolders,
  ActionWrapper,
  ComponentTitle,
  TableWrapper,
  StatusTag,
} from './Article.styles';
import { TodoWrapper } from '../../Todo/Todo.styles';
import Todo from '../../Todo/Todo';


const CARD_WIDGET = [
  {
    icon: <IconRocket size={36} color="#FEAC01" />,
    number: '110$',
    text: 'CUMULATIVE P&L',
  },
  {
    icon: <IconAnalytics size={36} color="#F75D81" />,
    number: '4',
    text: 'NUMBER OF TRADES',
  },
  {
    icon: <IconPodium size={36} color="#42A5F5" />,
    number: '70$',
    text: 'AVERAGE P&L',
  },
  {
    icon: <CardWidgetAchievementIcon size={36} color="#FEAC01" />,
    number: '50%',
    text: 'SUCCESS RATE',
  },
];

const {
  loadFromFireStore,
  resetFireStoreDocuments,
  saveIntoFireStore,
  toggleModal,
  update,
} = articleActions;




export default function Articles() {
  const { articles, article, modalActive, isLoading } = useSelector(
    (state) => state.Articles
  );



  const saveArticlesToLocalStorage = (array) => {
    localStorage.setItem('articles', JSON.stringify(array))
  }

  const [stateArticles, setStateArticles] = useState([]);


  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(loadFromFireStore());
    const storedArticles = JSON.parse(localStorage.getItem('articles'))
    if(storedArticles != null && storedArticles != undefined)
      setStateArticles(storedArticles)
    
  }, [dispatch]);
  const handleRecord = (actionName, article) => {
    if (article.key && actionName !== 'delete') actionName = 'update';
    dispatch(saveIntoFireStore(article, actionName));
    const newArticle = JSON.parse(JSON.stringify(article))
    if(actionName == 'delete'){
      let filteredArray = stateArticles.filter(item => item !== article)
      setStateArticles(filteredArray)
      saveArticlesToLocalStorage(filteredArray);
    }
    else {
      setStateArticles([...stateArticles, newArticle])
      saveArticlesToLocalStorage([...stateArticles, newArticle]);
    }
  };
  const resetRecords = () => {
    dispatch(resetFireStoreDocuments());
    setStateArticles([])
    localStorage.removeItem('articles')
  };

  const handleModal = (article = null) => {
    dispatch(toggleModal(article));
  };

  const onRecordChange = (event, key) => {
    if (key) article[key] = event.target.value;
    dispatch(update(article));
  };

  const onSelectChange = (key, value) => {
    if (key) article[key] = value;
    dispatch(update(article));
  };

  // const dataSource = [];
  const dataSource = []
  Object.keys(articles).map((article, index) => {
    return dataSource.push({
      ...articles[article],
      key: article,
    });
  });

  

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {},
  };

  const showStatus = (row) => {
    if(row.status == "publish"){
      return "Long"
    } else {
      return "Short"
    }
  }

  const columns = [

    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      width: '200px',
      sorter: (a, b) => {
        if (a.title < b.title) return -1;
        if (a.title > b.title) return 1;
        return 0;
      },
      render: (text, row) => {
        const trimByWord = (sentence) => {
          let result = sentence;
          let resultArray = result.split(' ');
          if (resultArray.length > 7) {
            resultArray = resultArray.slice(0, 7);
            result = resultArray.join(' ') + '...';
          }
          return result;
        };

        return trimByWord(row.title);
      },
    },
    {
      title: 'Currency',
      dataIndex: 'slug',
      width: '135px',
      key: 'slug',
      sorter: (a, b) => {
        if (a.slug < b.slug) return -1;
        if (a.slug > b.slug) return 1;
        return 0;
      },
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
      width: '380px',
      sorter: (a, b) => {
        if (a.description < b.description) return -1;
        if (a.description > b.description) return 1;
        return 0;
      },
      render: (text, row) => {
        const trimByWord = (sentence) => {
          let result = sentence;
          let resultArray = result.split(' ');
          if (resultArray.length > 20) {
            resultArray = resultArray.slice(0, 20);
            result = resultArray.join(' ') + '...';
          }
          return result;
        };

        return trimByWord(row.description);
      },
    },
    

    {
      title: 'P&L',
      dataIndex: 'excerpt',
      width: '100px',
      key: 'excerpt',
      sorter: (a, b) => {
        if (parseFloat(a.excerpt) < parseFloat(b.excerpt)) return -1;
        if (parseFloat(a.excerpt) > parseFloat(b.excerpt)) return 1;
        return 0;
      },
    },

    {
      title: 'Position',
      dataIndex: 'status',
      className: 'noWrapCell',
      key: 'status',
      sorter: (a, b) => {
        if (a.status < b.status) return -1;
        if (a.status > b.status) return 1;
        return 0;
      },

      render: (text, row) => {
        let className;
        if (row.status === ('draft' || 'Draft' || 'DRAFT')) {
          className = 'draft';
        } else if (row.status === ('publish' || 'Publish' || 'PUBLISH')) {
          className = 'publish';
        }
        return <StatusTag className={className}>{showStatus(row)}</StatusTag>;
      },
    },
    {
      title: 'Date',
      dataIndex: 'id',
      width: '120px',
      key: 'id',
      sorter: (a, b) => {
        if (a.id < b.id) return -1;
        if (a.id > b.id) return 1;
        return 0;
      },
      render: (text, row) => {
        if(row.id == null || row.id == undefined)
          return ''
        else
          return row.id.length < 10 ? row.id : row.id.slice(0, 10);
      },
    },
    {
      title: 'Actions',
      key: 'action',
      width: '60px',
      className: 'noWrapCell',
      render: (text, row) => {
        return (
          <ActionWrapper>
            

            <Popconfirms
              title="Are you sure to delete this trade ？"
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

  const { rowStyle, colStyle, gutter } = basicStyle;

  let totEarn = stateArticles.reduce((total, a) => parseInt(total) + parseInt(a.excerpt), 0)
  let totMean = stateArticles.length > 0 ? parseInt(totEarn) / stateArticles.length : 0
  let numbTrades = stateArticles.length
  let successRate = stateArticles.length > 0 ? stateArticles.reduce((total, a) => {
    if(parseInt(a.excerpt) > 0){
      return parseInt(total) + 1 
    } 
     else {
       return parseInt(total)
    }
  }, 0) * 100 / stateArticles.length : 0


  return (
    <div>
       
    <TodoWrapper>
      <Todo />
    </TodoWrapper>

    <Row style={rowStyle} gutter={0} justify="start">
            
              <IsoWidgetsWrapper gutterBottom={20}>
                {/* Card Widget */}
                <CardWidget
                  icon={<IconRocket size={36} />}
                  iconcolor="#FEAC01"
                  number={<IntlMessages id={totEarn.toString() + ' $'} />}
                  text={<IntlMessages id={"CUMULATIVE P&L"} />}
                />
              </IsoWidgetsWrapper>
              <IsoWidgetsWrapper gutterBottom={20}>
                {/* Card Widget */}
                <CardWidget
                  icon={<IconAnalytics size={36} color="#F75D81" />}
                  number={<IntlMessages id={numbTrades.toString()} />}
                  text={<IntlMessages id={"NUMBER OF TRADES"} />}
                />
              </IsoWidgetsWrapper>
              <IsoWidgetsWrapper gutterBottom={20}>
                {/* Card Widget */}
                <CardWidget
                  icon={<IconPodium size={36} color="#42A5F5" />}
                  iconcolor="#FEAC01"
                  number={<IntlMessages id={totMean.toFixed(2).toString() + ' $'} />}
                  text={<IntlMessages id={"AVERAGE P&L"} />}
                />
              </IsoWidgetsWrapper>
              <IsoWidgetsWrapper gutterBottom={20}>
                {/* Card Widget */}
                <CardWidget
                  icon={<CardWidgetAchievementIcon size={36} color="#FEAC01" />}
                  iconcolor="#FEAC01"
                  number={<IntlMessages id={successRate.toFixed(2).toString() + ' %'} />}
                  text={<IntlMessages id={"SUCCESS RATE"} />}
                />
              </IsoWidgetsWrapper>
        </Row>
        
    <LayoutContentWrapper>
      <Box>
        <ContentHolder style={{ marginTop: 0, overflow: 'hidden' }}>
          <TitleWrapper>
            <ComponentTitle>Trades</ComponentTitle>

            <ButtonHolders>
              <ActionBtn type="danger" onClick={resetRecords}>
                Reset trade history
              </ActionBtn>

              <ActionBtn type="primary" onClick={() => handleModal(null)}>
                Add new trade
              </ActionBtn>
            </ButtonHolders>
          </TitleWrapper>

          <Modal
            visible={modalActive}
            onClose={() => dispatch(toggleModal(null))}
            title={article.key ? 'Update Trade' : 'Add New Trade'}
            okText={article.key ? 'Update Trade' : 'Add Trade'}
            onOk={() => {handleRecord('insert', article); 
            dispatch(toggleModal(null));
              }
            }
            onCancel={() => dispatch(toggleModal(null))}
          >
            <Form>
              <Fieldset>
                <Label>Title</Label>
                <Input
                  label="Title"
                  placeholder="Enter Title"
                  value={article.title}
                  onChange={(e) => onRecordChange(e, 'title')}
                />
              </Fieldset>

              <Fieldset>
                <Label>Currency</Label>

                <Input
                  label="Slug"
                  placeholder="Enter currency"
                  value={article.slug}
                  onChange={(e) => onRecordChange(e, 'slug')}
                />
              </Fieldset>

              <Fieldset>
                <Label>Description</Label>
                <Textarea
                  label="Description"
                  placeholder="Enter Description"
                  rows={5}
                  value={article.description}
                  onChange={(e) => onRecordChange(e, 'description')}
                />
              </Fieldset>

              <Fieldset>
                <Label>P&L</Label>
                <Input
                  label="Excerpt"
                  placeholder="Enter your trade P&L"
                  value={article.excerpt}
                  type = "number"
                  onChange={(e) => onRecordChange(e, 'excerpt')}
                />
              </Fieldset>

              

              <Fieldset>
                <Label>Date</Label>

                {/* <Input
                  label="id"
                  placeholder="Enter date"
                  value={new Date(article.id).getDay() + '/' + new Date(article.id).getMonth() + '/' + new Date(article.id).getFullYear()}
                  onChange={(e) => onRecordChange(e, 'id')}
                /> */}
                <DatePicker 
                  defaultValue={moment()}
                  onChange={(e) => {
                  article.id = e._d
                  dispatch(update(article));
                  }}/>
                
              </Fieldset>

              <Fieldset>
                <Label>Status</Label>
                <Select
                  defaultValue={article.status}
                  placeholder="Long or Short"
                  onChange={(value) => onSelectChange('status', value)}
                  style={{ width: '170px' }}
                >
                  <Option value="publish">Long</Option>
                  <Option value="draft">Short</Option>
                </Select>
              </Fieldset>
            </Form>
          </Modal>
          <TableWrapper
            rowKey="key"
            columns={columns}
            bordered={true}
            dataSource={stateArticles} //datasource
            loading={isLoading}
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
    </LayoutContentWrapper>

    </div>
  );
}
