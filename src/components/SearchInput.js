import React from "react";

const SearchInput = ({searchTerm, setSearchTerm}) => {
    return (
        <header>
            <input
                type="text"
                placeholder="Search by App"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </header>
    )
}
export default SearchInput;
