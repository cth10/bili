import Navigation from "@/components/navigation";
import { Mascot, MascotPair } from "@/components/mascots";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section id="inicio" className="pt-24 pb-16 min-h-screen flex items-center">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="gradient-text">Descubra o</span><br />
                <span className="bili-dark">Bilibili</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                A maior plataforma de vídeos da China dedicada à cultura otaku, gaming, anime e muito mais. 
                Explore um universo de conteúdo criativo e conecte-se com milhões de fãs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="bg-gradient-to-r from-[hsl(var(--bili-blue))] to-cyan-500 text-white px-8 py-4 rounded-xl font-medium hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 h-auto"
                >
                  Explorar Agora
                </Button>
                <Button 
                  variant="outline"
                  className="border-2 border-[hsl(var(--bili-pink))] text-[hsl(var(--bili-pink))] px-8 py-4 rounded-xl font-medium hover:bg-[hsl(var(--bili-pink))] hover:text-white transition-all duration-300 h-auto"
                >
                  Saiba Mais
                </Button>
              </div>
            </div>
            <MascotPair size="lg" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold gradient-text mb-4">História do Bilibili</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conheça a jornada de uma das plataformas mais inovadoras da internet
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bili-card rounded-2xl p-8 text-center group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-gradient-to-r from-[hsl(var(--bili-blue))] to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-pulse-glow">
                  <span className="text-white text-2xl font-bold">2009</span>
                </div>
                <h3 className="text-xl font-semibold bili-dark mb-3">Fundação</h3>
                <p className="text-gray-600">
                  Criado como um site de compartilhamento de vídeos focado em anime e cultura ACG (Anime, Comic, Game)
                </p>
              </CardContent>
            </Card>
            
            <Card className="bili-card rounded-2xl p-8 text-center group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-gradient-to-r from-[hsl(var(--bili-pink))] to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-pulse-glow">
                  <span className="text-white text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-semibold bili-dark mb-3">Crescimento</h3>
                <p className="text-gray-600">
                  Expandiu para incluir gaming, música, tecnologia e conteúdo educacional, atraindo milhões de usuários
                </p>
              </CardContent>
            </Card>
            
            <Card className="bili-card rounded-2xl p-8 text-center group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-[hsl(var(--bili-pink))] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-pulse-glow">
                  <span className="text-white text-2xl">🌟</span>
                </div>
                <h3 className="text-xl font-semibold bili-dark mb-3">Hoje</h3>
                <p className="text-gray-600">
                  Uma das maiores plataformas de vídeo da China, com foco em comunidade e interação única
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mascots Section */}
      <section id="mascotes" className="py-16 bg-gradient-to-br from-[hsl(var(--bili-light))] to-pink-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold gradient-text mb-4">Conheça os Mascotes</h2>
            <p className="text-xl text-gray-600">22 e 33, os adoráveis mascotes do Bilibili</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <Card className="bili-card rounded-3xl p-8 text-center group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0">
                <div className="flex justify-center mb-6">
                  <Mascot type="22" size="xl" className="group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-2xl font-bold bili-blue mb-4">Mascote 22</h3>
                <p className="text-gray-600 mb-4">
                  O mascote azul representa a energia e criatividade da comunidade Bilibili. 
                  Sua cor azul simboliza a vastidão do conhecimento e entretenimento disponível na plataforma.
                </p>
                <div className="flex justify-center space-x-2">
                  <span className="px-3 py-1 bg-[hsl(var(--bili-blue))] text-white rounded-full text-sm">Criativo</span>
                  <span className="px-3 py-1 bg-[hsl(var(--bili-blue))] text-white rounded-full text-sm">Energético</span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bili-card rounded-3xl p-8 text-center group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0">
                <div className="flex justify-center mb-6">
                  <Mascot type="33" size="xl" className="group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-2xl font-bold bili-pink mb-4">Mascote 33</h3>
                <p className="text-gray-600 mb-4">
                  O mascote rosa representa o lado mais emotivo e expressivo da comunidade. 
                  Sua cor rosa simboliza a paixão e o amor pela cultura otaku que une todos os usuários.
                </p>
                <div className="flex justify-center space-x-2">
                  <span className="px-3 py-1 bg-[hsl(var(--bili-pink))] text-white rounded-full text-sm">Expressivo</span>
                  <span className="px-3 py-1 bg-[hsl(var(--bili-pink))] text-white rounded-full text-sm">Apaixonado</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="funcionalidades" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold gradient-text mb-4">Principais Funcionalidades</h2>
            <p className="text-xl text-gray-600">Descubra o que torna o Bilibili único</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "💬",
                title: "Danmaku (Barrage)",
                description: "Sistema único de comentários que aparecem diretamente no vídeo, criando uma experiência interativa em tempo real.",
                gradient: "from-[hsl(var(--bili-blue))] to-cyan-500"
              },
              {
                icon: "🎮",
                title: "Gaming",
                description: "Lives de jogos, tutoriais, reviews e uma comunidade vibrante de gamers compartilhando suas experiências.",
                gradient: "from-[hsl(var(--bili-pink))] to-pink-500"
              },
              {
                icon: "🎌",
                title: "Anime & Manga",
                description: "Vasto acervo de animes licenciados, discussões sobre mangás e conteúdo criado por fãs da cultura japonesa.",
                gradient: "from-purple-500 to-[hsl(var(--bili-pink))]"
              },
              {
                icon: "🎵",
                title: "Música",
                description: "Covers, composições originais, Vocaloid e performances ao vivo de artistas independentes e estabelecidos.",
                gradient: "from-green-500 to-[hsl(var(--bili-blue))]"
              },
              {
                icon: "📚",
                title: "Educação",
                description: "Tutoriais, aulas universitárias, cursos de programação e conteúdo educacional de alta qualidade.",
                gradient: "from-orange-500 to-[hsl(var(--bili-pink))]"
              },
              {
                icon: "📱",
                title: "Lives",
                description: "Transmissões ao vivo interativas com sistema de presentes virtuais e chat em tempo real.",
                gradient: "from-[hsl(var(--bili-blue))] to-purple-500"
              }
            ].map((feature, index) => (
              <Card key={index} className="bili-card rounded-2xl p-6 hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-0">
                  <div className={`w-12 h-12 bg-gradient-to-r ${feature.gradient} rounded-lg flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform`}>
                    <span className="text-white text-xl">{feature.icon}</span>
                  </div>
                  <h3 className="text-xl font-semibold bili-dark mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="comunidade" className="py-16 bg-gradient-to-br from-[hsl(var(--bili-light))] via-white to-pink-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold gradient-text mb-4">Cultura de Fãs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Uma comunidade única onde criatividade e paixão se encontram
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Card className="bili-card rounded-2xl p-6">
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold bili-dark mb-3 flex items-center">
                    <span className="w-8 h-8 bg-[hsl(var(--bili-blue))] rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-sm">👥</span>
                    </span>
                    Comunidade Criativa
                  </h3>
                  <p className="text-gray-600">
                    Milhões de criadores compartilham conteúdo original, desde AMVs e covers musicais 
                    até análises profundas de anime e gameplay comentado.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bili-card rounded-2xl p-6">
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold bili-dark mb-3 flex items-center">
                    <span className="w-8 h-8 bg-[hsl(var(--bili-pink))] rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-sm">🎭</span>
                    </span>
                    Cultura UP (Upload)
                  </h3>
                  <p className="text-gray-600">
                    Os "UPs" (criadores de conteúdo) são celebrados e apoiados pela comunidade, 
                    criando um ecossistema de entretenimento colaborativo.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bili-card rounded-2xl p-6">
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold bili-dark mb-3 flex items-center">
                    <span className="w-8 h-8 bg-gradient-to-r from-[hsl(var(--bili-blue))] to-[hsl(var(--bili-pink))] rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-sm">🌟</span>
                    </span>
                    Interação Única
                  </h3>
                  <p className="text-gray-600">
                    O sistema de Danmaku permite que os espectadores interajam diretamente 
                    com o conteúdo, criando uma experiência coletiva incomparável.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center">
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--bili-blue))] to-[hsl(var(--bili-pink))] rounded-full blur-xl opacity-30 animate-pulse-glow"></div>
                <div className="relative bg-white rounded-full p-8 shadow-xl">
                  <div className="flex items-center justify-center space-x-6">
                    <Mascot type="22" size="md" />
                    <div className="text-6xl animate-bounce-slow">❤️</div>
                    <Mascot type="33" size="md" />
                  </div>
                  <p className="mt-4 text-lg font-medium bili-dark">
                    Conectando fãs ao redor do mundo
                  </p>
                </div>
              </div>
              
              <div className="mt-8 grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold bili-blue">200M+</div>
                  <div className="text-sm text-gray-600">Usuários Ativos</div>
                </div>
                <div>
                  <div className="text-2xl font-bold bili-pink">500M+</div>
                  <div className="text-sm text-gray-600">Vídeos</div>
                </div>
                <div>
                  <div className="text-2xl font-bold gradient-text">∞</div>
                  <div className="text-sm text-gray-600">Criatividade</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-bili-dark text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-[hsl(var(--bili-blue))] to-[hsl(var(--bili-pink))] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">B</span>
                </div>
                <h3 className="text-xl font-bold">Bilibili Brasil</h3>
              </div>
              <p className="text-gray-400">
                Descobrindo e celebrando a cultura otaku através da maior plataforma de vídeos da China.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Links Úteis</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-[hsl(var(--bili-blue))] transition-colors">Site Oficial Bilibili</a></li>
                <li><a href="#" className="hover:text-[hsl(var(--bili-blue))] transition-colors">App Mobile</a></li>
                <li><a href="#" className="hover:text-[hsl(var(--bili-blue))] transition-colors">Comunidade Internacional</a></li>
                <li><a href="#" className="hover:text-[hsl(var(--bili-blue))] transition-colors">Centro de Criadores</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Categorias Populares</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-[hsl(var(--bili-pink))] transition-colors">Anime & Manga</a></li>
                <li><a href="#" className="hover:text-[hsl(var(--bili-pink))] transition-colors">Gaming</a></li>
                <li><a href="#" className="hover:text-[hsl(var(--bili-pink))] transition-colors">Música & Covers</a></li>
                <li><a href="#" className="hover:text-[hsl(var(--bili-pink))] transition-colors">Educação</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <div className="flex justify-center items-center space-x-4 mb-4">
              <Mascot type="22" size="sm" />
              <span className="text-gray-400">×</span>
              <Mascot type="33" size="sm" />
            </div>
            <p className="text-gray-400">
              © 2024 Bilibili Brasil - Site de fãs não oficial. Feito com ❤️ para a comunidade otaku.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
