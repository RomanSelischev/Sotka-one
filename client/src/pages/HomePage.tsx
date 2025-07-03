import { Link } from "wouter";
import { Trophy, Calendar, TrendingUp, Users, MapPin, Medal } from "lucide-react";

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-sport-dark to-sport-dark-lighter py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-sport-light mb-6">
              Платформа спортивных{" "}
              <span className="text-sport-primary">соревнований</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Участвуйте в соревнованиях по велоспорту, отслеживайте свои результаты,
              организуйте собственные мероприятия и станьте частью спортивного сообщества
            </p>
            <div className="flex justify-center space-x-4">
              <Link href="/events">
                <button className="bg-sport-primary text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors">
                  Начать участие
                </button>
              </Link>
              <Link href="/events/create">
                <button className="border border-sport-primary text-sport-primary px-8 py-3 rounded-lg font-semibold hover:bg-sport-primary hover:text-black transition-colors">
                  Создать соревнование
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-sport-light mb-4">Возможности платформы</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Все необходимые инструменты для участия и организации спортивных соревнований
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-sport-dark-lighter p-6 rounded-xl hover:bg-sport-dark-lightest transition-colors">
              <div className="text-sport-primary text-3xl mb-4">
                <Trophy className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Участие в соревнованиях</h3>
              <p className="text-gray-300">
                Регистрируйтесь на соревнования, отслеживайте результаты и улучшайте свои показатели
              </p>
            </div>
            <div className="bg-sport-dark-lighter p-6 rounded-xl hover:bg-sport-dark-lightest transition-colors">
              <div className="text-sport-primary text-3xl mb-4">
                <Calendar className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Организация мероприятий</h3>
              <p className="text-gray-300">
                Создавайте собственные соревнования и управляйте ими с помощью удобных инструментов
              </p>
            </div>
            <div className="bg-sport-dark-lighter p-6 rounded-xl hover:bg-sport-dark-lightest transition-colors">
              <div className="text-sport-primary text-3xl mb-4">
                <TrendingUp className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Аналитика и рейтинг</h3>
              <p className="text-gray-300">
                Отслеживайте свой прогресс, сравнивайте результаты и поднимайтесь в рейтинге
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Section */}
      <section className="py-20 bg-sport-dark-lighter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-sport-light mb-4">Быстрый доступ</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/events/live">
              <div className="bg-sport-dark p-6 rounded-xl hover:bg-sport-dark-lightest transition-colors cursor-pointer">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">LIVE соревнования</h3>
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                </div>
                <p className="text-gray-300">Следите за текущими соревнованиями в реальном времени</p>
              </div>
            </Link>
            <Link href="/ranking">
              <div className="bg-sport-dark p-6 rounded-xl hover:bg-sport-dark-lightest transition-colors cursor-pointer">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Рейтинг</h3>
                  <Medal className="h-6 w-6 text-sport-primary" />
                </div>
                <p className="text-gray-300">Посмотрите текущий рейтинг участников</p>
              </div>
            </Link>
            <Link href="/map">
              <div className="bg-sport-dark p-6 rounded-xl hover:bg-sport-dark-lightest transition-colors cursor-pointer">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Карта мероприятий</h3>
                  <MapPin className="h-6 w-6 text-sport-primary" />
                </div>
                <p className="text-gray-300">Найдите соревнования рядом с вами</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
