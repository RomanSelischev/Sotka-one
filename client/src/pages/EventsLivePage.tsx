import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users } from "lucide-react";

export default function EventsLivePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-sport-light mb-2">LIVE соревнования</h1>
        <p className="text-gray-300">Список соревнований и онлайн протоколы</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="bg-sport-dark-lighter border-sport-dark-lightest">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse mr-2"></div>
                <span className="text-red-500 font-medium">LIVE</span>
              </div>
              <span className="text-gray-300 text-sm">Начало в 10:00</span>
            </div>
            <h3 className="text-lg font-semibold text-sport-light mb-2">Гранд-при Сочи</h3>
            <p className="text-gray-300 text-sm mb-4">Шоссе • Сочи, Краснодарский край</p>
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-300 flex items-center">
                <Users className="mr-1 h-4 w-4" />
                132 участника
              </div>
              <Button className="bg-sport-primary text-black hover:bg-yellow-500">
                Смотреть протокол
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
