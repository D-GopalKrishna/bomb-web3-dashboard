import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Bank from '../Bank';

// import { Box, Container, Typography, Grid } from '@material-ui/core';

// import { Alert } from '@material-ui/lab';

import Page from '../../components/Page';
// import FarmCard from './FarmCard';
//import FarmImage from '../../assets/img/farm.png';
import { createGlobalStyle } from 'styled-components';

import useBanks from '../../hooks/useBanks';
import useBombFinance from '../../hooks/useBombFinance';

import { Helmet } from 'react-helmet';

import HomeImage from '../../assets/img/background.jpg';
const BackgroundImage = createGlobalStyle`
  body {
    background: url(${HomeImage}) repeat !important;
    background-size: cover !important;
    background-color: #171923;
  }
`;

const TITLE = 'bomb.money | Dashboard';

const Dashboard = () => {
  const [banks] = useBanks();
  const bombFinance = useBombFinance();
  const { path } = useRouteMatch();
  const activeBanks = banks.filter((bank) => !bank.finished);
  //   const bombFinanceData = bombFinance.filter((bomb) => bomb);
  //   console.log(bombFinanceData);
  console.log(activeBanks);
  console.log(bombFinance);
  console.log(banks);
  return (
    <Switch>
      <Page>
        <Route exact path={path}>
          <BackgroundImage />
          <Helmet>
            <title>{TITLE}</title>
          </Helmet>

          <div>
            <h1>This is the title</h1>
          </div>
        </Route>

        {/* <Route path={`${path}/:bankId`}>
          <BackgroundImage />
          <Bank />
        </Route> */}
      </Page>
    </Switch>
  );
};

export default Dashboard;
