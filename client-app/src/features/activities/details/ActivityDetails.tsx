import { useEffect } from "react";
import { Button, Card, Grid, GridColumn, Image } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import LoadingComponant from "../../../app/layout/LoadingComponant";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import ActivityDetailedChat from "./ActivityDetailedChat";
import ActivityDetailedHeader from "./ActivityDetailedHeader";
import ActivityDetailedInfo from "./ActivityDetailedInfo";
import ActivityDetailedSidebar from "./ActivityDetailedSidebar";


export default function ActivityDetails() {
  const {activityStore} = useStore();
  const { selectedActivity: activity, loadActivity, loadingInitial } = activityStore;
  const {id} = useParams();

  useEffect(() => {
    if(id) loadActivity(id);
  }, [id, loadActivity])

  if(loadingInitial || !activity) return <LoadingComponant />;

    return (
      <Grid>
        <Grid.Column width={10}>
          <ActivityDetailedHeader activity={activity} />
          <ActivityDetailedInfo activity={activity} />
          <ActivityDetailedChat />
        </Grid.Column>
        <GridColumn>
          <ActivityDetailedSidebar />
        </GridColumn>
      </Grid>
    );
}