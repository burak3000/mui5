import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import SettingsIcon from '@mui/icons-material/Settings';
import { Typography } from '@mui/material';
import styled from '@emotion/styled';

export default function BasicButtons() {
  const BlueButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.otherColor.main,
    color: "#888", m: 5,
    "&:hover": {
      backgroundColor: "lightBlue"
    },
    "&:disabled": {
      backgroundColor: "gray",
      color: "white"
    }
  }));
  return (
    <Stack spacing={2} direction="row">
      <Button variant="text" color='otherColor'>Text</Button>
      <Button variant="contained" startIcon={<SettingsIcon />}>Contained</Button>
      <Button variant="outlined" color='secondary'>Outlined</Button>
      <Typography variant="h1" component="p">
        It uses h1 style but it's a p tag
      </Typography>
      <BlueButton>My Button</BlueButton>
      <BlueButton>Another Button</BlueButton>
    </Stack>
  );
}