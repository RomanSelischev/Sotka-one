import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function ProfileCreatePage() {
  const handleCreateCompetition = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle competition creation
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-sport-light mb-2">Создать соревнование</h1>
        <p className="text-gray-300">Форма для создания собственного соревнования</p>
      </div>

      <div className="max-w-2xl mx-auto">
        <Card className="bg-sport-dark-lighter border-sport-dark-lightest">
          <CardHeader>
            <CardTitle className="text-sport-light">Новое соревнование</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleCreateCompetition} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name" className="text-gray-300">Название соревнования</Label>
                  <Input
                    id="name"
                    placeholder="Введите название"
                    className="bg-sport-dark border-sport-dark-lightest text-sport-light"
                  />
                </div>
                <div>
                  <Label htmlFor="discipline" className="text-gray-300">Дисциплина</Label>
                  <Select>
                    <SelectTrigger className="bg-sport-dark border-sport-dark-lightest text-sport-light">
                      <SelectValue placeholder="Выберите дисциплину" />
                    </SelectTrigger>
                    <SelectContent className="bg-sport-dark border-sport-dark-lightest">
                      <SelectItem value="road">Шоссе</SelectItem>
                      <SelectItem value="track">Трек</SelectItem>
                      <SelectItem value="mtb">Горный велоспорт</SelectItem>
                      <SelectItem value="bmx">BMX</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="date" className="text-gray-300">Дата проведения</Label>
                  <Input
                    id="date"
                    type="date"
                    className="bg-sport-dark border-sport-dark-lightest text-sport-light"
                  />
                </div>
                <div>
                  <Label htmlFor="time" className="text-gray-300">Время</Label>
                  <Input
                    id="time"
                    type="time"
                    className="bg-sport-dark border-sport-dark-lightest text-sport-light"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="location" className="text-gray-300">Место проведения</Label>
                <Input
                  id="location"
                  placeholder="Адрес или описание места"
                  className="bg-sport-dark border-sport-dark-lightest text-sport-light"
                />
              </div>

              <div>
                <Label htmlFor="description" className="text-gray-300">Описание</Label>
                <Textarea
                  id="description"
                  rows={4}
                  placeholder="Подробное описание соревнования"
                  className="bg-sport-dark border-sport-dark-lightest text-sport-light"
                />
              </div>

              <div className="flex space-x-4">
                <Button
                  type="submit"
                  className="flex-1 bg-sport-primary text-black hover:bg-yellow-500"
                >
                  Создать соревнование
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="flex-1 border-sport-dark-lightest text-sport-light hover:bg-sport-dark-lightest"
                >
                  Сохранить как черновик
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
