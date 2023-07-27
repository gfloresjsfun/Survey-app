import { Button } from "@mui/material";
import classes from "./styles.module.scss";

const Start: React.FC = () => {
  return (
    <div className={classes.test}>
      <h1>Start</h1>
      <Button>Start the Survey</Button>
    </div>
  );
};
export default Start;
