import os
import django
import sys

sys.path.append('/root/neymansayt/backend')
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'core.settings')
django.setup()

from products.models import Product, ProductFeature, ProductPricing, ProductNavbarLink, ProductBenefit, ProductStat

# Clear existing data to avoid duplicates
Product.objects.all().delete()

# Create EDU CRM
educrm = Product.objects.create(
    slug='educrm',
    theme_color='blue',
    font_family='Inter',
    title_az='EDU CRM', title_en='EDU CRM', title_ru='EDU CRM', title_tr='EDU CRM',
    subtitle_az='Tədris Mərkəzləri üçün Kompleks İdarəetmə Sistemi',
    subtitle_en='Comprehensive Management System for Educational Centers',
    subtitle_ru='Комплексная система управления для учебных центров',
    subtitle_tr='Eğitim Merkezleri için Kapsamlı Yönetim Sistemi',
    description_az='Tədris mərkəzləri, kurslar və məktəblər üçün nəzərdə tutulmuş çoxşaxəli idarəetmə sistemi. Tələbə qeydiyyatından tutmuş maliyyə hesabatlarına, filialların idarə edilməsindən valideyn portalına qədər bütün prosesləri vahid platformadan idarə edin.',
    description_en='A multi-faceted management system designed for educational centers, courses, and schools. Manage all processes from student registration to financial reports, from branch management to the parent portal on a single platform.',
    description_ru='Многогранная система управления, предназначенная для учебных центров, курсов и школ. Управляйте всеми процессами, от регистрации студентов до финансовых отчетов, от управления филиалами до родительского портала на единой платформе.',
    description_tr='Eğitim merkezleri, kurslar ve okullar için tasarlanmış çok yönlü bir yönetim sistemi. Öğrenci kaydından finansal raporlara, şube yönetiminden veli portalına kadar tüm süreçleri tek bir platformdan yönetin.',
    cta_text_az='Demo Sifariş Et', cta_text_en='Request Demo', cta_text_ru='Заказать демо', cta_text_tr='Demo İste',
    cta_link='#demo',
    secondary_cta_text_az='Qiymətlərə Bax', secondary_cta_text_en='View Pricing', secondary_cta_text_ru='Посмотреть цены', secondary_cta_text_tr='Fiyatlara Bak',
    secondary_cta_link='#pricing',
    order=1
)

ProductNavbarLink.objects.create(product=educrm, href='#features', order=1, label_az='Xüsusiyyətlər', label_en='Features', label_ru='Функции', label_tr='Özellikler')
ProductNavbarLink.objects.create(product=educrm, href='#pricing', order=2, label_az='Qiymətlər', label_en='Pricing', label_ru='Цены', label_tr='Fiyatlar')

