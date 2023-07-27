import { LinearProgress, Box, Typography } from "@mui/material";

import classes from "./styles.module.scss";
interface IProps {
  total: number;
  attempted: number;
}
const Progress: React.FC<IProps> = ({ attempted, total }) => {
  return (
    <Box
      display="flex"
      justifyContent="space-around"
      alignItems="center"
      gap="10px"
    >
      <LinearProgress
        variant="determinate"
        value={(attempted / total) * 100}
        className={classes.progress}
      />
      <Box display="flex">
        <Typography fontWeight="bold" style={{ color: "#1976d2" }}>
          {attempted}
        </Typography>
        <Typography color="gray" fontWeight="bold">
          /{total}%
        </Typography>
      </Box>
    </Box>
  );
};
export default Progress;
