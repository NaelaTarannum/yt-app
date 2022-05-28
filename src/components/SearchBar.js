import React from "react";
const SearchBar = (props)=>{
    const [field,setField]=React.useState('');
    const setValue=(event)=>{
            setField(event.target.value)
    }
    const onFormSubmit=(event)=>{
        event.preventDefault();
        props.onFormSubmit(field)
    }
    return(
        <div className="search-bar ui segment">
            <form className="ui form" onSubmit={onFormSubmit}>
                <div className="field">
                    <label>Video search</label>
                    <input type="text" value={field} onChange={setValue}></input>
                </div>
            </form>
        </div>
    )
}
export default SearchBar;