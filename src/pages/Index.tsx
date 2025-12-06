import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-3xl mx-auto px-6 py-16 md:py-24">
        <article className="animate-fade-in">
          <header className="mb-12 md:mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight tracking-tight">
              Минималистичный текст
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground font-light">
              Место для чтения и размышлений
            </p>
          </header>

          <Separator className="mb-12" />

          <section className="prose prose-lg max-w-none">
            <div className="space-y-8 text-foreground/90 leading-relaxed">
              <p className="text-lg md:text-xl font-light first-letter:text-5xl first-letter:font-bold first-letter:mr-1 first-letter:float-left first-letter:leading-none first-letter:mt-1">
                Минимализм — это не просто отсутствие лишнего, но и присутствие необходимого. 
                Каждая линия, каждое слово имеют своё значение и занимают своё место в пространстве.
              </p>

              <p className="text-base md:text-lg">
                В эпоху информационного шума особенно ценным становится умение создавать чистое, 
                незагромождённое пространство для мыслей. Простота формы позволяет сосредоточиться 
                на содержании, а белое пространство даёт глазам отдохнуть и разуму — сконцентрироваться.
              </p>

              <blockquote className="border-l-4 border-primary pl-6 py-2 my-8 italic text-muted-foreground">
                «Совершенство достигается не тогда, когда нечего добавить, 
                а когда нечего убрать.»
                <footer className="text-sm mt-2 not-italic">— Антуан де Сент-Экзюпери</footer>
              </blockquote>

              <p className="text-base md:text-lg">
                Типографика играет ключевую роль в создании гармоничного читательского опыта. 
                Правильно подобранные шрифты, межстрочные интервалы и отступы создают ритм, 
                который ведёт читателя через текст естественно и непринуждённо.
              </p>

              <h2 className="text-2xl md:text-3xl font-semibold mt-12 mb-6 text-foreground">
                Философия простоты
              </h2>

              <p className="text-base md:text-lg">
                Минималистичный дизайн не означает скучный или безликий. Напротив, он требует 
                глубокого понимания того, что действительно важно. Каждый элемент должен быть 
                оправдан, каждое решение — обдуманно.
              </p>

              <p className="text-base md:text-lg">
                Пространство между элементами так же важно, как и сами элементы. Оно создаёт 
                дыхание, позволяет информации быть воспринятой без напряжения. В этой тишине 
                между словами рождается смысл.
              </p>

              <Separator className="my-12" />

              <div className="text-center py-8">
                <p className="text-sm text-muted-foreground tracking-wide uppercase">
                  Конец текста
                </p>
              </div>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
};

export default Index;
