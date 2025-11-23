const products = [
  { name: "Running Shoes", price: "$99", img: "/images/shoe1.jpg" },
  { name: "Casual Sneakers", price: "$79", img: "/images/shoe2.jpg" },
  { name: "Formal Shoes", price: "$120", img: "/images/shoe3.jpg" },
];

export default function BestSellers() {
  return (
    <section className="py-12 container mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">Best Sellers</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((p) => (
          <div key={p.name} className="card bg-base-100 shadow hover:shadow-lg transition">
            <figure><img src={p.img} alt={p.name} className="rounded-lg" /></figure>
            <div className="card-body items-center text-center">
              <h3 className="card-title">{p.name}</h3>
              <p className="text-lg font-semibold">{p.price}</p>
              <button className="btn btn-primary mt-2">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
