import React from 'react'

import LanguageContext from '../contexts/LanguageContext'
import UserCreate from './UserCreate'

class App extends React.Component {
  state = {
    language: 'english'
  }

  selectLangauge = language => {
    this.setState({
      language
    })
  }

  render() {
    return (
      <div className="ui container">
        Select Language:
        <i className="flag us" onClick={() => this.selectLangauge('english')} />
        <i className="flag dk" onClick={() => this.selectLangauge('danish')} />
        <i className="flag at" onClick={() => this.selectLangauge('german')} />
        <LanguageContext.Provider value={this.state.language}>
          <UserCreate />
        </LanguageContext.Provider>
      </div>
    )
  }
}

export default App