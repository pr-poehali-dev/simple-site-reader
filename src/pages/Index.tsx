import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-3xl mx-auto px-6 py-16 md:py-24">
        <article className="animate-fade-in">
          <header className="mb-12 md:mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight tracking-tight">
              Как вывести Telegram-канал в топ
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground font-light">
              Практические советы по продвижению
            </p>
          </header>

          <Separator className="mb-12" />

          <section className="prose prose-lg max-w-none">
            <div className="space-y-8 text-foreground/90 leading-relaxed">
              <p className="text-lg md:text-xl font-light first-letter:text-5xl first-letter:font-bold first-letter:mr-1 first-letter:float-left first-letter:leading-none first-letter:mt-1">
                Несколько советов, которые могут помочь вывести Telegram-канал в топ:
              </p>

              <div className="space-y-6">
                <div>
                  <h2 className="text-xl md:text-2xl font-semibold mb-3 text-foreground">
                    Использовать ключевые слова в названии и описании
                  </h2>
                  <p className="text-base md:text-lg">
                    Оптимальная длина названия — 3–5 слов, описания — до 255 символов. В названии и профиле нужно включать основные ключевые слова своей ниши.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl md:text-2xl font-semibold mb-3 text-foreground">
                    Создавать релевантный контент
                  </h2>
                  <p className="text-base md:text-lg">
                    Частота ключевых слов в публикациях — 3–5 раз на пост. Переспам (более 7%) снижает позиции. Темы постов должны соответствовать тематике канала.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl md:text-2xl font-semibold mb-3 text-foreground">
                    Поддерживать активность аудитории
                  </h2>
                  <p className="text-base md:text-lg">
                    Чем больше лайков, репостов и комментариев, тем выше канал в поиске. Каналы с 5–7 постами в неделю имеют на 50% больше шансов попасть в топ.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl md:text-2xl font-semibold mb-3 text-foreground">
                    Взаимодействовать с аудиторией
                  </h2>
                  <p className="text-base md:text-lg">
                    Можно проводить опросы, квизы, реагировать на посты, активно обсуждать их в комментариях. Живая коммуникация повышает лояльность и мотивирует подписчиков рекомендовать канал друзьям.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl md:text-2xl font-semibold mb-3 text-foreground">
                    Участвовать в тематических событиях
                  </h2>
                  <p className="text-base md:text-lg">
                    Можно выступать на конференциях, вебинарах, подкастах с упоминанием канала.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl md:text-2xl font-semibold mb-3 text-foreground">
                    Сотрудничать с другими каналами
                  </h2>
                  <p className="text-base md:text-lg">
                    Можно договориться с каналами схожей тематики о бартере. Это могут быть взаимные репосты, упоминания в новых текстах или совместные интерактивы.
                  </p>
                </div>

                <div className="bg-muted/30 p-6 rounded-lg border-l-4 border-destructive mt-8">
                  <h2 className="text-xl md:text-2xl font-semibold mb-3 text-destructive">
                    ⚠️ Важное предупреждение
                  </h2>
                  <p className="text-base md:text-lg text-foreground/90">
                    Самая опасная ошибка при продвижении — покупка подписчиков через сомнительные сервисы. Накрученные аккаунты не только не приносят пользы, но и могут привести к блокировке канала.
                  </p>
                </div>
              </div>

              <Separator className="my-12" />

              <div className="text-center py-8">
                <p className="text-sm text-muted-foreground tracking-wide">
                  Применяйте эти советы постепенно и отслеживайте результаты
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
