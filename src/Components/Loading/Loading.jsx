import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

import Typography from '@mui/material/Typography';
const Loading = () => {
  return (
    <Stack
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      spacing={2}
      direction="column"
    >
      <Typography variant="h4" gutterBottom sx={{ color: '#ffbf00' }}>
        Loading ...
      </Typography>
      <CircularProgress sx={{ color: '#ffbf00' }} size={80} />
    </Stack>
  );
};

export default Loading;
