import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import SearchTrends from '../../components/trends/SearchTrends'
import TweetList from '../../components/tweet/TweetList'
import { findTrends } from '../../store/actions/trends.action'
import { IRootState } from '../../types/store/IRootState.type'

const Trends = () => {
	const { slug } = useParams()
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const { tweets, loading } = useSelector((state: IRootState) => state.tweets)

	const [search, setSearch] = React.useState(slug)

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) =>
		setSearch(e.target.value)

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		if (search) {
			dispatch(findTrends(search))
			navigate(`/trends/${search}`)
		} else {
			toast.error('Please enter a search term')
		}
	}

	React.useEffect(() => {
		setSearch(slug)
		slug && dispatch(findTrends(slug))
	}, [slug])

	return (
		<div className='mx-md-4 mt-5'>
			<header>
				<SearchTrends
					search={search}
					handleSearch={handleSearch}
					handleSubmit={handleSubmit}
				/>
			</header>
			<div className='mt-6'>
				<TweetList
					tweets={tweets}
					loading={loading}
					error='No tweets found for this trend'
				/>
			</div>
		</div>
	)
}

export default Trends
