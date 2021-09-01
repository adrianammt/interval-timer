import { toast } from "react-toast";

export default function toastSavedMessage(message) {
  toast(message, {
    backgroundColor: "#0087ac",
    color: "#ffffff",
  });
}
