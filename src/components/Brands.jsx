const brands = [
  "/images/brand1.png",
  "/images/brand2.png",
  "/images/brand3.png",
  "/images/brand4.png",
];

export default function Brands() {
  return (
    <section className="py-12 bg-base-200">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Trusted By</h2>
        <div className="flex flex-wrap justify-center items-center gap-6">
          {brands.map((logo, index) => (
            <img key={index} src={logo} alt={`Brand ${index + 1}`} className="h-16 object-contain" />
          ))}
        </div>
      </div>
    </section>
  );
}
