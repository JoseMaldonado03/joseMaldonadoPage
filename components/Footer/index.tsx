import classes from './styles.module.css';

export default function Footer() {
  return (
    <footer className={classes.footer}>
      © {new Date().getFullYear()} José Maldonado.
    </footer>
  );
}
