import os
import django

# Set up Django environment
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'core.settings')
django.setup()

from home.models import HomeHero, HomeAbout, HomeStat, WorkProcessStep, GlobalCTA, Partner
from services.models import Service
from projects.models import Project
from blogs.models import Blog
from contact.models import ContactInfo, SocialMedia
from crm.models import CRMPricingPlan, CRMFeature, CRMStat, CRMBenefit, CRMNotification

def seed_database():
    print("----- CLEANING OLD DATABASE RECORDS -----")
    HomeHero.objects.all().delete()
    HomeAbout.objects.all().delete()
    HomeStat.objects.all().delete()
    WorkProcessStep.objects.all().delete()
    GlobalCTA.objects.all().delete()
    Partner.objects.all().delete()
    
    Service.objects.all().delete()
    Project.objects.all().delete()
    Blog.objects.all().delete()
    
    ContactInfo.objects.all().delete()
    SocialMedia.objects.all().delete()
    
    CRMPricingPlan.objects.all().delete()
    CRMFeature.objects.all().delete()
    CRMStat.objects.all().delete()
    CRMBenefit.objects.all().delete()
    CRMNotification.objects.all().delete()

    print("----- SEEDING ANA SƏHİFƏ MODELS -----")
    # Home Hero
    hero = HomeHero.objects.create(
        badge_text_az="RƏQƏMSAL TRANSFORMASİYA LİDERİ",
        badge_text_en="DIGITAL TRANSFORMATION LEADER",
        badge_text_ru="ЛИДЕР ЦИФРОВОЙ ТРАНСФОРМАЦИИ",
        title_az="Biznesinizi <span>gücləndirən</span> premium İT həllər",
        title_en="Premium IT solutions that <span>power</span> your business",
        title_ru="Премиум ИТ-решения, <span>укрепляющие</span> ваш бизнес",
        description_az="Neyman Enterprise Technologies olaraq, müasir proqram təminatı, mobil tətbiqlər, rəqəmsal CRM/ERP sistemləri və süni intellekt həlləri hazırlayırıq.",
        description_en="At Neyman Enterprise Technologies, we develop modern software, mobile applications, digital CRM/ERP systems, and artificial intelligence solutions.",
        description_ru="В Neyman Enterprise Technologies мы разрабатываем современное программное обеспечение, мобильные приложения, цифровые системы CRM/ERP и решения в области искусственного интеллекта.",
        hero_image="home/hero_img.jpg" # placeholder / dummy path
    )
    
    # Home About
    HomeAbout.objects.create(
        title_az="Biz Kimik? Rəqəmsal Dünyada Güvənli Tərəfdaşınız",
        title_en="Who We Are? Your Trusted Partner in the Digital World",
        title_ru="Кто мы? Ваш надежный партнер в цифровом мире",
        description_az="Neyman Enterprise Technologies, fəaliyyətə başladığı gündən etibarən startaplar və böyük korporativ müştərilər üçün yüksək səviyyəli proqramlaşdırma xidmətləri göstərir. Təcrübəli mühəndis heyətimizlə mürəkkəb biznes ehtiyaclarınızı rəqəmsal, avtomatlaşdırılmış və sızmasız proqram təminatlarına çeviririk.",
        description_en="Neyman Enterprise Technologies provides high-end software development services for startups and large corporate clients. With our experienced engineering team, we transform complex business needs into digital, automated, and leak-free software.",
        description_ru="Neyman Enterprise Technologies предоставляет высококачественные услуги по разработке программного обеспечения для стартапов и крупных корпоративных клиентов. С нашей опытной командой инженеров мы превращаем сложные бизнес-потребности в цифровое, автоматизированное и надежное ПО.",
        quote_az="\"Mürəkkəb biznes proseslərini sadə, effektiv və yüksək gəlirlilik gətirən rəqəmsal sistemlərə çeviririk.\"",
        quote_en="\"We transform complex business processes into simple, effective, and highly profitable digital systems.\"",
        quote_ru="\"Мы превращаем сложные бизнес-процессы в простые, эффективные и высокоприбыльные цифровые системы.\""
    )

    # Home Stats
    stats_data = [
        {"value": "50+", "label_az": "Uğurlu Layihə", "label_en": "Successful Projects", "label_ru": "Успешных проектов", "order": 1},
        {"value": "100%", "label_az": "Müştəri Məmnuniyyəti", "label_en": "Client Satisfaction", "label_ru": "Удовлетворенность клиентов", "order": 2},
        {"value": "24/7", "label_az": "Texniki Dəstək", "label_en": "Technical Support", "label_ru": "Техническая поддержка", "order": 3},
        {"value": "5+", "label_az": "Ölkədə Fəaliyyət", "label_en": "Countries Reached", "label_ru": "Стран присутствия", "order": 4}
    ]
    for stat in stats_data:
        HomeStat.objects.create(**stat)

    # Work Process Steps ("Necə Çalışırıq?")
    steps_data = [
        {
            "number": "01",
            "title_az": "Analiz və Planlaşdırma",
            "title_en": "Analysis & Planning",
            "title_ru": "Анализ и планирование",
            "description_az": "Biznes ehtiyaclarınızı və hədəflərinizi diqqətlə dinləyib, layihənin texniki spesifikasiyasını (SRS) və yol xəritəsini sıfırdan hazırlayırıq.",
            "description_en": "We carefully listen to your business needs and goals, building the technical specification (SRS) and roadmap from scratch.",
            "description_ru": "Мы внимательно изучаем потребности и цели вашего бизнеса, разрабатывая техническое задание (SRS) и карту развития проекта с нуля.",
            "duration_az": "1 Həftə", "duration_en": "1 Week", "duration_ru": "1 Неделя",
            "deliverables": "Texniki Spesifikasiya sənədi, Yol Xəritəsi, Qiymətləndirmə",
            "order": 1
        },
        {
            "number": "02",
            "title_az": "UX/UI Prototip Dizayn",
            "title_en": "UX/UI Prototype Design",
            "title_ru": "UX/UI Дизайн прототипа",
            "description_az": "Figma platformasında məhsulunuzun müasir, intuitiv və brendinizə uyğun gələn premium istifadəçi interfeysi dizaynlarını hazırlayıb təsdiqinizə təqdim edirik.",
            "description_en": "We design modern, intuitive, and brand-aligned premium user interface prototypes in Figma and present them for your approval.",
            "description_ru": "Мы создаем современные, интуитивно понятные и соответствующие бренду прототипы пользовательского интерфейса в Figma и представляем их на утверждение.",
            "duration_az": "2 Həftə", "duration_en": "2 Weeks", "duration_ru": "2 Недели",
            "deliverables": "Figma Prototipi, Rəng və Tipoqrafiya Sistemi, Wireframes",
            "order": 2
        },
        {
            "number": "03",
            "title_az": "İnkişaf və Kodlaşdırma",
            "title_en": "Development & Coding",
            "title_ru": "Разработка и кодирование",
            "description_az": "Next.js 16, TypeScript, Django və mobil texnologiyalar vasitəsilə layihəni ən yüksək təhlükəsizlik, performans və SEO standartlarında kodlaşdırırıq.",
            "description_en": "We build the software utilizing Next.js 16, TypeScript, Django, and mobile frameworks to meet the highest security, speed, and SEO standards.",
            "description_ru": "Мы разрабатываем ПО с использованием Next.js 16, TypeScript, Django и мобильных фреймворков в соответствии с высочайшими стандартами безопасности, скорости и SEO.",
            "duration_az": "4-6 Həftə", "duration_en": "4-6 Weeks", "duration_ru": "4-6 Недель",
            "deliverables": "Clean Code bazası, Git Repozitoriyası, API inteqrasiyası",
            "order": 3
        },
        {
            "number": "04",
            "title_az": "QA & Test Mərhələsi",
            "title_en": "QA & Testing",
            "title_ru": "QA и Тестирование",
            "description_az": "Proqram təminatını funksional, sürət (performans) və kibertəhlükəsizlik testlərindən keçirərək heç bir xətanın qalmadığına əmin oluruq.",
            "description_en": "We subject the software to rigorous functional, performance, and cybersecurity testing to ensure zero errors remain before launch.",
            "description_ru": "Мы подвергаем программное обеспечение тщательному функциональному тестированию, проверке производительности и безопасности, гарантируя отсутствие ошибок перед запуском.",
            "duration_az": "1 Həftə", "duration_en": "1 Week", "duration_ru": "1 Неделя",
            "deliverables": "Test Ssenariləri hesabatı, Sürət Optimizasiyası, Hata Düzəlişləri",
            "order": 4
        },
        {
            "number": "05",
            "title_az": "Canlıya Keçid və 7/24 Dəstək",
            "title_en": "Deployment & 24/7 Support",
            "title_ru": "Запуск и поддержка 24/7",
            "description_az": "Layihəni Docker konteynerləri vasitəsilə serverinizə (bulud və ya on-premise) yerləşdiririk, Nginx və SSL sertifikatlarını qururuq. Davamlı dəstək veririk.",
            "description_en": "We deploy the system using Docker containers to your server (cloud or on-premise), configure Nginx/SSL, and provide ongoing technical maintenance.",
            "description_ru": "Мы разворачиваем систему с помощью контейнеров Docker на вашем сервере (облачном или локальном), настраиваем Nginx/SSL и обеспечиваем техническую поддержку.",
            "duration_az": "Davamlı", "duration_en": "Ongoing", "duration_ru": "Постоянно",
            "deliverables": "Docker Konteynerləri, SSL Lisenziyası, 24/7 Monitorinq Sistemi",
            "order": 5
        }
    ]
    for step in steps_data:
        WorkProcessStep.objects.create(**step)

    # Global CTA
    GlobalCTA.objects.create(
        badge_text_az="BİRLİKDƏ İŞLƏYƏK",
        badge_text_en="LET'S WORK TOGETHER",
        badge_text_ru="ДАВАЙТЕ РАБОТАТЬ ВМЕСТЕ",
        title_az="Biznesinizi növbəti səviyyəyə qaldırmağa hazırsınız?",
        title_en="Ready to take your business to the next level?",
        title_ru="Готовы поднять свой бизнес на новый уровень?",
        description_az="İnnovativ CRM sistemləri, mobil tətbiqlər və ya veb-saytların inkişafı üçün bizimlə əlaqə saxlayın və pulsuz demo sifariş edin.",
        description_en="Contact us for innovative CRM systems, mobile apps, or website development and request a free demo today.",
        description_ru="Свяжитесь с нами для разработки инновационных CRM-систем, мобильных приложений или веб-сайтов и запросите бесплатную демо-версию сегодня."
    )

    print("----- SEEDING SERVICES -----")
    services_data = [
        {
            "title_az": "Texniki Dəstək", "title_en": "Technical Support", "title_ru": "Техническая поддержка",
            "slug": "texniki-destek",
            "description_az": "Serverlərin sazlanması, Docker konteynerləri, Nginx konfiqurasiyası və 7/24 şəbəkə monitorinqi xidmətləri.",
            "description_en": "Server administration, Docker containerization, Nginx configuration, and 24/7 network monitoring services.",
            "description_ru": "Администрирование серверов, контейнеризация Docker, настройка Nginx и круглосуточный мониторинг сети.",
            "icon_name": "FaServer",
            "content_az": "Neyman Enterprise Technologies olaraq, infrastrukturunuzun dayanıqlı və sürətli işləməsini təmin edirik. Serverlərin qurulması, Linux administrasiyası, avtomatlaşdırılmış yedəkləmə (backup) həlləri, Nginx reverse proxy və SSL lisenziyalarının tənzimlənməsi ilə 7/24 fəaliyyətdəyik.",
            "content_en": "At Neyman Enterprise Technologies, we ensure your infrastructure runs fast and reliably. We offer server installation, Linux administration, automated backup solutions, Nginx reverse proxy, and SSL management 24/7.",
            "content_ru": "В Neyman Enterprise Technologies мы гарантируем быструю и надежную работу вашей инфраструктуры. Мы предлагаем установку серверов, администрирование Linux, решения для автоматического резервного копирования, Nginx reverse proxy и управление SSL 24/7.",
            "price_az": "299 ₼/ay", "price_en": "$180/mo", "price_ru": "15,000 ₽/мес",
            "duration_az": "Davamlı", "duration_en": "Monthly", "duration_ru": "Постоянно",
            "deliverables_az": "Linux Server Sazlanması\nDocker İnteqrasiyası\nNginx Reverse Proxy\nSSL Sertifikatlaşdırma\n7/24 Fövqəladə Dəstək",
            "deliverables_en": "Linux Server Setup\nDocker Integration\nNginx Reverse Proxy\nSSL Installation\n24/7 Emergency Support",
            "deliverables_ru": "Настройка Linux-сервера\nИнтеграция Docker\nNginx Reverse Proxy\nУстановка SSL\nКруглосуточная экстренная поддержка",
            "tech_stack_az": "Linux, Docker, Nginx, Bash, Prometheus, Grafana",
            "tech_stack_en": "Linux, Docker, Nginx, Bash, Prometheus, Grafana",
            "tech_stack_ru": "Linux, Docker, Nginx, Bash, Prometheus, Grafana",
            "is_featured": True, "order": 1
        },
        {
            "title_az": "SEO", "title_en": "SEO Optimization", "title_ru": "SEO Оптимизация",
            "slug": "seo",
            "description_az": "Axtarış motorlarında (Google) ilk sıralara yüksəlmək, texniki SEO auditi və açar söz optimallaşdırılması.",
            "description_en": "Rise to top ranks in search engines (Google), with technical SEO audits and keyword optimization.",
            "description_ru": "Поднимитесь на первые строчки в поисковых системах (Google) с помощью технического SEO-аудита и оптимизации ключевых слов.",
            "icon_name": "FaChartLine",
            "content_az": "Vebsaytınızın Google axtarış sistemində xidmətləriniz axtarılarkən ilk sıralarda görünməsi üçün peşəkar SEO strategiyaları tətbiq edirik. Texniki SEO sazlamaları, sürət optimizasiyası (Core Web Vitals), açar söz araşdırması, məzmun marketinqi və təhlükəsiz backlink quruculuğu ilə real müştəri axınını təmin edirik.",
            "content_en": "We apply professional SEO strategies to place your website on top search ranks in Google. With technical SEO, speed optimization (Core Web Vitals), keyword research, content marketing, and secure backlink building, we drive organic sales.",
            "content_ru": "Мы применяем профессиональные SEO-стратегии, чтобы ваш сайт занимал первые места в Google. С техническим SEO, оптимизацией скорости (Core Web Vitals), исследованием ключевых слов, контент-маркетингом и безопасным линкбилдингом мы обеспечиваем органические продажи.",
            "price_az": "399 ₼/ay", "price_en": "$250/mo", "price_ru": "20,000 ₽/мес",
            "duration_az": "3-6 Ay", "duration_en": "3-6 Months", "duration_ru": "3-6 Месяцев",
            "deliverables_az": "Hərtərəfli Texniki SEO Auditi\nAçar Söz Təhlili və Strategiyası\nCore Web Vitals Optimizasiyası\nMəzmun Yazımı və On-Page SEO\nBacklink Quruculuğu (Off-Page)",
            "deliverables_en": "Comprehensive Technical SEO Audit\nKeyword Analysis & Strategy\nCore Web Vitals Optimization\nContent Writing & On-Page SEO\nBacklink Building (Off-Page)",
            "deliverables_ru": "Всесторонний технический SEO-аудит\nАнализ ключевых слов и стратегия\nОптимизация Core Web Vitals\nНаписание контента и On-Page SEO\nЛинкбилдинг (Off-Page)",
            "tech_stack_az": "Google Search Console, Google Analytics, Ahrefs, SEMrush, Screaming Frog",
            "tech_stack_en": "Google Search Console, Google Analytics, Ahrefs, SEMrush, Screaming Frog",
            "tech_stack_ru": "Google Search Console, Google Analytics, Ahrefs, SEMrush, Screaming Frog",
            "is_featured": True, "order": 2
        },
        {
            "title_az": "AI Proqramlarının Hazırlanması", "title_en": "AI Program Development", "title_ru": "Разработка ИИ-программ",
            "slug": "ai-programlarinin-hazirlanmasi",
            "description_az": "Süni intellekt model inteqrasiyaları, NLP chatbotlar, RAG sistemləri və maşın öyrənməsi (ML) həlləri.",
            "description_en": "Artificial intelligence model integrations, NLP chatbots, RAG systems, and Machine Learning (ML) solutions.",
            "description_ru": "Интеграция моделей искусственного интеллекта, чат-боты NLP, системы RAG и решения машинного обучения (ML).",
            "icon_name": "FaRobot",
            "content_az": "Biznesinizin iş axınlarını süni intellekt ilə avtomatlaşdırırıq. Müştəri dəstəyi üçün xüsusi öyrədilmiş LLM Chatbotları, şirkətdaxili məlumat bazasına əsaslanan RAG (Retrieval-Augmented Generation) axtarış sistemləri və proqnozlaşdırıcı analitika (Machine Learning) modelləri qururuq.",
            "content_en": "We automate your business workflows using Artificial Intelligence. We build custom-trained LLM Chatbots for customer support, corporate RAG knowledge-base search systems, and predictive Machine Learning models.",
            "content_ru": "Мы автоматизируем рабочие процессы вашего бизнеса с помощью искусственного интеллекта. Мы создаем обученных чат-ботов LLM для поддержки клиентов, корпоративные поисковые системы RAG на основе базы знаний и прогнозные модели машинного обучения.",
            "price_az": "1499 ₼-dan", "price_en": "From $1000", "price_ru": "От 80,000 ₽",
            "duration_az": "1-2 Ay", "duration_en": "1-2 Months", "duration_ru": "1-2 Месяца",
            "deliverables_az": "OpenAI / Anthropic API İnteqrasiyası\nXüsusi Öyrədilmiş Şirkət Chatbotu\nRAG Məlumat Axtarış Sistemi\nPrediktiv ML Modelləri\nSüni İntellekt API İdarəetmə Paneli",
            "deliverables_en": "OpenAI / Anthropic API Integration\nCustom Trained Company Chatbot\nRAG Information Retrieval System\nPredictive ML Models\nAI API Admin Dashboard",
            "deliverables_ru": "Интеграция API OpenAI / Anthropic\nСпециально обученный чат-бот компании\nСистема извлечения информации RAG\nМодели прогнозирования ML\nПанель управления API ИИ",
            "tech_stack_az": "Python, LangChain, OpenAI API, LlamaIndex, TensorFlow, PyTorch, Vector DBs",
            "tech_stack_en": "Python, LangChain, OpenAI API, LlamaIndex, TensorFlow, PyTorch, Vector DBs",
            "tech_stack_ru": "Python, LangChain, OpenAI API, LlamaIndex, TensorFlow, PyTorch, Vector DBs",
            "is_featured": True, "order": 3
        },
        {
            "title_az": "Mobil Tətbiq", "title_en": "Mobile Application", "title_ru": "Мобильные приложения",
            "slug": "mobil-tetbiq",
            "description_az": "iOS və Android platformaları üçün yüksək sürətli, həssas və təhlükəsiz mobil proqram təminatının inkişafı.",
            "description_en": "High-speed, responsive, and secure mobile application development for iOS and Android platforms.",
            "description_ru": "Разработка высокоскоростных, адаптивных и безопасных мобильных приложений для платформ iOS и Android.",
            "icon_name": "FaMobileScreenButton",
            "content_az": "Neyman Tech olaraq, Flutter cross-platform və ya native (Swift/Kotlin) texnologiyaları ilə iOS və Android mobil tətbiqlərini hazırlayırıq. E-ticarət tətbiqləri, korporativ tətbiqlər və CRM inteqrasiyalı sistemləri sıfırdan qurur və mağazalarda (App Store & Google Play) yerləşdiririk.",
            "content_en": "At Neyman Tech, we develop iOS and Android mobile apps using Flutter cross-platform or native (Swift/Kotlin) tech. We build e-commerce apps, corporate portals, and CRM-integrated systems, delivering them to stores.",
            "content_ru": "В Neyman Tech мы разрабатываем мобильные приложения для iOS и Android с использованием кроссплатформенного Flutter или нативного (Swift/Kotlin) стека. Мы создаем приложения для e-commerce, корпоративные порталы и системы, интегрированные с CRM, и размещаем их в магазинах.",
            "price_az": "2499 ₼-dan", "price_en": "From $1600", "price_ru": "От 120,000 ₽",
            "duration_az": "1.5-3 Ay", "duration_en": "1.5-3 Months", "duration_ru": "1.5-3 Месяца",
            "deliverables_az": "Android Mobil Tətbiqi (APK & Bundle)\niOS Mobil Tətbiqi (App Store)\nAdmin İdarəetmə Paneli (Web)\nPush-Bildiriş (Push Notification) Sistemi\nİnteqrasiya olunmuş Ödəniş Sistemi (MilliÖn, Portmanat, Kart)",
            "deliverables_en": "Android Mobile App (APK & Bundle)\niOS Mobile App (App Store)\nWeb Admin Control Dashboard\nPush Notification Integration\nIntegrated Payment Gateway (Card, MilliÖn)",
            "deliverables_ru": "Мобильное приложение Android (APK и Bundle)\nМобильное приложение iOS (App Store)\nВеб-панель управления администратора\nИнтеграция пуш-уведомлений\nИнтегрированный платежный шлюз (карта, терминалы)",
            "tech_stack_az": "Flutter, Dart, Swift, Kotlin, Firebase, REST APIs",
            "tech_stack_en": "Flutter, Dart, Swift, Kotlin, Firebase, REST APIs",
            "tech_stack_ru": "Flutter, Dart, Swift, Kotlin, Firebase, REST APIs",
            "is_featured": True, "order": 4
        },
        {
            "title_az": "Veb Sayt Hazırlanması", "title_en": "Web Site Development", "title_ru": "Разработка веб-сайтов",
            "slug": "veb-sayt-hazirlanmasi",
            "description_az": "Next.js və Django ilə sürətli, modern, etibarlı və axtarış sistemlərinə tam uyğun korporativ saytlar.",
            "description_en": "Fast, modern, secure, and search-engine optimized corporate websites built with Next.js and Django.",
            "description_ru": "Быстрые, современные, безопасные и оптимизированные для поисковых систем корпоративные сайты на Next.js и Django.",
            "icon_name": "FaCode",
            "content_az": "Biznesiniz üçün premium səviyyəli internet səhifələri hazırlayırıq. Next.js 16 (React) və Python/Django bazasında yığılan saytlarımız həm inanılmaz dərəcədə sürətli açılır, həm də SEO baxımından Google axtarış sistemində digər rəqiblərinizi qabaqlamağınızı təmin edir. Bütün ekran ölçülərinə (mobil, planşet) 100% uyğundur.",
            "content_en": "We build premium corporate websites for your business. Our Next.js 16 (React) and Python/Django stack ensures your site loads incredibly fast, beats competitors in SEO, and scales cleanly across all mobile/desktop devices.",
            "content_ru": "Мы создаем корпоративные сайты премиум-класса для вашего бизнеса. Наш стек Next.js 16 (React) и Python/Django гарантирует невероятно быструю загрузку вашего сайта, опережает конкурентов по SEO и отлично адаптируется под любые устройства.",
            "price_az": "999 ₼-dan", "price_en": "From $650", "price_ru": "От 50,000 ₽",
            "duration_az": "3-5 Həftə", "duration_en": "3-5 Weeks", "duration_ru": "3-5 Недель",
            "deliverables_az": "Həssas UX/UI Veb Dizayn\nSürətli Next.js 16 Frontend\nTəhlükəsiz Django Admin İdarəetmə Paneli\nÇoxdillilik (Multi-language) dəstəyi\n1 illik Pulsuz SSL və Hosting quraşdırılması",
            "deliverables_en": "Responsive UX/UI Web Design\nFast Next.js 16 Frontend\nSecure Django Admin Control Panel\nMulti-language (i18n) Support\n1-Year Free SSL & Hosting Deployment",
            "deliverables_ru": "Адаптивный веб-дизайн UX/UI\nБыстрый фронтенд на Next.js 16\nБезопасная панель администратора Django\nПоддержка многоязычности (i18n)\n1 год бесплатного SSL и развертывания на хостинге",
            "tech_stack_az": "React, Next.js, Django, TypeScript, TailwindCSS, PostgreSQL",
            "tech_stack_en": "React, Next.js, Django, TypeScript, TailwindCSS, PostgreSQL",
            "tech_stack_ru": "React, Next.js, Django, TypeScript, TailwindCSS, PostgreSQL",
            "is_featured": True, "order": 5
        },
        {
            "title_az": "UX/UI", "title_en": "UX/UI Design", "title_ru": "UX/UI Дизайн",
            "slug": "ux-ui",
            "description_az": "İstifadəçi dostu interfeyslər, interaktiv Figma prototipləri, brendinq və məftil karkasların (wireframe) çəkilməsi.",
            "description_en": "User-friendly interfaces, interactive Figma prototypes, branding, and wireframing.",
            "description_ru": "Удобные интерфейсы, интерактивные прототипы в Figma, брендинг и создание каркасов (wireframing).",
            "icon_name": "FaPalette",
            "content_az": "Rəqəmsal məhsulunuzun (veb-sayt və ya mobil tətbiq) istifadəçilər tərəfindən sevilməsi üçün UX (istifadəçi təcrübəsi) tədqiqatları aparır və müasir UI (istifadəçi interfeysi) dizaynları hazırlayırıq. Bütün dizayn layihələri Figma platformasında tam prototipləşdirilmiş şəkildə təhvil verilir.",
            "content_en": "We conduct user experience (UX) research and build modern user interface (UI) designs to ensure your digital products succeed. All design assets are fully prototyped in Figma before coding starts.",
            "content_ru": "Мы проводим исследования UX и разрабатываем современные дизайны UI, чтобы ваши цифровые продукты нравились пользователям. Все макеты создаются в Figma в виде интерактивных прототипов.",
            "price_az": "499 ₼-dan", "price_en": "From $300", "price_ru": "От 25,000 ₽",
            "duration_az": "2-3 Həftə", "duration_en": "2-3 Weeks", "duration_ru": "2-3 Недели",
            "deliverables_az": "Wireframes (Məftil karkas) Planlaması\nİnteraktiv Figma Prototipi\nMobil və Masaüstü Dizayn Sistemləri\nUI Kit (Rənglər, Düymələr, Komponentlər)\nİstifadəçi Testi (User Testing) Hesabatı",
            "deliverables_en": "Wireframe Planning & Layout\nInteractive Figma Prototypes\nMobile & Desktop Design Systems\nUI Kit (Colors, Buttons, Components)\nUser Testing Feedback Report",
            "deliverables_ru": "Создание каркасов и структуры сайта\nИнтерактивные прототипы Figma\nДизайн-системы для мобильных и десктопов\nНаборы UI (цвета, кнопки, компоненты)\nОтчет о пользовательском тестировании",
            "tech_stack_az": "Figma, Adobe Creative Suite, Sketch, Miro",
            "tech_stack_en": "Figma, Adobe Creative Suite, Sketch, Miro",
            "tech_stack_ru": "Figma, Adobe Creative Suite, Sketch, Miro",
            "is_featured": True, "order": 6
        }
    ]
    for s_data in services_data:
        Service.objects.create(**s_data)

    print("----- SEEDING PROJECTS -----")
    projects_data = [
        {
            "title_az": "Shahriyar.az Veb Portalının İnkişafı", "title_en": "Shahriyar.az Web Portal Development", "title_ru": "Разработка веб-портала Shahriyar.az",
            "slug": "shahriyar-az",
            "category_az": "Vebsayt Hazırlanması / UX/UI", "category_en": "Web Development / UX/UI", "category_ru": "Веб-разработка / UX/UI",
            "description_az": "Şəhriyar adına mədəniyyət və yaradıcılıq portalının müasir dizaynda inkişafı.",
            "description_en": "Modern website development and branding for the Shahriyar cultural and creative portal.",
            "description_ru": "Современная разработка веб-сайта и брендинг для культурно-творческого портала им. Шахрияра.",
            "thumbnail": "projects/thumbnails/shahriyar.png",
            "content_az": "Şəhriyar portalı ölkəmizin mədəniyyət abidələrini, poeziyasını və incəsənətini təbliğ edən genişmiqyaslı layihədir. Neyman Tech olaraq portalın həm cəlbedici dizaynını, həm də SEO baxımından sürətli işləyən infrastrukturunu sıfırdan hazırladıq.",
            "content_en": "The Shahriyar portal is a large-scale project promoting poetry and art. Neyman Tech built its responsive frontend design and robust backend SEO framework from scratch.",
            "content_ru": "Портал Шахрияра — это масштабный проект, пропагандирующий поэзию и искусство. Neyman Tech разработал адаптивный дизайн фронтенда и надежную SEO-структуру бэкенда с нуля.",
            "problem_az": "Köhnə saytın mobil uyğunluğunun olmaması və yüksək yüklənmə vaxtı səbəbindən Google axtarış sistemində mövqelərin itirilməsi.",
            "problem_en": "The legacy site lacked mobile responsiveness and had high loading times, causing it to lose Google search rankings.",
            "problem_ru": "Предыдущий сайт не был адаптирован для мобильных и долго загружался, из-за чего терял позиции в поиске Google.",
            "solution_az": "Next.js SSR texnologiyası tətbiq olundu, sürət Core Web Vitals göstəricilərində 98%+ səviyyəsinə qaldırıldı. Sayt 100% mobil uyğun və çoxdilli edildi.",
            "solution_en": "Next.js SSR was applied, improving Google Core Web Vitals speed to 98%+. The site is now 100% mobile-friendly and multilingual.",
            "solution_ru": "Был применен Next.js SSR, что повысило скорость Core Web Vitals до 98%+. Сайт адаптирован для мобильных устройств на 100% и стал многоязычным.",
            "technologies_az": "React, Next.js, Django, TypeScript, TailwindCSS, PostgreSQL",
            "technologies_en": "React, Next.js, Django, TypeScript, TailwindCSS, PostgreSQL",
            "technologies_ru": "React, Next.js, Django, TypeScript, TailwindCSS, PostgreSQL",
            "client_name_az": "Şəhriyar Portalı", "client_name_en": "Shahriyar Portal", "client_name_ru": "Портал Шахрияра",
            "completion_date": "2025",
            "website_url": "https://shahriyar.az/",
            "testimonial_quote_az": "\"Neyman Tech komandası portalımızı inanılmaz dərəcədə sürətli və gözəl bir formaya saldı. SEO işlərindən sonra izləyici sayımız 2 dəfə artdı!\"",
            "testimonial_quote_en": "\"The Neyman Tech team made our portal incredibly fast and beautiful. After the SEO work, our audience doubled!\"",
            "testimonial_quote_ru": "\"Команда Neyman Tech сделала наш портал невероятно быстрым и красивым. После проведения SEO-оптимизации наша аудитория увеличилась вдвое!\"",
            "testimonial_author_az": "Həsən Əliyev", "testimonial_author_en": "Hasan Aliyev", "testimonial_author_ru": "Гасан Алиев",
            "testimonial_role_az": "Baş Redaktor", "testimonial_role_en": "Editor-in-Chief", "testimonial_role_ru": "Главный редактор",
            "is_featured": True, "order": 1
        },
        {
            "title_az": "Zırhlıoğlu B2B E-Ticarət Mobil Tətbiqi", "title_en": "Zırhlıoğlu B2B E-Commerce Mobile App", "title_ru": "Мобильное B2B приложение Zırhlıoğlu E-Commerce",
            "slug": "zirhlioglu-ecommerce",
            "category_az": "Mobil Tətbiq", "category_en": "Mobile Application", "category_ru": "Мобильные приложения",
            "description_az": "Türkiyənin böyük topdansatış brendi Zırhlıoğlu üçün B2B mobil tətbiqinin inkişafı.",
            "description_en": "B2B e-commerce mobile application development and Google Play launch for Turkey's wholesale brand Zırhlıoğlu.",
            "description_ru": "Разработка мобильного B2B приложения для крупного турецкого оптового бренда Zırhlıoğlu.",
            "thumbnail": "projects/thumbnails/zirhlioglu.png",
            "content_az": "Zırhlıoğlu topdansatış şəbəkəsi üçün B2B satışlarını idarə edən, minlərlə məhsul çeşidi olan və real vaxtda sifariş qəbul edən Flutter mobil proqram təminatı hazırladıq və Google Play platformasında uğurla yerləşdirdik.",
            "content_en": "We developed a high-scale Flutter B2B e-commerce application handling thousands of wholesale items and real-time orders, launching it on Google Play.",
            "content_ru": "Мы разработали масштабируемое мобильное B2B-приложение на Flutter для оптовой торговли, обрабатывающее тысячи товаров и заказы в реальном времени.",
            "problem_az": "Müştərilərin (market və restoranların) topdan sifarişləri zənglə verməsi, sifariş sızmaları və vaxt itkisi.",
            "problem_en": "Customers (markets/restaurants) making wholesale orders over phone calls, leading to communication errors and huge time loss.",
            "problem_ru": "Клиенты (магазины/рестораны) делали оптовые заказы по телефону, что приводило к ошибкам и огромной потере времени.",
            "solution_az": "Flutter ilə həm iOS, həm də Android üçün sürətli səbət və kataloq məntiqi olan tətbiq yığıldı. Backend ERP sistemi ilə tam inteqrasiya olundu.",
            "solution_en": "A highly responsive Flutter app with advanced cart and catalog logic was built, fully integrated with their backend corporate ERP.",
            "solution_ru": "Было создано быстрое приложение на Flutter для iOS и Android с продвинутой корзиной и каталогом, интегрированное с корпоративной ERP.",
            "technologies_az": "Flutter, Dart, Node.js, Firebase, SAP ERP",
            "technologies_en": "Flutter, Dart, Node.js, Firebase, SAP ERP",
            "technologies_ru": "Flutter, Dart, Node.js, Firebase, SAP ERP",
            "client_name_az": "Zırhlıoğlu Gıda A.Ş.", "client_name_en": "Zirhlioglu Food Inc.", "client_name_ru": "Zirhlioglu Food Inc.",
            "completion_date": "2025",
            "website_url": "https://play.google.com/store/apps/details?id=com.zirhlioglu.ecommerce&hl=tr",
            "testimonial_quote_az": "\"Mobil tətbiq istifadəyə verildikdən sonra menecerlərin zəng yükü 60% azaldı, B2B dövriyyəmiz isə sürətlə artdı.\"",
            "testimonial_quote_en": "\"After the mobile app launched, our coordinator call load fell by 60% and our digital wholesale orders skyrocketed.\"",
            "testimonial_quote_ru": "\"После запуска мобильного приложения нагрузка на наших координаторов снизилась на 60%, а продажи выросли.\"",
            "testimonial_author_az": "Mustafa Zırhlıoğlu", "testimonial_author_en": "Mustafa Zirhlioglu", "testimonial_author_ru": "Мустафа Зирхлиоглу",
            "testimonial_role_az": "İdarə Heyətinin Sədri", "testimonial_role_en": "Board Chairman", "testimonial_role_ru": "Председатель совета директоров",
            "is_featured": True, "order": 2
        },
        {
            "title_az": "Caspian Cable Korporativ Vebsaytı", "title_en": "Caspian Cable Corporate Website", "title_ru": "Корпоративный сайт Caspian Cable",
            "slug": "caspian-cable",
            "category_az": "Vebsayt Hazırlanması", "category_en": "Web Development", "category_ru": "Веб-разработка",
            "description_az": "Caspian Cable kabel istehsalı zavodu üçün müasir dizaynda üçdilli korporativ sayt.",
            "description_en": "Modern, multilingual corporate website development for Caspian Cable industrial factory.",
            "description_ru": "Разработка современного многоязычного корпоративного сайта для промышленного кабельного завода Caspian Cable.",
            "thumbnail": "projects/thumbnails/caspiancable.png",
            "content_az": "Azərbaycanın qabaqcıl kabel istehsalı müəssisəsi Caspian Cable üçün beynəlxalq standartlara uyğun, məhsul kataloqu olan və çoxdilli (AZ, TR, EN) dəstəkli veb platforma hazırladıq.",
            "content_en": "We developed a modern, multilingual (AZ, TR, EN) corporate web portal with a product catalog for Caspian Cable, Azerbaijan's industrial factory.",
            "content_ru": "Мы разработали современный многоязычный (AZ, TR, EN) корпоративный веб-портал с каталогом продукции для азербайджанского завода Caspian Cable.",
            "problem_az": "Məhsulların texniki cədvəllərinin saytda qarışıq olması, xarici tərəfdaşların kataloqlara çata bilməməsi.",
            "problem_en": "Messy technical product tables on the old site, making it difficult for foreign partners to browse cable catalogs.",
            "problem_ru": "Неудобные таблицы технических характеристик на старом сайте затрудняли поиск кабельной продукции для партнеров.",
            "solution_az": "Hər kabel növü üçün xüsusi PDF və texniki parametr süzgəcləri olan premium dizayn və verilənlər strukturu quruldu.",
            "solution_en": "A premium UI/UX design was created, featuring specific PDF downloads and technical specifications filters for each cable type.",
            "solution_ru": "Был создан премиум UI/UX дизайн с возможностью скачивания PDF и фильтрами по техническим характеристикам для каждого кабеля.",
            "technologies_az": "Next.js, Django, TypeScript, TailwindCSS, SQLite",
            "technologies_en": "Next.js, Django, TypeScript, TailwindCSS, SQLite",
            "technologies_ru": "Next.js, Django, TypeScript, TailwindCSS, SQLite",
            "client_name_az": "Caspian Cable LLC", "client_name_en": "Caspian Cable LLC", "client_name_ru": "Caspian Cable LLC",
            "completion_date": "2025",
            "website_url": "https://caspiancable.az/tr",
            "testimonial_quote_az": "\"Məhsul kataloqumuz artıq çox səliqəlidir və xarici müştərilərimizdən çox müsbət rəylər alırıq.\"",
            "testimonial_quote_en": "\"Our product catalog is extremely organized now and we are getting great feedback from international buyers.\"",
            "testimonial_quote_ru": "\"Наш каталог продукции стал очень удобным, и мы получаем отличные отзывы от международных покупателей.\"",
            "testimonial_author_az": "Emin Qasımov", "testimonial_author_en": "Emin Gasimov", "testimonial_author_ru": "Эмин Гасимов",
            "testimonial_role_az": "Maliyyə Direktoru", "testimonial_role_en": "CFO", "testimonial_role_ru": "Финансовый директор",
            "is_featured": True, "order": 3
        },
        {
            "title_az": "Asistal Alüminium Veb Portalı", "title_en": "Asistal Aluminium Web Portal", "title_ru": "Веб-портал Asistal Aluminium",
            "slug": "asistal",
            "category_az": "Vebsayt Hazırlanması", "category_en": "Web Development", "category_ru": "Веб-разработка",
            "description_az": "Asistal Alüminium şirkətinin Azərbaycan və beynəlxalq profili üçün sayt.",
            "description_en": "International corporate profile web development for Asistal Aluminium industry.",
            "description_ru": "Разработка международного корпоративного сайта для компании Asistal Aluminium.",
            "thumbnail": "projects/thumbnails/asistal.png",
            "content_az": "Asistal brendinin yüksək alüminium profil çeşidlərini təqdim edən, memarlar və tikinti şirkətləri üçün sənaye kataloqlarını özündə birləşdirən korporativ platforma hazırladıq.",
            "content_en": "We built a high-fidelity corporate portal for Asistal, integrating wholesale industrial catalogs for architects and construction firms.",
            "content_ru": "Мы разработали высокотехнологичный корпоративный портал для Asistal, объединяющий промышленные каталоги для архитекторов и строителей.",
            "problem_az": "Profil kataloqlarının böyük ölçülü olması səbəbi ilə saytın ləng işləməsi və memarların axtardığını tapa bilməməsi.",
            "problem_en": "Heavy industrial profile catalogs causing slow load times and preventing architects from finding accurate designs.",
            "problem_ru": "Большие файлы промышленных каталогов замедляли работу сайта и мешали архитекторам находить нужные проекты.",
            "solution_az": "Sürətli CDN strukturu quruldu, axtarış və yükləmə sürəti optimallaşdırıldı, premium UX/UI tətbiq olundu.",
            "solution_en": "We built a fast CDN pipeline and optimized download speeds, delivering a stunning premium UI/UX design.",
            "solution_ru": "Мы настроили быструю сеть CDN и оптимизировали скорость загрузки, создав премиальный интерфейс UI/UX.",
            "technologies_az": "Next.js, React, Django, TailwindCSS, AWS S3",
            "technologies_en": "Next.js, React, Django, TailwindCSS, AWS S3",
            "technologies_ru": "Next.js, React, Django, TailwindCSS, AWS S3",
            "client_name_az": "Asistal MMC", "client_name_en": "Asistal LLC", "client_name_ru": "Asistal LLC",
            "completion_date": "2025",
            "website_url": "https://asistal.az/tr/",
            "testimonial_quote_az": "\"Dizayn çox premiumdur, sənaye profillərimizin yüklənmə sürəti inanılmaz dərəcədə yaxşılaşdı.\"",
            "testimonial_quote_en": "\"The design is very premium. The download speed of our technical industrial profiles has drastically improved!\"",
            "testimonial_quote_ru": "\"Дизайн выглядит очень премиально. Скорость загрузки наших технических профилей невероятно выросла!\"",
            "testimonial_author_az": "Kamil Əliyev", "testimonial_author_en": "Kamil Aliyev", "testimonial_author_ru": "Камиль Алиев",
            "testimonial_role_az": "Texniki Rəhbər", "testimonial_role_en": "Technical Director", "testimonial_role_ru": "Технический директор",
            "is_featured": True, "order": 4
        },
        {
            "title_az": "Profitrans Beynəlxalq Nəqliyyat Portalı", "title_en": "Profitrans International Logistics Portal", "title_ru": "Логистический веб-портал Profitrans",
            "slug": "profitrans",
            "category_az": "Vebsayt Hazırlanması", "category_en": "Web Development", "category_ru": "Веб-разработка",
            "description_az": "Profitrans beynəlxalq loqistika və nəqliyyat şirkəti üçün qiymət hesablama modulu olan portal.",
            "description_en": "Logistics and transport web portal featuring an automatic shipment price calculation calculator for Profitrans.",
            "description_ru": "Логистический веб-портал с автоматическим калькулятором стоимости доставки для Profitrans.",
            "thumbnail": "projects/thumbnails/profitrans.png",
            "content_az": "Profitrans beynəlxalq nəqliyyat şirkəti üçün müştərilərə yüklərin izlənməsi, real vaxtda qiymət təklifi almaq imkanı verən ağıllı loqistika portalı hazırladıq.",
            "content_en": "We developed a logistics web portal for Profitrans, allowing clients to track shipments and get real-time shipping quote estimates.",
            "content_ru": "Мы разработали логистический веб-портал для Profitrans, позволяющий клиентам отслеживать грузы и получать расчет стоимости в реальном времени.",
            "problem_az": "Müştərilərin daşınma qiymətlərini öyrənmək üçün saatlarla cavab gözləməsi və menecerlərin yüklənməsi.",
            "problem_en": "Clients waiting hours for transport quotes, overloading dispatch coordinators with manual calculations.",
            "problem_ru": "Клиенты часами ждали расчет стоимости доставки, перегружая координаторов ручными расчетами.",
            "solution_az": "Ölkələr, çəki və həcm parametrlərinə əsasən daşınma qiymətini saniyələr içində hesablayan rəqəmsal kalkulyator quruldu.",
            "solution_en": "An automated shipping calculator was built, delivering accurate quotes in seconds based on weight, volume, and destination.",
            "solution_ru": "Был создан автоматический калькулятор, рассчитывающий точную стоимость доставки за секунды на основе веса, объема и направления.",
            "technologies_az": "React, Next.js, Django REST Framework, PostgreSQL",
            "technologies_en": "React, Next.js, Django REST Framework, PostgreSQL",
            "technologies_ru": "React, Next.js, Django REST Framework, PostgreSQL",
            "client_name_az": "Profitrans MMC", "client_name_en": "Profitrans LLC", "client_name_ru": "Profitrans LLC",
            "completion_date": "2026",
            "website_url": "https://profitrans.az/en",
            "testimonial_quote_az": "\"Ağıllı kalkulyator vasitəsilə vebsaytdan gələn sifariş sorğuları 3 dəfə artdı, müştərilərimiz çox razıdır.\"",
            "testimonial_quote_en": "\"Thanks to the smart shipping calculator, shipping requests tripled and our client retention rate jumped!\"",
            "testimonial_quote_ru": "\"Благодаря умному калькулятору количество заявок выросло в 3 раза, а клиенты остались очень довольны!\"",
            "testimonial_author_az": "Rauf Məmmədov", "testimonial_author_en": "Rauf Mammadov", "testimonial_author_ru": "Рауф Мамедов",
            "testimonial_role_az": "Satış Müdiri", "testimonial_role_en": "Sales Director", "testimonial_role_ru": "Директор по продажам",
            "is_featured": True, "order": 5
        },
        {
            "title_az": "STS Təhlükəsizlik Sistemləri Portalı", "title_en": "STS Security Systems Portal", "title_ru": "Веб-портал систем безопасности STS",
            "slug": "sts-az",
            "category_az": "Vebsayt Hazırlanması", "category_en": "Web Development", "category_ru": "Веб-разработка",
            "description_az": "STS Təhlükəsizlik Sistemləri şirkəti üçün korporativ kataloq saytı.",
            "description_en": "Corporate security catalog web development for STS Security Systems.",
            "description_ru": "Разработка корпоративного сайта-каталога для STS Security Systems.",
            "thumbnail": "projects/thumbnails/sts.png",
            "content_az": "STS Təhlükəsizlik Sistemləri üçün ağıllı kamera, alarm və keçid nəzarət sistemlərini təqdim edən müasir məhsul kataloqu veb portalı hazırladıq.",
            "content_en": "We built a modern product catalog web portal for STS Security Systems, showcasing smart cameras, alarms, and access control integrations.",
            "content_ru": "Мы разработали современный веб-портал каталога продукции для STS Security Systems, представляющий смарт-камеры, сигнализации и системы контроля доступа.",
            "problem_az": "Köhnə saytda məhsulların axtarış sisteminin olmaması və kateqoriyaların qarışıqlığı.",
            "problem_en": "Lack of smart search functionality and messy categories on the legacy security website.",
            "problem_ru": "Отсутствие функции умного поиска и запутанные категории товаров на старом сайте.",
            "solution_az": "Ağıllı elastik axtarış (Elasticsearch) və brendlər üzrə filtrləmə ilə təchiz olunmuş premium kataloq quruldu.",
            "solution_en": "A premium catalog search engine with advanced brand and category filtering was fully integrated.",
            "solution_ru": "Был интегрирован удобный поиск по каталогу с продвинутой фильтрацией по брендам и категориям.",
            "technologies_az": "Next.js, Django, TailwindCSS, SQLite",
            "technologies_en": "Next.js, Django, TailwindCSS, SQLite",
            "technologies_ru": "Next.js, Django, TailwindCSS, SQLite",
            "client_name_az": "STS MMC", "client_name_en": "STS LLC", "client_name_ru": "STS LLC",
            "completion_date": "2026",
            "website_url": "https://www.sts.az/",
            "testimonial_quote_az": "\"Müştərilərimiz artıq axtardıqları kamera və təhlükəsizlik avadanlığını saniyələr içində tapıb sifariş verə bilir.\"",
            "testimonial_quote_en": "\"Our clients can now easily search, compare, and order camera equipment in seconds.\"",
            "testimonial_quote_ru": "\"Наши клиенты теперь могут легко находить, сравнивать и заказывать оборудование за секунды.\"",
            "testimonial_author_az": "Orxan Vəliyev", "testimonial_author_en": "Orkhan Valiyev", "testimonial_author_ru": "Орхан Велиев",
            "testimonial_role_az": "Şirkət Rəhbəri", "testimonial_role_en": "Managing Director", "testimonial_role_ru": "Управляющий директор",
            "is_featured": True, "order": 6
        }
    ]
    for p_data in projects_data:
        Project.objects.create(**p_data)

    print("----- SEEDING BLOGS -----")
    blogs_data = [
        {
            "title_az": "Süni İntellekt və ERP/CRM Sistemlərinin İnteqrasiyası",
            "title_en": "Integration of Artificial Intelligence and ERP/CRM Systems",
            "title_ru": "Интеграция искусственного интеллекта и систем ERP/CRM",
            "slug": "ai-ve-erp-crm-inteqrasiyasi",
            "excerpt_az": "Müasir təhsil və biznes sahələrində süni intellektin rolu və ERP sistemləri ilə inteqrasiyasının effektivliyi.",
            "excerpt_en": "The role of AI in modern education and business sectors, and the efficiency of ERP integrations.",
            "excerpt_ru": "Роль ИИ в современном образовании и бизнесе, а также эффективность интеграции с ERP.",
            "content_az": "Süni intellekt (AI) texnologiyalarının inkişafı biznes idarəetmə proqramlarında (ERP və CRM) tamamilə yeni bir mərhələ açdı. Artıq sistemlər təkcə məlumat qeyd etmir, həm də gələcək satış trendlərini proqnozlaşdırır, müştəri müraciətlərini avtomatlaşdırılmış NLP chatbotları ilə cavablandırır və maliyyə hesabatlarında sızmaları analiz edərək sıfıra endirir. Neyman Enterprise Technologies olaraq, tətbiq etdiyimiz AI həlləri bizneslərin rəqəmsal transformasiyasını sürətləndirir.",
            "content_en": "The development of AI technologies opens up a completely new era in business management software (ERP and CRM). Today, systems not only record data but also forecast sales trends, answer inquiries with automated chatbots, and analyze financial leakages. Neyman Enterprise Technologies drives this digital transformation.",
            "content_ru": "Развитие технологий ИИ открывает совершенно новую эру в программном обеспечении для управления бизнесом (ERP и CRM). Сегодня системы не только записывают данные, но и прогнозируют тенденции продаж, отвечают на запросы с помощью чат-ботов и анализируют утечки.",
            "image": "blogs/ai_blog.jpg",
            "author": "Neyman Admin", "is_featured": True
        },
        {
            "title_az": "Next.js 16 və Django ilə Premium Veb Tətbiqlərin Hazırlanması",
            "title_en": "Premium Web Development with Next.js 16 and Django",
            "title_ru": "Веб-разработка премиум-класса на Next.js 16 и Django",
            "slug": "nextjs-ve-django-premium-veb",
            "excerpt_az": "Niyə Next.js 16 və Django birləşməsi korporativ tətbiqlər üçün ən təhlükəsiz və sürətli seçimdir.",
            "excerpt_en": "Why combining Next.js 16 and Django is the most secure and fast choice for corporate applications.",
            "excerpt_ru": "Почему сочетание Next.js 16 и Django — самый безопасный и быстрый выбор для корпоративных приложений.",
            "content_az": "Korporativ səviyyəli proqram təminatı hazırlayarkən backend-in etibarlılığı və frontend-in sürəti kritik əhəmiyyət kəsb edir. Python-un ən güclü framework-ü olan Django, daxili təhlükəsizlik alətləri (SQL injection, XSS və CSRF-dən qorunma) ilə backend verilənlərini qoruyur. Next.js 16 isə SSR (Server-Side Rendering) və Turbopack üstünlükləri ilə istifadəçi təcrübəsini mükəmməlləşdirir, sürətli səhifə keçidləri təmin edir və Google axtarışlarında SEO liderliyini ələ almağa kömək edir.",
            "content_en": "When building corporate-level software, backend security and frontend speed are highly critical. Django, Python's most robust framework, safeguards your database with built-in security features, while Next.js 16 utilizes SSR to optimize user experience and raise Google SEO rankings.",
            "content_ru": "При разработке ПО корпоративного уровня безопасность бэкенда и скорость фронтенда имеют решающее значение. Django защищает вашу базу данных с помощью встроенных функций безопасности, а Next.js 16 использует SSR для оптимизации интерфейса.",
            "image": "blogs/nextjs_blog.jpg",
            "author": "Neyman Admin", "is_featured": True
        },
        {
            "title_az": "Bulud Serverləri və Docker: On-Premise vs Cloud Deployment",
            "title_en": "Cloud Servers & Docker: On-Premise vs Cloud Deployment",
            "title_ru": "Облачные серверы и Docker: On-Premise против Cloud",
            "slug": "bulud-serverleri-ve-docker",
            "excerpt_az": "Şirkətlər üçün Docker ilə on-premise (lokal) server və ya bulud yerləşdirmə seçimlərinin texniki təhlili.",
            "excerpt_en": "Technical analysis of using Docker for local on-premise server setups versus cloud deployments.",
            "excerpt_ru": "Технический анализ использования Docker для локального сервера (on-premise) по сравнению с облачным.",
            "content_az": "Şirkət məlumatlarının təhlükəsizliyi hər bir müəssisənin prioritetidir. Docker konteynerləşdirmə texnologiyası layihələrin həm bulud serverlərində (AWS, DigitalOcean, Google Cloud), həm də yerli (On-premise) serverlərdə sürətlə və problemsiz quraşdırılmasına imkan verir. 'Enterprise' tariflərimiz daxilində biz müştərilərimizə məlumatların 100% öz serverlərində qalması üçün Docker vasitəsilə lokal infrastruktur qurmağı və idarə etməyi təklif edirik.",
            "content_en": "Company data security is a high priority. Docker containerization allows deploying applications seamlessly on cloud servers (AWS, Google Cloud) or locally on-premise. Under our Enterprise plans, we offer deployment in your local servers so all data remains fully secure on your servers.",
            "content_ru": "Безопасность корпоративных данных имеет приоритетное значение. Контейнеризация Docker позволяет разворачивать приложения в облаке (AWS, Google Cloud) или локально (on-premise). В корпоративных тарифах мы предлагаем локальное развертывание.",
            "image": "blogs/docker_blog.jpg",
            "author": "Neyman Admin", "is_featured": True
        }
    ]
    for b_data in blogs_data:
        Blog.objects.create(**b_data)

    print("----- SEEDING CONTACT INFO -----")
    # Seeding Contact info as requested
    ContactInfo.objects.create(
        email="info@neymantech.com",
        phone="+905521532328 / +994 77 331 26 53",
        lat="40.6551",
        lng="29.2743", # Yalova coords approx
        address_az="Bakı, Azərbaycan (Baku Office) / Yalova, Türkiye (Yalova Office)",
        address_en="Baku, Azerbaijan (Baku Office) / Yalova, Turkey (Yalova Office)",
        address_ru="Баку, Азербайджан (Офис Баку) / Ялова, Турция (Офис Ялова)",
        working_hours_az="Həftə içi 09:00 - 18:00",
        working_hours_en="Weekdays 09:00 - 18:00",
        working_hours_ru="Будние дни 09:00 - 18:00"
    )
    
    # Social links
    socials = [
        {"platform_name": "Facebook", "url": "https://facebook.com/neymantech", "icon_name": "FaFacebookF"},
        {"platform_name": "Instagram", "url": "https://instagram.com/neymantech", "icon_name": "FaInstagram"},
        {"platform_name": "LinkedIn", "url": "https://linkedin.com/company/neymantech", "icon_name": "FaLinkedinIn"}
    ]
    for social in socials:
        SocialMedia.objects.create(**social)

    print("----- SEEDING CRM PLANS & FEATURES -----")
    plans = [
        {
            "name_az": "Start", "name_en": "Start", "name_ru": "Старт",
            "subtitle_az": "Kiçik və fəaliyyətə yeni başlayan tədris mərkəzləri üçün baza CRM modulu.",
            "subtitle_en": "Basic CRM module for small and newly started training centers.",
            "subtitle_ru": "Базовый модуль CRM для малых и новых учебных центров.",
            "price": "99", "period": "₼/ay", "is_popular": False,
            "cta_text_az": "İndi Başla", "cta_text_en": "Start Now", "cta_text_ru": "Начать",
            "features": {
                "az": [
                    "Potensial Müştəri (Lead) İdarəetməsi",
                    "CRM Kanban Lövhəsi (Stage)",
                    "Reklam Mənbəyi Analitikası",
                    "Rəqəmsal Davamiyyət Jurnalı",
                    "1 Koordinator & 5 Müəllim Limiti",
                    "Satış Komissiyası (SalesCommission) [Məhduddur]",
                    "Çevik Maaş Modelləri [Məhduddur]",
                    "Rəhbərlik Təsdiq Sorğuları [Məhduddur]"
                ],
                "en": [
                    "Lead Management",
                    "CRM Kanban Board (Stage)",
                    "Advertising Source Analytics",
                    "Digital Attendance Journal",
                    "1 Coordinator & 5 Teacher Limit",
                    "Sales Commission (SalesCommission) [Disabled]",
                    "Flexible Salary Models [Disabled]",
                    "Management Approval Requests [Disabled]"
                ],
                "ru": [
                    "Управление потенциальными клиентами (Leads)",
                    "Панель CRM Kanban (Stage)",
                    "Аналитика рекламных источников",
                    "Цифровой журнал посещаемости",
                    "Лимит: 1 координатор и 5 преподавателей",
                    "Комиссия с продаж (SalesCommission) [Отсутствует]",
                    "Гибкие модели зарплаты [Отсутствует]",
                    "Запросы на утверждение руководством [Отсутствует]"
                ]
            },
            "order": 1
        },
        {
            "name_az": "Professional", "name_en": "Professional", "name_ru": "Профессиональный",
            "subtitle_az": "Sürətlə inkişaf edən, maliyyə və maaş şəffaflığı axtaran orta ölçülü kurslar üçün.",
            "subtitle_en": "For fast-growing, medium-sized courses seeking financial and salary transparency.",
            "subtitle_ru": "Для быстрорастущих средних курсов, стремящихся к прозрачности финансов и зарплат.",
            "price": "199", "period": "₼/ay", "is_popular": True,
            "cta_text_az": "Demo Sifariş Et", "cta_text_en": "Order Demo", "cta_text_ru": "Заказать демо",
            "features": {
                "az": [
                    "Start planının bütün xüsusiyyətləri",
                    "Satış Komissiyası Sistemi (SalesCommission)",
                    "Çevik Güzəşt (Discount) Sistemi & Validation",
                    "Həftəlik Dərs Şablonları (WeeklyTemplate)",
                    "3 Müxtəlif Maaş Hesablama Modeli",
                    "Avtomatik Faktura (Invoice) generatoru",
                    "Hissəli Ödənişlər & Tranzaksiyalar",
                    "3 Koordinator & Limitsiz Müəllim"
                ],
                "en": [
                    "All features of the Start plan",
                    "Sales Commission System (SalesCommission)",
                    "Flexible Discount System & Validation",
                    "Weekly Class Templates (WeeklyTemplate)",
                    "3 Different Salary Calculation Models",
                    "Automatic Invoice Generator",
                    "Installment Payments & Transactions",
                    "3 Coordinators & Unlimited Teachers"
                ],
                "ru": [
                    "Все функции тарифного плана Старт",
                    "Система комиссии с продаж (SalesCommission)",
                    "Гибкая система скидок и валидация",
                    "Шаблоны еженедельных занятий (WeeklyTemplate)",
                    "3 разные модели расчета зарплаты",
                    "Автоматический генератор счетов (Invoice)",
                    "Платежи в рассрочку и транзакции",
                    "3 координатора и безлимитное количество преподавателей"
                ]
            },
            "order": 2
        },
        {
            "name_az": "Enterprise", "name_en": "Enterprise", "name_ru": "Корпоративный",
            "subtitle_az": "Böyük akademiyalar, çoxfiliallı tədris müəssisələri və şəxsi bulud server istəyənlər üçün.",
            "subtitle_en": "For large academies, multi-branch educational institutions, and private cloud servers.",
            "subtitle_ru": "Для крупных академий, многофилиальных учебных заведений и выделенных облачных серверов.",
            "price": "399", "period": "₼/ay", "is_popular": False,
            "cta_text_az": "Bizimlə Əlaqə", "cta_text_en": "Contact Us", "cta_text_ru": "Связаться с нами",
            "features": {
                "az": [
                    "Professional planının bütün xüsusiyyətləri",
                    "Çoxlu Hesab İdarəetməsi (FinanceAccount)",
                    "Rəhbərlik Təsdiq Sorğuları (Refund, Maaş, Qiymət)",
                    "Dövri Xərclər (RecurringPayment)",
                    "IP Üzrə Təhlükəsizlik Zənciri & Audit Logs",
                    "Ad Günləri İdarəetməsi (StudentBirthdayAction)",
                    "WhatsApp & SMS & Zoom API Dəstəyi",
                    "Limitsiz Filial & Limitsiz İstifadəçi"
                ],
                "en": [
                    "All features of the Professional plan",
                    "Multi-Account Management (FinanceAccount)",
                    "Management Approval Requests (Refund, Salary, Price)",
                    "Recurring Expenses (RecurringPayment)",
                    "IP-based Security Chain & Audit Logs",
                    "Birthday Action Management (StudentBirthdayAction)",
                    "WhatsApp & SMS & Zoom API Support",
                    "Unlimited Branches & Unlimited Users"
                ],
                "ru": [
                    "Все функции тарифного плана Профессиональный",
                    "Управление несколькими счетами (FinanceAccount)",
                    "Запросы на утверждение руководством (Refund, зарплата, цены)",
                    "Периодические расходы (RecurringPayment)",
                    "Цепочка безопасности на основе IP и журналы аудита",
                    "Управление действиями в день рождения (StudentBirthdayAction)",
                    "Поддержка API WhatsApp, SMS и Zoom",
                    "Безлимитное количество филиалов и пользователей"
                ]
            },
            "order": 3
        }
    ]
    for plan_data in plans:
        CRMPricingPlan.objects.create(**plan_data)

    crm_features = [
        {
            "title_az": "Potensial Müştəri & Kanban", "title_en": "Lead Management & Kanban", "title_ru": "Управление лидами и Канбан",
            "description_az": "Gələn zəngləri, sosial media müraciətlərini və potensial tələbələri rəqəmsal Kanban lövhəsində idarə edin.",
            "description_en": "Manage incoming calls, social media inquiries, and potential students on a digital Kanban board.",
            "description_ru": "Управляйте входящими звонками, запросами в соцсетях и лидами на цифровой доске Канбан.",
            "icon_name": "FaUsers", "order": 1
        },
        {
            "title_az": "Tədris İdarəetməsi", "title_en": "Education Management", "title_ru": "Управление обучением",
            "description_az": "Dinamik qrup cədvəlləri yaradın, rəqəmsal davamiyyət jurnalını aparın və akademik imtahan qiymətlərini qeyd edin.",
            "description_en": "Create dynamic group schedules, maintain a digital attendance log, and record academic exam grades.",
            "description_ru": "Создавайте расписания групп, ведите цифровой журнал посещаемости и регистрируйте экзаменационные оценки.",
            "icon_name": "FaBookOpen", "order": 2
        },
        {
            "title_az": "Dərs Şablonları & Jurnal", "title_en": "Class Templates & Journal", "title_ru": "Шаблоны уроков и журнал",
            "description_az": "Müəllimlərin və qrupların həftəlik şablonlarını (WeeklyTemplate) bir dəfə qurun, dərslər avtomatik generasiya olunsun.",
            "description_en": "Set up weekly templates (WeeklyTemplate) for teachers and groups once, and classes are generated automatically.",
            "description_ru": "Настройте еженедельные шаблоны (WeeklyTemplate) для учителей и групп один раз, и занятия будут создаваться автоматически.",
            "icon_name": "FaCalendarAlt", "order": 3
        },
        {
            "title_az": "Maliyyə & Maaş Modulu", "title_en": "Finance & Salary Module", "title_ru": "Финансовый модуль и зарплата",
            "description_az": "Müəllim maaşlarını 3 fərqli maaş modeli ilə avtomatik hesablayın. Geri ödənişlər (Refund) və faktura (Invoice) idarə edin.",
            "description_en": "Calculate teacher salaries automatically using 3 different salary models. Manage refunds and invoices.",
            "description_ru": "Автоматически рассчитывайте зарплату учителей с помощью 3 моделей. Управляйте возвратами и счетами (Invoice).",
            "icon_name": "FaFileAlt", "order": 4
        }
    ]
    for f_data in crm_features:
        CRMFeature.objects.create(**f_data)

    CRMStat.objects.create(
        main_percentage="+40%",
        label_az="Effektivlik Artımı",
        label_en="Efficiency Increase",
        label_ru="Прирост эффективности",
        school_count="50+",
        student_count="10K+"
    )

    benefits = [
        {"text_az": "Məktəb, kurs və ya xidmət mərkəzinin bütün biznes proseslərini vahid sistemdə idarə edin.", "text_en": "Manage all business processes of your center in a single system.", "text_ru": "Управляйте всеми бизнес-процессами вашего центра в единой системе.", "order": 1},
        {"text_az": "Satış və reklam analitikası ilə müştəri axınını sürətlə artırın.", "text_en": "Rapidly increase customer flow with sales and advertising analytics.", "text_ru": "Быстро увеличивайте поток клиентов с помощью аналитики.", "order": 2}
    ]
    for b in benefits:
        CRMBenefit.objects.create(**b)

    crm_notifications = [
        {"time": "14:32:05", "type": "Tələbə Qeydiyyatı", "text": "Əli Məmmədov (İngilis dili) qrupuna müvəffəqiyyətlə qeydiyyatdan keçdi."},
        {"time": "13:15:10", "type": "Ödəniş Bildirişi", "text": "Zeynəb Əliyeva tərəfindən 150 AZN məbləğində dərs ödənişi təsdiqləndi."},
        {"time": "11:45:00", "type": "Maaş Hesablanması", "text": "Müəllim Vüsal Rəhimovun aprel ayı maaşı (820 AZN) 3-cü maaş modelinə əsasən hesablandı."},
        {"time": "09:30:12", "type": "Geri Ödəniş (Refund)", "text": "Aytən Qasımova üçün 50 AZN geri ödəniş menecer tərəfindən təsdiqə göndərildi."},
        {"time": "08:15:00", "type": "Sistem Girişi", "text": "Yeni administrator (admin_yalova) Yalova filialı IP-sindən sistemə daxil oldu."}
    ]
    for n in crm_notifications:
        CRMNotification.objects.create(**n)

    print("----- DATABASE SEEDING COMPLETED SUCCESSFULLY -----")

if __name__ == '__main__':
    seed_database()
