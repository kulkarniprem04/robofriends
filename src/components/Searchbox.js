import React from 'react';

const Searchbox = ({ Searchfield, Searchchange}) => {
    return (
        <div classname='pa3'>
            <input className='pa3 ba b--green bg-light-green'
             type='search' 
             placeholder='search robot' 
             onChange={Searchchange}
             />
        </div>
    );
}

export default Searchbox;