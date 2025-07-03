import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";

export default function ProfileCalendarEventsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <Link href="/profile/calendar">
          <Button variant="ghost" className="text-sport-primary hover:text-yellow-500 mb-4 p-0">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Назад к календарю
          </Button>
        </Link>
        <h1 className="text-3xl font-bold text-sport-light mb-2">Мои соревнования</h1>
        <p className="text-gray-300">Соревнования в которых вы участвуете</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="bg-sport-dark-lighter border-sport-dark-lightest">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="bg-blue-600 text-white px-2 py-1 rounded text-sm">Предстоящее</span>
              <span className="text-gray-300 text-sm">15 мая 2024</span>
            </div>
            <h3 className="text-lg font-semibold text-sport-light mb-2">Кубок весны MTB</h3>
            <p className="text-gray-300 text-sm mb-4">Дмитров, Московская область</p>
            <div className="flex space-x-2">
              <Button className="flex-1 bg-sport-primary text-black hover:bg-yellow-500 text-sm">
                Подробнее
              </Button>
              <Button 
                variant="outline" 
                className="flex-1 border-sport-dark-lightest text-sport-light hover:bg-sport-dark-lightest text-sm"
              >
                Отменить
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