# Features for EDU CRM based on EXACT user lists
features_data_educrm = [
    {
        'icon': 'FaUsers', 'order': 1,
        'title_az': 'İstifadəçilər', 'title_en': 'Users', 'title_ru': 'Пользователи', 'title_tr': 'Kullanıcılar',
        'desc_az': '• Baş direktorlar (CEO-lar)\n• İnzibatçılar\n• Mühasib\n• Marketinq menecerləri\n• Ödəniş meneceri\n• Baş koordinator\n• Filial koordinatoru\n• CRM operatoru\n• Satış meneceri\n• Baş təlimçi\n• Təlimçi\n• Mentor\n• Tələbə\n• Valideyn',
        'desc_en': '• CEOs\n• Administrators\n• Accountant\n• Marketing managers\n• Payment manager\n• Head coordinator\n• Branch coordinator\n• CRM operator\n• Sales manager\n• Head trainer\n• Trainer\n• Mentor\n• Student\n• Parent',
        'desc_ru': '• Генеральные директора\n• Администраторы\n• Бухгалтер\n• Менеджеры по маркетингу\n• Менеджер по платежам\n• Главный координатор\n• Координатор филиала\n• Оператор CRM\n• Менеджер по продажам\n• Главный тренер\n• Тренер\n• Наставник\n• Студент\n• Родитель',
        'desc_tr': '• CEO\'lar\n• Yöneticiler\n• Muhasebeci\n• Pazarlama yöneticileri\n• Ödeme yöneticisi\n• Baş koordinatör\n• Şube koordinatörü\n• CRM operatörü\n• Satış yöneticisi\n• Baş eğitmen\n• Eğitmen\n• Mentor\n• Öğrenci\n• Veli'
    },
    {
        'icon': 'FaChartLine', 'order': 2,
        'title_az': 'Satış CRM-i', 'title_en': 'Sales CRM', 'title_ru': 'CRM продаж', 'title_tr': 'Satış CRM',
        'desc_az': '• Qeydiyyat siyahısı\n• Lead əlavə et\n• Onlayn qeydiyyat\n• Mərhələlər',
        'desc_en': '• Registration list\n• Add Lead\n• Online registration\n• Stages',
        'desc_ru': '• Список регистрации\n• Добавить лид\n• Онлайн-регистрация\n• Этапы',
        'desc_tr': '• Kayıt listesi\n• Lead Ekle\n• Online kayıt\n• Aşamalar'
    },
    {
        'icon': 'FaLayerGroup', 'order': 3,
        'title_az': 'Qrupların idarə edilməsi', 'title_en': 'Group Management', 'title_ru': 'Управление группами', 'title_tr': 'Grup Yönetimi',
        'desc_az': '• Qrup siyahısı\n• Tələbə qrupları siyahısı\n• Həftəlik qrup siyahısı',
        'desc_en': '• Group list\n• Student groups list\n• Weekly group list',
        'desc_ru': '• Список групп\n• Список студенческих групп\n• Еженедельный список групп',
        'desc_tr': '• Grup listesi\n• Öğrenci grupları listesi\n• Haftalık grup listesi'
    },
    {
        'icon': 'FaCalendarAlt', 'order': 4,
        'title_az': 'Təqvim və Davamiyyət', 'title_en': 'Calendar & Attendance', 'title_ru': 'Календарь и посещаемость', 'title_tr': 'Takvim ve Yoklama',
        'desc_az': '• Təqvim\n• Dərs cədvəli\n• Davamiyyət',
        'desc_en': '• Calendar\n• Class schedule\n• Attendance',
        'desc_ru': '• Календарь\n• Расписание занятий\n• Посещаемость',
        'desc_tr': '• Takvim\n• Ders programı\n• Yoklama'
    },
    {
        'icon': 'FaFileInvoice', 'order': 5,
        'title_az': 'Fakturalar və Sorğular', 'title_en': 'Invoices & Inquiries', 'title_ru': 'Счета и запросы', 'title_tr': 'Faturalar ve Talepler',
        'desc_az': '• Aktiv Hesab-faktura siyahısı\n• Bütün hesab-fakturalar siyahısı\n• Hesab-fakturanın əl ilə yaradılması\n• Tranzaksiyalar siyahısı\n• Fakturalar siyahısı\n• Faktura sorğuları\n• Təlimçi ödənişləri\n• Tələbə doğum günü',
        'desc_en': '• Active Invoice list\n• All invoices list\n• Manual invoice creation\n• Transactions list\n• Invoices list\n• Invoice inquiries\n• Trainer payments\n• Student birthday',
        'desc_ru': '• Список активных счетов\n• Список всех счетов\n• Ручное создание счета\n• Список транзакций\n• Список счетов\n• Запросы по счетам\n• Выплаты тренерам\n• День рождения студента',
        'desc_tr': '• Aktif Fatura listesi\n• Tüm faturalar listesi\n• Manuel fatura oluşturma\n• İşlem listesi\n• Fatura listesi\n• Fatura talepleri\n• Eğitmen ödemeleri\n• Öğrenci doğum günü'
    },
    {
        'icon': 'FaWallet', 'order': 6,
        'title_az': 'Maliyyə', 'title_en': 'Finance', 'title_ru': 'Финансы', 'title_tr': 'Finans',
        'desc_az': '• Aktiv əməliyyatlar\n• Bütün əməliyyatlar\n• İşçi Maaşları\n• Təkrarlanan ödənişlər\n• Gecikən ödənişlər\n• Kateqoriyalar\n• Kassalar\n• Ödəniş Üsulları',
        'desc_en': '• Active operations\n• All operations\n• Staff salaries\n• Recurring payments\n• Late payments\n• Categories\n• Cash registers\n• Payment methods',
        'desc_ru': '• Активные операции\n• Все операции\n• Зарплата персонала\n• Регулярные платежи\n• Просроченные платежи\n• Категории\n• Кассы\n• Способы оплаты',
        'desc_tr': '• Aktif işlemler\n• Tüm işlemler\n• Personel maaşları\n• Tekrarlayan ödemeler\n• Geciken ödemeler\n• Kategoriler\n• Kasalar\n• Ödeme yöntemleri'
    },
    {
        'icon': 'FaProjectDiagram', 'order': 7,
        'title_az': 'Əlaqələr və Orqanizasiya', 'title_en': 'Relations & Organization', 'title_ru': 'Отношения и организация', 'title_tr': 'İlişkiler ve Organizasyon',
        'desc_az': '• Təlimçi proqramı\n• İstifadəçi–filial əlaqəsi\n• Valideyn–övlad əlaqəsi\n• Kataloq\n• Orqanizasiya\n• Sayt ayarları\n• Əlaqə məlumatları\n• Filiallar\n• Otaqlar\n• İstifadəçi tipləri',
        'desc_en': '• Trainer program\n• User-branch relation\n• Parent-child relation\n• Catalog\n• Organization\n• Site settings\n• Contact info\n• Branches\n• Rooms\n• User types',
        'desc_ru': '• Программа тренера\n• Связь пользователь-филиал\n• Связь родитель-ребенок\n• Каталог\n• Организация\n• Настройки сайта\n• Контактная информация\n• Филиалы\n• Комнаты\n• Типы пользователей',
        'desc_tr': '• Eğitmen programı\n• Kullanıcı-şube ilişkisi\n• Veli-öğrenci ilişkisi\n• Katalog\n• Organizasyon\n• Site ayarları\n• İletişim bilgileri\n• Şubeler\n• Odalar\n• Kullanıcı tipleri'
    },
    {
        'icon': 'FaChartPie', 'order': 8,
        'title_az': 'Hesabatlar', 'title_en': 'Reports', 'title_ru': 'Отчеты', 'title_tr': 'Raporlar',
        'desc_az': '• Əməliyyat hesabatı\n• Satış meneceri üzrə satışlar\n• Hesab-faktura hesabatı\n• Mənbəyə görə satışlar\n• Qrup üzrə Qiymətləndirmə Hesabatı\n• Tələbə Aylıq Qiymətləndirməsi\n• Faktura geri ödəniş hesabatı\n• Maliyyə paneli\n• Ad günü hesabatı\n• CRM Lead Hesabatı\n• Aktiv tələbələr\n• Məhsul üzrə satışlar\n• Tələbə tarixçəsi\n• Register Report',
        'desc_en': '• Operation report\n• Sales by sales manager\n• Invoice report\n• Sales by source\n• Group Evaluation Report\n• Student Monthly Evaluation\n• Invoice refund report\n• Financial dashboard\n• Birthday report\n• CRM Lead Report\n• Active students\n• Sales by product\n• Student history\n• Register Report',
        'desc_ru': '• Операционный отчет\n• Продажи по менеджеру\n• Отчет по счетам\n• Продажи по источникам\n• Отчет об оценке группы\n• Ежемесячная оценка студента\n• Отчет о возврате по счету\n• Финансовая панель\n• Отчет о днях рождения\n• Отчет по лидам CRM\n• Активные студенты\n• Продажи по продуктам\n• История студента\n• Отчет о регистрации',
        'desc_tr': '• İşlem raporu\n• Satış yöneticisine göre satışlar\n• Fatura raporu\n• Kaynağa göre satışlar\n• Grup Değerlendirme Raporu\n• Öğrenci Aylık Değerlendirmesi\n• Fatura iade raporu\n• Finansal panel\n• Doğum günü raporu\n• CRM Lead Raporu\n• Aktif öğrenciler\n• Ürüne göre satışlar\n• Öğrenci geçmişi\n• Kayıt Raporu'
    },
    {
        'icon': 'FaCogs', 'order': 9,
        'title_az': 'Sistem və Qiymətləndirmə', 'title_en': 'System & Assessment', 'title_ru': 'Система и оценка', 'title_tr': 'Sistem ve Değerlendirme',
        'desc_az': '• Jurnallar\n• Ehtiyat nüsxələr\n• Tələbə qiymətləndirmələri\n• Qiymətləndirmə növü\n• Qiymətləndirmə Hesabatı\n• Sertifikatlar\n• Tarixçəm',
        'desc_en': '• Logs\n• Backups\n• Student assessments\n• Assessment type\n• Assessment Report\n• Certificates\n• My History',
        'desc_ru': '• Журналы\n• Резервные копии\n• Оценки студентов\n• Тип оценки\n• Отчет об оценке\n• Сертификаты\n• Моя история',
        'desc_tr': '• Günlükler\n• Yedekler\n• Öğrenci değerlendirmeleri\n• Değerlendirme türü\n• Değerlendirme Raporu\n• Sertifikalar\n• Geçmişim'
    },
    {
        'icon': 'FaRobot', 'order': 10,
        'title_az': 'Süni İntellekt Dəstəyi (AI)', 'title_en': 'Artificial Intelligence (AI)', 'title_ru': 'Искусственный интеллект (ИИ)', 'title_tr': 'Yapay Zeka (YZ)',
        'desc_az': '• AI əsaslı tələbə müvəffəqiyyət analizi\n• Avtomatik gecikən ödəniş proqnozları\n• AI dəstəkli satış və gəlir hesabatları\n• Ağıllı dərs cədvəli optimizasiyası',
        'desc_en': '• AI-based student success analysis\n• Automatic late payment predictions\n• AI-supported sales and revenue reports\n• Smart class schedule optimization',
        'desc_ru': '• Анализ успеваемости студентов на базе ИИ\n• Автоматическое прогнозирование просроченных платежей\n• Отчеты о продажах и доходах с поддержкой ИИ\n• Интеллектуальная оптимизация расписания занятий',
        'desc_tr': '• Yapay Zeka tabanlı öğrenci başarı analizi\n• Otomatik geciken ödeme tahminleri\n• Yapay Zeka destekli satış ve gelir raporları\n• Akıllı ders programı optimizasyonu'
    }
]

