import { RequisitesConteiner, RequisitesItem, RequisitesList, RequisitesMainText, RequisitesSpan } from "./Requisites.styled";




export const Requisites = () => {
  return (
    <RequisitesConteiner>
        <RequisitesMainText>Реквізити компанії</RequisitesMainText>
        <RequisitesList>
            <RequisitesItem>Повна назва компанії: <RequisitesSpan>Альтента ТОВ</RequisitesSpan></RequisitesItem>
            <RequisitesItem>Поштова адреса: <RequisitesSpan>Альтента ТОВ</RequisitesSpan></RequisitesItem>
            <RequisitesItem>Фізична адреса: <RequisitesSpan>Альтента ТОВ</RequisitesSpan></RequisitesItem>
            <RequisitesItem>Номер платника податків: <RequisitesSpan>Альтента ТОВ</RequisitesSpan></RequisitesItem>
            <RequisitesItem>Якась юридична абревіатура: <RequisitesSpan>65198298818</RequisitesSpan></RequisitesItem>
            <RequisitesItem>Якась юридична абревіатура: <RequisitesSpan>65198298818</RequisitesSpan></RequisitesItem>
            <RequisitesItem>Якась юридична абревіатура: <RequisitesSpan>65198298818</RequisitesSpan></RequisitesItem>
            <RequisitesItem>Якась юридична абревіатура: <RequisitesSpan>65198298818</RequisitesSpan></RequisitesItem>
            <RequisitesItem>Якась юридична абревіатура: <RequisitesSpan>65198298818</RequisitesSpan></RequisitesItem>
            <RequisitesItem>Якась юридична абревіатура: <RequisitesSpan>65198298818</RequisitesSpan></RequisitesItem>
        </RequisitesList>

    </RequisitesConteiner>
  );
};