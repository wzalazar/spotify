import { Component } from 'react';
import PropTypes from 'prop-types';
import { get } from 'lodash';
import withData from '../lib/withData';
import Main from '../containers/Main/Main.container';
import Layout from '../containers/Layout/Layout.container';
import { onSetConfig } from '../config/config.actions';
import load from 'load-script';
import initReactFastclick from 'react-fastclick';
import '../styles/main.scss'
initReactFastclick();


class Index extends Component {
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
        <Main />
      </Layout>
    );
  }
}

export default withData(Index);
