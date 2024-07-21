import { computed } from "vue";
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const statusOptions = computed(() => [
    { value: '', text: t('all') },
    { value: 'trailer', text: t('trailer') },
    { value: 'ongoing', text: t('ongoing') },
    { value: 'completed', text: t('completed') },
  ]);
  
  const countryOptions = computed(() => [
    { value: '', text: t('all') },
    { value: 'viet-nam', text: t('vietnam') },
    { value: 'trung-quoc', text: t('china') },
    { value: 'thai-lan', text: t('thailand') },
    { value: 'au-my', text: t('usUk') },
    { value: 'han-quoc', text: t('korea') },
    { value: 'nhat-ban', text: t('japan') },
    { value: 'philippines', text: t('philippines') },
    { value: 'malaysia', text: t('malaysia') },
    { value: 'dai-loan', text: t('taiwan') },
    { value: 'an-do', text: t('india') },
    { value: 'uc', text: t('australia') },
    { value: 'mexico', text: t('mexico') },
    { value: 'canada', text: t('canada') },
    { value: 'hong-kong', text: t('hongKong') },
    { value: 'singapore', text: t('singapore') },
    { value: 'anh', text: t('england') },
    { value: 'nigeria', text: t('nigeria') },
    { value: 'y', text: t('italy') },
    { value: 'tay-ban-nha', text: t('spain') },
    { value: 'phap', text: t('france') },
    { value: 'nam-phi', text: t('southAfrica') },
    { value: 'a-rap-xe-ut', text: t('saudiArabia') },
    { value: 'quoc-gia-khac', text: t('otherCountry') },
    { value: 'duc', text: t('germany') },
    { value: 'brazil', text: t('brazil') },
    { value: 'thuy-dien', text: t('sweden') },
    { value: 'ba-lan', text: t('poland') },
    { value: 'bi', text: t('belgium') },
    { value: 'thuy-si', text: t('switzerland') },
    { value: 'tho-nhi-ky', text: t('turkey') },
    { value: 'dan-mach', text: t('denmark') },
    { value: 'colombia', text: t('colombia') },
    { value: 'argentina', text: t('argentina') },
    { value: 'bo-dao-nha', text: t('portugal') },
    { value: 'na-uy', text: t('norway') },
    { value: 'indonesia', text: t('indonesia') },
    { value: 'phan-lan', text: t('finland') },
    { value: 'chau-phi', text: t('africa') },
    { value: 'ha-lan', text: t('netherlands') },
    { value: 'ukraina', text: t('ukraine') },
    { value: 'nga', text: t('russia') },
    { value: 'ireland', text: t('ireland') },
    { value: 'mongolia', text: t('mongolia') },
    { value: 'sec', text: t('czechRepublic') },
    { value: 'uae', text: t('uae') },
    { value: 'hoa-ky', text: t('usa') },
    { value: 'iran', text: t('iran') },
    { value: 'peru', text: t('peru') },
    { value: 'new-zealand', text: t('newZealand') },
    { value: 'romania', text: t('romania') },
    { value: 'ao', text: t('austria') },
    { value: 'ghana', text: t('ghana') },
    { value: 'hungary', text: t('hungary') },
    { value: 'kenya', text: t('kenya') },
    { value: 'iceland', text: t('iceland') },
    { value: 'mauritius', text: t('mauritius') },
    { value: 'uruguay', text: t('uruguay') },
    { value: 'georgia', text: t('georgia') },
    { value: 'bulgaria', text: t('bulgaria') },
    { value: 'lien-xo', text: t('ussr') },
    { value: 'chile', text: t('chile') },
    { value: 'cuba', text: t('cuba') },
    { value: 'congo', text: t('congo') },
    { value: 'malta', text: t('malta') },
    { value: 'a-rap-thong-nhat', text: t('unitedArabEmirates') },
    { value: 'israel', text: t('israel') },
    { value: 'cambodia', text: t('cambodia') },
    { value: 'serbia', text: t('serbia') },
    { value: 'lithuania', text: t('lithuania') },
    { value: 'bahamas', text: t('bahamas') },
    { value: 'qatar', text: t('qatar') },
    { value: 'albania', text: t('albania') },
    { value: 'greenland', text: t('greenland') },
    { value: 'maroc', text: t('morocco') },
    { value: 'greece', text: t('greece') },
    { value: 'kazakhstan', text: t('kazakhstan') },
    { value: 'cong-hoa-dominica', text: t('dominicanRepublic') },
    { value: 'luxembourg', text: t('luxembourg') },
    { value: 'slovenia', text: t('slovenia') },
    { value: 'dao-sip', text: t('cyprus') },
    { value: 'li-bang', text: t('lebanon') },
    { value: 'latvia', text: t('latvia') },
    { value: 'venezuela', text: t('venezuela') },
    { value: 'hy-lap', text: t('greece') },
    { value: 'belarus', text: t('belarus') }
  ]);
  
  const genreOptions = computed(() => [
    { value: '', text: t('all') },
    { value: 'tinh-cam', text: t('romance') },
    { value: 'hai-huoc', text: t('comedy') },
    { value: 'chinh-kich', text: t('drama') },
    { value: 'phieu-luu', text: t('adventure') },
    { value: 'hanh-dong', text: t('action') },
    { value: 'tam-ly', text: t('psychological') },
    { value: 'kinh-di', text: t('horror') },
    { value: 'bi-an', text: t('mystery') },
    { value: 'vien-tuong', text: t('scienceFiction') },
    { value: 'khoa-hoc', text: t('science') },
    { value: 'hinh-su', text: t('crime') },
    { value: 'chien-tranh', text: t('war') },
    { value: 'lich-su', text: t('historical') },
    { value: 'vo-thuat', text: t('martialArts') },
    { value: 'gia-dinh', text: t('family') },
    { value: 'hoat-hinh', text: t('cartoon') },
    { value: 'tai-lieu', text: t('documentary') },
    { value: 'hoc-duong', text: t('school') },
    { value: 'am-nhac', text: t('music') },
    { value: 'the-thao', text: t('sports') },
    { value: 'than-thoai', text: t('mythology') },
    { value: 'phim-18', text: t('adult') },
    { value: 'gia-tuong', text: t('fantasy') },
    { value: 'gay-can', text: t('thriller') },
    { value: 'kinh-dien', text: t('classic') },
    { value: 'chuong-trinh-truyen-hinh', text: t('tvShows') },
    { value: 'mien-tay', text: t('western') },
    { value: 'lang-man', text: t('romantic') },
    { value: 'khoa-hoc-vien-tuong', text: t('sciFi') }
  ]);

  export  { genreOptions, statusOptions, countryOptions };