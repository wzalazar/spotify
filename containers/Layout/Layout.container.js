import { Component } from 'react'
import PropTypes from 'prop-types'
import { connect} from 'react-redux'
import {Layout} from '../../components/Layout/Layout'

@connect(({ results }) => ({
  results,
}))
class LayoutContainer extends Component {
  static propTypes = {
    results: PropTypes.object,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.element),
      PropTypes.object,
    ]),
  }

  static defaultProps = {
    results: {},
  }

  constructor() {
    super()
  }

  render() {
    const { results, children } = this.props
    const { view } = results
    const className = view === 'RESULTS_TRACKS' ? 'on-track' : ''
    return (
      <Layout className={className}
        children={children} />
    )
  }
}

export default LayoutContainer
