import { ITweet } from './tweet.type'
import { IUser } from './user.type'

export interface INotification {
	_id: string
	type: string
	sender: IUser
	receiver: string
	tweet: ITweet
	createdAt: Date
	updatedAt: Date
	isRead: boolean
	isSeen: boolean
}
