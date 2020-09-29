import React from 'react';
import './SearchBox.css';

const SearchBox = ({ChangeHandler}) =>{
 return(

		<div>
			<div className="Search">	

				<form className="SearchInput">
				<div>
				<label for="code">Progamming Language:</label><br/>
				  <input type="text" id="code" name="code" onChange={ChangeHandler}/>
				</div>
				<div>
				<label for="locate">Location:</label><br/>
				  <input type="text" id="locate" name="locate" onChange={ChangeHandler}/>
				</div>
				<div>
				<button type="button" className="searchButton"> Search </button>
				</div>
				  
				  
				</form>

			</div>	
		</div>
 	)
}

export default SearchBox;
