import { useEffect } from 'react'
import initReactFastclick from 'react-fastclick'
import load from 'load-script'

import withData from '../lib/withData'
import { H1 } from '../components/H1/H1'
import { Text } from '../components/Text/Text'
import { Main } from '../components/Main/Main'
import { LayoutContainer } from '../containers/Layout/Layout.container'
import '../styles/main.scss'

initReactFastclick()

const About = () => {
  useEffect(() => {
    load('https://buttons.github.io/buttons.js')
  }, [])

  return (
    <LayoutContainer>
      <Main>
        <H1>About</H1>
        <div className={'Layout__content'}>
          <Text className={'notranslate'}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
          </Text>
        </div>
      </Main>
    </LayoutContainer>
  )
}

export default withData(About)

