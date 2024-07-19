import React, { ChangeEvent, useEffect, useMemo, useState } from 'react';
import { User, fetchUsers } from './api';
import { Header, Search, UserCard } from './components';
import { filterUsers } from './utils';

import './App.css';

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [searchValue, setSearchValues] = useState('');
  const [activeUsersId, setActiveUsersId] = useState<number[]>([]);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValues(event.target.value)
  }

  const handleChangeActiveUser = (id: number) => {
    const idIsActive = activeUsersId.includes(id)
    if(idIsActive) {
      setActiveUsersId(activeUsersId.filter(userId => userId !== id))
    } else {
      setActiveUsersId([...activeUsersId, id])
    }
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
          return <UserCard
            key={user.id}
            user={user}
            searchText={searchValue}
            isActive={activeUsersId.includes(user.id)}
            onChangeActiveUserId={handleChangeActiveUser}
          />
        })}
      </div>
    </div>
  );
}

export default App;