for fd in features_data_educrm:
    ProductFeature.objects.create(
        product=educrm, icon=fd['icon'], order=fd['order'],
        title_az=fd['title_az'], title_en=fd['title_en'], title_ru=fd['title_ru'], title_tr=fd['title_tr'],
        description_az=fd['desc_az'], description_en=fd['desc_en'], description_ru=fd['desc_ru'], description_tr=fd['desc_tr']
    )

# Pricing for EDU CRM
ProductPricing.objects.create(
    product=educrm, order=1, is_popular=False,
    name_az='Fərdi Müəllimlər', name_en='Individual Teachers', name_ru='Индивидуальные преподаватели', name_tr='Bireysel Öğretmenler',
    price_az='49₼', price_en='$29', price_ru='2500₽', price_tr='890₺',
    period_az='/aylıq', period_en='/month', period_ru='/месяц', period_tr='/aylık',
    description_az='Minimal sistem, fərdi təlimçilər üçün', description_en='Minimal system for individual trainers', description_ru='Минимальная система для индивидуальных тренеров', description_tr='Bireysel eğitmenler için minimal sistem',
    features_az='100-500 Tələbəyə qədər\nTəqvim və Dərs cədvəli\nSadə Davamiyyət izlənməsi\nBaza Maliyyə (Gəlir/Xərc)\nTələbə və Valideyn məlumatları\n1 İstifadəçi hesabı\nSadə Hesabatlar\nEmail Dəstəyi',
    features_en='100-500 students\nCalendar and Schedule\nSimple Attendance\nBasic Finance\nStudent and Parent details\n1 User account\nBasic Reports\nEmail support',
    features_ru='100-500 студентов\nКалендарь и расписание\nПростая посещаемость\nБазовые финансы\nДанные студентов и родителей\n1 учетная запись\nБазовые отчеты\nПоддержка по Email',
    features_tr='100-500 Öğrenciye kadar\nTakvim ve Ders programı\nBasit Yoklama\nTemel Finans\nÖğrenci ve Veli bilgileri\n1 Kullanıcı hesabı\nBasit Raporlar\nE-posta desteği'
)

