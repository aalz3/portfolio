import { links } from "@/config";

/* ================= NAVIGATION ================= */
export const navItems = [
  { name: "Тухай", link: "#about" },
  { name: "Бүтээлүүд", link: "#projects" },
  { name: "Холбоо барих", link: "#contact" },
] as const;

/* ================= GRID ================= */
export const gridItems = [
  {
    id: 1,
    title: "Үйлчлүүлэгчийн хамтын ажиллагаа болон нээлттэй харилцааг чухалчилдаг",
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
    title: "Технологийн хорхойтон бөгөөд хөгжүүлэлт хийх чин хүсэл эрмэлзэлтэй",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "Одоогоор автоматжуулалт AI (chatbot payment) хөгжүүлж байна",
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

/* ================= PROJECTS ================= */
export const projects = [
  {
    id: 1,
    title: "Хамтын ажиллагааны дизайны хэрэгсэл",
    des: "Бодит хугацааны хамтын ажиллагаа, вектор засварлагч, responsive UI бүхий дизайны хэрэгсэл.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://clone-figmaa.netlify.app",
    sourceCode: "https://github.com/aalz3/corel-clone",
  },
  {
    id: 2,
    title: "Yoom - Видео хурлын аппликейшн",
    des: "Видео хурлыг хялбар болгох, найз нөхөд болон багтайгаа саадгүй холбогдох боломжтой.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://clone-yoom.netlify.app",
    sourceCode: "https://github.com/aalz3/zoom-clone",
  },
  {
    id: 3,
    title: "Corel draw программ",
    des: "AI-д суурилсан, төлбөрийн системтэй программ.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://ai-imaginify.netlify.app",
    sourceCode: "https://github.com/aalz3/imaginify",
  },
  {
    id: 4,
    title: "Apple iPhone 3D хөдөлгөөнт вэбсайт",
    des: "GSAP болон Three.js ашигласан 3D animation бүхий iPhone 15 Pro сайт.",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://app-iphone.netlify.app",
    sourceCode: "https://github.com/aalz3/apple-clone",
  },
] as const;

/* ================= TESTIMONIALS ================= */
export const testimonials = [
  {
    quote: "Баасансугар манай брэндийн төрхийг маш өвөрмөцөөр тодорхойлж өгсөн.",
    name: "А.Тэмүүлэн",
    title: "Үүсгэн байгуулагч",
  },
  {
    quote: "Бид олон механик ажлыг автоматжуулж чадсан. AI чатбот маш их тус болсон.",
    name: "Г.Золбоо",
    title: "Үйл ажиллагааны захирал",
  },
  {
    quote: `${links.ownerName} Маш нухацтай, зорилготой ажилладаг залуу. Санаачлагатай.`,
    name: "О.Уянга",
    title: "Төслийн менежер",
  },
] as const;

/* ================= COMPANIES ================= */
export const companies = [
  { id: 1, name: "cloudinary", img: "/cloud.svg", nameImg: "/cloudName.svg" },
  { id: 2, name: "appwrite", img: "/app.svg", nameImg: "/appName.svg" },
  { id: 3, name: "HOSTINGER", img: "/host.svg", nameImg: "/hostName.svg" },
  { id: 4, name: "stream", img: "/s.svg", nameImg: "/streamName.svg" },
  { id: 5, name: "docker", img: "/dock.svg", nameImg: "/dockerName.svg" },
] as const;

/* ================= EXPERIENCE ================= */
export const workExperience = [
  {
    id: 1,
    title: "График дизайнер",
    desc: "Лого, брэнд болон хэвлэлийн эх бэлтгэл.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Автоматжуулалтын хөгжүүлэгч",
    desc: "n8n болон AI ашиглан бизнес процессыг автоматжуулдаг.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
] as const;

/* ================= SOCIAL ================= */
export const socialMedia = [
  { id: 1, name: "Facebook", img: "/f.svg", link: "https://www.facebook.com/sugara123/" },
  { id: 2, name: "Instagram", img: "/insta.svg", link: "https://www.instagram.com/bold_sugaraa/" },
  { id: 3, name: "Email", img: "/mail.svg", link: "mailto:jackshdee@gmail.com" },
  { id: 4, name: "Call", img: "/phone.svg", link: "tel:+97680788989" },
] as const;

/* ================= TECH STACK ================= */
export const techStack = {
  stack1: ["n8n", "Automation", "AI Agents"],
  stack2: ["CorelDRAW", "Photoshop", "3D Interior"],
} as const;