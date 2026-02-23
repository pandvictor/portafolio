import { Avatar, Stack } from '@mui/material';
import { ContactInfo } from '../../types/types';
import { publicPath } from '../../constants/gloabals';
import { LinkItem } from '../atoms';

type FloatingActionButtons = {
  data: ContactInfo[];
};


const FloatingActionButtons = ({ data }: FloatingActionButtons) => {
  return (
    <Stack direction={{xs: 'row', md: 'column'}} sx={{position: 'fixed', bottom: '10px', right: '10px', zIndex: 1000}}>
      {data.map((item: ContactInfo, index: number) => (
        <div className="floating-button" key={`${item.title}-${index}`}>
          <LinkItem to={item.url}>
          <Avatar
            sx={{
              display: 'flex',
              mr: 1,
              height: 30,
              width: 30,
              bgcolor: 'rgba(15,23,42,0.7)',
              border: '1px solid var(--border-subtle)',
            }}
            alt="A"
            src={`${publicPath}/images/icons/${item.icon}`}
          />
          </LinkItem>
        </div>
      ))}
    </Stack>
  );
};

export default FloatingActionButtons;
