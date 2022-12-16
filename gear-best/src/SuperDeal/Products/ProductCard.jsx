import styles from "./ProductCard.module.css";
const ProductCard = ({ newPrice, image, price, id, title }) => {
  const discount = Number(price) - Number(newPrice);
  const dis = ((discount / Number(price)) * 100).toFixed(0);
  return (
    <div className={styles.container}>
      <div>
      <div className={styles.discount}>
       <span style={{ fontSize: "17px", color: "white" }}>{dis}%</span>
       <span style={{ fontSize: "14px", color: "white" }}>off</span>
      </div>
        <img src={image} alt="" />
      </div>
      <div>
        <p>{title}</p>
        <span style={{ fontSize: "17px", color: "red" }}>${newPrice}</span>
        <br />
        <span style={{ fontSize: "13px", color: "grey" }}>RRP:</span>
        <span style={{ fontSize: "13px", color: "grey" }}>
          <del>${price}</del>
        </span>
      </div>
    </div>
  );
};
export default ProductCard;