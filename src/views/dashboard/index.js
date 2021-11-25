import React from 'react';
import {DashboardStyle} from './style';

export default function MyDashboard(){

  const classes = DashboardStyle();

  return(
      <div  className={classes.DashboardWrapper}>
          dashboard
      </div>
  );
}
