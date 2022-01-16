// Types
import type { AppProps } from 'next/app';

// Libraries
import React from 'react';

// Styles
import '@styles/globals.css';

const App = ({ Component, pageProps }: AppProps): React.ReactElement => {
    return <Component {...pageProps} />;
};

export default App;
