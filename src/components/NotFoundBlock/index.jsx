import styles from './styles.module.scss';

function NotFoundBlock() {
  return (
    <div className={styles.block}>
      <h1>
        <span className={styles.smile}>☹️</span>
        <br />
        Ничего не найдено
      </h1>
      <p className={styles.description}>
        К сожалению, данная страница отсутствует в нашем интернет-магазине
      </p>
    </div>
  );
}


export default NotFoundBlock;