import { TabNavigator,TabView  } from "react-navigation";

import DashboardPage from "./DashboardPage";
import SubjectListPage from "./SubjectListPage";
import BookingListPage from "./BookingListPage";
import JobListPage from "./JobListPage";
import ProfilePage from "./ProfilePage";
const HomePage = TabNavigator(
  {
    Dashboard: { screen: DashboardPage },
    Subject: { screen: SubjectListPage },
    Bookings: { screen: BookingListPage },
    Jobs: { screen: JobListPage },
    Profile: { screen: ProfilePage }
  },
  {
    tabBarComponent: TabView.TabBarBottom,
    tabBarPosition: "bottom",
    navigationOptions:{
     header:{
      left: null
    },
   }
  }
);
export default HomePage;
