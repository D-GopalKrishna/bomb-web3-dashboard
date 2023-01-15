import React, { useMemo } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import useBanks from '../../hooks/useBanks';
import { Helmet } from 'react-helmet';
import useBombStats from '../../hooks/useBombStats';

import ColorsOnTopology from '../../assets/img/ColorsOnTopology.png';
import BondsBottomComponent from './components/BondsBottomComponent';
import BombFarmComponent from './components/BombFarmComponent';
import BombFinanceSummary from './components/BombFinanceSummary';
import BoardRoomMiddleComponent from './components/BoardRoomMiddleComponent';

const BackgroundImage = createGlobalStyle`
  body {
    background: url(${ColorsOnTopology}) repeat !important;
    background-size: cover !important;
    background-color: #171923;
    border: 0;
    margin: 0;
  }
`;

const TITLE = 'bomb.money | Dashboard';

const Dashboard = () => {
  return (
    <div>
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <BackgroundImage />
      <BombFinanceSummary />
      <BoardRoomMiddleComponent />
      <BombFarmComponent />
      <BondsBottomComponent />
    </div>
  );
};

export default Dashboard;
