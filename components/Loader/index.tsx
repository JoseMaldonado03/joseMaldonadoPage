import { BounceLoader } from 'react-spinners';
import classes from './styles.module.css';

export default function Loader() {
  return (
    <div className={classes.loader}>
      <BounceLoader />
    </div>
  );
}