ProductPricing.objects.create(
    product=educrm, order=2, is_popular=True,
    name_az='Kurslar', name_en='Courses', name_ru='Курсы', name_tr='Kurslar',
    price_az='149₼', price_en='$89', price_ru='8000₽', price_tr='2790₺',
    period_az='/aylıq', period_en='/month', period_ru='/месяц', period_tr='/aylık',
    description_az='Büyüyən tədris mərkəzləri üçün ideal seçim', description_en='Ideal for growing educational centers', description_ru='Идеально подходит для развивающихся учебных центров', description_tr='Büyüyen eğitim merkezleri için ideal seçim',
    features_az='100-500 Tələbəyə qədər\nSatış CRM-i (Lead İdarəetmə)\nTam Maliyyə və Fakturalar\nQrupların idarə edilməsi\nValideyn və Tələbə Portalı\nİşçi maaşlarının hesablanması\nÇoxlu istifadəçi hesabları\n7/24 Önəmli Dəstək',
    features_en='100-500 students\nSales CRM (Lead management)\nFull Finance and Invoices\nGroup management\nParent and Student Portal\nStaff salary calculation\nMultiple user accounts\n24/7 Priority Support',
    features_ru='100-500 студентов\nCRM продаж (Лиды)\nПолные финансы и счета\nУправление группами\nПортал родителей и студентов\nРасчет зарплаты персонала\nНесколько пользователей\n24/7 Приоритетная поддержка',
    features_tr='100-500 Öğrenciye kadar\nSatış CRM (Lead yönetimi)\nTam Finans ve Faturalar\nGrup yönetimi\nVeli ve Öğrenci Portalı\nPersonel maaş hesaplama\nÇoklu kullanıcı hesapları\n7/24 Öncelikli Destek'
)

