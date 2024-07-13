import React, { ChangeEvent, useEffect, useMemo, useState } from 'react';
import { User, fetchUsers } from './api';
import { Header, Search, UserCard } from './components';
import { filterUsers } from './utils';

import './App.css';

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [searchValue, setSearchValues] = useState('');

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValues(event.target.value)
  }

  const filteredUsers = useMemo(() => {
    return filterUsers(users, searchValue)
  }, [users, searchValue]);

  useEffect(() => {
    fetchUsers().then(users => setUsers(users));
  }, []);

  return (
    <div className="App">
      <Header />
      <Search searchValue={searchValue} onChange={handleSearch} />
      <div className="usersWrapper">
        {filteredUsers.map(user => {
          return <UserCard key={user.id} user={user} searchText={searchValue} />
        })}
      </div>
    </div>
  );
}

export default App;
