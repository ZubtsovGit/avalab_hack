import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from 'lucide-react'

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="container flex items-center justify-between py-4">
        <div className="text-2xl font-bold text-blue-500">ИМПУЛЬС</div>
        <nav className="hidden space-x-6 md:flex">
          <Link href="#" className="text-gray-600 hover:text-gray-900">
            Главная
          </Link>
          <Link href="#" className="text-gray-600 hover:text-gray-900">
            Меры поддержки
          </Link>
          <Link href="#" className="text-gray-600 hover:text-gray-900">
            Услуги
          </Link>
        </nav>
        <Button variant="outline">войти</Button>
      </header>

      {/* Hero Section */}
      <section className="container grid gap-8 py-12 md:grid-cols-2 md:py-24">
        <div className="space-y-8">
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            УМНАЯ СИСТЕМА
            <br />
            ПОДДЕРЖКИ БИЗНЕСА
          </h1>
          <div className="space-y-4">
            <h2 className="text-xl">Выберите способ входа</h2>
            <div className="space-x-4">
              <Link href="#" className="font-medium text-blue-500 hover:underline">
                Полный доступ
              </Link>
              <Link href="#" className="text-gray-500 hover:underline">
                Демонстрационный доступ
              </Link>
            </div>
            <form className="space-y-4">
              <Input type="email" placeholder="ИНН организации / E-mail" />
              <Input type="password" placeholder="Пароль" />
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <label htmlFor="terms" className="text-sm text-gray-500">
                  I agree to the Terms of Service.
                </label>
              </div>
              <div className="space-x-4">
                <Button>войти</Button>
                <Button variant="secondary">ЗАРЕГИСТРИРОВАТЬСЯ</Button>
              </div>
            </form>
          </div>
        </div>
        <div className="relative hidden md:block">
          <Image
            src="/undraw_artificial_intelligence_re_enpp 1.png"
            alt="Business Support Illustration"
            width={400}
            height={400}
            className="object-contain"
          />
        </div>
      </section>

      {/* Brands */}
      <div className="container py-12">
        <div className="flex flex-wrap items-center justify-center gap-8">
          <Image 
            src="/_2.png"
            alt="Company Logo"
            width={140}
            height={30}
            className="object-contain"
          />
          <Image 
            src="/6.png"
            alt="IT SOCHI"
            width={140}
            height={30}
            className="object-contain"
          />

          <Image 
            src="/image_3.png"
            alt="AVALAB"
            width={140}
            height={30}
            className="object-contain"
          />
        </div>
      </div>

      {/* Features Grid */}
      <section className="container py-24">
        <h2 className="mb-12 text-2xl font-bold">Доступные меры поддержки</h2>
        <p className="mb-8 text-gray-600">
          Мы предоставляем информацию о доступных мерах поддержки для развития и роста бизнеса. Меры поддержки бизнеса:
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: 'Приоритетные отрасли',
              variant: 'default',
            },
            {
              title: 'Финансовая поддержка',
              variant: 'blue',
            },
            {
              title: 'Обучение',
              variant: 'dark',
            },
            {
              title: 'Консультации',
              variant: 'default',
            },
            {
              title: 'Регистрация, разрешения, экспертиза',
              variant: 'blue',
            },
            {
              title: 'Маркетинг и продвижение',
              variant: 'dark',
            },
          ].map((feature, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden p-6 ${
                feature.variant === 'blue'
                  ? 'bg-blue-500 text-white'
                  : feature.variant === 'dark'
                  ? 'bg-gray-900 text-white'
                  : 'bg-gray-50'
              }`}
            >
              <h3 className="mb-4 text-xl font-semibold">{feature.title}</h3>
              <Button
                variant="ghost"
                className={`group ${
                  feature.variant !== 'default' ? 'text-white hover:text-white' : ''
                }`}
              >
                Узнать подробнее
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
