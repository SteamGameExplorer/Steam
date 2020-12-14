import React from "react";
import { BrowserRouter, Route, Switch, Redirect  } from 'react-router-dom';

import HomePage from "./pages/multiple/home_page";
import AboutPage from "./pages/multiple/about_page";
import ContactPage from "./pages/multiple/contact_page";

import PortfolioPage from "./pages/blog/portfolio_page";
import BlogListPage from "./pages/blog/blog_list_page";
import MyList from "./pages/blog/my_list";

import NoMatch from "./pages/NoMatch";
import ScrollToTop from "./componets/scrollToTop";
import Loader from "./componets/loader";
import HistoryPage from "./pages/blog/history_page";
import SearchAndRecommendPage from "./pages/blog/search_and_recommend_page";
import Auth from './componets/auth/Auth.js';
import Main from './componets/main/Main.js';

class App extends React.Component {

	render() {
		return (
			 <>
			<Loader/>
			<BrowserRouter basename={'/'} >
				<Route exact path="/home">
					<Redirect to="/home" /> 
				</Route>
			
                <ScrollToTop/>
				<Switch>
					<Route path={`${process.env.PUBLIC_URL}/home`} component={HomePage}/>
					<Route exact path={`${process.env.PUBLIC_URL}/`} component={HomePage}/>
					<Route path={`${process.env.PUBLIC_URL}/about`} component={AboutPage}/>
					<Route path={`${process.env.PUBLIC_URL}/contact`} component={ContactPage}/>

					<Route path={`${process.env.PUBLIC_URL}/portfolio`} component={PortfolioPage}/>
					<Route path={`${process.env.PUBLIC_URL}/popular`} component={BlogListPage}/>
					<Route path={`${process.env.PUBLIC_URL}/search`} component={SearchAndRecommendPage}/>
					<Route path={`${process.env.PUBLIC_URL}/history`} component={HistoryPage}/>

					<Route path={`${process.env.PUBLIC_URL}/user_list`} component={MyList}/>

					<Route path={`${process.env.PUBLIC_URL}/auth`} component={Auth} />
          			<Route path='/main' component={Main} />

					<Route component={NoMatch} />
				</Switch>
			</BrowserRouter>

			 </>
		 );
	}
}
 
export default App;
