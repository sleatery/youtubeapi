import React, { useState } from 'react'

const SearchBar = ({ onFormTerm }) => {

    const [term, setTerm] = useState('');

    const onSubmit = event => {
       event.preventDefault();  //Ngăn k cho reload khi mình nhấn Enter ở Form
       onFormTerm(term); //dẫn props từ component bố là searchbar ở file APP
};

    return (
        <div className="search-bar ui segment">
            <form onSubmit={onSubmit} className="ui form">
                <div className="field">
                    <label>Video Search</label>
                    <input 
                        type="text" 
                        value={term} 
                        onChange={e => setTerm(e.target.value)}/>
                </div>
            </form>
        </div>
    )
}

export default SearchBar;
