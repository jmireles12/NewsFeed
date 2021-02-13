import React from 'react'

export default React.createContext({
    tabs: [],
    news: [],
    query: '',
    addTab: () => {},
    deleteTab: () => {},
    addQueryValue: () => {},
    fetchData: () => {}
})