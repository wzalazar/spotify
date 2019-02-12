import { Layout } from '../../components/Layout/Layout'

export const LayoutContainer = ({ results = {}, children = null }) => {
  const { view } = results
  const className = view === 'RESULTS_TRACKS' ? 'on-track' : ''

  return (
    <Layout className={className}
      children={children} />
  )
}

