import { useState } from "react";
import { Box, Button, Checkbox, Typography } from "@mui/material";

import Progress from "../Progress";
import QuestionsData from "../../Data/questions.json";
import Start from "./start";
import Finish from "./finish";

import classes from "./styles.module.scss";

const Survey: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [screen, setScreen] = useState<TScreen>("start");
  const [answers, setAnswers] = useState<
    {
      question: string;
      answer: string[];
    }[]
  >(QuestionsData.map((q) => ({ question: q.question, answer: [] })));
  const question = QuestionsData[index];
  const attemptedQuestions = answers.reduce(
    (count, entry) => count + (entry.answer.length >= 1 ? 1 : 0),
    0
  );

  const handleNext = () => {
    if (answers[index].answer[0]) {
      if (index < QuestionsData?.length - 1) {
        setIndex(index + 1);
      } else if (index == QuestionsData?.length - 1) {
        setScreen("finish");
        console.log(answers);
      }
    }
  };

  const handleBack = () => {
    if (index > 0) setIndex(index - 1);
  };

  const handleOptionSelect = (option: string) => {
    setAnswers((prevAnswers) => {
      const updatedAnswers = [...prevAnswers];
      const uniqueAnswers = new Set(updatedAnswers[index].answer);
      if (uniqueAnswers.has(option)) {
        uniqueAnswers.delete(option);
      } else {
        uniqueAnswers.add(option);
      }
      updatedAnswers[index] = {
        ...updatedAnswers[index],
        answer: [...uniqueAnswers],
      };
      return updatedAnswers;
    });
  };

  if (screen == "start") return <Start onStart={() => setScreen("survey")} />;
  if (screen == "finish") return <Finish />;
  return (
    <Box display="flex" flexDirection="column" gap="20px">
      <Typography variant="h5" fontWeight="bold">
        COMPLETE SURVEY
      </Typography>
      <Progress total={QuestionsData.length} attempted={attemptedQuestions} />
      <Typography fontWeight="bold">{question.question}?</Typography>
      <Box
        display="flex"
        flexDirection="column"
        mb="30px"
        className={classes.optionsContainer}
      >
        {question.options?.map((option, i) => {
          return (
            <Option
              key={i}
              option={option}
              checked={answers[index].answer.includes(option)}
              onOptionSelect={() => {
                handleOptionSelect(option);
              }}
            />
          );
        })}
      </Box>
      <Box display="flex" justifyContent="space-between" px="10px">
        <Button variant="text" onClick={handleBack}>
          BACK
        </Button>
        <Button variant="contained" onClick={handleNext}>
          {index == QuestionsData?.length - 1 ? "FINISH" : "NEXT"}
        </Button>
      </Box>
    </Box>
  );
};

interface IOptionProps {
  option: string;
  checked: boolean;
  onOptionSelect: () => void;
}
const Option: React.FC<IOptionProps> = ({
  option,
  checked,
  onOptionSelect,
}) => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      px="10px"
      py="10px"
      className={classes.optionContainer}
    >
      <Typography title="option">{option}</Typography>
      <Checkbox checked={checked} onClick={onOptionSelect}></Checkbox>
    </Box>
  );
};

type TScreen = "start" | "survey" | "finish";

export default Survey;
