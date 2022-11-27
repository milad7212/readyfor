export const CategoryData = [
  // {
  //   name: "دفترچه خاک",
  //   link: "/foundation/main",
  //   content: "12",
  //   img: "/images/foundation/soilNote.webp",
  //   id: "",
  // },
  // {
  //   name: "مباحث",
  //   link: "/topics",
  //   content: "12",
  //   img: "/images/foundation/soilNote.webp",
  //   id: "",
  // },
  {
    name: "آزمون نظام",
    content: "12",
    img: "/images/foundation/soilNote.webp",
    link: "/test",
    id: "",
  },

  // {
  //   name: "میدان کار",
  //   content: "12",
  //   img: "/images/foundation/soilNote.webp",
  //   link: "/job",
  //   id: "",
  // },

  // {
  //   name: "آزمایشات عمران",
  //   content: "12",
  //   img: "/images/foundation/soilNote.webp",
  //   link: "",
  //   id: "",
  // },
];

export const StudySteps = [
  {
    title: "بررسی های مقدماتی",
    children: [
      { title: "شناسایی میدانی ساختگاه" },
      { title: "تاریخچه ساختگاه" },
      { title: "توپوگرافی منطقه" },
      { title: "وجود مناطق ناپایدار" },
      { title: "هیدرولوژی و هیدروژئولوژی" },
      { title: " بررسی محلی در خصوص سطح آب زیرزمینی" },
      { title: "بررسی ساختمان ها و حفاری های همجوار" },
      { title: "نقشه ها و مدارک زمین شناسی و زمین شناسی مهندسی موجود" },
      { title: "بررسی ساختمان ها و حفاری های همجوار" },
      { title: "نقشه ها و مدارک زمین شناسی و زمین شناسی مهندسی موجود" },
      { title: "بررسی های پیشین انجام شده در محدوده مورد نظر" },
      { title: " عکس های هوایی و ماهواره ای" },
      { title: "نقشه های قدیمی" },
      { title: "مستحدثات تحت الارضی ساختگاه" },
      { title: "لرزه خیزی منطقه" },
    ],
  },
  {
    title: "بررسی های طراحی",
    children: [
      { title: "طبقه بندی نوع خاک" },
      { title: "ارزیابی مقاومت برشی خاک و تغییر شکل پذیری خاک" },
      { title: "شناخت سطح آب زیرزمینی و توجه به خاک خای مسئله دار" },
      { title: "تعداد و فاصله گمانه ها" },
      { title: "عمق گمانه ها" },
      { title: "حفاری و نمونه برداری خاک" },
      { title: "آزمون های آزمایشگاهی" },
      { title: "آزمون های برجا" },
    ],
  },
];

