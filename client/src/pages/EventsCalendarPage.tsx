import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";

export default function EventsCalendarPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-sport-light mb-2">Календарь соревнований</h1>
        <p className="text-gray-300">Календарь всех соревнований</p>
      </div>

      <Card className="bg-sport-dark-lighter border-sport-dark-lightest">
        <CardHeader>
          <CardTitle className="text-sport-light">Календарь на месяц</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-sport-dark p-4 rounded-lg flex items-center justify-center h-96">
            <div className="text-center">
              <Calendar className="h-16 w-16 text-sport-primary mx-auto mb-4" />
              <p className="text-gray-300">Календарь соревнований</p>
              <p className="text-gray-400 text-sm">
                Здесь будет отображаться интерактивный календарь всех соревнований
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
