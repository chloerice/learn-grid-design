import GridLevel0 from './components/grid-levels/Zero'
import FlexLevel0 from './components/flexbox-levels/Zero'
import GridLevel1 from './components/grid-levels/One'
import FlexLevel1 from './components/flexbox-levels/One'

export const levels = {
  flexbox: {
    0: {
      level: '0',
      layout: FlexLevel0,
      instructions: '',
      editor: {
        code: {
          before: '.avatar {',
          middle: ['background: violet;', 'height: 50px;', 'width: 50px;'],
          after: '}'
        }
      }
    },
    1: {
      level: '0',
      layout: FlexLevel1,
      instructions: '',
      editor: {
        code: {
          before: '',
          middle: '',
          after: ''
        }
      }
    }
  },
  grid: {
    0: {
      level: '1',
      layout: GridLevel0,
      instructions: '',
      editor: {
        code: {
          before: '',
          middle: '',
          after: ''
        }
      }
    },
    1: {
      level: '1',
      layout: GridLevel1,
      instructions: '',
      editor: {
        code: {
          before: '',
          middle: '',
          after: ''
        }
      }
    }
  }
}
