import React from 'react';
import { Link } from 'react-router-dom';

function Search() {
	return (
		<div>
			<Link to="/Search">
				<img src="/img/search.png" width={23} height={23} />
			</Link>
		</div>
	);
}

export default Search;
