import classes from './styles.module.css';

export default function Presentacion() {
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>
        Una fusión de <br /> arte y código
      </h1>
      <p className={classes.subtitle}>
        En los suspiros del alma florece la poesía
      </p>
    </div>
  );
}
