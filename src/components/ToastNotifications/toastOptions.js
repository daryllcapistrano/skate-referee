import { toast } from "react-toastify";

export const Landed = () =>
  toast.success("Sick! You Landed It!", {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

export const Bailed = () =>
  toast.error("Bummer! You Bailed It!", {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
