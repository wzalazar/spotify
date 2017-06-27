import Document, { Head, Main, NextScript } from 'next/document';
import flush from 'styled-jsx/server';
import stylesheet from '../styles/main.scss';

export default class MyDocument extends Document {

  static getInitialProps({ renderPage }) {
    const { html, head, chunks } = renderPage();
    const styles = flush();
    return { html, head, styles, chunks };
  }

  render() {
    return (
     <html>
       <Head>
         <title>Spotify - GraphiteJS</title>
         <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
         <meta name="viewport" content="width=device-width" />
       </Head>
       <body>
         {this.props.customValue}
         <Main />
         <NextScript />
       </body>
     </html>
    );
  }
}
