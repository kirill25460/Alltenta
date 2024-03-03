import ContactUsPhoto from '../../Images/Rectangle 26.png';

export const ContactUs = () => {
  return (
    <>
      <div>
        <h3>Готові до замовлення або залишились запитання?</h3>
        <img src={ContactUsPhoto} alt="p" />
      </div>
      <div>
        <form>
          <input type="text" name="name" placeholder="ІМ’Я" />
          <input type="text" name="contact" placeholder="ТЕЛЕФОН/ЕМЕЙЛ" />
          <input type="text" name="interestedIn" placeholder="ЗАЦІКАВЛЕНИЙ В" />
          <input type="text" name="message" />
        </form>
        <button>ВІДПРАВИТИ</button>
      </div>
    </>
  );
};
