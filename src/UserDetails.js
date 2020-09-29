import React from 'react';
import Result from './Result';


const UserDetails = ({result }) => {
  return (
    <div>
      {
        result.map((result, i) => {
          return (
            <Result
              key={i}
              login={result[i].login}
              url={result[i].url}
            
              />
          );
        })
      }
    </div>
  );
}




export default UserDetails;
