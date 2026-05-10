export function SubscriptionForm() {
  return (
    <section className="subscription-form">
      <div className="subscription-form__container">
        <form>
          <h2>актуально</h2>
          <h1>Получайте полезные рассылки о путешествиях</h1>
          <label className="subscription-form__label">Введите email</label>
          <input
            className="subscription-form__input"
            placeholder="name@domain.com"
          />
          <button>Подписаться</button>
          <p>
            Подписываясь на новости, вы автоматически соглашаетесь с условиями
            обработки персональных данных и правилами рекламных рассылок
          </p>
        </form>
      </div>
    </section>
  );
}
