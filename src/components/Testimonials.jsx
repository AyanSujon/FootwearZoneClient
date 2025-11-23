const testimonials = [
  { name: "Alice", review: "Best shoes I’ve ever bought! Super comfy.", img: "/images/user1.jpg" },
  { name: "John", review: "Fast delivery and amazing quality.", img: "/images/user2.jpg" },
  { name: "Sofia", review: "Stylish and affordable. Highly recommend!", img: "/images/user3.jpg" },
];

export default function Testimonials() {
  return (
    <section className="py-12 container mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">What Our Customers Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <div key={t.name} className="card bg-base-100 shadow p-6">
            <div className="flex flex-col items-center text-center">
              <img src={t.img} alt={t.name} className="w-24 h-24 rounded-full mb-4" />
              <p className="italic">"{t.review}"</p>
              <h3 className="font-bold mt-2">{t.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
