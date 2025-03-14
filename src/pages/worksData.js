// worksData -- بيانات تجريبة
import pro1 from '../images/1.jpg';
import pro2 from '../images/2.jpg';
import pro3 from '../images/3.jpg';
import pro4 from '../images/4.jpg';
import pro5 from '../images/5.jpg';
import pro6 from '../images/6.jpg';
import pro7 from '../images/7.jpg';
import pro8 from '../images/8.jpg';
import pro9 from '../images/9.jpg';
import pro10 from '../images/10.jpg';
import pro11 from '../images/11.jpg';
import pro12 from '../images/12.jpg';
import pro13 from '../images/13.jpg';
import pro14 from '../images/14.jpg';
import pro15 from '../images/15.jpg';
import pro16 from '../images/16.jpg';
import pro17 from '../images/17.jpg';
import pro18 from '../images/18.jpg';
import pro19 from '../images/19.jpg';
import pro20 from '../images/20.jpg';

import image1 from '../images/main_sub.jpg';

import sub1 from '../images/sub.jpg';
import sub2 from '../images/sub.jpg';
import sub3 from '../images/sub.jpg';


const worksData = [
  { 
    id: 1,
    image: pro1,
    title: 'نظام إدارة المصانع الذكي - إصدار 2024',
    image_main: image1,
    sub_1: sub1,
    sub_2: sub2,
    sub_3: sub3,
    description: 'حل متكامل لإدارة العمليات الصناعية بدقة عالية، يشمل: تحليل بيانات الإنتاج في الوقت الحقيقي، إدارة سلاسل التوريد، مراقبة الجودة الذكية، تكامل مع أجهزة IoT، وتقارير أداء تفاعلية. يدعم العمل دون اتصال بالإنترنت مع مزامنة تلقائية عند الاتصال.',
    category: 'تطوير تطبيقات',
    date: '2024-03-15',
    demoPath: process.env.PUBLIC_URL + '/demos/pro1.html',
  },
  { 
    id: 2,
    image: pro2,
    title: 'منصة التجارة الإلكترونية المتكاملة',
    image_main: image1,
    sub_1: sub1,
    sub_2: sub2,
    sub_3: sub3,
    description: 'نظام متعدد البائعين مع دعم المدفوعات الإلكترونية، إدارة المخزون الذكية، تحليلات المبيعات المتقدمة، وتجربة مستخدم معربة بالكامل. يتضمن أدوات تسويق مدمجة ونظام تقييمات ذكي.',
    category: 'تصميم ويب',
    date: '2024-02-28',
    demoPath: process.env.PUBLIC_URL + '/demos/pro1.html',
  },
  { 
    id: 3,
    image: pro3,
    title: 'تطبيق الصحة الذكية للمستشفيات',
    image_main: image1,
    sub_1: sub1,
    sub_2: sub2,
    sub_3: sub3,
    description: 'حل طبي متكامل يشمل إدارة السجلات الصحية الإلكترونية (EHR)، جدولة المواعيد الذكية، نظام إنذار طبي، وتكامل مع الأجهزة الطبية. معتمد من هيئة الغذاء والدواء.',
    category: 'تطوير تطبيقات',
    date: '2024-04-10',
    demoPath: '/demos/pro3.html',
  },
  { 
    id: 4,
    image: pro4,
    title: 'حملة تسويقية ذكاء اصطناعي لشركة تقنية',
    image_main: image1,
    sub_1: sub1,
    sub_2: sub2,
    sub_3: sub3,
    description: 'استراتيجية تسويق رقمية مدعومة بالذكاء الاصطناعي تشمل: تحليل المشاعر، استهداف ديناميكي، إنشاء محتوى تلقائي، وتحسين الحملات في الوقت الحقيقي. حققت زيادة 300% في التحويلات.',
    category: 'تسويق رقمي',
    date: '2024-01-20',
    demoPath: '/demos/pro4.html',
  },
  { 
    id: 5,
    image: pro5,
    title: 'نظام إدارة التعلم (LMS) التفاعلي',
    image_main: image1,
    sub_1: sub1,
    sub_2: sub2,
    sub_3: sub3,
    description: 'منصة تعليمية ذكية مع فصول افتراضية، تقييمات ذاتية، محتوى تفاعلي، وشهادات معتمدة. تدعم الواقع المعزز وتكامل مع أنظمة المؤتمرات المرئية.',
    category: 'تصميم ويب',
    date: '2024-03-01',
  },
  { 
    id: 6,
    image: pro6,
    title: 'تطبيق لوجستيات الذكاء الاصطناعي',
    image_main: image1,
    sub_1: sub1,
    sub_2: sub2,
    sub_3: sub3,
    description: 'حل متقدم لإدارة سلاسل التوريد مع تنبؤات الطلب، توجيه الشحنات الذكي، وإدارة الأساطيل. يقلل التكاليف التشغيلية بنسبة 40% باستخدام خوارزميات التعلم الآلي.',
    category: 'تطوير تطبيقات',
    date: '2024-04-05',
  },
  { 
    id: 7,
    image: pro7,
    title: 'هوية بصرية لشركة تكنولوجيا ناشئة',
    image_main: image1,
    sub_1: sub1,
    sub_2: sub2,
    sub_3: sub3,
    description: 'تصميم شامل يشمل الشعار، النظام اللوني، الأنيميشن التفاعلي، وتطبيقات الهوية على مختلف الوسائط. اعتمد مفهوم "التكنولوجيا الإنسانية" كفكرة رئيسية.',
    category: 'تصميم جرافيك',
    date: '2024-02-15',
  },
  { 
    id: 8,
    image: pro8,
    title: 'استراتيجية تسويق عبر منصات التواصل الاجتماعي',
    image_main: image1,
    sub_1: sub1,
    sub_2: sub2,
    sub_3: sub3,
    description: 'حملة متكاملة لعلامة تجارية فاخرة شملت إدارة 6 منصات اجتماعية، إنشاء محتوى مخصص، وإعلانات مدمجة مع تحليلات أداء متقدمة.',
    category: 'تسويق رقمي',
    date: '2024-03-22',
  },
  { 
    id: 9,
    image: pro9,
    title: 'موقع ويب تفاععي لمعرض فني دولي',
    image_main: image1,
    sub_1: sub1,
    sub_2: sub2,
    sub_3: sub3,
    description: 'تصميم ثلاثي الأبعاد مع جولات افتراضية، معارض تفاعلية، ونظام حجز تذاكر مدمج. يدعم تقنية WebGL وتجربة مستخدم فريدة.',
    category: 'تصميم ويب',
    date: '2024-04-01',
  },
  { 
    id: 10,
    image: pro10,
    title: 'تطبيق إدارة المشاريع للفرق البعيدة',
    image_main: image1,
    sub_1: sub1,
    sub_2: sub2,
    sub_3: sub3,
    description: 'أداة تعاونية مع إدارة المهام، تتبع الوقت، تخصيص سير العمل، وتكامل مع 50+ أداة خارجية. حصل على جائزة أفضل تطبيق إنتاجية 2023.',
    category: 'تطوير تطبيقات',
    date: '2024-01-10',
  },
  { 
    id: 11,
    image: pro11,
    title: 'حملة إعلانية مبتكرة بتقنية AR',
    image_main: image1,
    sub_1: sub1,
    sub_2: sub2,
    sub_3: sub3,
    description: 'دمج الواقع المعزز في الإعلانات الخارجية لعلامة سيارات فاخرة، مع تفاعل مباشر عبر الهواتف الذكية وتتبع التحويلات.',
    category: 'تصميم جرافيك',
    date: '2024-03-18',
  },
  { 
    id: 12,
    image: pro12,
    title: 'تحسين محركات البحث (SEO) لمحرك تكنولوجي',
    image_main: image1,
    sub_1: sub1,
    sub_2: sub2,
    sub_3: sub3,
    description: 'استراتيجية شاملة لتحسين الترتيب في محركات البحث، تضمنت تحليل الكلمات المفتاحية، تحسين الهيكل التقني، وإنشاء محتوى موجه.',
    category: 'تسويق رقمي',
    date: '2024-02-10',
  },
  { 
    id: 13,
    image: pro13,
    title: 'منصة توظيف ذكاء اصطناعي',
    image_main: image1,
    sub_1: sub1,
    sub_2: sub2,
    sub_3: sub3,
    description: 'نظام مطابقة المرشحين مع الوظائف باستخدام تحليل السيرة الذاتية الذكي وتقييم المهارات عبر اختبارات تفاعلية.',
    category: 'تصميم ويب',
    date: '2024-04-12',
  },
  { 
    id: 14,
    image: pro14,
    title: 'تطبيق اللياقة البدنية الشخصي',
    image_main: image1,
    sub_1: sub1,
    sub_2: sub2,
    sub_3: sub3,
    description: 'مدرب افتراضي مع خوارزميات التكيف، تتبع اللياقة، وتكامل مع الأجهزة القابلة للارتداء. يدعم الواقع الافتراضي للتدريبات.',
    category: 'تطوير تطبيقات',
    date: '2024-03-05',
  },
  { 
    id: 15,
    image: pro15,
    title: 'هوية بصرية لاستوديو تصميم أزياء',
    image_main: image1,
    sub_1: sub1,
    sub_2: sub2,
    sub_3: sub3,
    description: 'تصميم مبتكر يعكس الأناقة والحداثة، مع نظام حركي تفاعلي للعروض الافتراضية.',
    category: 'تصميم جرافيك',
    date: '2024-02-28',
  },
  { 
    id: 16,
    image: pro16,
    title: 'حملة إعلانات مبرمجة لشركة سياحة',
    image_main: image1,
    sub_1: sub1,
    sub_2: sub2,
    sub_3: sub3,
    description: 'استهداف ديناميكي بناءً على تفضيلات المستخدمين والموقع الجغرافي مع تحويلات مباشرة للحجوزات عبر المنصة.',
    category: 'تسويق رقمي',
    date: '2024-04-01',
  },
  { 
    id: 17,
    image: pro17,
    title: 'موقع ويب لمؤسسة تعليمية رائدة',
    image_main: image1,
    sub_1: sub1,
    sub_2: sub2,
    sub_3: sub3,
    description: 'تصميم متجاوب مع نظام إدارة محتوى مخصص، تكامل مع منصة التعليم الإلكتروني، وتجربة مستخدم معربة بالكامل.',
    category: 'تصميم ويب',
    date: '2024-03-20',
  },
  { 
    id: 18,
    image: pro18,
    title: 'نظام إدارة الفنادق الذكي',
    image_main: image1,
    sub_1: sub1,
    sub_2: sub2,
    sub_3: sub3,
    description: 'حل متكامل لإدارة الحجوزات، الخدمات الفندقية، والتفاعل مع الضيوف عبر تطبيق مخصص.',
    category: 'تطوير تطبيقات',
    date: '2024-04-10',
  },
  { 
    id: 19,
    image: pro19,
    title: 'تصميم أغلفة كتب تفاعلية',
    image_main: image1,
    sub_1: sub1,
    sub_2: sub2,
    sub_3: sub3,
    description: 'مشروع تصميم جرافيكي مبتكر مع عناصر تفاعلية تعمل عبر تطبيق الهاتف المحمول.',
    category: 'تصميم جرافيك',
    date: '2024-03-25',
  },
  { 
    id: 20,
    image: pro20,
    title: 'استراتيجية تسويق محتوى لشركة تكنو-مالية',
    image_main: image1,
    sub_1: sub1,
    sub_2: sub2,
    sub_3: sub3,
    description: 'إنشاء محتوى تعليمي وتثقيفي مدعوم بتحليلات البيانات لزيادة الوعي بالعلامة التجارية بنسبة 150%.',
    category: 'تسويق رقمي',
    date: '2024-04-05',
  },
];

export default worksData;
