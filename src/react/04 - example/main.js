import React, {useContext} from 'react'
import {observer} from 'mobx-react-lite'

import storeContext from './data/store'

const componentName = 'main'

export default observer(() => {
	const rootStore = useContext(storeContext)
	const store = rootStore.ui[componentName]

	return (
		<ul className={'main'}>
			{/*
				if there are no models
				make sure we are not loading,
				before we show the empty field
			*/}
			{store.all.length === 0 &&
				(store.loading
					? <li>Loading...</li>
					: <li>None</li>
				)
			}

			{store.all.map((item) => {
				return (
					<li
						key={item.id}
						onClick={item.clicked}
						className={item.selected ? 'on' : ''}
					>
						{item.displayName}
					</li>
				)
			})}
		</ul>
	)
})
