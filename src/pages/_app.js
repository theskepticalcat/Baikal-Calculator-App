import React, {createContext} from 'react';
import Head from 'next/head';
import './../styles/global.scss';

import FurnitureStore from '../store/furnitureStore';
import CurrencyStore from '../store/currencyStore';
import RussianCitiesStore from '../store/russianCitiesStore';
import ChineseCitiesStore from '../store/сhineseSitiesStore';
import SelectedOptionsStore from '../store/selectedOptionsStore';
import Header from '../components/Header';

export const Context = createContext(null);


export default function MyApp({ Component, pageProps }) {
  return(
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        <title>BaikalVls</title>
      </Head>

      <Context.Provider value={{
        furniture: new FurnitureStore(),
        currency: new CurrencyStore(),
        russianCities: new RussianCitiesStore(),
        chineseCities: new ChineseCitiesStore(),
        options: new SelectedOptionsStore()
      }}>
        <Header />
        <Component {...pageProps} />
      </Context.Provider>
    </>
  )
};