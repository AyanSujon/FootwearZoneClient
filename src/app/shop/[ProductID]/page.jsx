export default async function SingleProduct(props) {

  const { ProductID } = await props.params; // ← FIXED

  const res = await fetch(`http://localhost:4000/api/products/${ProductID}`, {
    cache: "no-store",
  });

  const product = await res.json();

  return (
    <div>
      <h1>{product?.title}</h1>
      <p>{product?.description}</p>
      <strong>Price: ${product?.price}</strong>
    </div>
  );
}
