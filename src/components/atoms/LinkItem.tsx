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
      backgroundColor: 'rgba(79,70,229,0.12)',
      color: '#2f2f2f',
      boxShadow: '0 8px 18px rgba(79,70,229,0.16)',
    },
  }));
