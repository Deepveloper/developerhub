import React from 'react';

const Result = ({login,url}) =>{
 return(

		<div>
			  <h1>
              The result of the search is given below:
              {login}
              {url}
              </h1>

		</div>
 	)
}

export default Result;
