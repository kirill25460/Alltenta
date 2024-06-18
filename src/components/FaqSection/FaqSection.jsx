import { useEffect, useState } from 'react';
import {
  FaqSectionConteiner,
  FaqSectionItem,
  FaqSectionList,
  ItemBlock,
  ItemText,
  MainTextFaqSection,
  Minus,
  Plus,
  TextFaqSection,
  TextHoverFaqSection,
} from './FaqSection.styled';
import { useLocation } from 'react-router-dom';

export const FaqSection = () => {
  const [isFaqOpen, setIsFaqOpen] = useState(null);
  const [valueItem, setValueItem] = useState(true);

  const a = useLocation();

  useEffect(() => {
    if (a.pathname === '/Contact') {
      setValueItem(true);
    } else {
      setValueItem(false);
    }
  }, []);

  const toggleFaqList = item => {
    setIsFaqOpen(item);
  };

  return (
    <FaqSectionConteiner>
      <MainTextFaqSection>Запитання та відповіді</MainTextFaqSection>
      <TextFaqSection>
        Ось список найпопулярніших запитань, щоб познайомитись краще
      </TextFaqSection>
      <FaqSectionList>
        {valueItem === true ? (
          <FaqSectionItem>
            <ItemBlock>
              <ItemText>
                Який термін виготовлення і доставки ПВХ виробів?
              </ItemText>
              {isFaqOpen === 1 ? (
                <Minus onClick={() => toggleFaqList(null)} />
              ) : (
                <Plus onClick={() => toggleFaqList(1)} />
              )}
            </ItemBlock>
            {isFaqOpen === 1 ? (
              <TextHoverFaqSection>
                Термін виготовлення ПВХ виробів зазвичай становить від 7 до 14
                робочих днів, в залежності від складності замовлення і
                завантаженості виробництва. Доставка займає ще від 1 до 3 днів,
                в залежності від вашого місцезнаходження.
              </TextHoverFaqSection>
            ) : (
              <></>
            )}
          </FaqSectionItem>
        ) : (
          <FaqSectionItem>
            <ItemBlock>
              <ItemText>
                Чи можна замовити ПВХ вироби за індивідуальними розмірами та
                дизайном?
              </ItemText>
              {isFaqOpen === 1 ? (
                <Minus onClick={() => toggleFaqList(null)} />
              ) : (
                <Plus onClick={() => toggleFaqList(1)} />
              )}
            </ItemBlock>
            {isFaqOpen === 1 ? (
              <TextHoverFaqSection>
                Так, ми надаємо послуги з виготовлення ПВХ виробів за
                індивідуальними розмірами та дизайном. Наші фахівці готові
                врахувати всі ваші побажання і створити унікальні рішення для
                вашого проекту.
              </TextHoverFaqSection>
            ) : (
              <></>
            )}
          </FaqSectionItem>
        )}
        {valueItem === true ? (
          <FaqSectionItem>
            <ItemBlock>
              <ItemText>
                Чи можна використовувати ваші ПВХ вироби на відкритому повітрі?
              </ItemText>
              {isFaqOpen === 2 ? (
                <Minus onClick={() => toggleFaqList(null)} />
              ) : (
                <Plus onClick={() => toggleFaqList(2)} />
              )}
            </ItemBlock>
            {isFaqOpen === 2 ? (
              <TextHoverFaqSection>
                Так, наші ПВХ вироби ідеально підходять для використання на
                відкритому повітрі. Вони стійкі до впливу ультрафіолетових
                променів, вологості та екстремальних температур, що забезпечує
                їх довговічність та надійність у будь-яких умовах.
              </TextHoverFaqSection>
            ) : (
              <></>
            )}
          </FaqSectionItem>
        ) : (
          <FaqSectionItem>
            <ItemBlock>
              <ItemText>
                Які переваги мають ПВХ вироби порівняно з аналогами з інших
                матеріалів?
              </ItemText>
              {isFaqOpen === 2 ? (
                <Minus onClick={() => toggleFaqList(null)} />
              ) : (
                <Plus onClick={() => toggleFaqList(2)} />
              )}
            </ItemBlock>
            {isFaqOpen === 2 ? (
              <TextHoverFaqSection>
                ПВХ вироби відзначаються високою міцністю, довговічністю та
                стійкістю до погодних умов. Вони не піддаються корозії, гниттю і
                впливу ультрафіолетових променів. Крім того, ПВХ матеріали мають
                відмінні тепло- і звукоізоляційні властивості, що робить їх
                ідеальними для будівництва та оздоблення.
              </TextHoverFaqSection>
            ) : (
              <></>
            )}
          </FaqSectionItem>
        )}
        {valueItem === true ? (
          <FaqSectionItem>
            <ItemBlock>
              <ItemText>Чи надаєте ви послуги монтажу ПВХ виробів?</ItemText>
              {isFaqOpen === 3 ? (
                <Minus onClick={() => toggleFaqList(null)} />
              ) : (
                <Plus onClick={() => toggleFaqList(3)} />
              )}
            </ItemBlock>
            {isFaqOpen === 3 ? (
              <TextHoverFaqSection>
                Так, ми надаємо послуги з монтажу наших ПВХ виробів. Наші
                професійні монтажники забезпечать якісне та швидке встановлення
                вікон, дверей, панелей та інших виробів з ПВХ, дотримуючись всіх
                технічних вимог і стандартів.
              </TextHoverFaqSection>
            ) : (
              <></>
            )}
          </FaqSectionItem>
        ) : (
          <FaqSectionItem>
            <ItemBlock>
              <ItemText>
                Як доглядати за ПВХ виробами, щоб зберегти їх довговічність?
              </ItemText>
              {isFaqOpen === 3 ? (
                <Minus onClick={() => toggleFaqList(null)} />
              ) : (
                <Plus onClick={() => toggleFaqList(3)} />
              )}
            </ItemBlock>
            {isFaqOpen === 3 ? (
              <TextHoverFaqSection>
                Догляд за ПВХ виробами не потребує особливих зусиль. Для
                очищення достатньо використовувати м'яку ганчірку і теплу воду з
                невеликою кількістю миючого засобу. Уникайте використання
                абразивних матеріалів та агресивних хімічних речовин, щоб не
                пошкодити поверхню.
              </TextHoverFaqSection>
            ) : (
              <></>
            )}
          </FaqSectionItem>
        )}
        {valueItem === true ? (
          <FaqSectionItem>
            <ItemBlock>
              <ItemText>Чи можна купити вашу продукцію оптом?</ItemText>
              {isFaqOpen === 4 ? (
                <Minus onClick={() => toggleFaqList(null)} />
              ) : (
                <Plus onClick={() => toggleFaqList(4)} />
              )}
            </ItemBlock>
            {isFaqOpen === 4 ? (
              <TextHoverFaqSection>
                Так, ми пропонуємо вигідні умови для оптових покупців. Ви можете
                замовити великі партії ПВХ виробів за спеціальними цінами. Ми
                також надаємо знижки на великі обсяги замовлень та можливість
                індивідуального обговорення умов співпраці.
              </TextHoverFaqSection>
            ) : (
              <></>
            )}
          </FaqSectionItem>
        ) : (
          <FaqSectionItem>
            <ItemBlock>
              <ItemText>
                Який термін виготовлення і доставки ПВХ виробів?
              </ItemText>
              {isFaqOpen === 4 ? (
                <Minus onClick={() => toggleFaqList(null)} />
              ) : (
                <Plus onClick={() => toggleFaqList(4)} />
              )}
            </ItemBlock>
            {isFaqOpen === 4 ? (
              <TextHoverFaqSection>
                Термін виготовлення ПВХ виробів зазвичай становить від 7 до 14
                робочих днів, в залежності від складності замовлення і
                завантаженості виробництва. Доставка займає ще від 1 до 3 днів,
                в залежності від вашого місцезнаходження.
              </TextHoverFaqSection>
            ) : (
              <></>
            )}
          </FaqSectionItem>
        )}
        {/* <FaqSectionItem>
          <ItemBlock>
            <ItemText>
              Як швидко приходить відповідь на заявку по дзвінку?
            </ItemText>
            {isFaqOpen === 5 ? (
              <Minus onClick={() => toggleFaqList(null)} />
            ) : (
              <Plus onClick={() => toggleFaqList(5)} />
            )}
          </ItemBlock>
          {isFaqOpen === 5 ? (
            <TextHoverFaqSection>
              Робимо тенти, тенти тентові. Робимо тенти, тенти тентові. Робимо
              тенти, тенти тентові. Робимо тенти, тенти тентові. Робимо тенти,
              тенти тентові. Робимо тенти, тенти тентові. Робимо тенти, тенти
              тентові. Робимо тенти, тенти тентові. Робимо тенти, тенти тентові.
              Робимо тенти, тенти тентові. Робимо тенти, тенти тентові. Робимо
              тенти, тенти тентові. Робимо тенти, тенти тентові. Робимо тенти,
              тенти тентові. Робимо тенти, тенти тентові. Робимо тенти, тенти
              тентові. Робимо тенти, тенти тентові. Робимо тенти, тенти тентові.
              Робимо тенти, тенти тентові. Робимо тенти, тенти тентові. Робимо
              тенти, тенти тентові. Робимо тенти, тенти тентові. Робимо тенти,
              тенти тентові. Робимо тенти, тенти тентові. Робимо тенти, тенти
              тентові. Робимо тенти, тенти тентові. Робимо тенти, тенти тентові.
              Робимо тенти, тенти тентові.{' '}
            </TextHoverFaqSection>
          ) : (
            <></>
          )}
        </FaqSectionItem> */}
      </FaqSectionList>
    </FaqSectionConteiner>
  );
};
