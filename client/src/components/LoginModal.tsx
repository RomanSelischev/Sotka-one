import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login/register logic here
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-sport-dark-lighter border-sport-dark-lightest">
        <DialogHeader>
          <DialogTitle className="text-sport-light text-center text-xl">
            {isLogin ? "Вход в систему" : "Регистрация"}
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div>
            <Label htmlFor="email" className="text-gray-300">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="email@example.com"
              required
              className="bg-sport-dark border-sport-dark-lightest text-sport-light"
            />
          </div>
          <div>
            <Label htmlFor="password" className="text-gray-300">Пароль</Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              required
              className="bg-sport-dark border-sport-dark-lightest text-sport-light"
            />
          </div>
          {!isLogin && (
            <>
              <div>
                <Label htmlFor="firstName" className="text-gray-300">Имя</Label>
                <Input
                  id="firstName"
                  type="text"
                  placeholder="Иван"
                  required
                  className="bg-sport-dark border-sport-dark-lightest text-sport-light"
                />
              </div>
              <div>
                <Label htmlFor="lastName" className="text-gray-300">Фамилия</Label>
                <Input
                  id="lastName"
                  type="text"
                  placeholder="Иванов"
                  required
                  className="bg-sport-dark border-sport-dark-lightest text-sport-light"
                />
              </div>
            </>
          )}
          <Button
            type="submit"
            className="w-full bg-sport-primary text-black hover:bg-yellow-500"
          >
            {isLogin ? "Войти" : "Зарегистрироваться"}
          </Button>
          <div className="text-center">
            <button
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="text-sport-primary hover:text-yellow-500 text-sm"
            >
              {isLogin ? "Нет аккаунта? Зарегистрируйтесь" : "Уже есть аккаунт? Войдите"}
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}