ProductPricing.objects.create(
    product=educrm, order=3, is_popular=False,
    name_az='Təhsil Mərkəzləri', name_en='Education Centers', name_ru='Учебные центры', name_tr='Eğitim Merkezleri',
    price_az='Anlaşmalı', price_en='Custom', price_ru='Договорная', price_tr='Anlaşmalı',
    period_az='', period_en='', period_ru='', period_tr='',
    description_az='Çox şöbəli və böyük şəbəkələr üçün', description_en='For multi-branch and large networks', description_ru='Для многофилиальных и крупных сетей', description_tr='Çok şubeli ve büyük ağlar için',
    features_az='500+ Tələbə\nLimitsiz filial idarəetməsi\nSüni İntellekt (AI) hesabatları\nTəhsil Nazirliyi inteqrasiyası\nSistem jurnalları (Logs)\nƏtraflı HR idarəetməsi\nBütün ödəniş metodları\nŞəxsi hesab meneceri',
    features_en='500+ students\nUnlimited branch management\nAI Analytics reports\nMinistry of Education integration\nSystem logs and Backup\nDetailed HR management\nAll payment methods\nPersonal account manager',
    features_ru='500+ студентов\nБезлимитные филиалы\nИИ Отчеты\nИнтеграция с Мин. Образования\nСистемные журналы\nПодробное управление HR\nВсе способы оплаты\nПерсональный менеджер',
    features_tr='500+ Öğrenci\nSınırsız şube yönetimi\nYapay Zeka (AI) raporları\nMEB entegrasyonu\nSistem günlükleri (Logs)\nDetaylı İK yönetimi\nTüm ödeme yöntemleri\nÖzel hesap yöneticisi'
)

# EDU CRM Stats
ProductStat.objects.create(product=educrm, value='500+', label_az='Tədris Mərkəzi', label_en='Education Centers', label_ru='Учебных центров', label_tr='Eğitim Merkezi', order=1)
ProductStat.objects.create(product=educrm, value='100K+', label_az='Aktiv Tələbə', label_en='Active Students', label_ru='Активных студентов', label_tr='Aktif Öğrenci', order=2)
ProductStat.objects.create(product=educrm, value='99%', label_az='Məmnuniyyət', label_en='Satisfaction', label_ru='Удовлетворенность', label_tr='Memnuniyet', order=3)

# EDU CRM Benefits
ProductBenefit.objects.create(
    product=educrm, icon='FaRocket', order=1,
    title_az='Sürətli İdarəetmə', title_en='Fast Management', title_ru='Быстрое управление', title_tr='Hızlı Yönetim',
    description_az='İşlərinizi avtomatlaşdıraraq vaxtınıza qənaət edin və prosesləri sürətləndirin.',
    description_en='Save time and speed up processes by automating your work.',
    description_ru='Экономьте время и ускоряйте процессы, автоматизируя свою работу.',
    description_tr='İşlerinizi otomatikleştirerek zamandan tasarruf edin ve süreçleri hızlandırın.'
)
ProductBenefit.objects.create(
    product=educrm, icon='FaShieldAlt', order=2,
    title_az='Tam Təhlükəsizlik', title_en='Full Security', title_ru='Полная безопасность', title_tr='Tam Güvenlik',
    description_az='Məlumatlarınız ən yüksək təhlükəsizlik standartları ilə qorunur.',
    description_en='Your data is protected with the highest security standards.',
    description_ru='Ваши данные защищены по самым высоким стандартам безопасности.',
    description_tr='Verileriniz en yüksek güvenlik standartlarıyla korunmaktadır.'
)
ProductBenefit.objects.create(
    product=educrm, icon='FaChartPie', order=3,
    title_az='Dəqiq Hesabatlar', title_en='Accurate Reports', title_ru='Точные отчеты', title_tr='Kesin Raporlar',
    description_az='Hər an əlçatan olan real vaxt maliyyə və performans hesabatları.',
    description_en='Real-time financial and performance reports available at any time.',
    description_ru='Финансовые отчеты и отчеты о производительности в реальном времени, доступные в любое время.',
    description_tr='Her an erişilebilir gerçek zamanlı finansal ve performans raporları.'
)

