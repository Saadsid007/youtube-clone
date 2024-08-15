import React from 'react';
import { Box, Stack } from '@mui/material';
import { keyframes } from '@mui/system';

// Define the shimmer animation
const shimmer = keyframes`
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
`;

// Style for the shimmer box
const ShimmerBox = {
  width: '100%',
  height: '100%',
  background: 'linear-gradient(to right, #f0f0f0 0%, #e0e0e0 50%, #f0f0f0 100%)',
  backgroundSize: '1000px 100%',
  animation: `${shimmer} 1.5s infinite linear`,
  borderRadius: '8px',
};

const Loader = () => (
  <Box minHeight="95vh">
    <Stack direction="row" justifyContent="center" alignItems="center" height="80vh">
      <Box sx={{ ...ShimmerBox, width: '200px', height: '200px' }} />
    </Stack>
  </Box>
);

export default Loader;
