import { Link, useLocation } from "wouter";
import { ChevronDown, User } from "lucide-react";

export default function Navbar() {
  const [location] = useLocation();

  const isActive = (path: string) => {
    if (path === "/" && location === "/") return true;
    if (path !== "/" && location.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className="bg-sport-dark-lighter shadow-lg sticky top-0 z-50 border-b border-sport-dark-lightest">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/">
                <span className="text-sport-primary text-2xl font-bold cursor-pointer">SportHub</span>
              </Link>
            </div>
          </div>
          
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/">
                <span className={`nav-link ${isActive("/") ? "active" : ""}`}>
                  Главная
                </span>
              </Link>
              
              {/* Личный кабинет dropdown */}
              <div className="relative group">
                <Link href="/profile">
                  <span className={`nav-link dropdown-trigger flex items-center ${isActive("/profile") ? "active" : ""}`}>
                    Личный кабинет
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </span>
                </Link>
                <div className="dropdown-content absolute left-0 mt-2 w-48 bg-sport-dark-lighter border border-sport-dark-lightest rounded-lg shadow-lg z-50">
                  <Link href="/profile/judge">
                    <span className="block px-4 py-2 text-sm text-gray-300 hover:text-sport-primary hover:bg-sport-dark-lightest transition-colors rounded-t-lg">
                      Судейство
                    </span>
                  </Link>
                  <Link href="/profile/settings">
                    <span className="block px-4 py-2 text-sm text-gray-300 hover:text-sport-primary hover:bg-sport-dark-lightest transition-colors">
                      Настройки
                    </span>
                  </Link>
                  <Link href="/profile/calendar">
                    <span className="block px-4 py-2 text-sm text-gray-300 hover:text-sport-primary hover:bg-sport-dark-lightest transition-colors">
                      Календарь моих событий
                    </span>
                  </Link>
                  <Link href="/profile/create">
                    <span className="block px-4 py-2 text-sm text-gray-300 hover:text-sport-primary hover:bg-sport-dark-lightest transition-colors rounded-b-lg">
                      Создать соревнование
                    </span>
                  </Link>
                </div>
              </div>
              
              {/* Соревнования dropdown */}
              <div className="relative group">
                <Link href="/events">
                  <span className={`nav-link dropdown-trigger flex items-center ${isActive("/events") ? "active" : ""}`}>
                    Соревнования
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </span>
                </Link>
                <div className="dropdown-content absolute left-0 mt-2 w-48 bg-sport-dark-lighter border border-sport-dark-lightest rounded-lg shadow-lg z-50">
                  <Link href="/events/create">
                    <span className="block px-4 py-2 text-sm text-gray-300 hover:text-sport-primary hover:bg-sport-dark-lightest transition-colors rounded-t-lg">
                      Создать соревнование
                    </span>
                  </Link>
                  <Link href="/events/live">
                    <span className="block px-4 py-2 text-sm text-gray-300 hover:text-sport-primary hover:bg-sport-dark-lightest transition-colors">
                      LIVE соревнования
                    </span>
                  </Link>
                  <Link href="/events/calendar">
                    <span className="block px-4 py-2 text-sm text-gray-300 hover:text-sport-primary hover:bg-sport-dark-lightest transition-colors rounded-b-lg">
                      Календарь соревнований
                    </span>
                  </Link>
                </div>
              </div>
              
              <Link href="/ranking">
                <span className={`nav-link ${isActive("/ranking") ? "active" : ""}`}>
                  Рейтинг
                </span>
              </Link>
              
              <Link href="/subscriptions">
                <span className={`nav-link ${isActive("/subscriptions") ? "active" : ""}`}>
                  Подписки и тарифы
                </span>
              </Link>
              
              <Link href="/map">
                <span className={`nav-link ${isActive("/map") ? "active" : ""}`}>
                  Карта мероприятий
                </span>
              </Link>
              
              <Link href="/help">
                <span className={`nav-link ${isActive("/help") ? "active" : ""}`}>
                  Информация и поддержка
                </span>
              </Link>
            </div>
          </div>
          
          <div className="flex items-center">
            <button className="bg-sport-primary text-black px-4 py-2 rounded-lg font-medium hover:bg-yellow-500 transition-colors">
              <User className="inline mr-2 h-4 w-4" />
              Войти
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