# QR MENU
qrmenu = Product.objects.create(
    slug='qrmenu',
    theme_color='emerald',
    font_family='Inter',
    title_az='QR Menu & Sifariş Sistemi', title_en='QR Menu & Ordering System', title_ru='QR Меню и Система Заказов', title_tr='QR Menü ve Sipariş Sistemi',
    subtitle_az='Restoran və kafelər üçün AI dəstəkli rəqəmsal transformasiya',
    subtitle_en='AI-powered digital transformation for restaurants and cafes',
    subtitle_ru='Цифровая трансформация на базе ИИ для ресторанов и кафе',
    subtitle_tr='Restoran ve kafeler için yapay zeka destekli dijital dönüşüm',
    description_az='Müştərilərinizə sürətli və vizual cəlbedici menyu təqdim edin. Masadan sifariş qəbulu, AI dəstəkli təhlillər və onlayn ödənişlə xidmət keyfiyyətinizi maksimuma çatdırın.',
    description_en='Present your customers with a fast and visually appealing menu. Maximize your service quality with table ordering, AI-powered analytics, and online payment.',
    description_ru='Предложите своим клиентам быстрое и визуально привлекательное меню. Максимизируйте качество обслуживания с помощью заказов со столиков, аналитики на базе ИИ и онлайн-оплаты.',
    description_tr='Müşterilerinize hızlı ve görsel olarak çekici bir menü sunun. Masadan sipariş, yapay zeka destekli analizler ve online ödeme ile hizmet kalitenizi en üst düzeye çıkarın.',
    cta_text_az='Demo Sifariş Et', cta_text_en='Request Demo', cta_text_ru='Заказать демо', cta_text_tr='Demo İste',
    cta_link='#demo',
    secondary_cta_text_az='Qiymətlərə Bax', secondary_cta_text_en='View Pricing', secondary_cta_text_ru='Посмотреть цены', secondary_cta_text_tr='Fiyatlara Bak',
    secondary_cta_link='#pricing',
    order=2
)

ProductNavbarLink.objects.create(product=qrmenu, href='#features', order=1, label_az='Xüsusiyyətlər', label_en='Features', label_ru='Функции', label_tr='Özellikler')
ProductNavbarLink.objects.create(product=qrmenu, href='#pricing', order=2, label_az='Qiymətlər', label_en='Pricing', label_ru='Цены', label_tr='Fiyatlar')

features_data_qrmenu = [
    {
        'icon': 'FaDesktop', 'order': 1,
        'title_az': 'Nəzarət Paneli', 'title_en': 'Control Panel', 'title_ru': 'Панель управления', 'title_tr': 'Kontrol Paneli',
        'desc_az': '• Analizlər və Hesabatlar',
        'desc_en': '• Analytics & Reports',
        'desc_ru': '• Аналитика и Отчеты',
        'desc_tr': '• Analizler & Raporlar'
    },
    {
        'icon': 'FaUtensils', 'order': 2,
        'title_az': 'Əməliyyatlar', 'title_en': 'Operations', 'title_ru': 'Операции', 'title_tr': 'Operasyonlar',
        'desc_az': '• Sifarişlər\n• Rezervasiyalar\n• Mətbəx Ekranı (KDS)\n• Ofisiant Paneli\n• Kassir Paneli\n• Masalar',
        'desc_en': '• Orders\n• Reservations\n• Kitchen Display (KDS)\n• Waiter Panel\n• Cashier Panel\n• Tables',
        'desc_ru': '• Заказы\n• Бронирование\n• Кухонный экран\n• Панель официанта\n• Панель кассира\n• Столы',
        'desc_tr': '• Siparişler\n• Rezervasyonlar\n• Mutfak Ekranı\n• Garson Paneli\n• Kasiyer Paneli\n• Masalar'
    },
    {
        'icon': 'FaBuilding', 'order': 3,
        'title_az': 'Şöbələr', 'title_en': 'Branches', 'title_ru': 'Филиалы', 'title_tr': 'Şubeler',
        'desc_az': '• Şöbə İdarəetməsi',
        'desc_en': '• Branch Management',
        'desc_ru': '• Управление филиалами',
        'desc_tr': '• Şube Yönetimi'
    },
    {
        'icon': 'FaCogs', 'order': 4,
        'title_az': 'İdarəetmə', 'title_en': 'Management', 'title_ru': 'Управление', 'title_tr': 'Yönetim',
        'desc_az': '• Menyu Elementləri\n• Kateqoriyalar\n• Stok və İnventar\n• Xərclərin İdarəedilməsi\n• Personal və Maaş\n• Rollar və İcazələr\n• Fakturalar\n• Müştərilər (CRM)',
        'desc_en': '• Menu Items\n• Categories\n• Stock & Inventory\n• Expense Management\n• Staff & Salary\n• Roles & Permissions\n• Invoices\n• Customers (CRM)',
        'desc_ru': '• Пункты меню\n• Категории\n• Запасы и инвентарь\n• Управление расходами\n• Персонал и зарплата\n• Роли и разрешения\n• Счета\n• Клиенты (CRM)',
        'desc_tr': '• Menü Öğeleri\n• Kategoriler\n• Stok & Envanter\n• Gider Yönetimi\n• Personel & Maaş\n• Roller & İzinler\n• Faturalar\n• Müşteriler (CRM)'
    },
    {
        'icon': 'FaChartLine', 'order': 5,
        'title_az': 'Böyümə və Süni İntellekt', 'title_en': 'Growth & AI', 'title_ru': 'Рост и ИИ', 'title_tr': 'Büyüme & Yapay Zeka',
        'desc_az': '• Süni İntellekt Raporları\n• Süni İntellekt Asistanı\n• Kampaniyalar\n• Dəyərləndirmələr',
        'desc_en': '• AI Reports\n• AI Assistant\n• Campaigns\n• Reviews',
        'desc_ru': '• Отчеты ИИ\n• ИИ Ассистент\n• Кампании\n• Отзывы',
        'desc_tr': '• Yapay Zeka Raporları\n• Yapay Zeka Asistanı\n• Kampanyalar\n• Değerlendirmeler'
    }
]

