import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const products = [
  {
    id: 1,
    name: 'Когтеточка "Мечта котика"',
    price: 2499,
    category: 'toys',
    image: 'https://cdn.poehali.dev/projects/6c202ac9-f633-445d-9bd2-565a6d8add4d/files/31c0e710-76b3-4b60-908b-64c8fbdaa91b.jpg',
    rating: 5,
    inStock: true
  },
  {
    id: 2,
    name: 'Премиум корм для котиков',
    price: 1299,
    category: 'food',
    image: 'https://cdn.poehali.dev/projects/6c202ac9-f633-445d-9bd2-565a6d8add4d/files/31c0e710-76b3-4b60-908b-64c8fbdaa91b.jpg',
    rating: 5,
    inStock: true
  },
  {
    id: 3,
    name: 'Мягкая лежанка',
    price: 3499,
    category: 'furniture',
    image: 'https://cdn.poehali.dev/projects/6c202ac9-f633-445d-9bd2-565a6d8add4d/files/31c0e710-76b3-4b60-908b-64c8fbdaa91b.jpg',
    rating: 4,
    inStock: true
  },
  {
    id: 4,
    name: 'Игрушка-мышка',
    price: 399,
    category: 'toys',
    image: 'https://cdn.poehali.dev/projects/6c202ac9-f633-445d-9bd2-565a6d8add4d/files/31c0e710-76b3-4b60-908b-64c8fbdaa91b.jpg',
    rating: 5,
    inStock: true
  },
  {
    id: 5,
    name: 'Набор мисок керамика',
    price: 1599,
    category: 'accessories',
    image: 'https://cdn.poehali.dev/projects/6c202ac9-f633-445d-9bd2-565a6d8add4d/files/31c0e710-76b3-4b60-908b-64c8fbdaa91b.jpg',
    rating: 4,
    inStock: true
  },
  {
    id: 6,
    name: 'Переноска для котиков',
    price: 2799,
    category: 'accessories',
    image: 'https://cdn.poehali.dev/projects/6c202ac9-f633-445d-9bd2-565a6d8add4d/files/31c0e710-76b3-4b60-908b-64c8fbdaa91b.jpg',
    rating: 5,
    inStock: true
  }
];

const reviews = [
  {
    id: 1,
    name: 'Анна Петрова',
    rating: 5,
    text: 'Мой кот просто в восторге от когтеточки! Больше не дерёт диван. Спасибо!',
    image: 'https://cdn.poehali.dev/projects/6c202ac9-f633-445d-9bd2-565a6d8add4d/files/a1985afa-163c-4023-886f-89c45c168373.jpg',
    date: '15 октября 2024'
  },
  {
    id: 2,
    name: 'Дмитрий Соколов',
    rating: 5,
    text: 'Отличный корм! Кот стал активнее и шерсть блестит. Рекомендую всем!',
    image: 'https://cdn.poehali.dev/projects/6c202ac9-f633-445d-9bd2-565a6d8add4d/files/a1985afa-163c-4023-886f-89c45c168373.jpg',
    date: '10 октября 2024'
  },
  {
    id: 3,
    name: 'Елена Морозова',
    rating: 5,
    text: 'Лежанка просто огонь! Кошка спит в ней целыми днями. Качество на высоте!',
    image: 'https://cdn.poehali.dev/projects/6c202ac9-f633-445d-9bd2-565a6d8add4d/files/a1985afa-163c-4023-886f-89c45c168373.jpg',
    date: '5 октября 2024'
  }
];

const blogPosts = [
  {
    id: 1,
    title: 'Как выбрать правильный корм для кота',
    excerpt: 'Узнайте, какие ингредиенты должны быть в составе качественного корма и как подобрать питание для вашего котика.',
    image: 'https://cdn.poehali.dev/projects/6c202ac9-f633-445d-9bd2-565a6d8add4d/files/31c0e710-76b3-4b60-908b-64c8fbdaa91b.jpg',
    date: '20 октября 2024',
    readTime: '5 мин'
  },
  {
    id: 2,
    title: '10 советов по уходу за шерстью',
    excerpt: 'Простые и эффективные советы, которые помогут сохранить шерсть вашего питомца здоровой и блестящей.',
    image: 'https://cdn.poehali.dev/projects/6c202ac9-f633-445d-9bd2-565a6d8add4d/files/31c0e710-76b3-4b60-908b-64c8fbdaa91b.jpg',
    date: '18 октября 2024',
    readTime: '7 мин'
  },
  {
    id: 3,
    title: 'Почему коты мурлыкают?',
    excerpt: 'Разбираемся в причинах мурлыканья и что это значит для здоровья вашего котика.',
    image: 'https://cdn.poehali.dev/projects/6c202ac9-f633-445d-9bd2-565a6d8add4d/files/31c0e710-76b3-4b60-908b-64c8fbdaa91b.jpg',
    date: '15 октября 2024',
    readTime: '4 мин'
  }
];

