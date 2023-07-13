import { IconType } from "react-icons";
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";

interface Link {
  id: number;
  title: string;
  route: string;
}

type FooterUsefulLinks = Link[][];

interface socialMediaType {
  id: number;
  title: string;
  route: string;
  icon: IconType;
}

const footerUsefulLinks: FooterUsefulLinks = [
  [
    {
      id: 1,
      title: "About",
      route: "",
    },
    {
      id: 2,
      title: "Careers",
      route: "",
    },
    {
      id: 3,
      title: "Blog",
      route: "",
    },
    {
      id: 4,
      title: "Press",
      route: "",
    },
    {
      id: 5,
      title: "lead",
      route: "",
    },
    {
      id: 6,
      title: "Value",
      route: "",
    },
  ],
  [
    {
      id: 1,
      title: "Privacy",
      route: "",
    },
    {
      id: 2,
      title: "Terms",
      route: "",
    },
    {
      id: 3,
      title: "FAQs",
      route: "",
    },
    {
      id: 4,
      title: "Security",
      route: "",
    },
    {
      id: 5,
      title: "Mobile",
      route: "",
    },
    {
      id: 6,
      title: "Contact",
      route: "",
    },
  ],
  [
    {
      id: 1,
      title: "Partner",
      route: "",
    },
    {
      id: 2,
      title: "Express",
      route: "",
    },
    {
      id: 3,
      title: "Seller",
      route: "",
    },
    {
      id: 4,
      title: "Spotlight",
      route: "",
    },
    {
      id: 5,
      title: "Warehouse",
      route: "",
    },
    {
      id: 6,
      title: "Deliver",
      route: "",
    },
  ],
];

const categoriesData: FooterUsefulLinks = [
  [
    {
      id: 1,
      title: "Vegetables & Fruits",
      route: "",
    },
    {
      id: 2,
      title: "Cold Drinks & Juices",
      route: "",
    },
    {
      id: 3,
      title: "Bakery & Biscuits",
      route: "",
    },
    {
      id: 4,
      title: "Dry Fruits, Masala & Oil",
      route: "",
    },
    {
      id: 5,
      title: "Paan Corner",
      route: "",
    },
    {
      id: 6,
      title: "Pharma & Wellness",
      route: "",
    },
    {
      id: 7,
      title: "Personal Care",
      route: "",
    },
  ],
  [
    {
      id: 1,
      title: "Dairy & Breakfast",
      route: "",
    },
    {
      id: 2,
      title: "Instant & Frozen Food",
      route: "",
    },
    {
      id: 3,
      title: "Sweet Tooth",
      route: "",
    },
    {
      id: 4,
      title: "Sauces & Spreads",
      route: "",
    },
    {
      id: 5,
      title: "Organic & Premium",
      route: "",
    },
    {
      id: 6,
      title: "Cleaning Essentials",
      route: "",
    },
    {
      id: 7,
      title: "Ice Creams & Frozen Desserts",
      route: "",
    },
  ],
  [
    {
      id: 1,
      title: "Munchies",
      route: "",
    },
    {
      id: 2,
      title: "Tea, Coffee & Health Drinks",
      route: "",
    },
    {
      id: 3,
      title: "Atta, Rice & Dal",
      route: "",
    },
    {
      id: 4,
      title: "Chicken, Meat & Fish",
      route: "",
    },
    {
      id: 5,
      title: "Baby Care",
      route: "",
    },
    {
      id: 6,
      title: "Home & Office",
      route: "",
    },
    {
      id: 7,
      title: "Pet Care",
      route: "",
    },
  ],
];

const socialMedias: socialMediaType[] = [
  {
    id: 1,
    icon: BsFacebook,
    title: "Facebook",
    route: "",
  },
  {
    id: 2,
    icon: BsTwitter,
    title: "Twitter",
    route: "",
  },
  {
    id: 3,
    icon: BsInstagram,
    title: "Instagram",
    route: "",
  },
  {
    id: 4,
    icon: BsLinkedin,
    title: "Linkedin",
    route: "",
  },
];

export { footerUsefulLinks, categoriesData, socialMedias };
