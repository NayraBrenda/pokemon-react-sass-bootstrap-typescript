import { Container, Button } from "react-bootstrap";
import styles from "./Pagination.module.sass";

interface Iprops {
  next: string | null;
  previous: string | null;
  clickPage(url: string): void;
}

const Pagination = ({ next, previous, clickPage }: Iprops) => {
  return (
    <Container className={styles.Pagination}>
      {previous && (
        <Button
          onClick={() => clickPage(previous)}
          variant="warning"
          className={styles.Button}
        >
          &lt;
        </Button>
      )}
      {next && (
        <Button
          onClick={() => clickPage(next)}
          variant="warning"
          className={styles.Button}
        >
          &gt;
        </Button>
      )}
    </Container>
  );
};
export default Pagination;
