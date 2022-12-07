import { VscSearch } from 'react-icons/vsc';

import { useGlobalContext } from '../contexts';

const NavBar: React.FC = () => {

  // Get the search term from the global context
  const { search, setSearch } = useGlobalContext();

  // Handle the change in the search input
  const handleChange = (event) => {
    setSearch(event.target.value);
  };
  return (
    <div className='row pb-2 border-secondary border-2 border-bottom'>
      <div className='fs-1 col-2 text-center'>Wookie Movies</div>
      <div className='col-10 text-end align-self-end'>

        {/* // Render the search input and search icon */}
        <span>
          <VscSearch className='fs-3' />{' '}
          <input
            role='search-input'
            type='text'
            id='search'
            name='search'
            className=''
            value={search}
            onChange={handleChange}
          />
        </span>
      </div>
    </div>
  );
};

export default NavBar;
