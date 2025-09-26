import { IconType } from "react-icons";
import {
  IoHome,
  IoHomeOutline,
  IoCar,
  IoCarOutline,
  IoStar,
  IoStarOutline,
  IoPersonSharp,
  IoPersonOutline,
  IoTicket,
  IoTicketOutline,
  IoMailOpenSharp,
  IoMailUnreadOutline,
} from "react-icons/io5";

export type NavigationItem = {
  name: string;
  href: string;
  Icon: IconType;
  ActiveIcon: IconType;
};

const publicNavigation: NavigationItem[] = [
  {
    name: "Home",
    href: "/",
    Icon: IoHomeOutline,
    ActiveIcon: IoHome,
  },
  {
    name: "Vehicles",
    href: "/vehicles",
    Icon: IoCarOutline,
    ActiveIcon: IoCar,
  },
  {
    name: "Reviews",
    href: "/reviews",
    Icon: IoStarOutline,
    ActiveIcon: IoStar,
  },
  {
    name: "Contact",
    href: "/contact",
    Icon: IoMailUnreadOutline,
    ActiveIcon: IoMailOpenSharp,
  },
];

const userNavigation: NavigationItem[] = [
  {
    name: "Profile",
    href: "/profile",
    Icon: IoPersonOutline,
    ActiveIcon: IoPersonSharp,
  },
  {
    name: "Dashboard",
    href: "/user-dashboard",
    Icon: IoHomeOutline,
    ActiveIcon: IoHome,
  },
  {
    name: "Bookings",
    href: "/bookings",
    Icon: IoTicketOutline,
    ActiveIcon: IoTicket,
  },
];

const adminNavigation: NavigationItem[] = [
  {
    name: "Dashboard",
    href: "/admin-dashboard",
    Icon: IoHomeOutline,
    ActiveIcon: IoHome,
  },
  {
    name: "Manage Vehicles",
    href: "/manage-vehicles",
    Icon: IoCarOutline,
    ActiveIcon: IoCar,
  },
  {
    name: "Manage Bookings",
    href: "/manage-bookings",
    Icon: IoTicketOutline,
    ActiveIcon: IoTicket,
  },
];

const superAdminNavigation: NavigationItem[] = [
  {
    name: "Dashboard",
    href: "/superadmin-dashboard",
    Icon: IoHomeOutline,
    ActiveIcon: IoHome,
  },
  {
    name: "Manage Admins",
    href: "/manage-admins",
    Icon: IoPersonOutline,
    ActiveIcon: IoPersonSharp,
  },
  {
    name: "Manage Vehicles",
    href: "/manage-vehicles",
    Icon: IoCarOutline,
    ActiveIcon: IoCar,
  },
  {
    name: "Manage Bookings",
    href: "/manage-bookings",
    Icon: IoTicketOutline,
    ActiveIcon: IoTicket,
  },
  {
    name: "Reports",
    href: "/reports",
    Icon: IoStarOutline,
    ActiveIcon: IoStar,
  },
];

export const NAVIGATION = {
  public: publicNavigation,
  user: userNavigation,
  admin: adminNavigation,
  superAdmin: superAdminNavigation,
};
