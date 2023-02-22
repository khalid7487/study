import { Typography, Box, useTheme, Button } from "@mui/material";
import { tokens } from "../theme";

import Chip from '@mui/material/Chip';
import Check from '@mui/icons-material/Check';


const Header = ({ title, subtitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box mb="30px">
      <Typography
        variant="h2"
        color={colors.grey[100]}
        fontWeight="bold"
        sx={{ m: "0 0 5px 0" }}
      >
        {title}
      </Typography>
      <Typography variant="h5" color={colors.greenAccent[400]}>
        {subtitle}
      </Typography>
      <Button color="secondary" variant="contained">
        Test
      </Button>
      <Chip
        color="success"
        label={
          <span>
            <b>Status:</b> Completed
          </span>
        }
        icon={<Check fontSize="small" />}
      />
    </Box>
  );
};

export default Header;
