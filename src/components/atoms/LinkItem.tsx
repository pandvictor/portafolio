import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom'

export const LinkItem = styled(NavLink)(({ }) => ({
    textDecoration: 'none',
    color: 'inherit', // Ensures the link color inherits from its parent
    display: 'inline-flex',
    alignItems: 'center',
    gap: 6,
    transition: 'background-color 0.2s ease, color 0.2s ease, box-shadow 0.2s ease',
    '&.nav-link': {
      padding: '6px 12px',
      borderRadius: 12,
    },
    '&.active': {
      fontWeight: 'bold', // Example of applying styles to the active link
    },
    '&.nav-link.active': {
      backgroundColor: 'rgba(34,211,238,0.18)',
      color: '#e2e8f0',
      boxShadow: '0 12px 24px rgba(34,211,238,0.2)',
    },
  }));
