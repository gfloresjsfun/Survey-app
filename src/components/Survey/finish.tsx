import { Box, Typography } from "@mui/material";

const Finish: React.FC = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="100vw"
      height="100vh"
      flexDirection="column"
      gap="60px"
    >
      <Typography variant="h3">Survey Finished</Typography>
    </Box>
  );
};
export default Finish;
