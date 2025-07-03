import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, ArrowRight } from "lucide-react";
import type { MapEvent } from "@/lib/types";

export default function MapPage() {
  // Mock data - would come from API
  const nearbyEvents: MapEvent[] = [
    {
      id: 1,
      name: "Гранд-при Сочи",
      discipline: "Шоссе",
      location: "Краснодарский край, Сочи",
      date: "18 мая",
      distance: "15 км от вас",
      latitude: 43.6028,
      longitude: 39.7342
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-sport-light mb-2">Карта мероприятий</h1>
        <p className="text-gray-300">Найдите соревнования рядом с вами</p>
      </div>

      {/* Map Container */}
      <Card className="bg-sport-dark-lighter border-sport-dark-lightest overflow-hidden mb-8">
        <CardHeader className="border-b border-sport-dark-lightest">
          <div className="flex justify-between items-center">
            <CardTitle className="text-sport-light">Интерактивная карта</CardTitle>
            <div className="flex space-x-2">
              <Button className="bg-sport-primary text-black">Все</Button>
              <Button variant="outline" className="border-sport-dark-lightest text-sport-light hover:bg-sport-dark-lightest">
                Предстоящие
              </Button>
              <Button variant="outline" className="border-sport-dark-lightest text-sport-light hover:bg-sport-dark-lightest">
                Текущие
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="h-96 bg-sport-dark flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-16 w-16 text-sport-primary mx-auto mb-4" />
              <p className="text-gray-300 mb-2">Интерактивная карта мероприятий</p>
              <p className="text-gray-400 text-sm">
                Здесь будет отображаться карта с точками проведения соревнований
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Nearby Events */}
      <div>
        <h2 className="text-2xl font-bold text-sport-light mb-6">Ближайшие мероприятия</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {nearbyEvents.map((event) => (
            <Card
              key={event.id}
              className="bg-sport-dark-lighter border-sport-dark-lightest hover:bg-sport-dark-lightest transition-colors cursor-pointer"
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-sport-primary text-black px-2 py-1 rounded text-sm font-medium">
                    {event.discipline}
                  </span>
                  <span className="text-gray-300 text-sm">{event.date}</span>
                </div>
                <h3 className="text-lg font-semibold text-sport-light mb-2">{event.name}</h3>
                <p className="text-gray-300 text-sm mb-4">{event.location}</p>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-300 flex items-center">
                    <MapPin className="mr-1 h-4 w-4" />
                    <span>{event.distance}</span>
                  </div>
                  <button className="text-sport-primary hover:text-yellow-500 transition-colors">
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
