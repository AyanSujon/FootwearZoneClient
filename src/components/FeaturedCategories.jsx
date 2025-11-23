const categories = [
  { name: "Men", img: "/images/men.jpg", link: "/men" },
  { name: "Women", img: "/images/women.jpg", link: "/women" },
  { name: "Kids", img: "/images/kids.jpg", link: "/kids" },
];

export default function FeaturedCategories() {
  return (
    <section className="py-12 container mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">Shop by Category</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <a key={cat.name} href={cat.link} className="card bg-base-100 shadow hover:shadow-lg transition">
            <figure><img src={cat.img} alt={cat.name} className="rounded-lg" /></figure>
            <div className="card-body items-center">
              <h3 className="card-title">{cat.name}</h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
