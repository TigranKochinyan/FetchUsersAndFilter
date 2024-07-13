import {ChangeEvent, FC} from "react";
import './styles.css'

type SearchProps = {
  searchValue: string;
  onChange: (value: ChangeEvent<HTMLInputElement>) => void;
}

export const Search: FC<SearchProps> = ({ searchValue, onChange }) => {
  return (
    <div className="search">
      <input
        type="text"
        value={searchValue}
        onChange={onChange}
        placeholder="Filter by Name, Enail or Phone"
      />
    </div>
  )
}