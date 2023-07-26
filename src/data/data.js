import { GrInProgress } from "react-icons/gr";
import { BsClipboard2Data } from "react-icons/bs";
import { SiPytest } from "react-icons/si";
import { MdCloudDone } from "react-icons/md";
export const earningData = [
  {
    icon: <GrInProgress />,
    amount: "",
    percentage: "۴%",
    title: "در حال انجام",
    iconcolor: "#03C9D7",
    iconBg: "#E5FAFB",
    pcColor: "red-600",
  },
  {
    icon: <BsClipboard2Data />,
    amount: "",
    percentage: "۲۳%",
    title: "انجام شده",
    iconColor: "rgb(255, 244, 229)",
    iconBg: "rgb(254, 201, 15)",
    pcColor: "green-600",
  },
  {
    icon: <SiPytest />,
    amount: "",
    percentage: "۳۸%",
    title: "بررسی",
    iconColor: "rgb(228, 106, 118)",
    iconBg: "rgb(255, 244, 229)",

    pcColor: "green-600",
  },
  {
    icon: <MdCloudDone />,
    amount: "",
    percentage: "۱۲%",
    title: "پایان یافته",
    iconColor: "rgb(0, 194, 146)",
    iconBg: "rgb(235, 250, 242)",
    pcColor: "red-600",
  },
];
export const convertToPersianNumbers = (number) => {
  const persianDigits = "۰۱۲۳۴۵۶۷۸۹";
  return String(number).replace(/\d/g, (digit) => persianDigits[digit]);
};
export const projects = [
  {
    id: convertToPersianNumbers(1),
    title: "استانداردها، کاربردها و نقشه راه ارتباطات رادیویی",
    owner: "د. ویسی",
    nazerElmi: "م. علی احمدی",
    progress: 16,
  },
  {
    id: convertToPersianNumbers(2),
    title: "استانداردها، کاربردها و نقشه راه ارتباطات رادیویی",
    owner: "د. ویسی",
    nazerElmi: "م. علی احمدی",
    progress: 90,
  },
  {
    id: convertToPersianNumbers(3),
    title: "استانداردها، کاربردها و نقشه راه ارتباطات رادیویی",
    owner: "د. ویسی",
    nazerElmi: "م. علی احمدی",
    progress: 87,
  },
  {
    id: convertToPersianNumbers(4),
    title: "استانداردها، کاربردها و نقشه راه ارتباطات رادیویی",
    owner: "د. ویسی",
    nazerElmi: "م. علی احمدی",
    progress: 23,
  },
  {
    id: convertToPersianNumbers(5),
    title: "استانداردها، کاربردها و نقشه راه ارتباطات رادیویی",
    owner: "د. ویسی",
    nazerElmi: "احسان خیام باشی",
    progress: 55,
  },
  // {
  //   id: 2,
  //   img: "https://www.pngmart.com/files/6/Dell-Laptop-PNG-Image.png",
  //   title: "نملتنلغبل",
  //   owner: "black",
  //   producer: "Dell",
  //   price: "$499.99",
  //   createdAt: "01.02.2023",
  //   inStock: true,
  // },
  // {
  //   id: 3,
  //   img: "http://images.samsung.com/is/image/samsung/uk-led-tv-hg40ed670ck-hg40ed670ckxxu-001-front",
  //   title: "Samsung TV 4K SmartTV",
  //   owner: "gray",
  //   producer: "Samsung",
  //   price: "$999.49",
  //   createdAt: "01.02.2023",
  //   inStock: true,
  // },
  // {
  //   id: 4,
  //   img: "https://raylo.imgix.net/iphone-14-blue.png",
  //   title: "Apple Iphone 14 Pro Max",
  //   owner: "white",
  //   producer: "Apple",
  //   price: "$799.49",
  //   createdAt: "01.02.2023",
  //   inStock: true,
  // },
  // {
  //   id: 5,
  //   img: "https://www.signify.com/b-dam/signify/en-aa/about/news/2020/20200903-movie-night-essentials-popcorn-ice-cream-and-the-new-philips-hue-play-gradient-lightstrip/packaging-lighstrip.png",
  //   title: "Philips Hue Play Gradient",
  //   owner: "rainbow",
  //   producer: "Philips",
  //   price: "$39.99",
  //   createdAt: "01.02.2023",
  // },
  // {
  //   id: 6,
  //   img: "https://www.smartworld.it/wp-content/uploads/2019/09/High_Resolution_PNG-MX-Master-3-LEFT-GRAPHITE.png",
  //   title: "Logitech MX Master 3",
  //   owner: "black",
  //   producer: "Logitech",
  //   price: "$59.49",
  //   createdAt: "01.02.2023",
  //   inStock: true,
  // },
  // {
  //   id: 7,
  //   img: "https://www.pngarts.com/files/7/Podcast-Mic-PNG-Picture.png",
  //   title: "Rode Podcast Microphone",
  //   owner: "gray",
  //   producer: "Rode",
  //   price: "$119.49",
  //   createdAt: "01.02.2023",
  // },
  // {
  //   id: 8,
  //   img: "https://5.imimg.com/data5/SW/VM/MY-5774620/toshiba-split-ac-2-ton-3-star-rated-ras-24s3ks-500x500.png",
  //   title: "Toshiba Split AC 2",
  //   owner: "white",
  //   producer: "Toshiba",
  //   price: "$899.99",
  //   createdAt: "01.02.2023",
  //   inStock: true,
  // },
  // {
  //   id: 9,
  //   img: "https://img.productz.com/review_image/102489/preview_sony-kdl-50w800b-50-inch-hdtv-review-superb-picture-102489.png",
  //   title: "Sony Bravia KDL-47W805A",
  //   owner: "black",
  //   producer: "Sony",
  //   price: "$970.49",
  //   createdAt: "01.02.2023",
  // },
  // {
  //   id: 10,
  //   img: "https://venturebeat.com/wp-content/uploads/2015/07/As_AO1-131_gray_nonglare_win10_03.png?fit=1338%2C1055&strip=all",
  //   title: "Acer Laptop 16 KL-4804",
  //   owner: "black",
  //   producer: "Acer",
  //   price: "$599.99",
  //   createdAt: "01.02.2023",
  //   inStock: true,
  // },
];
export const project = {};
