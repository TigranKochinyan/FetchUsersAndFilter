import { FC, useMemo } from 'react';

import { User } from '../../api';
import { HighlightText } from '../HighlightText';

import './styles.css'

type UserCardProps = {
  user: User;
  searchText: string,
  isActive: boolean,
  onChangeActiveUserId: (id: number) => void,
}

export const UserCard: FC<UserCardProps> = ({ user, searchText, isActive, onChangeActiveUserId }) => {
  const userName = useMemo(() => {
    return `${user.name.firstname} ${user.name.lastname}`
  }, [user])

  const handleChange = () => {
    onChangeActiveUserId(user.id)
  }

  return (
    <div className={`card ${isActive ? 'active' : ''}`} onClick={handleChange}>
      <h4><HighlightText text={userName} searchTerm={searchText} /></h4>
      <p>Email: <HighlightText text={user.email} searchTerm={searchText} /></p>
      <p>Phone: <HighlightText text={user.phone} searchTerm={searchText} /></p>
    </div>
  )
}