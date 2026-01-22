import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

interface Wine {
  id: number;
  name: string;
  year: string;
  type: string;
  price: string;
  description: string;
  image: string;
}

const wines: Wine[] = [
  {
    id: 1,
    name: "Reserve Cabernet",
    year: "2020",
    type: "Red Wine",
    price: "$85",
    description: "Full-bodied with notes of blackcurrant and oak",
    image: "https://images.unsplash.com/photo-1733248113944-c4f7dc132dac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWQlMjB3aW5lJTIwYm90dGxlJTIwZWxlZ2FudHxlbnwxfHx8fDE3NjkwNzU0MjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 2,
    name: "Estate Chardonnay",
    year: "2021",
    type: "White Wine",
    price: "$65",
    description: "Crisp and elegant with citrus undertones",
    image: "https://images.unsplash.com/photo-1733248113944-c4f7dc132dac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWQlMjB3aW5lJTIwYm90dGxlJTIwZWxlZ2FudHxlbnwxfHx8fDE3NjkwNzU0MjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 3,
    name: "Vintage Pinot Noir",
    year: "2019",
    type: "Red Wine",
    price: "$95",
    description: "Silky texture with cherry and earthy notes",
    image: "https://images.unsplash.com/photo-1733248113944-c4f7dc132dac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWQlMjB3aW5lJTIwYm90dGxlJTIwZWxlZ2FudHxlbnwxfHx8fDE3NjkwNzU0MjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];

export function WineCollection() {
  return (
    <section id="wines" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 tracking-wide">Our Collection</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Each bottle tells a story of tradition, terroir, and timeless craftsmanship
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {wines.map((wine) => (
            <Card key={wine.id} className="group overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="aspect-[3/4] overflow-hidden bg-muted">
                  <img
                    src={wine.image}
                    alt={wine.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl mb-1">{wine.name}</h3>
                      <p className="text-sm text-muted-foreground">{wine.type} • {wine.year}</p>
                    </div>
                    <p className="text-lg">{wine.price}</p>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{wine.description}</p>
                  <Button className="w-full">Add to Cart</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View Full Collection
          </Button>
        </div>
      </div>
    </section>
  );
}
