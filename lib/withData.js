import React from 'react';
import PropsTypes from 'prop-types';
import { Provider } from 'react-redux';
import initStore from './initStore';
import { get } from 'lodash';
import ip from 'ip';

export default (Component) => (
  class extends React.Component {

    static propTypes = {
      initialState: PropsTypes.object,
    }

    static defaultProps = {
      initialState: {},
    }

    static async getInitialProps(ctx) {
      const headers = get(ctx, 'req.headers', {});
      ctx.isServer = get(ctx, 'req', false);
      const currentHost = get(ctx, 'req.headers.host', 'localhost');
      const host = process.env.NODE_ENV === 'production' ? currentHost : ip.address();
      const isProduction = process.env.NODE_ENV === 'production' ? true : false;
      const config = { host, isProduction };

      if (ctx.isServer) {
        ctx.config = { config };
      }

      const { store } = initStore();
      ctx.store = store;

      const props = {
        url: { ...ctx.query, pathname: ctx.pathname },
        ...await (Component.getInitialProps ? Component.getInitialProps(ctx) : {}),
      };

      const state = ctx.store.getState();

      return {
        initialState: {
          ...state,
        },
        headers,
        ...props,
      };
    }

    constructor(props) {
      super(props);
      const { store } = initStore();
      this.store = store;
    }

    render() {
      return (
        <Provider store={this.store}>
          <Component {...this.props} />
        </Provider>
      );
    }
  }
);
