import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

export default function SubscriptionsPage() {
  const plans = [
    {
      name: "Базовый",
      price: "Бесплатно",
      features: [
        "Участие в соревнованиях",
        "Просмотр рейтинга",
        "Базовая статистика"
      ],
      isCurrent: true
    },
    {
      name: "Премиум",
      price: "990₽",
      period: "/месяц",
      features: [
        "Все возможности базового",
        "Создание соревнований",
        "Расширенная аналитика",
        "Приоритетная поддержка"
      ],
      isRecommended: true
    },
    {
      name: "Профессиональный",
      price: "2990₽",
      period: "/месяц",
      features: [
        "Все возможности премиум",
        "Неограниченные соревнования",
        "API для интеграций",
        "Персональный менеджер"
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-sport-light mb-2">Подписки и тарифы</h1>
        <p className="text-gray-300">Выберите подходящий тарифный план</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <Card
            key={index}
            className={`bg-sport-dark-lighter border-sport-dark-lightest relative ${
              plan.isRecommended ? "border-2 border-sport-primary" : ""
            }`}
          >
            {plan.isRecommended && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-sport-primary text-black px-4 py-1 rounded-full text-sm font-medium">
                Рекомендуемый
              </div>
            )}
            <CardHeader>
              <CardTitle className="text-sport-light">{plan.name}</CardTitle>
              <div className="mb-6">
                <span className="text-3xl font-bold text-sport-light">{plan.price}</span>
                {plan.period && <span className="text-gray-300">{plan.period}</span>}
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-300">
                    <Check className="text-sport-primary mr-2 h-4 w-4" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                className={`w-full ${
                  plan.isCurrent
                    ? "bg-sport-dark text-sport-light hover:bg-sport-dark-lightest"
                    : "bg-sport-primary text-black hover:bg-yellow-500"
                }`}
              >
                {plan.isCurrent ? "Текущий план" : "Выбрать план"}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
