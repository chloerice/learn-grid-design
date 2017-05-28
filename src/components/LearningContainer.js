import React from 'react'
import { Link } from 'react-router-dom'
import Instructions from './Instructions'
import Editor from './Editor'
import LayoutPreview from './LayoutPreview'
import './LearningContainer.css'

const LearningContainer = props => {
  const { instructions, editor, layout } = props.level
  const { learning, level } = props.params
  const nextLevel = Number(level) + 1
  const notLearning = learning === 'flexbox' ? 'grid' : 'flexbox'

  return (
    <div className='LearningContainer'>
      <h2 className='LearningContainer-header'>Learn CSS {`${learning}`}</h2>
      <Instructions text={instructions} />
      <Editor editor={editor} next={`/${learning}/level/${nextLevel}`}/>
      <LayoutPreview layout={layout} />
      <footer>
        <Link to={`/${notLearning}/level/0`}>
          {`Learn CSS ${notLearning}`}
        </Link>
      </footer>
    </div>
  )
}

export default LearningContainer
