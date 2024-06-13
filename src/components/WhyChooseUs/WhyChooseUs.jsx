import {
    ListConteiner,
  MainTextWhyChooseUs,
  Pig,
  SvgItem,
  TextBlock,
  TextWhyChooseUs,
  WhyChooseUsConteiner,
  WhyChooseUsItem,
  WhyChooseUsList,
} from './WhyChooseUs.styled';
import ProductPageSvg from '../../Images/ProductPageSvg.svg';

export const WhyChooseUs = () => {
  return (
    <WhyChooseUsConteiner>
      <TextBlock>
        <MainTextWhyChooseUs>
          Робимо тенти, тенти тентові. Робимо тенти.
        </MainTextWhyChooseUs>
        <TextWhyChooseUs>
          Робимо тенти, тенти тентові. Робимо тенти, тенти тентові. Робимо
          тенти, тенти тентові. Робимо тенти, тенти тентові. Робимо тенти, тенти
          тентові.
        </TextWhyChooseUs>
      </TextBlock>
      <ListConteiner>
        <WhyChooseUsList>
          <WhyChooseUsItem>
            {/* <SvgItem src={ProductPageSvg} /> */}
            <Pig/>
            Мы производитель, покупая у нас, Вы не переплачиваете посредникам
          </WhyChooseUsItem>
          <WhyChooseUsItem>
            <SvgItem src={ProductPageSvg} />
            Всегда в наличии огромный ассортимент более 250 шт, на любой вкус и
            бюджет
          </WhyChooseUsItem>
          <WhyChooseUsItem>
            <SvgItem src={ProductPageSvg} />
            Отправка в день заказа, Вы можете быть уверены что уже сегодня Ваш
            заказ будет отправлен.
          </WhyChooseUsItem>
          <WhyChooseUsItem>
            <SvgItem src={ProductPageSvg} />
            Возможность оплаты при получении, Вы можете оплатить покупку, когда
            уже убедитесь что Вам всё подходит.
          </WhyChooseUsItem>
          <WhyChooseUsItem>
            <SvgItem src={ProductPageSvg} />
            Никаких предоплат по стандартным товарам, Вы точно не рискуете
            потратить деньи в пустую.
          </WhyChooseUsItem>
          <WhyChooseUsItem>
            {' '}
            <SvgItem src={ProductPageSvg} />
            30 дней возврат или обмен продукции.
          </WhyChooseUsItem>
          <WhyChooseUsItem>
            <SvgItem src={ProductPageSvg} />
            Официальная гарантия до 3-х лет, в комплекте гарантийный талон
          </WhyChooseUsItem>
        </WhyChooseUsList>
        <WhyChooseUsList>
          <WhyChooseUsItem>
            <SvgItem src={ProductPageSvg} />
            Мы производитель, покупая у нас, Вы не переплачиваете посредникам
          </WhyChooseUsItem>
          <WhyChooseUsItem>
            <SvgItem src={ProductPageSvg} />
            Всегда в наличии огромный ассортимент более 250 шт, на любой вкус и
            бюджет
          </WhyChooseUsItem>
          <WhyChooseUsItem>
            <SvgItem src={ProductPageSvg} />
            Отправка в день заказа, Вы можете быть уверены что уже сегодня Ваш
            заказ будет отправлен.
          </WhyChooseUsItem>
          <WhyChooseUsItem>
            <SvgItem src={ProductPageSvg} />
            Возможность оплаты при получении, Вы можете оплатить покупку, когда
            уже убедитесь что Вам всё подходит.
          </WhyChooseUsItem>
          <WhyChooseUsItem>
            <SvgItem src={ProductPageSvg} />
            Никаких предоплат по стандартным товарам, Вы точно не рискуете
            потратить деньи в пустую.
          </WhyChooseUsItem>
          <WhyChooseUsItem>
            {' '}
            <SvgItem src={ProductPageSvg} />
            30 дней возврат или обмен продукции.
          </WhyChooseUsItem>
          <WhyChooseUsItem>
            <SvgItem src={ProductPageSvg} />
            Официальная гарантия до 3-х лет, в комплекте гарантийный талон
          </WhyChooseUsItem>
        </WhyChooseUsList>
      </ListConteiner>
    </WhyChooseUsConteiner>
  );
};
