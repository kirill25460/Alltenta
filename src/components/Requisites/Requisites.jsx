import {
  RequisitesConteiner,
  RequisitesItem,
  RequisitesList,
  RequisitesMainText,
  RequisitesSpan,
} from './Requisites.styled';

export const Requisites = () => {
  return (
    <RequisitesConteiner>
      <RequisitesMainText>Реквізити компанії</RequisitesMainText>
      <RequisitesList>
        <RequisitesItem>
          <RequisitesSpan>ТОВ «Дорбудстандарт»</RequisitesSpan>
        </RequisitesItem>
        <RequisitesItem>
          Рахунок:
          <RequisitesSpan>UA 97 3348510000000026007105946</RequisitesSpan>
        </RequisitesItem>
        <RequisitesItem>
          МФО: <RequisitesSpan>334851</RequisitesSpan>
        </RequisitesItem>
        <RequisitesItem>
          ЄДРПОУ: <RequisitesSpan>408931610309</RequisitesSpan>
        </RequisitesItem>
        <RequisitesItem>
          Банк: <RequisitesSpan>АТ «ПУМБ»</RequisitesSpan>
        </RequisitesItem>
        <RequisitesItem>
          Є платником податку на прибуток на загальних підставах
        </RequisitesItem>
        <RequisitesItem>
          Юридична адреса: 
          <RequisitesSpan>
             Україна, 08601, Київська обл., м. Васильків, вул. Володимирська,
            б.184
          </RequisitesSpan>
        </RequisitesItem>
        <RequisitesItem>
          Адреса виробництва: 
          <RequisitesSpan>
             Україна, 08300, Київська обл., м. Бориспіль, вул. Панаса Мирного, 17
          </RequisitesSpan>
        </RequisitesItem>
      </RequisitesList>
    </RequisitesConteiner>
  );
};
