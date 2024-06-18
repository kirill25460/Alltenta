import {
  InformationMapBlock,
  InformationMapConteiner,
  MainTextInformationMap,
  MapConteiner,
  ResponsiveIframe,
  TextMap,
} from './InformationMap.styled';

export const InformationMap = () => {
  return (
    <InformationMapConteiner>
      <InformationMapBlock>
        <MainTextInformationMap>Наше місцезнаходження</MainTextInformationMap>
        <MapConteiner>
          <TextMap>
            Головний офіс: вул. Панаса Мирного, 17, Борисполь, Киевская область
          </TextMap>
          <ResponsiveIframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2544.8260649658814!2d30.925934676055334!3d50.3697976931683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4e629da2340a3%3A0x693b6b5bd58e6a2!2z0YPQuy4g0J_QsNC90LDRgdCwINCc0LjRgNC90L7Qs9C-LCAxNywg0JHQvtGA0LjRgdC_0L7Qu9GMLCDQmtC40LXQstGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCAwODMwMA!5e0!3m2!1sru!2sua!4v1718727410571!5m2!1sru!2sua"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></ResponsiveIframe>
          <TextMap>Робочі години 08:00-20:00</TextMap>
        </MapConteiner>
      </InformationMapBlock>
    </InformationMapConteiner>
  );
};
