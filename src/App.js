import React, { Component } from 'react';
import MyNews from './MyNews/MyNews'
import Header from './Header/Header'
import Home from './Home/Home'
/* import News from './News/News' */
import AddTab from './AddTab/AddTab'
import config from './config'
import ArticleContent from './ArticleContent/ArticleContent'
import { Route } from 'react-router-dom';
import ApiContext from './ApiContext';
import './App.css'

class App extends Component {

  state = {
    tabs: [],
    news: [],
    queryValue: ''
  }

  handleQuery = (queryValue) => {
    this.setState({
      query: queryValue
    })
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = (queryValue) => {
    if(!queryValue) {
      queryValue = ''
    }
    Promise.all([
      fetch(`${config.API_ENDPOINT}/tabs`),
      fetch(`${config.API_NEWS + queryValue}`)
    ])
      .then(([tabsRes, newsRes]) => {
        if(!tabsRes.ok)
          return tabsRes.json().then(e => Promise.reject(e))
        if(!newsRes.ok)
          return newsRes.json().then(e => Promise.reject(e))

        return Promise.all([
          tabsRes.json(),
          newsRes.json()
        ])
      })
      .then(([tabs, news]) => {
        news = news.response.results
        this.setState({ tabs, news })
      })
      .catch(error => {
        console.error({ error })
      })
  }

  handleAddTab = tab => {
    this.setState({
      tabs: [
        ...this.state.tabs,
        tab
      ]
    })
  }

  handleDeleteTab = tabId => {
    this.setState({
      tabs: this.state.tabs.filter(tab => tab.id !== tabId)
    })
  }

  handleResetQuery() {
    this.setState({
      queryValue: ''
    })
  }

  renderNavRoute() {
    return (
      <>
        <Route path='/' exact component={Home} />
        {/* <Route path='/news' component={News} /> */}
        <Route path='/mynews' component={MyNews} />
        <Route path='/article/:articleId' component={ArticleContent} />
        <Route path='/add-tab' component={AddTab} />
      </>
    )
  }

  render() {
    const value = {
      tabs: this.state.tabs,
      news: this.state.news,
      addTab: this.handleAddTab,
      deleteTab: this.handleDeleteTab,
      addQueryValue: this.handleQuery,
      fetchData: this.fetchData
    }
    return (
      <ApiContext.Provider value={value}>
        <div className="App">
          <Header />
          {this.renderNavRoute()}
        </div>  
      </ApiContext.Provider>
    );
  }
}

export default App;
