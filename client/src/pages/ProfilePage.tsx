import { Link } from "wouter";
import { Trophy, Medal, Award, Calendar, Gavel, Settings, Plus } from "lucide-react";
import type { UserStats } from "@/lib/types";

export default function ProfilePage() {
  // This would come from API in real implementation
  const userStats: UserStats = {
    competitions: 15,
    rank: 24,
    achievements: 7,
    upcoming: 3,
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-sport-light mb-2">Личный кабинет</h1>
        <p className="text-gray-300">Управляйте своим профилем и отслеживайте активность</p>
      </div>

      {/* Profile Stats */}
      <div className="grid md:grid-cols-4 gap-6 mb-8">
        <div className="bg-sport-dark-lighter p-6 rounded-xl">
          <div className="text-sport-primary text-2xl mb-2">
            <Trophy className="h-8 w-8" />
          </div>
          <div className="text-2xl font-bold text-sport-light">{userStats.competitions}</div>
          <div className="text-gray-300">Соревнований</div>
        </div>
        <div className="bg-sport-dark-lighter p-6 rounded-xl">
          <div className="text-sport-primary text-2xl mb-2">
            <Medal className="h-8 w-8" />
          </div>
          <div className="text-2xl font-bold text-sport-light">{userStats.rank}</div>
          <div className="text-gray-300">Место в рейтинге</div>
        </div>
        <div className="bg-sport-dark-lighter p-6 rounded-xl">
          <div className="text-sport-primary text-2xl mb-2">
            <Award className="h-8 w-8" />
          </div>
          <div className="text-2xl font-bold text-sport-light">{userStats.achievements}</div>
          <div className="text-gray-300">Достижений</div>
        </div>
        <div className="bg-sport-dark-lighter p-6 rounded-xl">
          <div className="text-sport-primary text-2xl mb-2">
            <Calendar className="h-8 w-8" />
          </div>
          <div className="text-2xl font-bold text-sport-light">{userStats.upcoming}</div>
          <div className="text-gray-300">Предстоящих</div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Link href="/profile/judge">
          <div className="bg-sport-dark-lighter p-6 rounded-xl hover:bg-sport-dark-lightest transition-colors cursor-pointer">
            <div className="text-sport-primary text-2xl mb-4">
              <Gavel className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Судейство</h3>
            <p className="text-gray-300">Внесение результатов соревнований</p>
          </div>
        </Link>
        <Link href="/profile/settings">
          <div className="bg-sport-dark-lighter p-6 rounded-xl hover:bg-sport-dark-lightest transition-colors cursor-pointer">
            <div className="text-sport-primary text-2xl mb-4">
              <Settings className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Настройки</h3>
            <p className="text-gray-300">Настройки аккаунта и уведомлений</p>
          </div>
        </Link>
        <Link href="/profile/calendar">
          <div className="bg-sport-dark-lighter p-6 rounded-xl hover:bg-sport-dark-lightest transition-colors cursor-pointer">
            <div className="text-sport-primary text-2xl mb-4">
              <Calendar className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Мои события</h3>
            <p className="text-gray-300">Календарь ваших событий</p>
          </div>
        </Link>
        <Link href="/profile/create">
          <div className="bg-sport-dark-lighter p-6 rounded-xl hover:bg-sport-dark-lightest transition-colors cursor-pointer">
            <div className="text-sport-primary text-2xl mb-4">
              <Plus className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Создать соревнование</h3>
            <p className="text-gray-300">Организуйте новое мероприятие</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