export const topicImportanceOfBuilding = [
  {
    importance: 1,
    title: "ساختمان های با اهمیت خیلی زیاد",
    explain:
      "در این گروه , ساختمان هایی قرار دارند که قابل استفاده بودن آنها پس از وقوع زلزله اهمیت خاص دارد و وقفه در بهره برداری از آنها بطور غیرمستقیم موجب افزایش تلفات و خسارات میشود",
    samples: [
      "بیمارستانها و درمانگاه ها",
      "مراکز آتش نشانی",
      "مراکز و تاسیسات آبرسانی",
      "نیروگاه ها و تاسیسات برق رسانی",
      "رج های مراقبت فرودگاه ها",
      "مراکز مخابرات",
      "رادیو و تلویزیون",
      "تاسیسات انتظامی",
      "مراکز کمک رسانی",
      "ساختمان ها و تاسیساتی که خرابی آنها موجب انتشار گسترده مواد سمی و مضر در کوتاه مدت و دراز مدت برای محیط زیست می شوند",
    ],
  },
  {
    title: "ساختمانهای با اهمیت زیاد",
    importance: 1,
    explain:
      "ساختمان هایی که خرابی آنها موجب تلفات زیاد می شود، ساختمان هایی که خرابی آنها سبب از دست رفتن ثروت ملی می گردد و ساختمان ها و تاسیسات صنعتی که خرابی آنها موجب آلودگی محیط زیست و یا آتش سوزی    وسیع می شود",
    samples: [
      "مدارس",
      "مساجد",
      "استادیوم",
      "سینما و تئاتر",
      "سالن اجتماعات",
      "فروشگاه های بزرگ",
      "ترمینال های مسافربری",
      " هر فضای سر پوشیده که محل تجمع بیش از ۳۰۰ نفر باشد",
      "موزه ",
      "کتابخانه",
      "مراکزی که در آنها اسناد و مدارک ملی و یا آثار پر ارزش نگهداری می شود",
      "پالایشگاه ها",
      "انبارهای سوخت",
      "مراکز گاز رسانی",
    ],
  },
  {
    importance: 2,
    title: "ساختمانهای با اهمیت متوسط",
    explain:
      "این گروه ساختمان ها شامل کلیه ساختمان های مشمول این بخش, بجز ساختمان های عنوان شده در سه گروه دیگر می باشد",
    samples: [
      "ساختمان های مسکونی و اداری و تجاری",
      "هتلها",
      "پارکینگ های چند طبقه",
      "انبارها",
      "کارگاه ها",
      "ساختمان های غیر صنعتی",
    ],
  },
  {
    importance: 3,
    title: "ساختمانهای با اهمیت کم",
    explain:
      " ساختمان هایی که خسارت نسبتا کمی از خرابی آنها حادث می شود و احتمال بروز تلفات در    آنها بسیار کم است و ساختمان های موقت که مدت بهره برداری از آنها کمتر از 2 سال است.",
    samples: ["انبارهای کشاورزی", "سالنهای مرغداری"],
  },
];

export const testsData = [
  {
    number: 1,
    question:
      "کدام گزینه در مورد نحوه تشکیل و اداره مجمع عمومی نظام مهندسی استان صحیح است؟",
    option1: {
      text: "طبق شیوه نامه اي خواهد بود که به پیشنهاد شوراي مرکزي، توسط هیئت عمومی و توسط وزیر راه و شهرسازي تایید می شود.",
    },
    option2: {
      text: "طبق شیوه نامه اي خواهد بود که به پیشنهاد شوراي مرکزي، توسط وزارت راه و شهرسازي تصویب و تایید می شود.",
    },
    option3: {
      text: " طبق شیوه نامه اي خواهد بود که به پیشنهاد سازمان استان، توسط مجمع عمومی تصویب و توسط وزیر راه و شهرسازي تایید می شود.",
    },
    option4: {
      text: "طبق شیوه نامه اي خواهد بود که به پیشنهاد هیات مدیره استان به تصویب وزارت راه و شهرسازي می رسد.",
    },
  },
  {
    number: 2,
    question:
      "یکی از اعضاي دفاتر مهندسی که به صورت گروهی نقشه اي را براي اجرا تهیه کرده اند در قبال آن حق الزحمه اي دریافت نکرده است، چنانچه از امضاي نقشه ها استنکاف نماید به کدام یک از مجازات ها محکوم خواهد شد؟",
    option1: { text: "درجه دو تا درجه چهار" },
    option2: { text: "درجه یک تا درجه دو" },
    option3: { text: " درجه سه تا درجه پنج" },
    option4: { text: "به علت عدم دریافت حق الزحمه مجازاتی نخواهد داشت." },
  },
  {
    number: 3,
    question:
      "کدام یک از مجازات هاي زیر براي یکی از اعضاي سازمان نظام مهندسی ساختمان که به علت درج و انتشار مطالبی مغایر با اصول اخلاقی و شئون حرفه اي در شبکه هاي اجتماعی، محکوم شناخته شده است صحیح می باشد؟",
    option1: { text: "درجه یک تا درجه چهار" },
    option2: { text: "درجه سه تا درجه پنج" },
    option3: { text: "درجه دو تا درجه چهار" },
    option4: { text: "درجه دو تا درجه پنج" },
  },
  {
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },{
    number: 4,
    question:
      "جبهه مشرف به فضاي آزاد اتاق ترانسفورماتور در چه جهت مناسب تر می باشد؟",
    option1: { text: " شمال" },
    option2: { text: "جنوب" },
    option3: { text: "شرق" },
    option4: { text: "غرب" },
  },
  // {
  //   number: 1,
  //   question: "",
  //   option1: { text: "" },
  //   option2: { text: "" },
  //   option3: { text: "" },
  //   option4: { text: "" },
  // },
];

