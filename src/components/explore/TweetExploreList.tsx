import Cookies from 'js-cookie'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import axios from '../../config/axios.config'
import { ITweet } from '../../types/tweet.type'
import Spinner from '../reusable/Spinner'
import TweetExplore from './TweetExplore'

const TweetExploreList = () => {
	const [tweets, setTweets] = useState<ITweet[]>([])
	const [loading, setLoading] = useState(false)

	React.useEffect(() => {
		const userId = Cookies.get('user_Id')
		const getExploreTweets = async () => {
			try {
				setLoading(true)
				const response = await axios.get(
					`/tweet/exploreTweets/${userId}`
				)
				const data = await response.data
				setTweets(data.tweets)
				setLoading(false)
			} catch (err: any) {
				setLoading(false)
				toast.error(err.response.data.message)
			}
		}
		getExploreTweets()
	}, [])

	if (loading) return <Spinner height='15vh' />

	const renderTweets = (tweets: ITweet[]) => {
		return (
			tweets.length > 0 &&
			tweets.map((tweet: ITweet) => {
				return (
					<TweetExplore
						key={tweet._id}
						tweet={tweet}
					/>
				)
			})
		)
	}

	return (
		<div>
			<main className='px-md-3 row'>
				<section className='col-6'>
					{renderTweets(
						tweets.slice(0, Math.round(tweets.length / 2))
					)}
				</section>
				<div className='col-6'>
					{renderTweets(tweets.slice(Math.round(tweets.length / 2)))}
				</div>
			</main>
		</div>
	)
}

export default TweetExploreList
