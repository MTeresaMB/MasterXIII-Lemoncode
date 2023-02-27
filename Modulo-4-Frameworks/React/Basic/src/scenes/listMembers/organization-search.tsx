import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

interface Props{
  onSearch: (organizationName: string) => void;
}


export const OrganizationSearch: React.FC<Props> = (props) => {
  const {onSearch} = props;
  const [organizationName, setOrganizationName] = React.useState('Lemoncode');

  React.useEffect(() => {
    onSearch(organizationName);
  },[])

  return (
    <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
      <TextField id="outlined-basic" label={organizationName} variant="outlined" 
        onChange={(e) => setOrganizationName(e.target.value)}
      />
      <Button variant="contained" onClick={() => onSearch(organizationName)} sx={{minHeight:53}}>
      Search
      </Button>

  </Box>

  )
}
