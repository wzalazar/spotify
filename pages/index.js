import { useEffect } from 'react'
import load from 'load-script'
import initReactFastclick from 'react-fastclick'

import withData from '../lib/withData'
import { MainContainer } from '../containers/Main/Main.container'
import { LayoutContainer } from '../containers/Layout/Layout.container'
import '../styles/main.scss'

initReactFastclick()

const Index = () => {
  useEffect(() => {
    load('https://buttons.github.io/buttons.js')
  }, [])

  return (
    <LayoutContainer>
      <MainContainer />
    </LayoutContainer>
  )
}

export default withData(Index)
