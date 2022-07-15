import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    title: "Harry Potter",
    price: 6,
    description: "This book is about Harry Potter and his friends",
  },
  {
    id: "p2",
    title: "The Da Vinci Code",
    price: 9,
    description: "This book is about History and Adventures",
  },
  {
    id: "p3",
    title: "Holy Bible",
    price: 4,
    description: "This book is about christian religion",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