export const booksData = {
  1: {
    name: "تعاریف",
    count: "18",
    edit: "1392",
    image:'1.jpg'
    
  },
  2: {
    name: "نظامات اداری",
    count: "8",
    edit: "1384",
    image:'2.jpg'
  },
  3: {
    name: "حفاظت ساختمان ها در مقابل حریق",
    count: "18",
    edit: "1392",
    image:'1.jpg'
  },
  4: {
    name: "الزامات عمومی ساختمان",
    count: "65",
    edit: "1396",
    image:'1.jpg'
  },
  5: {
    name: "مصالح و فرآورده های ساختمانی",
    count: "61",
    edit: "1392",
    image:'1.jpg'
  },
  6: {
    name: "بارهای وارد بر ساختمان",
    count: "96",
    edit: "1392",
    image:'1.jpg'
  },
  7: {
    name: "ژئوتکنیک و مهندسی پی",
    count: "120",
    edit: "1400",
    image:'1.jpg'
  },
  8: {
    name: "طرح و اجرای ساختمان های با مصالح بنایی",
    count: "69",
    edit: "1398",
    image:'1.jpg'
  },
  9: {
    name: "طرح و اجرای ساختمانهای بتن آرمه",
    count: "232",
    edit: "1392",
    image:'1.jpg'
  },
  10: {
    name: "طرح و اجرای ساختمانهای فولادی",
    count: "385",
    edit: "1400",
    image:'1.jpg'
  },
  11: {
    name: "طرح و اجرای صنعتی ساختمان ها",
    count: "52",
    edit: "1400",
    image:'1.jpg'
  },
  12: {
    name: "ایمنی و حفاظت کار در حین اجر",
    count: "95",
    edit: "1392",
    image:'1.jpg'
  },
  13: {
    name: "طرح و اجرای تاسیسات برقی ساختمان ها",
    count: "19",
    edit: "1382",
    image:'1.jpg'
  },
  14: {
    name: "تاسیسات مکانیکی",
    count: "16",
    edit: "1391",
    image:'1.jpg'
  },
  15: {
    name: "آسانسورها و پلکان برقی",
    count: "19",
    edit: "1392",
    image:'1.jpg'
  },
  16: {
    name: "تاسیسات بهداشتی",
    count: "96",
    edit: "1391",
    image:'1.jpg'
  },
  17: {
    name: "لوله کشی گاز طبیعی",
    count: "63",
    edit: "1401",
    image:'1.jpg'
  },
  18: {
    name: "عایق بندی و تنطیم صدا",
    count: "14",
    edit: "1390",
    image:'1.jpg'
  },
  19: {
    name: "صرفه جویی در مصرف انرژی",
    count: "47",
    edit: "",
    image:'1.jpg'
  },
  20: {
    name: "علائم و تابلوها",
    count: "59",
    edit: "1384",
    image:'1.jpg'
  },
  21: {
    name: "پدافند غیرعامل",
    count: "65",
    edit: "1391",
    image:'1.jpg'
  },
  22: {
    name: "",
    count: "",
    edit: "",
    image:'1.jpg'
  },
};
