import { Routes, Route } from "react-router";
import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import HomeScreen from "./navigation-sidebar/home-screen";
import ExploreScreen from "./navigation-sidebar/explore-screen";
import BookmarksScreen from "./navigation-sidebar/bookmarks-screen";
//import ProfileScreen from "./navigation-sidebar/profile-screen";
import ListsScreen from "./navigation-sidebar/lists-screen";
import MessagesScreen from "./navigation-sidebar/messages-screen";
import MoreScreen from "./navigation-sidebar/more-screen";
import NotificationsScreen from "./navigation-sidebar/notifications-screen";
import WhoToFollowListItem
  from "./who-to-follow-list/who-to-follow-list-item";
import WhoToFollowList from "./who-to-follow-list";
import ProfileScreen from "./user/profile-screen";
import LoginScreen from "./user/login-screen";
import RegisterScreen from "./user/register-screen";
import authReducer from "./reducers/auth-reducer";

import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./reducers/tuits-reducer";
import { configureStore } from '@reduxjs/toolkit';
import {Provider} from "react-redux";
const store = configureStore(
    {reducer: {who: whoReducer, tuits: tuitsReducer, user:  authReducer
      }});


function Tuiter() {
  return (
      <Provider store={store}>
      <div>
        <Nav />
        <div className="row">
          <div className="col-xxl-2 col-xl-2 col-lg-1 col-md-2 col-sm-2 col-2">
            <NavigationSidebar />
          </div>
          <div className="col-xxl-7 col-xl-6 col-lg-6 col-md-8.5 col-sm-10 col-10">
            <Routes>
              <Route path="/home" element={<HomeScreen />} />
              <Route path="/explore" element={<ExploreScreen />} />
              <Route path="/bookmarks" element={<BookmarksScreen />} />
              <Route path="/profile" element={<ProfileScreen />} />
              <Route path="/lists" element={<ListsScreen />} />
              <Route path="/messages" element={<MessagesScreen />} />
              <Route path="/more" element={<MoreScreen />} />
              <Route path="/notifications" element={<NotificationsScreen />} />
              <Route path="/login"    element={<LoginScreen    />} />
              <Route path="/register" element={<RegisterScreen />} />


            </Routes>
          </div>
          <div className="col-xxl-3 col-xl-3.5 col-lg-4 d-none d-lg-block">
            <WhoToFollowList/>

          </div>
        </div>


      </div>
      </Provider>
  );
}
export default Tuiter

