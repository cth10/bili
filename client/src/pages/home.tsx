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
                <div className="relative">
                  <div className="flex items-center justify-center">
                    <img 
                      src="/2233.png"
                      alt="Mascotes 22 e 33"
                      className="w-48 h-48 object-contain"
                      title="Mascotes Bilibili"
                    />
                  </div>
                  <p className="mt-6 text-xl font-semibold gradient-text text-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-xl border border-white/30 shadow-lg">
                    ✨ Conectando fãs ao redor do mundo ✨
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

      {/* Social Connect Section */}
      <section className="py-16 bg-gradient-to-br from-bili-dark via-[#1a1a2e] to-[#16213e] text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-32 h-32 bg-[hsl(var(--bili-blue))] rounded-full blur-3xl animate-pulse-glow"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-[hsl(var(--bili-pink))] rounded-full blur-3xl animate-pulse-glow delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500 rounded-full blur-3xl opacity-30 animate-pulse-glow delay-500"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[hsl(var(--bili-blue))] via-purple-400 to-[hsl(var(--bili-pink))] bg-clip-text text-transparent">
                Junte-se à Nossa Comunidade
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Conecte-se com outros otakus, compartilhe memes, discuta animes e faça parte da família Bilibili Brasil! 
              <span className="text-[hsl(var(--bili-pink))]">みんなで一緒に楽しもう！</span>
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Discord Card */}
            <Card className="bg-gradient-to-br from-[#5865f2]/20 to-[#5865f2]/5 border-[#5865f2]/30 rounded-3xl p-8 hover:shadow-2xl hover:shadow-[#5865f2]/20 transition-all duration-500 group backdrop-blur-sm">
              <CardContent className="p-0 text-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-[#5865f2] rounded-2xl flex items-center justify-center mx-auto group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 shadow-lg shadow-[#5865f2]/50">
                    <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                    </svg>
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center animate-bounce">
                    <span className="text-xs text-white">!</span>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center justify-center gap-2">
                  Discord Server
                  <span className="text-lg">💬</span>
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Entre no nosso servidor Discord para bater papo em tempo real, compartilhar fanarts, 
                  discutir episódios e participar de eventos especiais! 
                  <span className="text-[#5865f2] font-semibold">リアルタイムで話そう！</span>
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-center text-sm text-gray-400">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                    +1,000 membros online agora
                  </div>
                  <div className="flex justify-center space-x-4 text-xs text-gray-400">
                    <span className="flex items-center"><span className="text-[#5865f2]">🎌</span> Anime</span>
                    <span className="flex items-center"><span className="text-[#5865f2]">🎮</span> Gaming</span>
                    <span className="flex items-center"><span className="text-[#5865f2]">🎵</span> Música</span>
                  </div>
                </div>
                
                <Button 
                  className="w-full bg-[#5865f2] hover:bg-[#4752c4] text-white font-semibold py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#5865f2]/50"
                  onClick={() => window.open('https://discord.gg/MDGtsbR3', '_blank')}
                >
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                  </svg>
                  Entrar no Discord
                </Button>
              </CardContent>
            </Card>
            
            {/* X (Twitter) Card */}
            <Card className="bg-gradient-to-br from-black/40 to-gray-900/20 border-gray-700/50 rounded-3xl p-8 hover:shadow-2xl hover:shadow-black/30 transition-all duration-500 group backdrop-blur-sm">
              <CardContent className="p-0 text-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-black rounded-2xl flex items-center justify-center mx-auto group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 shadow-lg shadow-black/50">
                    <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-[hsl(var(--bili-pink))] rounded-full flex items-center justify-center animate-bounce delay-300">
                    <span className="text-xs text-white">✨</span>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center justify-center gap-2">
                  Bilibili BR no X
                  <span className="text-lg">🐦</span>
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Siga nosso X para ficar por dentro das últimas novidades do Bilibili, 
                  memes fresquinhos e updates da comunidade otaku! 
                  <span className="text-[hsl(var(--bili-pink))] font-semibold">最新情報をゲット！</span>
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-center text-sm text-gray-400">
                    <span className="w-2 h-2 bg-[hsl(var(--bili-pink))] rounded-full mr-2 animate-pulse"></span>
                    Tweets diários sobre anime e Bilibili
                  </div>
                  <div className="flex justify-center space-x-4 text-xs text-gray-400">
                    <span className="flex items-center"><span className="text-[hsl(var(--bili-pink))]">📰</span> News</span>
                    <span className="flex items-center"><span className="text-[hsl(var(--bili-pink))]">😂</span> Memes</span>
                    <span className="flex items-center"><span className="text-[hsl(var(--bili-pink))]">🔥</span> Trends</span>
                  </div>
                </div>
                
                <Button 
                  className="w-full bg-black hover:bg-gray-800 text-white font-semibold py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-black/50 border border-gray-700"
                  onClick={() => window.open('https://x.com/BilibiliBR', '_blank')}
                >
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                  Seguir no X
                </Button>
              </CardContent>
            </Card>
          </div>
          
          {/* Call to Action */}
          <div className="text-center mt-12">
            <div className="inline-flex items-center justify-center p-1 bg-gradient-to-r from-[hsl(var(--bili-blue))] via-purple-500 to-[hsl(var(--bili-pink))] rounded-full">
              <div className="px-8 py-3 bg-bili-dark rounded-full">
                <p className="text-white font-medium flex items-center gap-2">
                  <span className="text-xl">🎌</span>
                  Seja parte da revolução otaku no Brasil! 
                  <span className="text-xl">🚀</span>
                </p>
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
                <li><a href="https://www.bilibili.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[hsl(var(--bili-blue))] transition-colors">Site Oficial Bilibili</a></li>
                <li><a href="https://app.bilibili.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[hsl(var(--bili-blue))] transition-colors">App Mobile</a></li>
                <li><a href="https://www.bilibili.tv/" target="_blank" rel="noopener noreferrer" className="hover:text-[hsl(var(--bili-blue))] transition-colors">Bilibili Internacional</a></li>
                <li><a href="https://member.bilibili.com/studio/home" target="_blank" rel="noopener noreferrer" className="hover:text-[hsl(var(--bili-blue))] transition-colors">Centro de Criadores</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Categorias Populares</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="https://www.bilibili.com/v/anime/" target="_blank" rel="noopener noreferrer" className="hover:text-[hsl(var(--bili-pink))] transition-colors">Anime & Manga</a></li>
                <li><a href="https://www.bilibili.com/v/game/" target="_blank" rel="noopener noreferrer" className="hover:text-[hsl(var(--bili-pink))] transition-colors">Gaming</a></li>
                <li><a href="https://www.bilibili.com/v/music/" target="_blank" rel="noopener noreferrer" className="hover:text-[hsl(var(--bili-pink))] transition-colors">Música & Covers</a></li>
                <li><a href="https://www.bilibili.com/v/knowledge/" target="_blank" rel="noopener noreferrer" className="hover:text-[hsl(var(--bili-pink))] transition-colors">Educação</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Bilibili Brasil - Site de fãs não oficial. Feito com ❤️ para a comunidade otaku.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
