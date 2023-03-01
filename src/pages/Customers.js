import { SearchBox } from 'components/SearchBox';
import { getCustomers } from 'fakeApi';
import { useEffect, useMemo, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

export const Customers = () => {
  const location = useLocation();
  const [customers, setCustomers] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const filterParam = searchParams.get('filter') ?? '';

  useEffect(() => {
    getCustomers().then(setCustomers);
  }, []);

  const changeFilter = value => {
    setSearchParams(value !== '' ? { filter: value } : {});
  };

  const visibleCustomers = useMemo(() => {
    return customers.filter(customer =>
      customer.name.toLowerCase().includes(filterParam.toLowerCase())
    );
  }, [customers, filterParam]);
  return (
    <main>
      <SearchBox value={filterParam} onChange={changeFilter} />
      {customers.length > 0 && (
        <ul>
          {/* рендеремо вже не з customers а з visibleCustomers */}
          {visibleCustomers.map(({ id, name }) => (
            <li key={id}>
              <Link to={`${id}`} state={{ from: location }}>
                {name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
};

export default Customers;
