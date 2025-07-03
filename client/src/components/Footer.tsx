import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-sport-dark-lighter border-t border-sport-dark-lightest py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <span className="text-sport-primary text-2xl font-bold">SportHub</span>
            </div>
            <p className="text-gray-300 text-sm">
              Платформа для участия и организации спортивных соревнований
            </p>
          </div>
          <div>
            <h3 className="text-sport-light font-semibold mb-4">Соревнования</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/events/calendar">
                  <span className="text-gray-300 hover:text-sport-primary transition-colors">Календарь</span>
                </Link>
              </li>
              <li>
                <Link href="/events/live">
                  <span className="text-gray-300 hover:text-sport-primary transition-colors">LIVE</span>
                </Link>
              </li>
              <li>
                <Link href="/events/create">
                  <span className="text-gray-300 hover:text-sport-primary transition-colors">Создать</span>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sport-light font-semibold mb-4">Сервисы</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/ranking">
                  <span className="text-gray-300 hover:text-sport-primary transition-colors">Рейтинг</span>
                </Link>
              </li>
              <li>
                <Link href="/map">
                  <span className="text-gray-300 hover:text-sport-primary transition-colors">Карта</span>
                </Link>
              </li>
              <li>
                <Link href="/subscriptions">
                  <span className="text-gray-300 hover:text-sport-primary transition-colors">Подписки</span>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sport-light font-semibold mb-4">Поддержка</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/help">
                  <span className="text-gray-300 hover:text-sport-primary transition-colors">Помощь</span>
                </Link>
              </li>
              <li>
                <span className="text-gray-300 hover:text-sport-primary transition-colors cursor-pointer">Контакты</span>
              </li>
              <li>
                <span className="text-gray-300 hover:text-sport-primary transition-colors cursor-pointer">API</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-sport-dark-lightest pt-8 mt-8 text-center text-gray-300 text-sm">
          <p>&copy; 2024 SportHub. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
