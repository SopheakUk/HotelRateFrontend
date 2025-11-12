import './App.css'
import TotalRevenueToday from './TotalRevenueToday'
import Occupancy from './Occupancy'
import Live from './Live'
import Chart from './Chart'
import LanguageSwitcher from './LanguageSwitcher'

import { useTranslation } from 'react-i18next';

function App() {

   const { t  } = useTranslation();

  return (
    <>
    <h1>{t('welcome')}</h1>
    <LanguageSwitcher/>
    <br/>
        <TotalRevenueToday/>
        <br/>
        <Occupancy/>
        <br/>
        <Chart/>
        <br/>
        <Live/>
        </>
      );
}

export default App
