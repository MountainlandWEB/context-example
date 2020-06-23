import React from 'react'

import LanguageContext from '../contexts/LanguageContext'

class Field extends React.Component {
  static contextType = LanguageContext

  static defaultProps = {
    testProps: 'testing'
  }
  
  render() {
    console.log(this.props)
    let text = this.context === 'english' ? 'Name' : this.context === 'german' ? 'Name' : 'Naam'
    return (
      <div className="ui field">
        <label>{ text }:</label>
        <input />
      </div>
    )
  }
}

// Field.contextType = LanguageContext
// Field.defaultProps = {
//   testProps: 'testing'
// }

export default Field