for fd in features_data_qrmenu:
    ProductFeature.objects.create(
        product=qrmenu, icon=fd['icon'], order=fd['order'],
        title_az=fd['title_az'], title_en=fd['title_en'], title_ru=fd['title_ru'], title_tr=fd['title_tr'],
        description_az=fd['desc_az'], description_en=fd['desc_en'], description_ru=fd['desc_ru'], description_tr=fd['desc_tr']
    )

ProductPricing.objects.create(
    product=qrmenu, order=1, is_popular=False,
    name_az='Sadə QR Menyu', name_en='Simple QR Menu', name_ru='Простое QR-меню', name_tr='Basit QR Menü',
    price_az='49₼', price_en='$29', price_ru='2500₽', price_tr='890₺',
    period_az='/aylıq', period_en='/month', period_ru='/месяц', period_tr='/aylık',
    description_az='Sadəcə rəqəmsal menyuya ehtiyacı olanlar üçün', description_en='For those who just need a digital menu', description_ru='Для тех, кому нужно просто цифровое меню', description_tr='Sadece dijital menüye ihtiyacı olanlar için',
    features_az='Rəqəmsal vizual menyu\nLimitsiz məhsul əlavəsi\nKateqoriyaların idarəsi\nÇoxdillilik (AZ, EN, RU, TR)\nMəhsul şəkilləri və təsvirləri\nSadə İdarəetmə Paneli\nEmail dəstəyi',
    features_en='Digital visual menu\nUnlimited products\nCategory management\nMultilingual\nProduct images and descriptions\nSimple Control Panel\nEmail support',
    features_ru='Цифровое визуальное меню\nНеограниченное количество товаров\nУправление категориями\nМногоязычный\nИзображения и описания товаров\nПростая панель управления\nПоддержка по Email',
    features_tr='Dijital görsel menü\nSınırsız ürün\nKategori yönetimi\nÇokdillilik\nÜrün resimleri ve açıklamaları\nBasit Kontrol Paneli\nE-posta desteği'
)

ProductPricing.objects.create(
    product=qrmenu, order=2, is_popular=True,
    name_az='Sifariş və Operasyon', name_en='Ordering & Operations', name_ru='Заказы и операции', name_tr='Sipariş ve Operasyon',
    price_az='149₼', price_en='$89', price_ru='8000₽', price_tr='2790₺',
    period_az='/aylıq', period_en='/month', period_ru='/месяц', period_tr='/aylık',
    description_az='Masa sifarişi və operativ idarəetmə', description_en='Table ordering and operational management', description_ru='Заказ столиков и оперативное управление', description_tr='Masa siparişi ve operasyonel yönetim',
    features_az='Masadan dərhal sifariş\nMətbəx ekranı (KDS) inteqrasiyası\nKassir və Ofisiant paneli\nStok və İnventar idarəsi\nOnlayn və Nağd ödəniş izləmə\nGünlük satış hesabatları\nMasa rezervasiyası\n7/24 Dəstək',
    features_en='Instant table ordering\nKitchen Display (KDS)\nCashier and Waiter panel\nStock and Inventory management\nOnline and Cash payments\nDaily sales reports\nTable reservations\n24/7 Support',
    features_ru='Мгновенный заказ со столика\nКухонный экран (KDS)\nПанель кассира и официанта\nУправление запасами и инвентарем\nОнлайн и наличные платежи\nЕжедневные отчеты о продажах\nБронирование столов\n24/7 Поддержка',
    features_tr='Masadan anında sipariş\nMutfak ekranı (KDS)\nKasiyer ve Garson paneli\nStok ve Envanter yönetimi\nOnline ve Nakit ödeme\nGünlük satış raporları\nMasa rezervasyonu\n7/24 Destek'
)

