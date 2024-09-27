import { CALL_ICON, CHAT_ICON, EMAIL_ICON, MESSAGE_ICON } from "../utils/constants";

export type ContactData = {
  id: number;
  icon: any;
  title: string;
  description: string;
};
export const contactData: ContactData[] = [
  {
    id: 1,
    icon: CALL_ICON,
    title: "Call",
    description: "012-345-6789",
  },
  {
    id: 2,
    icon: EMAIL_ICON,
    title: "Email",
    description: "Contact us",
  },
  {
    id: 3,
    icon: CHAT_ICON,
    title: "Chat",
    description: "Chat Now",
  },
  {
    id: 4,
    icon: MESSAGE_ICON,
    title: "Message",
    description: "Support Now",
  },
];
