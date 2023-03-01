import { getCustomerById } from 'fakeApi';
import { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

export const CustomersDetails = () => {
  const { customersId } = useParams();
  const [customer, setCustomer] = useState(null);
  const location = useLocation();

  useEffect(() => {
    getCustomerById(Number(customersId)).then(setCustomer);
  }, [customersId]);

  if (!customer) {
    return null;
  }

  const { id, name } = customer;
  //   location.state в новій вкладці буде null => location.state?.from ?? '/customers'
  const backLinkHref = location.state?.from ?? '/customers';

  return (
    <main>
      {/* <Link to="/customers">Back to customers</Link>  */}
      {/* з Customers передали об'єкт, звідки прийшло, щоб назад поверталося */}
      <Link to={backLinkHref}>Back to customers</Link>
      <p>id: {id}</p>
      <p>Username: {name}</p>
    </main>
  );
};

export default CustomersDetails;
