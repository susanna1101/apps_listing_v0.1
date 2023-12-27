import React, { useState, useEffect } from 'react';
import { NavBar } from '../components/Navbar';
import Card from '../components/Card';
import axios from 'axios';
import Pagination from '../components/Pagination';
import SearchInput from '../components/SearchInput';
import { URL, appsPerPage } from '../constants';
import { useNavigate } from 'react-router-dom';

const AppListPage = () => {
    const [apps, setApps] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const navigate = useNavigate();

    const filteredApps = apps.filter(app =>
        (!selectedCategory || app.categories.includes(selectedCategory)) &&
        (!searchTerm.trim() || app.name.toLowerCase().includes(searchTerm.toLowerCase().trim()))
      );
      
    const indexOfLastApp = currentPage * appsPerPage;
    const indexOfFirstApp = indexOfLastApp - appsPerPage;
    const currentApps = filteredApps.slice(indexOfFirstApp, indexOfLastApp);
    const paginate = pageNumber => setCurrentPage(pageNumber);

    useEffect(() => {
        axios.get(`${URL}`)
            .then(response => {
                const appsWithTotalPrice = response.data.map(app => ({
                  ...app,
                  totalPrice: app.subscriptions.reduce((sum, plan) => sum + plan.price, 0)
                }));
                appsWithTotalPrice.sort((a, b) => a.totalPrice - b.totalPrice);
                setApps(appsWithTotalPrice);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

      const handleLogout = () => {
        localStorage.removeItem('isLoggedIn');
        navigate('/login');
    };
  return (
    <div>
      <div className="flex-container">

        <NavBar onHandleLogout={handleLogout} onCategorySelect={category => setSelectedCategory(category)} />
        <section className="apps-list">

           <SearchInput
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
           />

            <ul>
                {
                    currentApps.map(app => {
                        return <Card app={app} />
                    })
                }
            </ul>

            <Pagination
                appsPerPage={appsPerPage}
                totalApps={filteredApps.length}
                paginate={paginate}
            />

        </section>
      </div>
      

    </div>
  );
};

export default AppListPage;
