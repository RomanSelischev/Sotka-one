import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";

export default function ProfileCalendarTrainingsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <Link href="/profile/calendar">
          <Button variant="ghost" className="text-sport-primary hover:text-yellow-500 mb-4 p-0">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Назад к календарю
          </Button>
        </Link>
        <h1 className="text-3xl font-bold text-sport-light mb-2">Мои тренировки</h1>
        <p className="text-gray-300">Тренировки к которым вы имеете отношение</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="bg-sport-dark-lighter border-sport-dark-lightest">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="bg-green-600 text-white px-2 py-1 rounded text-sm">Активная</span>
              <span className="text-gray-300 text-sm">Вт, Чт 18:00</span>
            </div>
            <h3 className="text-lg font-semibold text-sport-light mb-2">Групповая тренировка MTB</h3>
            <p className="text-gray-300 text-sm mb-4">Парк Сокольники, Москва</p>
            <Button className="w-full bg-sport-primary text-black hover:bg-yellow-500">
              Подробнее
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
