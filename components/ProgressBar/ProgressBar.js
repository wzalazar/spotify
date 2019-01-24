// import { Component } from 'react'
// import PropTypes from 'prop-types'
import { Line, Circle } from 'react-progressbar.js'

// export default class ProgressBar extends Component {
//   static propTypes = {
//     show: PropTypes.bool,
//   }

//   static defaultProps = {
//     show: false,
//   }

//   constructor() {
//     super()
//   }


//   render() {
//     const { show } = this.props

//     const optionsBar = {
//       strokeWidth: 2,
//       color: '#1db954',
//       duration: 1200,
//     }

//     const optionsCircle = {
//       strokeWidth: 8,
//       color: '#1db954',
//       easing: 'easeInOut',
//     }

//     const showProgressBar = show ? (
//       <div className={'ProgressBar__content'}>
//         <Line progress={'1'}
//           options={optionsBar}
//           initialAnimate
//           containerClassName={'ProgressBar__content__bar'} />

//         <Circle progress={0.7}
//           options={optionsCircle}
//           initialAnimate
//           containerClassName={'ProgressBar__content__circle rotate'} />
//       </div>
//     ) : null

//     return (
//       <div className={'ProgressBar'}>
//         {showProgressBar}
//       </div>
//     )
//   }
// }

const optionsBar = {
  strokeWidth: 2,
  color: '#1db954',
  duration: 1200,
}

const optionsCircle = {
  strokeWidth: 8,
  color: '#1db954',
  easing: 'easeInOut',
}

const showProgressBar = (show) => show ? (
  <div className={'ProgressBar__content'}>
    <Line progress={'1'}
      options={optionsBar}
      initialAnimate
      containerClassName={'ProgressBar__content__bar'} />

    <Circle progress={0.7}
      options={optionsCircle}
      initialAnimate
      containerClassName={'ProgressBar__content__circle rotate'} />
  </div>
) : null

export const ProgressBar = ({ show = false }) => (
  <div className={'ProgressBar'}>
    {showProgressBar(show)}
  </div>

)
