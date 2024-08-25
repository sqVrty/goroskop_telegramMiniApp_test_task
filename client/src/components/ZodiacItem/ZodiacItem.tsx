import classes from "./ZodiacItem.module.css";

export default function ZodiacItem({
  title,
  datePeriod,
  imagePath,
}: {
  title: string;
  datePeriod: string;
  imagePath: string;
}) {
  return (
    <div className={classes.container}>
      <img src={imagePath} className={classes.image} alt={title} />
      <div className={classes.textBlock}>
        <h3 className={classes.title}>{title}</h3>
        <p className={classes.datePeriod}>{datePeriod}</p>
      </div>
    </div>
  );
}
