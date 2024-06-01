import {
  InformationMapBlock,
  InformationMapConteiner,
  MainTextInformationMap,
  MapConteiner,
  TextMap,
} from './InformationMap.styled';

export const InformationMap = () => {
  return (
    <InformationMapConteiner>
      <InformationMapBlock>
        <MainTextInformationMap>Наше місцезнаходження</MainTextInformationMap>
        <MapConteiner>
          <TextMap>Головний офіс: вул. П’ятницька, м. Чернігів</TextMap>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.7195819615795!2d31.28774737612705!3d51.5000132112435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46d5488c3f3cd1d9%3A0x3412f6df4b61a14b!2z0YPQuy4g0J_Rj9GC0L3QuNGG0LrQsNGPLCDQp9C10YDQvdC40LPQvtCyLCDQp9C10YDQvdC40LPQvtCy0YHQutCw0Y8g0L7QsdC70LDRgdGC0YwsIDE0MDAw!5e0!3m2!1sru!2sua!4v1717161124999!5m2!1sru!2sua"
            width="550"
            height="500"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <TextMap>Робочі години 08:00-20:00</TextMap>
        </MapConteiner>
      </InformationMapBlock>
    </InformationMapConteiner>
  );
};
