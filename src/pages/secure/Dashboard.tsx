import Cookies from 'js-cookie'
import React, { lazy } from 'react'
import { useDispatch, useSelector } from 'react-redux'
const TweetList = lazy(() => import('../../components/tweet/TweetList'))
const TweetCreate = lazy(() => import('../../components/tweet/TweetCreate'))
import { getTweets } from '../../store/actions/tweets.action'
import { IRootState } from '../../types/store/IRootState.type'

const Dashboard = () => {
	const dispatch = useDispatch()
	const { tweets, loading } = useSelector((state: IRootState) => state.tweets)
	console.log('tweets', tweets)
	React.useEffect(() => {
		const userId = Cookies.get('user_Id')
		userId && dispatch(getTweets(userId))
	}, [dispatch])

	return (
		<div>
			<TweetCreate />
			<div className='mx-md-4 mt-5'>
				<TweetList
					tweets={tweets}
					loading={loading}
				/>
			</div>
		</div>
	)
}

export default Dashboard
