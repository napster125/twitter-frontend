import React from 'react'

interface Iprops {
	size?: string;
	height?: string;
}

const Spinner = ({ size, height:h }: Iprops) => {
	return (
		<div
			style={{
				height: h || '',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<div
				className={`spinner-border ${
					size && `spinner-border-${size}`
				} `}
				role='status'
			>
				<span className='visually-hidden'>Loading...</span>
			</div>
		</div>
	);
};

export default Spinner