import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
// import { Sales } from '../pages/Sales';
// import { Invoices } from './Invoices';
import { InvoiceDetails } from './InvoiceDetails';
// import { Customers } from 'pages/Customers';
import { CustomersDetails } from 'pages/CustomersDetails';

// розділення коду, щоб не завантажувався весь js одразу
// імпортуємо lazy, туди передаємо, імпорт і обо'язковозабрати статичний імпорт
// потрібно, щоб експорт був дефолтний!!!
const Sales = lazy(() => import('../pages/Sales'));
// щоб все не зламалося, бо поки завантажаються не може відрендерити,
//  потрібно огорнути в suspense, потрібно дивитися куди ставити, щоб все не перерендрювалося

const Customers = lazy(() => import('../pages/Customers'));
const Invoices = lazy(() => import('./Invoices'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* в Navigate ми вказуємо те, куди має перейти якщо заходить на корневу сторінку */}
          <Route index element={<Navigate to="sales" />} />
          <Route path="dashboard" element={<div>Dashboard</div>} />
          <Route path="sales" element={<Sales />}>
            <Route index element={<div>index Sales route</div>} />
            <Route path="analytics" element={<div>Analytics</div>}></Route>
            <Route path="invoices" element={<Invoices />}>
              <Route index element={<div>Invoices index route</div>} />
              <Route path=":invoiceId" element={<InvoiceDetails />}></Route>
            </Route>
            <Route path="deposits" element={<div>Deposits</div>}></Route>
          </Route>
          <Route path="reports" element={<div>Reports</div>} />
          <Route path="feedback" element={<div>Feedback</div>} />
          <Route path="customers" element={<Customers />} />
          <Route
            // після : має співпадати з тим, що в комп КастДетаіл в usePsrams
            path="customers/:customersId"
            element={<CustomersDetails />}
          />
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};
