import Navigation from "@/components/navigation";
import { Mascot, MascotPair } from "@/components/mascots";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section
        id="inicio"
        className="pt-24 pb-16 min-h-screen flex items-center"
      >
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="gradient-text">Descubra o</span>
                <br />
                <span className="bili-dark">Bilibili</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                A maior plataforma de vídeos da China dedicada à cultura otaku,
                gaming, anime e muito mais. Explore um universo de conteúdo
                criativo e conecte-se com milhões de fãs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  className="bg-gradient-to-r from-[hsl(var(--bili-blue))] to-cyan-500 text-white px-8 py-4 rounded-xl font-medium hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 h-auto"
                  onClick={() =>
                    document
                      .getElementById("tutorial")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Criar Minha Conta
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
      <section
        id="sobre"
        className="py-16 bg-white"
        aria-labelledby="historia-heading"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2
              id="historia-heading"
              className="text-4xl font-bold gradient-text mb-4"
            >
              História do Bilibili
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conheça a jornada de uma das plataformas mais inovadoras da
              internet para cultura otaku, anime e gaming
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card
              className="bili-card rounded-2xl p-8 text-center group hover:shadow-xl transition-all duration-300"
              role="article"
            >
              <CardContent className="p-0">
                <div
                  className="w-16 h-16 bg-gradient-to-r from-[hsl(var(--bili-blue))] to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-pulse-glow"
                  aria-hidden="true"
                >
                  <time
                    className="text-white text-2xl font-bold"
                    dateTime="2009"
                  >
                    2009
                  </time>
                </div>
                <h3 className="text-xl font-semibold bili-dark mb-3">
                  Fundação do Bilibili
                </h3>
                <p className="text-gray-600">
                  Criado como um site de compartilhamento de vídeos focado em
                  anime e cultura ACG (Anime, Comic, Game), revolucionando o
                  entretenimento otaku
                </p>
              </CardContent>
            </Card>

            <Card className="bili-card rounded-2xl p-8 text-center group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-gradient-to-r from-[hsl(var(--bili-pink))] to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-pulse-glow">
                  <span className="text-white text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-semibold bili-dark mb-3">
                  Crescimento
                </h3>
                <p className="text-gray-600">
                  Expandiu para incluir gaming, música, tecnologia e conteúdo
                  educacional, atraindo milhões de usuários
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
                  Uma das maiores plataformas de vídeo da China, com foco em
                  comunidade e interação única
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mascots Section */}
      <section
        id="mascotes"
        className="py-16 bg-gradient-to-br from-[hsl(var(--bili-light))] to-pink-50"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold gradient-text mb-4">
              Conheça os Mascotes
            </h2>
            <p className="text-xl text-gray-600">
              22 e 33, os adoráveis mascotes do Bilibili
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <Card className="bili-card rounded-3xl p-8 text-center group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0">
                <div className="flex justify-center mb-6">
                  <Mascot
                    type="22"
                    size="xl"
                    className="group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-2xl font-bold bili-blue mb-4">
                  Mascote 22
                </h3>
                <p className="text-gray-600 mb-4">
                  O mascote azul representa a energia e criatividade da
                  comunidade Bilibili. Sua cor azul simboliza a vastidão do
                  conhecimento e entretenimento disponível na plataforma.
                </p>
                <div className="flex justify-center space-x-2">
                  <span className="px-3 py-1 bg-[hsl(var(--bili-blue))] text-white rounded-full text-sm">
                    Criativo
                  </span>
                  <span className="px-3 py-1 bg-[hsl(var(--bili-blue))] text-white rounded-full text-sm">
                    Energético
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="bili-card rounded-3xl p-8 text-center group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0">
                <div className="flex justify-center mb-6">
                  <Mascot
                    type="33"
                    size="xl"
                    className="group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-2xl font-bold bili-pink mb-4">
                  Mascote 33
                </h3>
                <p className="text-gray-600 mb-4">
                  O mascote rosa representa o lado mais emotivo e expressivo da
                  comunidade. Sua cor rosa simboliza a paixão e o amor pela
                  cultura otaku que une todos os usuários.
                </p>
                <div className="flex justify-center space-x-2">
                  <span className="px-3 py-1 bg-[hsl(var(--bili-pink))] text-white rounded-full text-sm">
                    Expressivo
                  </span>
                  <span className="px-3 py-1 bg-[hsl(var(--bili-pink))] text-white rounded-full text-sm">
                    Apaixonado
                  </span>
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
            <h2 className="text-4xl font-bold gradient-text mb-4">
              Principais Funcionalidades
            </h2>
            <p className="text-xl text-gray-600">
              Descubra o que torna o Bilibili único
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "💬",
                title: "Danmaku (Barrage)",
                description:
                  "Sistema único de comentários que aparecem diretamente no vídeo, criando uma experiência interativa em tempo real.",
                gradient: "from-[hsl(var(--bili-blue))] to-cyan-500",
              },
              {
                icon: "🎮",
                title: "Gaming",
                description:
                  "Lives de jogos, tutoriais, reviews e uma comunidade vibrante de gamers compartilhando suas experiências.",
                gradient: "from-[hsl(var(--bili-pink))] to-pink-500",
              },
              {
                icon: "🎌",
                title: "Anime & Manga",
                description:
                  "Vasto acervo de animes licenciados, discussões sobre mangás e conteúdo criado por fãs da cultura japonesa.",
                gradient: "from-purple-500 to-[hsl(var(--bili-pink))]",
              },
              {
                icon: "🎵",
                title: "Música",
                description:
                  "Covers, composições originais, Vocaloid e performances ao vivo de artistas independentes e estabelecidos.",
                gradient: "from-green-500 to-[hsl(var(--bili-blue))]",
              },
              {
                icon: "📚",
                title: "Educação",
                description:
                  "Tutoriais, aulas universitárias, cursos de programação e conteúdo educacional de alta qualidade.",
                gradient: "from-orange-500 to-[hsl(var(--bili-pink))]",
              },
              {
                icon: "📱",
                title: "Lives",
                description:
                  "Transmissões ao vivo interativas com sistema de presentes virtuais e chat em tempo real.",
                gradient: "from-[hsl(var(--bili-blue))] to-purple-500",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="bili-card rounded-2xl p-6 hover:shadow-xl transition-all duration-300 group"
              >
                <CardContent className="p-0">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${feature.gradient} rounded-lg flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform`}
                  >
                    <span className="text-white text-xl">{feature.icon}</span>
                  </div>
                  <h3 className="text-xl font-semibold bili-dark mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Games Section */}
      <section
        id="jogos"
        className="py-16 bg-gradient-to-br from-purple-50 via-indigo-50 to-cyan-50"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold gradient-text mb-4">
              Bilibili Gaming: Publicadora na Steam
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A Bilibili não é apenas uma plataforma de vídeos! Também é uma
              publicadora de jogos e está na Steam.
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-purple-100">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                No contexto da Steam, a Bilibili atua como uma publicadora de
                jogos. Isso significa que ela financia e promove o lançamento de
                diversos títulos na plataforma de jogos da Valve.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Alguns exemplos de jogos publicados pela Bilibili na Steam
                incluem "Magicraft" e "Matchless Kungfu".
              </p>
              <div className="text-center">
                <Button
                  className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white hover:from-purple-700 hover:to-indigo-800 font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105"
                  onClick={() =>
                    window.open(
                      "https://store.steampowered.com/publisher/bilibili",
                      "_blank",
                    )
                  }
                >
                  🎮 Ver Jogos na Steam
                </Button>
              </div>
            </div>
          </div>

          
        </div>
      </section>

      {/* Bilibili.tv International Section */}
      <section
        id="internacional"
        className="py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold gradient-text mb-4">
              Bilibili.tv - Versão Internacional
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A forma mais fácil para usuários fora da China acessarem o
              conteúdo do Bilibili
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-[hsl(var(--bili-blue))] to-blue-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-2xl">🌍</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Acesso Simplificado
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">
                  O Bilibili.tv é a versão internacional oficial da plataforma,
                  projetada especificamente para usuários fora da China. Oferece
                  uma experiência mais acessível e em inglês.
                </p>
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>Sem necessidade de VPN</span>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-yellow-100">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-2xl">⚠️</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Limitações da Versão
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Embora seja mais acessível, o Bilibili.tv tem um catálogo mais
                  limitado em comparação com a versão chinesa original. Nem todo
                  conteúdo está disponível devido a restrições de licenciamento.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                    <span>Menos conteúdo criado por usuários</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                    <span>Catálogo de anime reduzido</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                    <span>Funcionalidades limitadas</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-[hsl(var(--bili-blue))] to-blue-600 rounded-3xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold mb-4">Bilibili.tv</h3>
                  <p className="text-blue-100 mb-6 text-lg">
                    Versão internacional oficial com interface em inglês e
                    acesso facilitado para usuários globais.
                  </p>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                        <span className="text-xs">✓</span>
                      </div>
                      <span>Interface em inglês</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                        <span className="text-xs">✓</span>
                      </div>
                      <span>Acesso global sem restrições</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                        <span className="text-xs">✓</span>
                      </div>
                      <span>Animes licenciados</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                        <span className="text-xs">✓</span>
                      </div>
                      <span>Conta gratuita</span>
                    </div>
                  </div>
                  <Button
                    className="w-full bg-white text-[hsl(var(--bili-blue))] hover:bg-gray-100 font-semibold py-4 rounded-xl transition-all duration-300 transform hover:scale-105"
                    onClick={() => window.open("https://bilibili.tv", "_blank")}
                  >
                    🌐 Acessar Bilibili.tv
                  </Button>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-green-100">
                <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-sm">💡</span>
                  </span>
                  Dica para Brasileiros
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Se você é novo no universo Bilibili, comece pelo{" "}
                  <strong>bilibili.tv</strong> para se familiarizar com a
                  plataforma. Depois, se quiser acesso completo ao conteúdo,
                  considere criar uma conta na versão chinesa seguindo nosso
                  tutorial completo.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-[hsl(var(--bili-blue))] to-blue-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Qual Versão Escolher?</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/10 rounded-lg p-6">
                  <h4 className="text-xl font-semibold mb-3">
                    🇨🇳 Bilibili.com
                  </h4>
                  <p className="text-blue-100 text-sm mb-4">
                    Versão completa com todo o conteúdo e funcionalidades
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="text-green-200">✓ Conteúdo completo</div>
                    <div className="text-green-200">
                      ✓ Todas as funcionalidades
                    </div>
                    <div className="text-green-200">✓ Comunidade completa</div>
                    <div className="text-yellow-200">⚠️ Requer tutorial</div>
                  </div>
                </div>
                <div className="bg-white/10 rounded-lg p-6">
                  <h4 className="text-xl font-semibold mb-3">🌍 Bilibili.tv</h4>
                  <p className="text-blue-100 text-sm mb-4">
                    Versão internacional mais acessível
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="text-green-200">✓ Fácil acesso</div>
                    <div className="text-green-200">✓ Interface em inglês</div>
                    <div className="text-green-200">✓ Sem complicações</div>
                    <div className="text-yellow-200">⚠️ Conteúdo limitado</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section
        id="comunidade"
        className="py-16 bg-gradient-to-br from-[hsl(var(--bili-light))] via-white to-pink-50"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold gradient-text mb-4">
              Cultura de Fãs
            </h2>
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
                    Milhões de criadores compartilham conteúdo original, desde
                    AMVs e covers musicais até análises profundas de anime e
                    gameplay comentado.
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
                    Os "UPs" (criadores de conteúdo) são celebrados e apoiados
                    pela comunidade, criando um ecossistema de entretenimento
                    colaborativo.
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
                    O sistema de Danmaku permite que os espectadores interajam
                    diretamente com o conteúdo, criando uma experiência coletiva
                    incomparável.
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
            <p className="text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
              Conecte-se com outros otakus, compartilhe memes, discuta animes e
              faça parte da família Bilibili Brasil!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Discord Card */}
            <Card className="bg-gradient-to-br from-white/95 to-gray-50/95 border-[#5865f2]/30 rounded-3xl p-8 hover:shadow-2xl hover:shadow-[#5865f2]/20 transition-all duration-500 group backdrop-blur-sm h-full">
              <CardContent className="p-0 text-center h-full flex flex-col">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-[#5865f2] rounded-2xl flex items-center justify-center mx-auto group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 shadow-lg shadow-[#5865f2]/50">
                    <svg
                      className="w-10 h-10 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0189 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1568 2.4189Z" />
                    </svg>
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center animate-bounce">
                    <span className="text-xs text-white">!</span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-2">
                  Discord Server
                  <span className="text-lg">💬</span>
                </h3>

                <p className="text-gray-700 mb-6 leading-relaxed font-medium flex-grow">
                  🚧 Servidor em construção! Seja um dos primeiros membros do
                  nosso Discord para bater papo sobre anime, gaming e cultura
                  otaku quando estivermos prontos!
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-center text-sm text-gray-600">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-2 animate-pulse"></span>
                    <span className="font-medium">
                      🔨 Em construção - Seja um pioneiro!
                    </span>
                  </div>
                  <div className="flex justify-center space-x-4 text-sm text-gray-600">
                    <span className="flex items-center font-medium">
                      <span className="text-[#5865f2]">🎌</span> Anime
                    </span>
                    <span className="flex items-center font-medium">
                      <span className="text-[#5865f2]">🎮</span> Gaming
                    </span>
                    <span className="flex items-center font-medium">
                      <span className="text-[#5865f2]">🎵</span> Música
                    </span>
                  </div>
                </div>

                <Button
                  className="w-full bg-[#5865f2] hover:bg-[#4752c4] text-white font-semibold py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#5865f2]/50 mt-auto"
                  onClick={() =>
                    window.open("https://discord.gg/ctJfhy4yew", "_blank")
                  }
                >
                  <svg className="w-5 h-5 mr-2" />
                  Entrar no Discord
                </Button>
              </CardContent>
            </Card>

            {/* X (Twitter) Card */}
            <Card className="bg-gradient-to-br from-white/95 to-gray-50/95 border-gray-300 rounded-3xl p-8 hover:shadow-2xl hover:shadow-black/30 transition-all duration-500 group backdrop-blur-sm h-full">
              <CardContent className="p-0 text-center h-full flex flex-col">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-black rounded-2xl flex items-center justify-center mx-auto group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 shadow-lg shadow-black/50">
                    <svg
                      className="w-10 h-10 text-white"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-[hsl(var(--bili-pink))] rounded-full flex items-center justify-center animate-bounce delay-300">
                    <span className="text-xs text-white">✨</span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-2">
                  Bilibili BR no X<span className="text-lg">🐦</span>
                </h3>

                <p className="text-gray-700 mb-6 leading-relaxed font-medium flex-grow">
                  Siga nosso X para acompanhar o time de LoL do Bilibili Gaming,
                  novidades dos campeonatos e updates da comunidade gamer!
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-center text-sm text-gray-600">
                    <span className="w-2 h-2 bg-[hsl(var(--bili-pink))] rounded-full mr-2 animate-pulse"></span>
                    <span className="font-medium">
                      Focado no time de LoL do Bilibili
                    </span>
                  </div>
                  <div className="flex justify-center space-x-4 text-sm text-gray-600">
                    <span className="flex items-center font-medium">
                      <span className="text-[hsl(var(--bili-pink))]">🏆</span>{" "}
                      LoL
                    </span>
                    <span className="flex items-center font-medium">
                      <span className="text-[hsl(var(--bili-pink))]">⚡</span>{" "}
                      Esports
                    </span>
                    <span className="flex items-center font-medium">
                      <span className="text-[hsl(var(--bili-pink))]">🎮</span>{" "}
                      Gaming
                    </span>
                  </div>
                </div>

                <Button
                  className="w-full bg-black hover:bg-gray-800 text-white font-semibold py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-black/50 border border-gray-700 mt-auto"
                  onClick={() =>
                    window.open("https://x.com/BilibiliBR", "_blank")
                  }
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
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

      {/* Tutorial Section */}
      <section id="tutorial" className="py-8 sm:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold gradient-text mb-4">
              Como usar o Bilibili?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Tutorial completo para brasileiros: desde criar conta até navegar
              na plataforma
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-8 sm:space-y-12 lg:space-y-16">
            {/* Parte 1: Criando Conta */}
            <div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold gradient-text mb-6 sm:mb-8 text-center px-4">
                Parte 1: Criando sua Conta (Bilibili China)
              </h3>

              <div className="space-y-8 sm:space-y-10 lg:space-y-12">
                {/* Passo 1: Acessar o Site */}
                <div className="bili-card rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8">
                  <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-[hsl(var(--bili-blue))] to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0">
                      <span className="text-white font-bold text-lg sm:text-xl">1</span>
                    </div>
                    <div className="flex-1 w-full">
                      <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold bili-dark mb-3 sm:mb-4 text-center sm:text-left">
                        Acessar o Site Oficial
                      </h4>
                      <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed">
                        Primeiro, acesse o site oficial do Bilibili em{" "}
                        <strong>www.bilibili.com</strong>. Você verá a página
                        inicial em chinês, mas não se preocupe - vamos te guiar
                        por cada etapa.
                      </p>
                      <div className="bg-blue-50 border-l-4 border-[hsl(var(--bili-blue))] p-3 sm:p-4 rounded mb-4 sm:mb-6">
                        <p className="text-xs sm:text-sm text-gray-700">
                          <strong>Dica:</strong> Use a tradução automática do
                          seu navegador para facilitar a navegação.
                        </p>
                      </div>

                      <div className="text-center mb-4">
                        <p className="font-semibold text-gray-700 mb-2 text-sm sm:text-base">
                          Página Inicial do Bilibili
                        </p>
                        <p className="text-xs sm:text-sm text-gray-600 mb-4">
                          Interface principal que você verá ao acessar
                        </p>
                        <div className="w-full overflow-hidden rounded-lg shadow-lg">
                          <img
                            src="/homepage.jpeg"
                            alt="Página inicial do Bilibili"
                            className="w-full h-auto object-contain max-w-full"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Passo 2: Encontrar Login */}
                <div className="bili-card rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8">
                  <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-[hsl(var(--bili-blue))] to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0">
                      <span className="text-white font-bold text-lg sm:text-xl">2</span>
                    </div>
                    <div className="flex-1 w-full">
                      <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold bili-dark mb-3 sm:mb-4 text-center sm:text-left">
                        Encontrar o Botão de Login
                      </h4>
                      <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed">
                        No canto superior direito da página, procure pelo botão
                        azul com o texto "登录" (Login). Este botão te levará
                        para a tela de login/registro.
                      </p>

                      <div className="text-center mb-4">
                        <p className="font-semibold text-gray-700 mb-2 text-sm sm:text-base">
                          Localização do Botão de Login
                        </p>
                        <div className="w-full overflow-hidden rounded-lg shadow-lg">
                          <img
                            src="/Encontrar o Botão de Login.png"
                            alt="Botão de login no Bilibili"
                            className="w-full h-auto object-contain max-w-full"
                          />
                        </div>
                        <p className="text-xs sm:text-sm text-gray-600 mt-2">
                          Botão "登录" (Login) destacado em rosa no canto
                          superior direito
                        </p>
                      </div>

                      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 sm:p-4 rounded">
                        <p className="text-xs sm:text-sm text-gray-700">
                          <strong>Localização:</strong> O botão fica sempre no
                          canto superior direito da página, próximo à barra de
                          pesquisa.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Passo 3: Tela de Login */}
                <div className="bili-card rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8">
                  <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-[hsl(var(--bili-blue))] to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0">
                      <span className="text-white font-bold text-lg sm:text-xl">3</span>
                    </div>
                    <div className="flex-1 w-full">
                      <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold bili-dark mb-3 sm:mb-4 text-center sm:text-left">
                        Escolher Método de Registro
                      </h4>
                      <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed">
                        Na tela de login, você verá várias opções. Para criar
                        uma conta nova, você pode escolher entre "短信登录"
                        (Login por SMS) ou registro por e-mail. O SMS é o método
                        mais recomendado atualmente para brasileiros, embora o
                        e-mail também possa funcionar.
                      </p>

                      <div className="text-center mb-4 sm:mb-6">
                        <p className="font-semibold text-gray-700 mb-2 text-sm sm:text-base">
                          Tela de Login do Bilibili
                        </p>
                        <div className="w-full overflow-hidden rounded-lg shadow-lg">
                          <img
                            src="/Tela de Login.png"
                            alt="Tela de login do Bilibili"
                            className="w-full h-auto object-contain max-w-full"
                          />
                        </div>
                        <p className="text-xs sm:text-sm text-gray-600 mt-2">
                          Tela de login com opções QR Code e SMS
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-4">
                        <div className="bg-gray-100 p-2 sm:p-3 rounded-lg text-center">
                          <span className="text-gray-600 text-xs sm:text-sm block">扫描二维码登录</span>
                          <p className="text-xs text-gray-500">
                            QR Code (Skip)
                          </p>
                        </div>
                        <div className="bg-[hsl(var(--bili-light))] border-2 border-[hsl(var(--bili-blue))] p-2 sm:p-3 rounded-lg text-center">
                          <span className="text-[hsl(var(--bili-blue))] font-semibold text-xs sm:text-sm block">
                            短信登录
                          </span>
                          <p className="text-xs text-[hsl(var(--bili-blue))]">
                            SMS (Recomendado)
                          </p>
                        </div>
                        <div className="bg-green-50 border-2 border-green-400 p-2 sm:p-3 rounded-lg text-center">
                          <span className="text-green-600 font-semibold text-xs sm:text-sm block">
                            邮箱登录
                          </span>
                          <p className="text-xs text-green-600">
                            E-mail (Alternativa?)
                          </p>
                        </div>
                      </div>

                      <div className="bg-green-50 border border-green-200 p-3 sm:p-4 rounded-lg">
                        <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                          <strong>Por que SMS?</strong> É o método mais
                          confiável para usuários internacionais e não requer
                          aplicativos adicionais.
                          <br />
                          <strong>E-mail:</strong> Ao menos antes funcionava,
                          pelo que lembro, criei minha conta com e-mail e linkei
                          o número de celular para confirmar a conta. Mas não
                          sei se ainda dá para utilizar ainda e-mail como
                          usuário, a minha conta foi criada em 2017.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Passo 4: Selecionar País e Inserir Número */}
                <div className="bili-card rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8">
                  <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-[hsl(var(--bili-blue))] to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0">
                      <span className="text-white font-bold text-lg sm:text-xl">4</span>
                    </div>
                    <div className="flex-1 w-full">
                      <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold bili-dark mb-3 sm:mb-4 text-center sm:text-left">
                        Selecionar Brasil (+55) e Inserir Número
                      </h4>
                      <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed">
                        Primeiro, clique no campo do código do país (que mostra
                        +86 por padrão) e procure pelo Brasil. Role a lista até
                        encontrar "巴西" (Brasil) com o código{" "}
                        <strong>+55</strong>. Depois, digite seu número de
                        celular brasileiro <strong>SEM</strong> o código do país
                        e SEM o zero inicial.
                      </p>

                      <div className="text-center mb-4 sm:mb-6">
                        <p className="font-semibold text-gray-700 mb-2 text-sm sm:text-base">
                          Seleção do Brasil (+55) e Inserção do Número
                        </p>
                        <div className="w-full overflow-hidden rounded-lg shadow-lg">
                          <img
                            src="/Inserir Número de Celular.png"
                            alt="Seleção do Brasil e inserção do número do celular"
                            className="w-full h-auto object-contain max-w-full"
                          />
                        </div>
                        <p className="text-xs sm:text-sm text-gray-600 mt-2">
                          Campo para selecionar Brasil (+55) e inserir o número
                          do celular
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                        <div className="bg-green-50 border border-green-200 p-3 sm:p-4 rounded-lg">
                          <h5 className="font-semibold text-green-700 mb-2 sm:mb-3 text-sm sm:text-base">
                            ✅ Seleção do País:
                          </h5>
                          <div className="flex items-center justify-between">
                            <span className="text-gray-700 text-xs sm:text-sm">巴西 (Brasil)</span>
                            <span className="bg-green-500 text-white px-2 sm:px-3 py-1 rounded font-semibold text-xs sm:text-sm">
                              +55
                            </span>
                          </div>
                        </div>

                        <div className="bg-blue-50 border border-blue-200 p-3 sm:p-4 rounded-lg">
                          <h5 className="font-semibold text-blue-700 mb-2 sm:mb-3 text-sm sm:text-base">
                            📱 Formato do Número:
                          </h5>
                          <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                            <div className="text-red-500">
                              ❌ (11) 99999-9999
                            </div>
                            <div className="text-green-500">✅ 11999999999</div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 sm:p-4 rounded">
                        <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                          <strong>Exemplo prático:</strong> Se seu número é (11)
                          99999-9999, primeiro selecione Brasil (+55), depois
                          digite apenas: 11999999999
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Passo 5: Confirmar SMS */}
                <div className="bili-card rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8">
                  <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-[hsl(var(--bili-blue))] to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0">
                      <span className="text-white font-bold text-lg sm:text-xl">5</span>
                    </div>
                    <div className="flex-1 w-full">
                      <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold bili-dark mb-3 sm:mb-4 text-center sm:text-left">
                        Verificação por SMS
                      </h4>
                      <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed">
                        Após inserir seu número, clique no botão azul para
                        enviar o código de verificação. Você receberá um SMS com
                        um código de 6 dígitos. Digite este código no campo
                        "验证码" (Código de Verificação).
                      </p>

                      <div className="text-center mb-4 sm:mb-6">
                        <p className="font-semibold text-gray-700 mb-2 text-sm sm:text-base">
                          Confirmação do SMS
                        </p>
                        <div className="w-full overflow-hidden rounded-lg shadow-lg">
                          <img
                            src="/Confirmar SMS para login.png"
                            alt="Tela de verificação SMS"
                            className="w-full h-auto object-contain max-w-full"
                          />
                        </div>
                        <p className="text-xs sm:text-sm text-gray-600 mt-2">
                          Aguardando confirmação do SMS no número brasileiro
                        </p>
                      </div>

                      <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 items-center justify-center mb-4 sm:mb-6">
                        <div className="border-2 border-gray-300 rounded p-2 text-center w-16 text-xs sm:text-sm">
                          XXX
                        </div>
                        <div className="border-2 border-gray-300 rounded p-2 text-center w-16 text-xs sm:text-sm">
                          XXX
                        </div>
                        <span className="text-gray-500 text-sm sm:text-base">→</span>
                        <div className="bg-[hsl(var(--bili-light))] border-2 border-[hsl(var(--bili-blue))] rounded p-2 text-center">
                          <span className="text-[hsl(var(--bili-blue))] font-semibold text-xs sm:text-sm">
                            Digite o código SMS
                          </span>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                        <div className="bg-orange-50 border border-orange-200 p-3 sm:p-4 rounded-lg">
                          <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                            <strong>Tempo limite:</strong> O código expira em 5
                            minutos. Se não receber, clique em "重新发送"
                            (Reenviar).
                          </p>
                        </div>
                        <div className="bg-purple-50 border border-purple-200 p-3 sm:p-4 rounded-lg">
                          <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                            <strong>Problema?</strong> Verifique a caixa de spam
                            do seu celular ou aguarde alguns minutos.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Passo 6: Conta Criada */}
                <div className="bili-card rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8">
                  <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-500 to-[hsl(var(--bili-pink))] rounded-full flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0">
                      <span className="text-white font-bold text-lg sm:text-xl">✓</span>
                    </div>
                    <div className="flex-1 w-full">
                      <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold bili-dark mb-3 sm:mb-4 text-center sm:text-left">
                        Conta Criada com Sucesso!
                      </h4>
                      <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed">
                        Parabéns! Sua conta foi criada e você já está logado.
                        Agora você pode:
                      </p>
                      <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                        <li>Assistir vídeos sem limitações</li>
                        <li>Comentar e interagir com outros usuários</li>
                        <li>Seguir seus criadores favoritos</li>
                        <li>Enviar danmaku (comentários flutuantes)</li>
                        <li>Personalizar seu perfil</li>
                      </ul>

                      <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 p-4 sm:p-6 rounded-lg">
                        <h5 className="font-semibold text-gray-700 mb-2 sm:mb-3 text-sm sm:text-base">
                          🎉 Próximos passos recomendados:
                        </h5>
                        <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-600">
                          <p>• Complete seu perfil com avatar e biografia</p>
                          <p>• Explore as diferentes categorias de conteúdo</p>
                          <p>
                            • Ative as notificações para seus criadores
                            favoritos
                          </p>
                          <p>• Aprenda a usar o sistema de Danmaku</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Parte 2: Navegando na Interface */}
            <div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold gradient-text mb-6 sm:mb-8 text-center px-4">
                Parte 2: Navegando na Interface do Bilibili
              </h3>

              <div className="space-y-8 sm:space-y-10 lg:space-y-12">
                {/* Barra de Navegação */}
                <div className="bili-card rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8">
                  <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold bili-dark mb-4 sm:mb-6">
                    🧭 Barra de Navegação Principal
                  </h4>
                  <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                    A barra superior do Bilibili contém todas as funcionalidades
                    essenciais para navegar na plataforma.
                  </p>

                  <div className="text-center mb-4 sm:mb-6">
                    <p className="font-semibold text-gray-700 mb-2 text-sm sm:text-base">
                      Barra de Navegação Principal
                    </p>
                    <div className="w-full overflow-hidden rounded-lg shadow-lg">
                      <img
                        src="/Barra de perfil 1.png"
                        alt="Barra de navegação principal do Bilibili"
                        className="w-full h-auto object-contain max-w-full"
                      />
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600 mt-2">
                      Barra superior com todas as principais funcionalidades
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div className="space-y-3 sm:space-y-4">
                      <h5 className="font-semibold text-gray-700 text-sm sm:text-base">
                        📋 Seções Principais:
                      </h5>
                      <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
                        <div className="flex items-start space-x-2 sm:space-x-3">
                          <span className="text-[hsl(var(--bili-blue))] flex-shrink-0">
                            🏠
                          </span>
                          <div>
                            <strong>首页 (Início):</strong> Feed principal com
                            vídeos recomendados
                          </div>
                        </div>
                        <div className="flex items-start space-x-2 sm:space-x-3">
                          <span className="text-[hsl(var(--bili-pink))] flex-shrink-0">
                            📺
                          </span>
                          <div>
                            <strong>番剧 (Anime):</strong> Animes oficiais e
                            séries licenciadas
                          </div>
                        </div>
                        <div className="flex items-start space-x-2 sm:space-x-3">
                          <span className="text-red-500 flex-shrink-0">🔴</span>
                          <div>
                            <strong>直播 (Live):</strong> Transmissões ao vivo
                          </div>
                        </div>
                        <div className="flex items-start space-x-2 sm:space-x-3">
                          <span className="text-green-500 flex-shrink-0">🎮</span>
                          <div>
                            <strong>游戏 (Games):</strong> Conteúdo relacionado
                            a jogos
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3 sm:space-y-4">
                      <h5 className="font-semibold text-gray-700 text-sm sm:text-base">
                        🔍 Área do Usuário:
                      </h5>
                      <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
                        <div className="flex items-start space-x-2 sm:space-x-3">
                          <span className="text-gray-500 flex-shrink-0">🔍</span>
                          <div>
                            <strong>Barra de Pesquisa:</strong> Busque por
                            vídeos, usuários ou palavras-chave
                          </div>
                        </div>
                        <div className="flex items-start space-x-2 sm:space-x-3">
                          <span className="text-yellow-500 flex-shrink-0">🔔</span>
                          <div>
                            <strong>Notificações:</strong> Alertas de novos
                            vídeos e interações
                          </div>
                        </div>
                        <div className="flex items-start space-x-2 sm:space-x-3">
                          <span className="text-purple-500 flex-shrink-0">👤</span>
                          <div>
                            <strong>Avatar do Perfil:</strong> Acesso rápido às
                            suas configurações
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Seções do Site */}
                <div className="bili-card rounded-2xl p-8">
                  <h4 className="text-2xl font-semibold bili-dark mb-6">
                    📂 Principais Seções do Site
                  </h4>
                  <p className="text-gray-600 mb-6">
                    O Bilibili é organizado em diferentes seções para facilitar
                    a navegação e descoberta de conteúdo.
                  </p>

                  <div className="text-center mb-6">
                    <p className="font-semibold text-gray-700 mb-2">
                      Seções Principais do Bilibili
                    </p>
                    <img
                      src="/Sessoes do site.png"
                      alt="Principais seções do site Bilibili"
                      className="w-full max-w-4xl mx-auto rounded-lg shadow-lg"
                    />
                    <p className="text-sm text-gray-600 mt-2">
                      Interface mostrando as diferentes categorias e seções
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="space-y-3 text-sm">
                      <div>
                        <strong>首页 (Início):</strong> Página principal
                      </div>
                      <div>
                        <strong>番剧 (Anime):</strong> Animes e séries
                      </div>
                    </div>
                    <div className="space-y-3 text-sm">
                      <div>
                        <strong>直播 (Live):</strong> Transmissões ao vivo
                      </div>
                      <div>
                        <strong>游戏中心 (Centro de Games):</strong> Hub de
                        jogos
                      </div>
                    </div>
                    <div className="space-y-3 text-sm">
                      <div>
                        <strong>会员购 (Loja de Membros):</strong> Loja oficial
                      </div>
                      <div>
                        <strong>漫画 (Mangá):</strong> Mangás e quadrinhos
                      </div>
                    </div>
                    <div className="space-y-3 text-sm">
                      <div>
                        <strong>赛事 (Esports):</strong> Competições e torneios
                      </div>
                      <div>
                        <strong>青川 (Qingchuan):</strong> Seção especial
                      </div>
                    </div>
                  </div>
                </div>

                {/* Menu do Perfil */}
                <div className="bili-card rounded-2xl p-8">
                  <h4 className="text-2xl font-semibold bili-dark mb-6">
                    👤 Menu do Perfil do Usuário
                  </h4>
                  <p className="text-gray-600 mb-6">
                    Ao clicar no seu avatar, você acessa o menu do perfil com
                    todas as opções da sua conta.
                  </p>

                  <div className="text-center mb-6">
                    <p className="font-semibold text-gray-700 mb-2">
                      Menu do Perfil
                    </p>
                    <img
                      src="/Menu do Perfil.png"
                      alt="Menu do perfil do usuário no Bilibili"
                      className="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
                    />
                    <p className="text-sm text-gray-600 mt-2">
                      Menu dropdown com opções da conta do usuário
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h5 className="font-semibold text-gray-700">
                        📊 Gestão da Conta:
                      </h5>
                      <div className="space-y-3 text-sm">
                        <div>
                          <strong>个人中心 (Centro Pessoal):</strong>{" "}
                          Configurações da conta
                        </div>
                        <div>
                          <strong>投稿管理 (Gerenciar Uploads):</strong> Seus
                          vídeos enviados
                        </div>
                        <div>
                          <strong>创作中心 (Centro de Criação):</strong>{" "}
                          Ferramentas para criadores
                        </div>
                        <div>
                          <strong>直播中心 (Centro de Live):</strong> Configurar
                          transmissões
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h5 className="font-semibold text-gray-700">
                        🎯 Funcionalidades:
                      </h5>
                      <div className="space-y-3 text-sm">
                        <div>
                          <strong>收藏夹 (Favoritos):</strong> Vídeos salvos
                          organizados
                        </div>
                        <div>
                          <strong>历史记录 (Histórico):</strong> Vídeos
                          assistidos recentemente
                        </div>
                        <div>
                          <strong>稍后再看 (Assistir Depois):</strong> Lista de
                          vídeos salvos
                        </div>
                        <div>
                          <strong>订阅管理 (Gerenciar Inscrições):</strong>{" "}
                          Canais seguidos
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sistema de Upload */}
                <div className="bili-card rounded-2xl p-8">
                  <h4 className="text-2xl font-semibold bili-dark mb-6">
                    📤 Sistema de Upload e Criação
                  </h4>
                  <p className="text-gray-600 mb-6">
                    O Bilibili oferece várias opções para criadores de conteúdo
                    enviarem seus materiais.
                  </p>

                  <div className="text-center mb-6">
                    <p className="font-semibold text-gray-700 mb-2">
                      Menu de Upload (投稿)
                    </p>
                    <img
                      src="/Barra de perfil 1.png"
                      alt="Menu de upload no Bilibili"
                      className="w-full max-w-3xl mx-auto rounded-lg shadow-lg"
                    />
                    <p className="text-sm text-gray-600 mt-2">
                      Menu suspenso que aparece ao passar o mouse sobre o botão
                      "投稿"
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h5 className="font-semibold text-gray-700">
                        🎬 Tipos de Upload:
                      </h5>
                      <div className="space-y-3 text-sm">
                        <div className="flex items-start space-x-3">
                          <span className="text-[hsl(var(--bili-blue))]">
                            📹
                          </span>
                          <div>
                            <strong>视频投稿 (Shìpín tóugǎo):</strong> Enviar
                            Vídeo - MP4, AVI, MOV até 8GB
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <span className="text-[hsl(var(--bili-pink))]">
                            🎵
                          </span>
                          <div>
                            <strong>音频投稿 (Yīnpín tóugǎo):</strong> Enviar
                            Áudio - Músicas, podcasts, covers
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <span className="text-purple-500">📝</span>
                          <div>
                            <strong>专栏投稿 (Zhuānlán tóugǎo):</strong> Enviar
                            Artigo/Coluna - Textos, blogs, análises
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <span className="text-orange-500">🏷️</span>
                          <div>
                            <strong>贴纸投稿 (Tiēzhǐ tóugǎo):</strong> Enviar
                            Sticker/Adesivo - Emojis personalizados
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <span className="text-green-500">📊</span>
                          <div>
                            <strong>投稿管理 (Tóugǎo guǎnlǐ):</strong>{" "}
                            Gerenciamento de Envios - Controle seus uploads
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h5 className="font-semibold text-gray-700">
                        ⚙️ Configurações:
                      </h5>
                      <div className="space-y-3 text-sm">
                        <div>
                          <strong>Título e Descrição:</strong> Em chinês ou
                          inglês para maior alcance
                        </div>
                        <div>
                          <strong>Categorias:</strong> Escolha a categoria
                          correta para o algoritmo
                        </div>
                        <div>
                          <strong>Tags:</strong> Use tags relevantes para
                          descobrimento
                        </div>
                        <div>
                          <strong>Thumbnail:</strong> Imagem de capa atrativa
                          1280x720
                        </div>
                        <div>
                          <strong>Privacidade:</strong> Público, não listado ou
                          privado
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sistema de Interações */}
                <div className="bili-card rounded-2xl p-8">
                  <h4 className="text-2xl font-semibold bili-dark mb-6">
                    ❤️ Sistema Único de Interações
                  </h4>
                  <p className="text-gray-600 mb-6">
                    O Bilibili possui um sistema de engajamento diferente de
                    outras plataformas, com recursos únicos.
                  </p>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div className="bg-gradient-to-br from-red-50 to-pink-50 border border-red-200 rounded-lg p-6">
                        <h5 className="font-semibold text-red-700 mb-4 flex items-center">
                          <span className="text-xl mr-2">👍</span>
                          Reações e Engajamento
                        </h5>
                        <div className="space-y-3 text-sm">
                          <div className="flex items-center justify-between">
                            <span>点赞 (Like):</span>
                            <span className="bg-red-100 text-red-700 px-2 py-1 rounded">
                              👍 Curtir
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span>投币 (Moeda):</span>
                            <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded">
                              🪙 Doar
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span>收藏 (Favoritar):</span>
                            <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">
                              ⭐ Salvar
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span>分享 (Compartilhar):</span>
                            <span className="bg-green-100 text-green-700 px-2 py-1 rounded">
                              📤 Share
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-lg p-6">
                        <h5 className="font-semibold text-blue-700 mb-4 flex items-center">
                          <span className="text-xl mr-2">💬</span>
                          Sistema Danmaku
                        </h5>
                        <div className="space-y-3 text-sm">
                          <div>
                            <strong>弹幕 (Danmaku):</strong> Comentários
                            flutuantes sincronizados
                          </div>
                          <div>
                            <strong>评论 (Comentários):</strong> Sistema
                            tradicional abaixo do vídeo
                          </div>
                          <div>
                            <strong>实时互动:</strong> Interação em tempo real
                            durante lives
                          </div>
                          <div>
                            <strong>表情包:</strong> Emojis e stickers
                            personalizados
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-200 rounded-lg p-6">
                        <h5 className="font-semibold text-purple-700 mb-4 flex items-center">
                          <span className="text-xl mr-2">🪙</span>
                          Sistema de Moedas
                        </h5>
                        <div className="space-y-3 text-sm">
                          <p>
                            <strong>O que são:</strong> Moedas virtuais para
                            apoiar criadores
                          </p>
                          <p>
                            <strong>Como obter:</strong> Login diário, tarefas,
                            compras
                          </p>
                          <p>
                            <strong>Como usar:</strong> "Doar" para vídeos
                            favoritos
                          </p>
                          <p>
                            <strong>Benefício:</strong> Aumenta alcance do
                            conteúdo
                          </p>
                        </div>
                      </div>

                      <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-lg p-6">
                        <h5 className="font-semibold text-green-700 mb-4 flex items-center">
                          <span className="text-xl mr-2">⭐</span>
                          Coleções e Favoritos
                        </h5>
                        <div className="space-y-3 text-sm">
                          <p>
                            <strong>收藏夹 (Coleções):</strong> Organize vídeos
                            em pastas
                          </p>
                          <p>
                            <strong>公开/私密:</strong> Listas públicas ou
                            privadas
                          </p>
                          <p>
                            <strong>分享:</strong> Compartilhe coleções com
                            amigos
                          </p>
                          <p>
                            <strong>标签:</strong> Use tags para organizar
                            melhor
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Dicas Importantes */}
            <div className="bili-card rounded-2xl p-8 bg-gradient-to-r from-[hsl(var(--bili-light))] to-pink-50">
              <h3 className="text-2xl font-semibold bili-dark mb-6 text-center">
                🎯 Dicas Importantes para Brasileiros
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <span className="text-green-500 text-xl">✅</span>
                    <p className="text-gray-700">
                      Use o Google Translate para traduzir páginas quando
                      necessário
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-green-500 text-xl">✅</span>
                    <p className="text-gray-700">
                      Alguns vídeos podem ter legendas em inglês ou português
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-green-500 text-xl">✅</span>
                    <p className="text-gray-700">
                      A plataforma funciona perfeitamente no Brasil
                    </p>
                  </div>{" "}
                  <div className="flex items-start space-x-3">
                    <span className="text-green-500 text-xl">✅</span>
                    <p className="text-gray-700">
                      Comunidade global muito acolhedora com estrangeiros
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <span className="text-yellow-500 text-xl">⚠️</span>
                    <p className="text-gray-700">
                      Certifique-se de ter internet estável durante uploads
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-yellow-500 text-xl">⚠️</span>
                    <p className="text-gray-700">
                      Alguns recursos podem estar em chinês simplificado
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-blue-500 text-xl">💡</span>
                    <p className="text-gray-700">
                      Explore as configurações para personalizar sua experiência
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-blue-500 text-xl">💡</span>
                    <p className="text-gray-700">
                      Participe da comunidade brasileira através das redes
                      sociais
                    </p>
                  </div>
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
                Descobrindo e celebrando a cultura otaku através da maior
                plataforma de vídeos da China.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Links Úteis</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="https://www.bilibili.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[hsl(var(--bili-blue))] transition-colors"
                  >
                    Site Oficial Bilibili
                  </a>
                </li>
                <li>
                  <a
                    href="https://app.bilibili.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[hsl(var(--bili-blue))] transition-colors"
                  >
                    App Mobile
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.bilibili.tv/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[hsl(var(--bili-blue))] transition-colors"
                  >
                    Bilibili Internacional
                  </a>
                </li>
                <li>
                  <a
                    href="https://member.bilibili.com/studio/home"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[hsl(var(--bili-blue))] transition-colors"
                  >
                    Centro de Criadores
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">
                Categorias Populares
              </h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="https://www.bilibili.com/v/anime/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[hsl(var(--bili-pink))] transition-colors"
                  >
                    Anime & Manga
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.bilibili.com/v/game/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[hsl(var(--bili-pink))] transition-colors"
                  >
                    Gaming
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.bilibili.com/v/music/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[hsl(var(--bili-pink))] transition-colors"
                  >
                    Música & Covers
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.bilibili.com/v/knowledge/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[hsl(var(--bili-pink))] transition-colors"
                  >
                    Educação
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Bilibili Brasil - Site de fãs não oficial.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
