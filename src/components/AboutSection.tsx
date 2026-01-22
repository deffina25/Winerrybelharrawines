export function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl sm:text-4xl md:text-5xl mb-6 tracking-wide">Our Heritage</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Belharra wines are born from a deep respect for the land and a commitment to 
                sustainable viticulture. Our vineyards, nestled in the rolling hills of wine country, 
                benefit from ideal growing conditions that have been perfected over generations.
              </p>
              <p>
                Each vintage reflects our dedication to quality and authenticity. We combine 
                time-honored winemaking traditions with modern techniques to create wines that 
                are both elegant and expressive.
              </p>
              <p>
                From vine to bottle, every step of our process is guided by a passion for 
                excellence and a desire to share the unique character of our terroir with 
                wine lovers around the world.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2">
            <div className="aspect-[4/3] overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1701596744958-b494dcffe375?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aW5lJTIwY2VsbGFyJTIwYmFycmVsc3xlbnwxfHx8fDE3NjkwMDM2NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Wine cellar with oak barrels"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
