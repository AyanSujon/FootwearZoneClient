const newArrivals = [
  { name: "Sporty Sneakers", price: "$89", img: "/images/new1.jpg" },
  { name: "Elegant Loafers", price: "$110", img: "/images/new2.jpg" },
  { name: "Kids Running Shoes", price: "$50", img: "/images/new3.jpg" },
];

export default function NewArrivals() {
  return (
    <section className="py-12 container mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">New Arrivals</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {newArrivals.map((item) => (
          <div key={item.name} className="card bg-base-100 shadow hover:shadow-lg transition">
            <figure><img src={item.img} alt={item.name} className="rounded-lg" /></figure>
            <div className="card-body items-center text-center">
              <h3 className="card-title">{item.name}</h3>
              <p className="text-lg font-semibold">{item.price}</p>
              <button className="btn btn-primary mt-2">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
