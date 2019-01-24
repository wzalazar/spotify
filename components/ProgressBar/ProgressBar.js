import { Line, Circle } from 'react-progressbar.js'

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
