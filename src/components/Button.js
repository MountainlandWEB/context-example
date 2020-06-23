import React from 'react'

import LanguageContext from '../contexts/LanguageContext'

const Button = () => {
  return (
    <button className="ui button primary">
      <LanguageContext.Consumer>
        { (context) => context === 'english' ? 'Submit' : context === 'german' ? 'Einreichen' : 'Verzenden' }
      </LanguageContext.Consumer>
    </button>
  )
}
  

export default Button