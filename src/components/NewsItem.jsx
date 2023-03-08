import { Box, Typography, useTheme } from '@mui/material';
import React from 'react'
import { tokens } from "../../src/theme";

const NewsItem = ({ title, description, url, urlToImage }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box sx={{ width: "900px", padding: "20px", marginBottom: "20px" }}>
      <img src={urlToImage} alt="New_Image" />
      <Typography
            variant="h3"
            fontWeight="bold"
            color={colors.greenAccent[500]}
            marginTop="1rem"
            textAlign={'center'}
        >
            <a href={url}>{title}</a>
        </Typography>
      <Typography
            variant="h6"
            fontWeight="light"
            color={colors.grey[100]}
        >
            {description}
        </Typography>
    </Box>
  )
}

export default NewsItem
