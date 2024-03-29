import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';
import { Grid} from 'semantic-ui-react';
import LoadingComponent from '../../../app/layout/LoadingComponents';
import { useStore } from '../../../app/stores/store';
import ActivityFilter from './ActivityFilter';
import ActivityList from './ActivityList';

export default observer(function ActivityDashboard() {

    const {activityStore} = useStore();
    const {loadActivities, activityRegistry} = activityStore;

    useEffect(() => {
    if(activityRegistry.size <= 1) loadActivities();
  }, [activityRegistry.size, loadActivities]);

  if(activityStore.loadingInitial) return <LoadingComponent content="Loading activities..." />

    return(
        <Grid>
            <Grid.Column width="10">
                <ActivityList />
            </Grid.Column>
            <Grid.Column width="6">
                <ActivityFilter />
            </Grid.Column>
        </Grid>
    )
})
