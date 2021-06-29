import { Box, Typography } from '@material-ui/core';

export const BannerWithText = ({ imgUrl }: { imgUrl: string }) => (
  <Box display="flex">
    <Box>
      <img src={imgUrl} alt="ehs" />
    </Box>
    <Typography variant="body1" component="p">
      GNTM
    </Typography>
  </Box>
);
