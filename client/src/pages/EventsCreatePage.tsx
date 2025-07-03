import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function EventsCreatePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-sport-light mb-2">Создать соревнование</h1>
        <p className="text-gray-300">Форма для создания собственного соревнования</p>
      </div>

      <div className="max-w-2xl mx-auto">
        <Card className="bg-sport-dark-lighter border-sport-dark-lightest">
          <CardHeader>
            <CardTitle className="text-sport-light text-center">Создание соревнования</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300 text-center mb-6">
              Эта страница идентична странице создания соревнования из личного кабинета
            </p>
            <div className="text-center">
              <Link href="/profile/create">
                <Button className="bg-sport-primary text-black hover:bg-yellow-500">
                  Перейти к созданию
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
