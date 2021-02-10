import { toast } from "react-toastify";

export const NotifyLanded = () =>
  toast.success("Sick! You Landed It!", {
    position: "top-center",
    autoClose: 2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

export const NotifyBailed = () =>
  toast.error("Bummer! You Bailed It!", {
    position: "top-center",
    autoClose: 2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
