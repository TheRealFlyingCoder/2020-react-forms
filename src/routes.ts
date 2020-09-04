import Home from './routes/Home/Home';
import NotFound from './routes/NotFound';
import Submit from './routes/Submit';

const Routes = {
	Home: {
		title: 'Home',
		path: '/',
		exact: true,
		component: Home,
	},
	Submit: {
		title: 'Submit',
		path: '/submit',
		exact: true,
		component: Submit,
	},
	
	NotFound: {
		title: '404',
		path: '/404',
		exact: true,
		component: NotFound,
	}
};

export default Routes;
