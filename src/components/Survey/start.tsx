import { Box, Button, Typography } from "@mui/material";

interface IProps {
  onStart: () => void;
}
const Start: React.FC<IProps> = ({ onStart }) => {
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
      <Typography variant="h3" data-testid="start-text">
        Begin Survey
      </Typography>
      <Button variant="contained" onClick={onStart}>
        Start
      </Button>
    </Box>
  );
};
export default Start;
