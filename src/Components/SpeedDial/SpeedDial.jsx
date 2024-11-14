import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';

import DnsOutlinedIcon from '@mui/icons-material/DnsOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import CollectionsBookmarkOutlinedIcon from '@mui/icons-material/CollectionsBookmarkOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
const actions = [
  { icon: <HomeOutlinedIcon />, name: 'Home' },
  { icon: <AccountCircleOutlinedIcon />, name: 'About' },
  { icon: <CollectionsBookmarkOutlinedIcon />, name: 'Portfolio' },
  { icon: <DnsOutlinedIcon />, name: 'Service' },
  { icon: <AlternateEmailOutlinedIcon />, name: 'Contact' },
];

const SpeedDialMenu = () => {
  return (
    <Box sx={{ height: 420, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'absolute', bottom: 0, right: 16 }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </Box>
  );
};

export default SpeedDialMenu;
