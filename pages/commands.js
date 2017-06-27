import { Component } from 'react';
import PropTypes from 'prop-types';
import { get } from 'lodash';
import withData from '../lib/withData';
import H1 from '../components/H1/H1';
import Text from '../components/Text/Text';
import Main from '../components/Main/Main';
import Layout from '../containers/Layout/Layout.container';
import { onSetConfig } from '../config/config.actions';
import load from 'load-script';
import initReactFastclick from 'react-fastclick';
initReactFastclick();


class Commands extends Component {
  static propTypes = {
    items: PropTypes.array,
    config: PropTypes.object,
  }

  static contextTypes = {
    store: PropTypes.object,
  }

  static defaultProps = {
    items: [],
    config: {},
  }

  constructor() {
    super();
  }

  componentDidMount() {
    const { store } = this.context;
    const { config } = this.props;
    const state = store.getState();
    const isSetConfig = get(state, 'config.isSetConfig', true);
    if (!isSetConfig) {
      store.dispatch(onSetConfig(config));
    }
    load('https://buttons.github.io/buttons.js');
  }

  static async getInitialProps({ config }) {
    return config;
  }

  render() {
    return (
      <Layout>
        <Main>
          <H1>Commands</H1>
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
      </Layout>
    );
  }
}

export default withData(Commands);
