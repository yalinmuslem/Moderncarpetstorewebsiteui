import AnimatedContent from "./AnimatedContent";

export default function BentoGrid() {
  return (
    <AnimatedContent
      distance={50}
      direction="vertical"
      duration={4}
      ease="power3.out"
      initialOpacity={0}
      animateOpacity
      scale={1}
      threshold={0}
      delay={0}
    >
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4 mb-32">
        {[
          "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09",
          "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e",
          "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc",
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
        ].map((url, i) => (
          <div key={i} className="h-80 rounded-[2rem] overflow-hidden group">
            <img
              src={`${url}?auto=format&fit=crop&q=80`}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              alt="Greenleaf sustainability"
            />
          </div>
        ))}
      </section>
    </AnimatedContent>
  );
}
