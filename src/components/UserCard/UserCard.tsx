import { FC, useMemo } from 'react';

import { User } from '../../api';
import { HighlightText } from '../HighlightText';

import './styles.css'

type UserCardProps = {
  user: User;
  searchText: string
}

export const UserCard: FC<UserCardProps> = ({ user, searchText }) => {
  const userName = useMemo(() => {
    return `${user.name.firstname} ${user.name.lastname}`
  }, [user])

  return (
    <div className="card">
      <h4><HighlightText text={userName} searchTerm={searchText} /></h4>
      <p>Email: <HighlightText text={user.email} searchTerm={searchText} /></p>
      <p>Phone: <HighlightText text={user.phone} searchTerm={searchText} /></p>
    </div>
  )
}