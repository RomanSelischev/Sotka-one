import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function ProfileJudgePage() {
  const handleSubmitResult = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle result submission
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-sport-light mb-2">Судейство</h1>
        <p className="text-gray-300">Внесение результатов в соревнования</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <Card className="bg-sport-dark-lighter border-sport-dark-lightest">
          <CardHeader>
            <CardTitle className="text-sport-light">Активные соревнования</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-sport-dark p-4 rounded-lg">
                <h3 className="font-medium text-sport-light">Кубок весны MTB</h3>
                <p className="text-gray-300 text-sm">Статус: В процессе</p>
                <Button className="mt-2 bg-sport-primary text-black hover:bg-yellow-500">
                  Внести результаты
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-sport-dark-lighter border-sport-dark-lightest">
          <CardHeader>
            <CardTitle className="text-sport-light">Форма внесения результатов</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmitResult} className="space-y-4">
              <div>
                <Label htmlFor="participant" className="text-gray-300">Участник</Label>
                <Select>
                  <SelectTrigger className="bg-sport-dark border-sport-dark-lightest text-sport-light">
                    <SelectValue placeholder="Выберите участника" />
                  </SelectTrigger>
                  <SelectContent className="bg-sport-dark border-sport-dark-lightest">
                    <SelectItem value="participant1">Участник 1</SelectItem>
                    <SelectItem value="participant2">Участник 2</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="time" className="text-gray-300">Время</Label>
                <Input
                  id="time"
                  type="text"
                  placeholder="00:00:00"
                  className="bg-sport-dark border-sport-dark-lightest text-sport-light"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-sport-primary text-black hover:bg-yellow-500"
              >
                Сохранить результат
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
