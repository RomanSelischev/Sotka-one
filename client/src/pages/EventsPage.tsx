import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Users, Plus } from "lucide-react";

export default function EventsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8 flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-sport-light mb-2">Соревнования</h1>
          <p className="text-gray-300">Найдите и участвуйте в соревнованиях</p>
        </div>
        <Link href="/profile/create">
          <Button className="bg-sport-primary text-black hover:bg-yellow-500">
            <Plus className="mr-2 h-4 w-4" />
            Создать соревнование
          </Button>
        </Link>
      </div>

      {/* Filters */}
      <Card className="bg-sport-dark-lighter border-sport-dark-lightest mb-8">
        <CardContent className="p-6">
          <div className="grid md:grid-cols-4 gap-4">
            <div>
              <Label className="text-gray-300 text-sm font-medium mb-2 block">Дисциплина</Label>
              <Select>
                <SelectTrigger className="bg-sport-dark border-sport-dark-lightest text-sport-light">
                  <SelectValue placeholder="Все дисциплины" />
                </SelectTrigger>
                <SelectContent className="bg-sport-dark border-sport-dark-lightest">
                  <SelectItem value="all">Все дисциплины</SelectItem>
                  <SelectItem value="road">Шоссе</SelectItem>
                  <SelectItem value="track">Трек</SelectItem>
                  <SelectItem value="mtb">Горный велоспорт</SelectItem>
                  <SelectItem value="bmx">BMX</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label className="text-gray-300 text-sm font-medium mb-2 block">Регион</Label>
              <Select>
                <SelectTrigger className="bg-sport-dark border-sport-dark-lightest text-sport-light">
                  <SelectValue placeholder="Все регионы" />
                </SelectTrigger>
                <SelectContent className="bg-sport-dark border-sport-dark-lightest">
                  <SelectItem value="all">Все регионы</SelectItem>
                  <SelectItem value="moscow">Москва</SelectItem>
                  <SelectItem value="spb">Санкт-Петербург</SelectItem>
                  <SelectItem value="krasnodar">Краснодар</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label className="text-gray-300 text-sm font-medium mb-2 block">Дата</Label>
              <Input
                type="date"
                className="bg-sport-dark border-sport-dark-lightest text-sport-light"
              />
            </div>
            <div>
              <Label className="text-gray-300 text-sm font-medium mb-2 block">Поиск</Label>
              <Input
                placeholder="Название соревнования"
                className="bg-sport-dark border-sport-dark-lightest text-sport-light"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Events Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="bg-sport-dark-lighter border-sport-dark-lightest hover:bg-sport-dark-lightest transition-colors overflow-hidden">
          <div className="h-48 bg-gradient-to-r from-green-600 to-green-800"></div>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="bg-sport-primary text-black px-2 py-1 rounded text-sm font-medium">
                Горный велоспорт
              </span>
              <span className="text-gray-300 text-sm">15 мая 2024</span>
            </div>
            <h3 className="text-lg font-semibold text-sport-light mb-2">Кубок весны MTB</h3>
            <p className="text-gray-300 text-sm mb-4">Московская область, Дмитров</p>
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-300 flex items-center">
                <Users className="mr-1 h-4 w-4" />
                <span>47 участников</span>
              </div>
              <Button className="bg-sport-primary text-black hover:bg-yellow-500">
                Участвовать
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
