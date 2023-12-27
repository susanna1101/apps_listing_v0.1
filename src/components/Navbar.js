import React from "react";

export const NavBar = ({onCategorySelect, onHandleLogout}) => {
    const categories = ['Channels', 'Dialer', 'Optimization', 'Reporting', 'Voice Analytics'];

    return (
        <nav className="nav-categories">
        <h2>Categories</h2>

        <ul className="nav-menu">
        {categories.map(category => (
          <li
            className="active"
            key={category}
            onClick={() => onCategorySelect(category)}
          >
            <a href="#">
                {category}
            </a>
          </li>
        ))}

        </ul>
        <button onClick={onHandleLogout} className='btn-logout' ><a href="#">Logout</a></button>

      </nav>
    )
}