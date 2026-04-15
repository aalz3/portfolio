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
    quote: `${links.ownerName} манай брэндийн төрх байдлыг маш өвөрмөцөөр тодорхойлж өгсөн. Санаагаа дижитал болон физик хэлбэрт (хэвлэл) маш чанартай буулгадаг нь гайхалтай. Мэргэжлийн түвшинд ажиллахыг хүссэн хэн бүхэнд санал болгож байна.`,
    name: "А.Тэмүүлэн",
    title: "Үүсгэн байгуулагч",
  },
  {
    quote: `${links.ownerName} "Бид өмнө нь маш олон механик ажлыг гараар хийдэг байсан бол бүгдийг автоматжуулж чадлаа. n8n болон AI чатбот ашиглан манай борлуулалтын процессыг хөнгөвчилж өгсөнд маш их баярлалаа."`,
    name: "Г.Золбоо",
    title: "Үйл ажиллагааны захирал",
  },
  {
    quote: `${links.ownerName} маш нухацтай, зорилготой ажилладаг залуу. Олон үггүй ажилсаг.`,
    name: "О.Уянга",
    title: "Төслийн менежер",
  },
] as const;

export const companies = [
  { id: 1, name: "cloudinary", img: "/cloud.svg", nameImg: "/cloudName.svg" },
  { id: 2, name: "appwrite", img: "/app.svg", nameImg: "/appName.svg" },
  { id: 3, name: "HOSTINGER", img: "/host.svg", nameImg: "/hostName.svg" },
  { id: 4, name: "stream", img: "/s.svg", nameImg: "/streamName.svg" },
  { id: 5, name: "docker.", img: "/dock.svg", nameImg: "/dockerName.svg" },
] as const;

export const workExperience = [
  {
    id: 1,
    title: "График дизайнер",
    desc: "Брэндийн таних тэмдэг, лого болон хэвлэлийн бүх төрлийн эх бэлтгэлийг мэргэжлийн түвшинд гүйцэтгэдэг.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Автоматжуулалтын хөгжүүлэгч",
    desc: "n8n болон AI ашиглан бизнесийн процессыг хөнгөвчлөх, ухаалаг чатбот болон автомат системүүдийг хөгжүүлдэг.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "График дизайн & Эх бэлтгэл",
    desc: "Брэндийн лого, хэвлэлийн эх бэлтгэл болон 3D интерьер дизайны төслүүдийг захиалагчийн хүсэлд нийцүүлэн гүйцэтгэдэг.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Систем автоматжуулалтын хөгжүүлэгч",
    desc: "n8n болон AI агентууд ашиглан бизнесийн механик үйлдлүүдийг автоматжуулж, ажлын бүтээмжийг нэмэгдүүлэх шийдлүүдийг боловсруулдаг.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
] as const;

export const socialMedia = [
  { id: 1, name: "Facebook", img: "/f.svg", link: "https://www.facebook.com/sugara123/" },
  { id: 2, name: "Instagram", img: "/insta.svg", link: "https://www.instagram.com/bold_sugaraa/" },
  { id: 3, name: "Email", img: "/mail.svg", link: "mailto:jackshdee@gmail.com" },
  { id: 4, name: "Call", img: "/phone.svg", link: "tel:+97680788989" },
] as const;

export const techStack = {
  stack1: ["n8n", "Automation", "AI Agents"],
  stack2: ["CorelDRAW", "Photoshop", "3D Interior"],
} as const;