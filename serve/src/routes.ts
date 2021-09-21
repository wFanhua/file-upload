import homeController from "./controller/home-controller";
import uploadController from "./controller/upload-controller";

export default [
  {
    path: "/upload/form",
    method: "post",
    action: uploadController.form,
  },
];
