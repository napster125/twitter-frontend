export interface IRoute {
	path: string
	element: React.ComponentType<any>
	exact?: boolean
	childrens?: IRoute[]
}

export enum Routes {
	Home = '/',
	Login = '/login',
	SignUp = '/signup',
	Dashboard = '/dashboard',
	Profile = '/profile/:id/',
	UserOnlyMediaTweetList = '/media',
	UserOnlyLikeTweetList = '/likes',
	Tweet = '/tweet/:id',
	Bookmarks = '/Bookmarks',
	Trends = '/trends/:slug',
	Notfication = '/notifications',
	Explore = '/explore',
}
