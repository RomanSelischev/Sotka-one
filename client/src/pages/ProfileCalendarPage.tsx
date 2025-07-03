import { Link } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dumbbell, Trophy, Calendar } from "lucide-react";

export default function ProfileCalendarPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-sport-light mb-2">Календарь моих событий</h1>
        <p className="text-gray-300">Список событий в которых вы зарегистрированы</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Link href="/profile/calendar/trainings">
          <div className="bg-sport-dark-lighter p-6 rounded-xl hover:bg-sport-dark-lightest transition-colors cursor-pointer">
            <div className="text-sport-primary text-2xl mb-4">
              <Dumbbell className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Мои тренировки</h3>
            <p className="text-gray-300">Тренировки к которым вы имеете отношение</p>
            <div className="mt-4 text-sm text-gray-300">
              <span className="bg-sport-dark px-2 py-1 rounded">5 активных</span>
            </div>
          </div>
        </Link>

        <Link href="/profile/calendar/my-events">
          <div className="bg-sport-dark-lighter p-6 rounded-xl hover:bg-sport-dark-lightest transition-colors cursor-pointer">
            <div className="text-sport-primary text-2xl mb-4">
              <Trophy className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Мои соревнования</h3>
            <p className="text-gray-300">Соревнования в которых вы участвуете</p>
            <div className="mt-4 text-sm text-gray-300">
              <span className="bg-sport-dark px-2 py-1 rounded">3 предстоящих</span>
            </div>
          </div>
        </Link>
      </div>

      {/* Calendar View */}
      <Card className="bg-sport-dark-lighter border-sport-dark-lightest">
        <CardHeader>
          <CardTitle className="text-sport-light">Календарь на месяц</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-sport-dark p-4 rounded-lg flex items-center justify-center h-64">
            <div className="text-center">
              <Calendar className="h-16 w-16 text-sport-primary mx-auto mb-4" />
              <p className="text-gray-300">Календарь событий</p>
              <p className="text-gray-400 text-sm">Здесь будет отображаться интерактивный календарь</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
