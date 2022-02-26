import React from 'react'

interface Iprops {
	displayInDropDown?: boolean;
}

const LogOutBtn = ({displayInDropDown} : Iprops) => {
  return (
		<div>
			<button
				className={` btn bg-secondary w-90 ${
					displayInDropDown ? 'w-100 py-2 rounded-0 mt-1' : 'd-lg-flex d-none py-3'
				} justify-content-center align-items-center me-xl-2 btn-lg   me-1`}
			>
				<i className='fa-solid fa-arrow-right-from-bracket mt-1 me-xl-3  fs-18'></i>
				<span className='mt-1 fs-17 d-xl-inline d-none'>Log Out</span>
			</button>
		</div>
	);
}

export default LogOutBtn