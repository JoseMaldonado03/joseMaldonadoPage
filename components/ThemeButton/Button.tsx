import { BsMoon, BsSun } from 'react-icons/bs';

import classes from './styles.module.css';

interface ButtonProps {
  isDark: boolean;
  onClick?: () => unknown;
}

export default function Button(props: ButtonProps) {
  return (
    <button
      data-enabled={props.isDark}
      onClick={props.onClick}
      className={classes.button}
    >
      <div className={classes.indicator}>
        {props.isDark ? <BsMoon /> : <BsSun />}
      </div>
    </button>
  );
}
