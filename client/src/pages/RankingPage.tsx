import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy } from "lucide-react";
import type { RankingUser } from "@/lib/types";

export default function RankingPage() {
  // Mock data - would come from API
  const rankings: RankingUser[] = [
    {
      id: 1,
      name: "Алексей Иванов",
      region: "Москва",
      points: 2540,
      competitions: 18,
      rank: 1,
      category: "Элита",
      lastActivity: "2 дня назад",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-sport-light mb-2">Рейтинг участников</h1>
        <p className="text-gray-300">Таблица рейтинга всех пользователей платформы</p>
      </div>

      <Card className="bg-sport-dark-lighter border-sport-dark-lightest overflow-hidden">
        <CardHeader className="border-b border-sport-dark-lightest">
          <div className="flex justify-between items-center">
            <CardTitle className="text-sport-light">Общий рейтинг</CardTitle>
            <div className="flex space-x-2">
              <Button className="bg-sport-primary text-black">Все</Button>
              <Button variant="outline" className="border-sport-dark-lightest text-sport-light hover:bg-sport-dark-lightest">
                Шоссе
              </Button>
              <Button variant="outline" className="border-sport-dark-lightest text-sport-light hover:bg-sport-dark-lightest">
                Трек
              </Button>
              <Button variant="outline" className="border-sport-dark-lightest text-sport-light hover:bg-sport-dark-lightest">
                MTB
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-sport-dark-lightest">
                  <th className="text-left p-4 text-gray-300">Место</th>
                  <th className="text-left p-4 text-gray-300">Участник</th>
                  <th className="text-left p-4 text-gray-300">Регион</th>
                  <th className="text-left p-4 text-gray-300">Очки</th>
                  <th className="text-left p-4 text-gray-300">Соревнований</th>
                  <th className="text-left p-4 text-gray-300">Последняя активность</th>
                </tr>
              </thead>
              <tbody>
                {rankings.map((user) => (
                  <tr
                    key={user.id}
                    className="border-b border-sport-dark-lightest hover:bg-sport-dark-lightest transition-colors cursor-pointer"
                  >
                    <td className="p-4">
                      <div className="flex items-center">
                        <span className="text-sport-primary font-bold">{user.rank}</span>
                        <Trophy className="text-sport-primary ml-2 h-5 w-5" />
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-sport-primary rounded-full mr-3 flex items-center justify-center text-black font-bold">
                          {user.name.charAt(0)}
                        </div>
                        <div>
                          <div className="font-medium text-sport-light">{user.name}</div>
                          <div className="text-gray-300 text-sm">{user.category}</div>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 text-gray-300">{user.region}</td>
                    <td className="p-4 text-sport-light font-bold">{user.points.toLocaleString()}</td>
                    <td className="p-4 text-gray-300">{user.competitions}</td>
                    <td className="p-4 text-gray-300">{user.lastActivity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
