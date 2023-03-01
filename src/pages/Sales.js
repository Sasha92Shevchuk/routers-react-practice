import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Box } from 'components/Box';
import { Suspense } from 'react';

const navItems = [
  { href: 'analytics', text: 'Analytics' },
  { href: 'invoices', text: 'Invoices' },
  { href: 'deposits', text: 'Deposits' },
];

const NavItem = styled(NavLink)`
  padding: ${p => p.theme.space[2]}px;
  color: ${p => p.theme.colors.text};
  text-decoration: none;

  &.active {
    color: ${p => p.theme.colors.primary};
  }
`;

export const Sales = () => {
  return (
    <Box as="main" display="flex" flexDirection="column">
      <Box as="header" borderBottom="1px solid black" p={4}>
        <Box as="ul" display="flex">
          {navItems.map(({ href, text }) => (
            <NavItem key={href} to={href}>
              {text}
            </NavItem>
          ))}
        </Box>
      </Box>
      {/* ставимо і тут суспенз, щоб перерендр лише того, що потрібно, можна ставити безліч суспенз */}
      <Suspense
        fallback={
          <h1>Тут буде інформація,замість компонента, доки йде завантажання</h1>
          // але краще поставити null  !!!!
        }
      >
        <Outlet />
      </Suspense>
    </Box>
  );
};

export default Sales;
