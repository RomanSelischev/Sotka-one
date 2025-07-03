import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export default function ProfileSettingsPage() {
  const handleProfileUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle profile update
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-sport-light mb-2">Настройки профиля</h1>
        <p className="text-gray-300">Управление аккаунтом и персональными данными</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <Card className="bg-sport-dark-lighter border-sport-dark-lightest">
          <CardHeader>
            <CardTitle className="text-sport-light">Личные данные</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleProfileUpdate} className="space-y-4">
              <div>
                <Label htmlFor="firstName" className="text-gray-300">Имя</Label>
                <Input
                  id="firstName"
                  defaultValue="Алексей"
                  className="bg-sport-dark border-sport-dark-lightest text-sport-light"
                />
              </div>
              <div>
                <Label htmlFor="lastName" className="text-gray-300">Фамилия</Label>
                <Input
                  id="lastName"
                  defaultValue="Иванов"
                  className="bg-sport-dark border-sport-dark-lightest text-sport-light"
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-gray-300">Email</Label>
                <Input
                  id="email"
                  type="email"
                  defaultValue="alexey@example.com"
                  className="bg-sport-dark border-sport-dark-lightest text-sport-light"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-sport-primary text-black hover:bg-yellow-500"
              >
                Сохранить изменения
              </Button>
            </form>
          </CardContent>
        </Card>

        <Card className="bg-sport-dark-lighter border-sport-dark-lightest">
          <CardHeader>
            <CardTitle className="text-sport-light">Уведомления</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label className="text-gray-300">Email уведомления</Label>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label className="text-gray-300">SMS уведомления</Label>
                <Switch />
              </div>
              <div className="flex items-center justify-between">
                <Label className="text-gray-300">Push уведомления</Label>
                <Switch defaultChecked />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-sport-dark-lighter border-sport-dark-lightest">
          <CardHeader>
            <CardTitle className="text-sport-light">Безопасность</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Button className="w-full bg-sport-dark text-sport-light hover:bg-sport-dark-lightest">
                Изменить пароль
              </Button>
              <Button className="w-full bg-sport-dark text-sport-light hover:bg-sport-dark-lightest">
                Двухфакторная аутентификация
              </Button>
              <Button className="w-full bg-red-600 text-sport-light hover:bg-red-700">
                Удалить аккаунт
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
