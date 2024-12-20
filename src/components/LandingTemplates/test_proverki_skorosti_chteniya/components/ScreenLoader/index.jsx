import * as React from "react";
import * as loader from "./style.module.scss";
import { BlockProcess } from "../BlockProcess";
import { CircularProgress } from '@mui/material';
export const ScreenLoader = () => {
  return (
    <BlockProcess>
      <div className={loader.loader}>
        <h2>Рассчитываем результат</h2>
        <CircularProgress color={'success'} />
      </div>
    </BlockProcess>
  );
};
