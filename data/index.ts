import { links } from "@/config";

export const navItems = [
  { name: "Тухай", link: "#about" },
  { name: "Бүтээлүүд", link: "#projects" },
  { name: "Сэтгэгдэл", link: "#testimonials" },
  { name: "Холбоо барих", link: "#contact" },
] as const;

export const gridItems = [
  {
    id: 1,
    title: "Үйлчлүүлэгчийн хамтын ажиллагаа болон нээлттэй харилцааг чухалчилдаг ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Цагийн бүсээс үл хамааран уян хатан харилцаж ажиллах боломжтой",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Миний ашигладаг программ",
    description: "Тасралтгүй суралцаж, чадвараа ахиулахыг эрмэлздэг",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Технологийн хорхойтон бөгөөд хөгжүүлэлт хийх чин хүсэл эрмэлзэлтэй.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Одоогоор автоматжуулалт AI(chatbot payment) хөгжүүлж байна",
    description: "Дотоод явц",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Хамтран төсөл эхлүүлэхийг хүсэж байна уу?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
] as const;

export const projects = [
  {
    id: 1,
    title: "Хамтын ажиллагааны дизайны хэрэгсэл",
    des: "Бодит хугацааны хамтын ажиллагаа, вектор засварлагч, уян хатан (responsive) UI бүхий дизайны хэрэгсэл.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://clone-figmaa.netlify.app",
    sourceCode: "https://github.com/aalz3/corel-clone",
  },
  {
    id: 2,
    title: "Yoom - Видео хурлын аппликейшн",
    des: "Yoom-ийн тусламжтайгаар видео хурлын туршлагаа хялбарчил. Хамтран ажиллагсад болон найз нөхөдтэйгөө саадгүй холбогдоорой.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://clone-yoom.netlify.app",
    sourceCode: "https://github.com/aalz3/zoom-clone",
  },
  {
    id: 3,
    title: "Corel draw программ",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://ai-imaginify.netlify.app",
    sourceCode: "https://github.com/aalz3/imaginify",
  },
  {
    id: 4,
    title: "Apple iPhone 3D хөдөлгөөнт вэбсайт",
    des: "GSAP болон Three.js 3D эффектүүдийг хослуулан Apple iPhone 15 Pro вэбсайтыг дахин бүтээв.",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://app-iphone.netlify.app",
    sourceCode: "https://github.com/aalz3/apple-clone",
  },
] as const;

export const testimonials = [
  {
     quote: `Гоё байна ${links.ownerName} хамтран ажиллахад үнэхээр таатай байлаа. Түүний мэргэжлийн ур чадвар, шуурхай байдал болон гайхалтай үр дүнд хүрэхийн төлөөх тууштай хичээл зүтгэл нь төслийн туршид илт байсан. ${links.ownerName}'Хөгжүүлэлтийн алхам бүрт гаргаж буй түүний урам зориг нь бидний төслийг амжилттай болоход, ${links.ownerName}гол нөлөө үзүүлсэн.`,
    name: "Номин",
    title: "Эко өнгө",
  },
  {
      quote: `Гоё байна ${links.ownerName} хамтран ажиллахад үнэхээр таатай байлаа. Түүний мэргэжлийн ур чадвар, шуурхай байдал болон гайхалтай үр дүнд хүрэхийн төлөөх тууштай хичээл зүтгэл нь төслийн туршид илт байсан. ${links.ownerName}'Хөгжүүлэлтийн алхам бүрт гаргаж буй түүний урам зориг нь бидний төслийг амжилттай болоход, ${links.ownerName}гол нөлөө үзүүлсэн.`,
    name: "Номин",
    title: "Эко өнгө",
  },
  {
    quote: `Гоё байна ${links.ownerName} хамтран ажиллахад үнэхээр таатай байлаа. Түүний мэргэжлийн ур чадвар, шуурхай байдал болон гайхалтай үр дүнд хүрэхийн төлөөх тууштай хичээл зүтгэл нь төслийн туршид илт байсан. ${links.ownerName}'Хөгжүүлэлтийн алхам бүрт гаргаж буй түүний урам зориг нь бидний төслийг амжилттай болоход, ${links.ownerName}гол нөлөө үзүүлсэн.`,
    name: "Номин",
    title: "Эко өнгө",
  },
  {
      quote: `Гоё байна ${links.ownerName} хамтран ажиллахад үнэхээр таатай байлаа. Түүний мэргэжлийн ур чадвар, шуурхай байдал болон гайхалтай үр дүнд хүрэхийн төлөөх тууштай хичээл зүтгэл нь төслийн туршид илт байсан. ${links.ownerName}'Хөгжүүлэлтийн алхам бүрт гаргаж буй түүний урам зориг нь бидний төслийг амжилттай болоход, ${links.ownerName}гол нөлөө үзүүлсэн.`,
    name: "Номин",
    title: "Эко өнгө",
  },
  {
     quote: `Гоё байна ${links.ownerName} хамтран ажиллахад үнэхээр таатай байлаа. Түүний мэргэжлийн ур чадвар, шуурхай байдал болон гайхалтай үр дүнд хүрэхийн төлөөх тууштай хичээл зүтгэл нь төслийн туршид илт байсан. ${links.ownerName}'Хөгжүүлэлтийн алхам бүрт гаргаж буй түүний урам зориг нь бидний төслийг амжилттай болоход, ${links.ownerName}гол нөлөө үзүүлсэн.`,
    name: "Номин",
    title: "Эко өнгө",
  },
] as const;

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
] as const;

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
] as const;

export const socialMedia = [
  {
    name: "GitHub",
    img: "/git.svg",
    link: "https://github.com/sanidhyy",
  },
  {
    name: "Twitter",
    img: "/twit.svg",
    link: "https://twitter.com/TechnicalShubam",
  },
  {
    name: "LinkedIn",
    img: "/link.svg",
    link: "https://www.linkedin.com/in/sanidhyy",
  },
] as const;

export const techStack = {
  stack1: ["React.js", "Next.js", "Typescript"],
  stack2: ["Vue.js", "AWS", "MongoDB"],
} as const;
