import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Calendar, Clock, MapPin, Phone } from "lucide-react";

export function VisitSection() {
  return (
    <section id="visit" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 tracking-wide">Visit Our Vineyard</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience the beauty of our estate and taste our finest wines in an unforgettable setting
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Image Card */}
          <div className="lg:col-span-2">
            <div className="aspect-video lg:aspect-[16/10] overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1605860828801-70cc4727f11f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aW5lJTIwZ3JhcGVzJTIwaGFydmVzdHxlbnwxfHx8fDE3NjkwNzU0MjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Wine grapes in vineyard"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Info Cards */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="mb-2">Hours</h3>
                    <p className="text-sm text-muted-foreground">
                      Mon-Fri: 10am - 6pm<br />
                      Sat-Sun: 11am - 7pm
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="mb-2">Location</h3>
                    <p className="text-sm text-muted-foreground">
                      123 Vineyard Road<br />
                      Wine Country, CA 94558
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="mb-2">Contact</h3>
                    <p className="text-sm text-muted-foreground">
                      (555) 123-4567<br />
                      visit@belharra.com
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Tasting Experiences */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <Calendar className="h-8 w-8 mb-4" />
              <h3 className="mb-2">Classic Tasting</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Sample 5 of our signature wines with expert guidance
              </p>
              <p className="text-2xl mb-4">$45</p>
              <Button variant="outline" className="w-full">Book Now</Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <Calendar className="h-8 w-8 mb-4" />
              <h3 className="mb-2">Premium Tasting</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Exclusive reserve wines paired with artisan cheeses
              </p>
              <p className="text-2xl mb-4">$85</p>
              <Button variant="outline" className="w-full">Book Now</Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <Calendar className="h-8 w-8 mb-4" />
              <h3 className="mb-2">Private Tour</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Personalized vineyard tour and wine cellar experience
              </p>
              <p className="text-2xl mb-4">$150</p>
              <Button variant="outline" className="w-full">Book Now</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
