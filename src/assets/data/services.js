import drainCleaning from '/src/assets/services/drain-cleaning.png' //  تسليك الصرف الصحي
import drainCleaning2 from '/src/assets/Home/Services-Section/plumbing-work.svg' //  تسليك الصرف الصحي2
import repairDevices from '/src/assets/services/repair-devices.jpg'// تركيب و صيانة الاجهزة المنزلية
import repairDevices2 from '/src/assets/Home/Services-Section/bgcServices.png'// 2تركيب و صيانة الاجهزة المنزلية
import houseMadeMonth from '/src/assets/services/house-made.jpg' // عاملة منزلية بالشهر
import houseMadeMonth2 from '/src/assets/Home/Services-Section/women-cleaning.png' // 2عاملة منزلية بالشهر
import plumbing from '/src/assets/services/plumbing.jpg' //  السباكة
import plumbing2 from '/src/assets/services/plumb.png' //  السباكة2
import houseMadeHour from '/src/assets/services/house-made-hour.jpg' //  عاملة منزلية بالساعة
import houseMadeHour2 from '/src/assets/services/women-cleaning.png' //  عاملة منزلية بالساعة2
import cleanliness from '/src/assets/services/cleanliness.jpg' // النظافة
import antiBug from '/src/assets/services/anti-bug.jpg' //  مكافحة الحشرات
import airConditioning from '/src/assets/services/air-conditioning.jpg' // التكييف
import electricity from '/src/assets/services/electricity.jpg' // الكهرباء
import sterlisation from '/src/assets/services/sterlisation.jpg' // التعقيم
import satelite from '/src/assets/services/satelite.jpg' // ساتلايت ورسيفر
import carpentry from '/src/assets/services/carpentry.jpg' //  نجارة و تركيب أثاث
import { FaWrench, FaBroom } from 'react-icons/fa';

export const services = [
    {
        id: 1,
        image: drainCleaning,
        image2: drainCleaning2,
        title: 'تسليك الصرف الصحي',
        description:
            'التعريف بخدمة تسليك الصرف الصحي وهي عبارة عن الخدمة الخاصة بفتح انسداد مواسير الصرف الصحي في…',
        icon: 'FaWrench',
    },
    {
        id: 2,
        image: repairDevices,
        image2: repairDevices2,
        title: 'تركيب و صيانة الاجهزة المنزلية',
        description:
            'التعريف بخدمة تركيب و صيانة الاجهزة المنزلية إن الهدف الأساسي من خدمة تركيب و صيانة الأجهزة…',
        icon: "<FaWrench className='text-blue-500 text-3xl' />",
    },
    {
        id: 3,
        image: houseMadeMonth,
        image2: houseMadeMonth2,
        title: 'عاملة منزلية بالشهر',
        description:
            'عاملة منزلية بالشهر تم تدريبها بكفاءة عالية لتساعدكِ على القيام بأعمال البيت كما يجب، قد تعتبر…',
        icon: "<FaWrench className='text-yellow-400 text-3xl' />",
    },
    {
        id: 4,
        image: plumbing,
        image2: plumbing2,
        title: ' السباكة',
        description:
            'يقوم السبّاك من تطبيق بيتك بسباكة المنزل على قدر عالٍ من المسؤولية والكفاءة. حيث أن مهام…',
        icon: "<FaWrench className='text-yellow-400 text-3xl' />",
    },
    {
        id: 5,
        image: houseMadeHour,
        image2: houseMadeHour2,
        title: ' عاملات نظافة بالساعة',
        description:
            'عاملات نظافة نسائية مدربة تساعدك بالقيام بأعمال البيت بأفضل طريقة. نعلم تمامًا سيدتي أن مهام المنزل…',
        icon: "<FaWrench className='text-yellow-400 text-3xl' />",
    },
    {
        id: 6,
        image: cleanliness,
        title: 'النظافة ',
        description:
            'تشمل خدمة النظافة تنظيف كل من الأثاث وخزانات المياه وتلميع السيراميك بشكل احترافي لضمان راحة بالك. …',
        icon: "<FaWrench className='text-yellow-400 text-3xl' />",
    },
    {
        id: 7,
        image: antiBug,
        title: 'مكافحة الحشرات والطيور ',
        description:
            'التعريف بخدمة مكافحة الحشرات والطيور تشمل خدمة مكافحة الحشرات والطيور كل من الأدوات والأساليب التي يستخدمها…',
        icon: "<FaWrench className='text-yellow-400 text-3xl' />",
    },
    {
        id: 8,
        image: airConditioning,
        title: 'التكييف ',
        description:
            'صيانة وتنظيف وحدات التكييف الداخلية والخارجية وتعبئة الفريون والتأكد من عمل المكيف بكفاءة عالية. تفاصيل أخرى…',
        icon: "<FaWrench className='text-yellow-400 text-3xl' />",
    },
    {
        id: 9,
        image: electricity,
        title: ' الكهرباء',
        description:
            'يقوم فني الكهرباء من تطبيق بيتك بتحديد ماهية المشكلة المتواجدة في المنزل أو المنشأة وبالتالي تقديم…',
        icon: "<FaWrench className='text-yellow-400 text-3xl' />",
    },
    {
        id: 10,
        image: sterlisation,
        title: ' التعقيم',
        description:
            'التعريف بخدمة التعقيم: تعد خدمة التعقيم أكثر الخدمات الضرورية والتي لا بد أن يحصل عليها أصحاب…',
        icon: "<FaWrench className='text-yellow-400 text-3xl' />",
    },
    {
        id: 11,
        image: satelite,
        title: ' ساتلايت ورسيفر',
        description:
            'التعريف بخدمة ستالايت ورسيفر: فني ساتلايت ورسيفر من تطبيق بيتك يقوم بتركيب الدش وتصليحه وبرمجة الرسيفر…',
        icon: "<FaWrench className='text-yellow-400 text-3xl' />",
    },
    {
        id: 12,
        image: carpentry,
        title: 'نجارة و تركيب أثاث ',
        description:
            'التعريف بخدمة نجارة وتركيب أثاث: تتضمن نجارة وتركيب أثاث المنزل أو المنشأة العديد من المهام التي…',
        icon: "<FaWrench className='text-yellow-400 text-3xl' />",
    }

];
