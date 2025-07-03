import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Clock } from "lucide-react";

export default function HelpPage() {
  const handleSupportSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle support request submission
  };

  const faqs = [
    {
      question: "Как зарегистрироваться на соревнование?",
      answer: "Перейдите в раздел \"Соревнования\", выберите интересующее мероприятие и нажмите \"Участвовать\""
    },
    {
      question: "Как создать собственное соревнование?",
      answer: "Для создания соревнований необходим премиум аккаунт. Перейдите в \"Личный кабинет\" → \"Создать соревнование\""
    },
    {
      question: "Как рассчитывается рейтинг?",
      answer: "Рейтинг основан на результатах участия в соревнованиях, учитывает место, уровень соревнования и активность"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-sport-light mb-2">Информация и поддержка</h1>
        <p className="text-gray-300">Найдите ответы на ваши вопросы</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* FAQ */}
        <Card className="bg-sport-dark-lighter border-sport-dark-lightest">
          <CardHeader>
            <CardTitle className="text-sport-light">Часто задаваемые вопросы</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-sport-dark-lightest pb-4 last:border-b-0">
                  <h3 className="font-medium text-sport-light mb-2">{faq.question}</h3>
                  <p className="text-gray-300 text-sm">{faq.answer}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Contact */}
        <Card className="bg-sport-dark-lighter border-sport-dark-lightest">
          <CardHeader>
            <CardTitle className="text-sport-light">Свяжитесь с нами</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 mb-6">
              <div className="flex items-center">
                <Mail className="text-sport-primary mr-3 h-5 w-5" />
                <div>
                  <div className="font-medium text-sport-light">Email</div>
                  <div className="text-gray-300">support@sporthub.ru</div>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="text-sport-primary mr-3 h-5 w-5" />
                <div>
                  <div className="font-medium text-sport-light">Телефон</div>
                  <div className="text-gray-300">+7 (800) 555-0123</div>
                </div>
              </div>
              <div className="flex items-center">
                <Clock className="text-sport-primary mr-3 h-5 w-5" />
                <div>
                  <div className="font-medium text-sport-light">Часы работы</div>
                  <div className="text-gray-300">Пн-Пт: 9:00-18:00</div>
                </div>
              </div>
            </div>

            <form onSubmit={handleSupportSubmit} className="space-y-4">
              <div>
                <Label htmlFor="subject" className="text-gray-300">Тема обращения</Label>
                <Input
                  id="subject"
                  placeholder="Опишите проблему"
                  className="bg-sport-dark border-sport-dark-lightest text-sport-light"
                />
              </div>
              <div>
                <Label htmlFor="message" className="text-gray-300">Сообщение</Label>
                <Textarea
                  id="message"
                  rows={4}
                  placeholder="Подробное описание"
                  className="bg-sport-dark border-sport-dark-lightest text-sport-light"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-sport-primary text-black hover:bg-yellow-500"
              >
                Отправить сообщение
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
