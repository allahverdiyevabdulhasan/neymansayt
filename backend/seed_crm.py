import os
import django

# Set up Django environment
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'core.settings')
django.setup()

from crm.models import CRMPricingPlan, CRMFeature, CRMStat, CRMBenefit

def seed_database():
    print("Deleting old CRM records...")
    CRMPricingPlan.objects.all().delete()
    CRMFeature.objects.all().delete()
    CRMStat.objects.all().delete()
    CRMBenefit.objects.all().delete()

    print("Seeding CRM Pricing Plans...")
    plans = [
        {
            "name_az": "Start",
            "name_en": "Start",
            "name_ru": "Старт",
            "subtitle_az": "Kiçik və fəaliyyətə yeni başlayan tədris mərkəzləri üçün baza CRM modulu.",
            "subtitle_en": "Basic CRM module for small and newly started training centers.",
            "subtitle_ru": "Базовый модуль CRM для малых и новых учебных центров.",
            "price": "99",
            "period": "₼/ay",
            "is_popular": False,
            "cta_text_az": "İndi Başla",
            "cta_text_en": "Start Now",
            "cta_text_ru": "Начать",
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
            "name_az": "Professional",
            "name_en": "Professional",
            "name_ru": "Профессиональный",
            "subtitle_az": "Sürətlə inkişaf edən, maliyyə və maaş şəffaflığı axtaran orta ölçülü kurslar üçün.",
            "subtitle_en": "For fast-growing, medium-sized courses seeking financial and salary transparency.",
            "subtitle_ru": "Для быстрорастущих средних курсов, стремящихся к прозрачности финансов и зарплат.",
            "price": "199",
            "period": "₼/ay",
            "is_popular": True,
            "cta_text_az": "Demo Sifariş Et",
            "cta_text_en": "Order Demo",
            "cta_text_ru": "Заказать демо",
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
            "name_az": "Enterprise",
            "name_en": "Enterprise",
            "name_ru": "Корпоративный",
            "subtitle_az": "Böyük akademiyalar, çoxfiliallı tədris müəssisələri və şəxsi bulud server istəyənlər üçün.",
            "subtitle_en": "For large academies, multi-branch educational institutions, and private cloud servers.",
            "subtitle_ru": "Для крупных академий, многофилиальных учебных заведений и выделенных облачных серверов.",
            "price": "399",
            "period": "₼/ay",
            "is_popular": False,
            "cta_text_az": "Bizimlə Əlaqə",
            "cta_text_en": "Contact Us",
            "cta_text_ru": "Связаться с нами",
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

    print("Seeding CRM Features...")
    features = [
        {
            "title_az": "Potensial Müştəri & Kanban",
            "title_en": "Lead Management & Kanban",
            "title_ru": "Управление лидами и Канбан",
            "description_az": "Gələn zəngləri, sosial media müraciətlərini və potensial tələbələri rəqəmsal Kanban lövhəsində idarə edin.",
            "description_en": "Manage incoming calls, social media inquiries, and potential students on a digital Kanban board.",
            "description_ru": "Управляйте входящими звонками, запросами в соцсетях и лидами на цифровой доске Канбан.",
            "icon_name": "FaUsers",
            "order": 1
        },
        {
            "title_az": "Tədris İdarəetməsi",
            "title_en": "Education Management",
            "title_ru": "Управление обучением",
            "description_az": "Dinamik qrup cədvəlləri yaradın, rəqəmsal davamiyyət jurnalını aparın və akademik imtahan qiymətlərini qeyd edin.",
            "description_en": "Create dynamic group schedules, maintain a digital attendance log, and record academic exam grades.",
            "description_ru": "Создавайте расписания групп, ведите цифровой журнал посещаемости и регистрируйте экзаменационные оценки.",
            "icon_name": "FaBookOpen",
            "order": 2
        },
        {
            "title_az": "Dərs Şablonları & Jurnal",
            "title_en": "Class Templates & Journal",
            "title_ru": "Шаблоны уроков и журнал",
            "description_az": "Müəllimlərin və qrupların həftəlik şablonlarını (WeeklyTemplate) bir dəfə qurun, dərslər avtomatik generasiya olunsun.",
            "description_en": "Set up weekly templates (WeeklyTemplate) for teachers and groups once, and classes are generated automatically.",
            "description_ru": "Настройте еженедельные шаблоны (WeeklyTemplate) для учителей и групп один раз, и занятия будут создаваться автоматически.",
            "icon_name": "FaCalendarAlt",
            "order": 3
        },
        {
            "title_az": "Maliyyə & Maaş Modulu",
            "title_en": "Finance & Salary Module",
            "title_ru": "Финансовый модуль и зарплата",
            "description_az": "Müəllim maaşlarını 3 fərqli maaş modeli ilə avtomatik hesablayın. Geri ödənişlər (Refund) və faktura (Invoice) idarə edin.",
            "description_en": "Calculate teacher salaries automatically using 3 different salary models. Manage refunds and invoices.",
            "description_ru": "Автоматически рассчитывайте зарплату учителей с помощью 3 моделей. Управляйте возвратами и счетами (Invoice).",
            "icon_name": "FaFileAlt",
            "order": 4
        },
        {
            "title_az": "Rəhbərlik Təsdiq Sorğuları",
            "title_en": "Approval Requests",
            "title_ru": "Запросы на утверждение",
            "description_az": "Hər hansı geri ödəniş, maaş və ya qiymət dəyişikliyi zamanı sistem rəhbərlik (CEO) təsdiqini tələb edir.",
            "description_en": "The system requires management (CEO) approval for any refunds, salary, or price modifications.",
            "description_ru": "Система требует утверждения руководством (CEO) для любых возвратов средств, изменения зарплаты или цен.",
            "icon_name": "FaComments",
            "order": 5
        },
        {
            "title_az": "Mənbə Analitikası & Hesabatlar",
            "title_en": "Source Analytics & Reports",
            "title_ru": "Аналитика источников и отчеты",
            "description_az": "Sosial media reklamlarının və digər mənbələrin ROI göstəricilərini hesablayın. Bütün daxili sızmaları 0%-ə endirin.",
            "description_en": "Calculate the ROI of social media ads and other sources. Reduce all internal leaks to 0%.",
            "description_ru": "Рассчитывайте окупаемость (ROI) рекламы в социальных сетях и других источников. Сократите внутренние утечки до 0%.",
            "icon_name": "FaChartLine",
            "order": 6
        }
    ]

    for f_data in features:
        CRMFeature.objects.create(**f_data)

    print("Seeding CRM Statistics...")
    CRMStat.objects.create(
        main_percentage="+40%",
        label_az="Effektivlik Artımı",
        label_en="Efficiency Increase",
        label_ru="Прирост эффективности",
        school_count="50+",
        student_count="10K+"
    )

    print("Seeding CRM Benefits...")
    benefits = [
        {
            "text_az": "Məktəb, kurs və ya xidmət mərkəzinin bütün biznes proseslərini vahid sistemdə idarə edin.",
            "text_en": "Manage all business processes of your school, course, or service center in a single system.",
            "text_ru": "Управляйте всеми бизнес-процессами вашей школы, курса или сервисного центра в единой системе.",
            "order": 1
        },
        {
            "text_az": "Satış və reklam analitikası ilə müştəri axınını sürətlə artırın.",
            "text_en": "Rapidly increase customer flow with sales and advertising analytics.",
            "text_ru": "Быстро увеличивайте поток клиентов с помощью аналитики продаж и рекламы.",
            "order": 2
        },
        {
            "text_az": "Tələbə və müəllim davamiyyətini, dərsləri rəqəmsal jurnalla avtomatik izləyin.",
            "text_en": "Automatically track student and teacher attendance and classes with a digital journal.",
            "text_ru": "Автоматически отслеживайте посещаемость студентов и преподавателей с помощью цифрового журнала.",
            "order": 3
        },
        {
            "text_az": "Maliyyə hesabatları, nağd/kart daxilolmaları və xərclər üzərində 100% nəzarət yaradın.",
            "text_en": "Establish 100% control over financial reports, cash/card receipts, and expenses.",
            "text_ru": "Установите 100% контроль над финансовыми отчетами, кассовыми/карточными поступлениями и расходами.",
            "order": 4
        }
    ]

    for b_data in benefits:
        CRMBenefit.objects.create(**b_data)

    print("Database seeding completed successfully!")

if __name__ == '__main__':
    seed_database()