ProductPricing.objects.create(
    product=qrmenu, order=3, is_popular=False,
    name_az='AI və Şəbəkə', name_en='AI & Network', name_ru='ИИ и Сеть', name_tr='AI ve Şebeke',
    price_az='249₼', price_en='$149', price_ru='13500₽', price_tr='4690₺',
    period_az='/aylıq', period_en='/month', period_ru='/месяц', period_tr='/aylık',
    description_az='Süni İntellekt dəstəkli restoran şəbəkələri', description_en='AI-powered restaurant networks', description_ru='Сети ресторанов на базе ИИ', description_tr='Yapay Zeka destekli restoran zincirleri',
    features_az='Süni İntellekt (AI) analitikası\nAI Asistanı və Kampaniyalar\nÇoxlu Filial (Şube) idarəetməsi\nCRM və Xərc yönetimi\nGəlir proqnozlaşdırılması\nAvtomatik müştəri rəyləri\nŞəxsi hesab meneceri',
    features_en='AI Analytics\nAI Assistant & Campaigns\nMulti-Branch management\nCRM and Expense management\nRevenue forecasting\nAutomated customer reviews\nPersonal account manager',
    features_ru='Аналитика ИИ\nИИ Ассистент и Кампании\nУправление несколькими филиалами\nCRM и управление расходами\nПрогнозирование доходов\nАвтоматические отзывы\nПерсональный менеджер',
    features_tr='Yapay Zeka (AI) Analitiği\nAI Asistanı ve Kampanyalar\nÇoklu Şube yönetimi\nCRM ve Gider yönetimi\nGelir tahminlemesi\nOtomatik müşteri değerlendirmeleri\nÖzel hesap yöneticisi'
)

# QR Menu Stats
ProductStat.objects.create(product=qrmenu, value='1000+', label_az='Restoran', label_en='Restaurants', label_ru='Ресторанов', label_tr='Restoran', order=1)
ProductStat.objects.create(product=qrmenu, value='2M+', label_az='Aylıq Sifariş', label_en='Monthly Orders', label_ru='Заказов в месяц', label_tr='Aylık Sipariş', order=2)
ProductStat.objects.create(product=qrmenu, value='+30%', label_az='Satış Artımı', label_en='Sales Growth', label_ru='Рост продаж', label_tr='Satış Artışı', order=3)

# QR Menu Benefits
ProductBenefit.objects.create(
    product=qrmenu, icon='FaLeaf', order=1,
    title_az='Təbiət Dostu', title_en='Eco-Friendly', title_ru='Экологичность', title_tr='Doğa Dostu',
    description_az='Kağız menyulardan imtina edərək həm xərclərə, həm də təbiətə qənaət edin.',
    description_en='Save costs and the environment by abandoning paper menus.',
    description_ru='Экономьте средства и окружающую среду, отказавшись от бумажных меню.',
    description_tr='Kağıt menülerden vazgeçerek hem maliyetlerden hem de doğadan tasarruf edin.'
)
ProductBenefit.objects.create(
    product=qrmenu, icon='FaTrophy', order=2,
    title_az='Mükəmməl Təcrübə', title_en='Excellent Experience', title_ru='Отличный опыт', title_tr='Mükemmel Deneyim',
    description_az='Müştərilərinizə vizual zəngin və sürətli sifariş təcrübəsi təqdim edin.',
    description_en='Provide your customers with a visually rich and fast ordering experience.',
    description_ru='Предоставьте своим клиентам визуально богатый и быстрый опыт заказа.',
    description_tr='Müşterilerinize görsel olarak zengin ve hızlı bir sipariş deneyimi sunun.'
)
ProductBenefit.objects.create(
    product=qrmenu, icon='FaMobileAlt', order=3,
    title_az='Mobil Uyğun', title_en='Mobile Responsive', title_ru='Мобильная адаптивность', title_tr='Mobil Uyumlu',
    description_az='Bütün cihazlarda problemsiz işləyən modern interfeys.',
    description_en='A modern interface that works seamlessly on all devices.',
    description_ru='Современный интерфейс, который без проблем работает на всех устройствах.',
    description_tr='Tüm cihazlarda sorunsuz çalışan modern arayüz.'
)

print('Success! Database populated with EDU CRM and QR Menu.')
