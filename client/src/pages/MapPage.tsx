import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, ArrowRight } from "lucide-react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import type { MapEvent } from "@/lib/types";
import "leaflet/dist/leaflet.css";

// Fix leaflet icon issue
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
});

export default function MapPage() {
  const [selectedEvent, setSelectedEvent] = useState<MapEvent | null>(null);
  
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
    },
    {
      id: 2,
      name: "Кубок весны MTB",
      discipline: "Горный велоспорт",
      location: "Московская область, Дмитров",
      date: "15 мая",
      distance: "47 км от вас",
      latitude: 56.3439,
      longitude: 37.5200
    },
    {
      id: 3,
      name: "Чемпионат Москвы",
      discipline: "Трек",
      location: "Москва, Крылатское",
      date: "22 мая",
      distance: "32 км от вас",
      latitude: 55.7742,
      longitude: 37.4075
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
          <div className="h-96 relative">
            <MapContainer
              center={[55.7558, 37.6173]} // Moscow center
              zoom={6}
              scrollWheelZoom={true}
              className="h-full w-full"
              style={{ height: "100%", width: "100%" }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {nearbyEvents.map((event) => (
                <Marker
                  key={event.id}
                  position={[event.latitude, event.longitude]}
                  eventHandlers={{
                    click: () => {
                      setSelectedEvent(event);
                    },
                  }}
                >
                  <Popup>
                    <div className="p-2">
                      <h3 className="font-semibold text-sm mb-1">{event.name}</h3>
                      <p className="text-xs text-gray-600 mb-1">{event.discipline}</p>
                      <p className="text-xs text-gray-600 mb-1">{event.location}</p>
                      <p className="text-xs font-medium">{event.date}</p>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
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