export default function Index() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [cart, setCart] = useState<number[]>([]);

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  const addToCart = (productId: number) => {
    setCart([...cart, productId]);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-4xl animate-bounce-slow">🐱</span>
            <h1 className="text-2xl font-bold text-primary">КотоМаркет</h1>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#catalog" className="hover:text-primary transition-colors font-medium">Каталог</a>
            <a href="#reviews" className="hover:text-primary transition-colors font-medium">Отзывы</a>
            <a href="#blog" className="hover:text-primary transition-colors font-medium">Блог</a>
          </nav>
          <Button className="relative">
            <Icon name="ShoppingCart" size={20} />
            {cart.length > 0 && (
              <Badge className="absolute -top-2 -right-2 rounded-full px-2 py-0.5 text-xs bg-secondary">
                {cart.length}
              </Badge>
            )}
          </Button>
        </div>
      </header>

      <section className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/20 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-primary">
              Всё для вашего котика! 🐾
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl mx-auto">
              Качественные товары, которые делают жизнь ваших пушистых друзей ещё счастливее
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" className="text-lg">
                <Icon name="ShoppingBag" size={20} className="mr-2" />
                Смотреть каталог
              </Button>
              <Button size="lg" variant="outline" className="text-lg">
                <Icon name="Heart" size={20} className="mr-2" />
                Избранное
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center">Каталог товаров</h2>
          
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="mb-8">
            <TabsList className="grid grid-cols-5 w-full max-w-2xl mx-auto">
              <TabsTrigger value="all">Все</TabsTrigger>
              <TabsTrigger value="toys">Игрушки</TabsTrigger>
              <TabsTrigger value="food">Корм</TabsTrigger>
              <TabsTrigger value="furniture">Мебель</TabsTrigger>
              <TabsTrigger value="accessories">Аксессуары</TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product, index) => (
              <Card key={product.id} className="hover:shadow-lg transition-shadow animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader className="p-0">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </CardHeader>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-lg">{product.name}</CardTitle>
                    {product.inStock && (
                      <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                        В наличии
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Icon 
                        key={i} 
                        name={i < product.rating ? "Star" : "Star"} 
                        size={16}
                        className={i < product.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
                      />
                    ))}
                  </div>
                  <CardDescription className="text-2xl font-bold text-primary">
                    {product.price} ₽
                  </CardDescription>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button 
                    className="w-full" 
                    onClick={() => addToCart(product.id)}
                  >
                    <Icon name="ShoppingCart" size={18} className="mr-2" />
                    В корзину
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-16 bg-accent/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center">Отзывы покупателей</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card key={review.id} className="animate-fade-in" style={{animationDelay: `${index * 0.15}s`}}>
                <CardHeader>
                  <div className="flex items-center gap-4 mb-2">
                    <img 
                      src={review.image} 
                      alt={review.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <CardTitle className="text-base">{review.name}</CardTitle>
                      <CardDescription className="text-sm">{review.date}</CardDescription>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="blog" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center">Блог: советы по уходу</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <Card key={post.id} className="hover:shadow-lg transition-shadow cursor-pointer animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader className="p-0">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </CardHeader>
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-3 text-sm text-muted-foreground">
                    <Icon name="Calendar" size={14} />
                    <span>{post.date}</span>
                    <span>•</span>
                    <Icon name="Clock" size={14} />
                    <span>{post.readTime}</span>
                  </div>
                  <CardTitle className="text-xl mb-2">{post.title}</CardTitle>
                  <CardDescription>{post.excerpt}</CardDescription>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button variant="ghost" className="px-0 hover:text-primary">
                    Читать далее
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-3xl">🐱</span>
                <h3 className="text-xl font-bold">КотоМаркет</h3>
              </div>
              <p className="text-primary-foreground/80">
                Всё лучшее для ваших котиков с 2020 года
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Каталог</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Игрушки</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Корм</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Мебель</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Аксессуары</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li><a href="#" className="hover:text-primary-foreground transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Доставка</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Оплата</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (999) 123-45-67</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <span>info@kotomarket.ru</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  <span>Москва, ул. Котиков, 1</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/80">
            <p>&copy; 2024 КотоМаркет. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
