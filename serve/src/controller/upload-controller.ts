import { Files } from "formidable";
import FileService from "../service/file-service";

class UploadController {
  private fileService: FileService = new FileService();

  form = async (ctx) => {
    const files = ctx.request.files as Files;
    const file = files.f1;
    if (Array.isArray(file)) {
      const urls = file.map(this.fileService.renameFile);
      ctx.body = {
        f1: urls,
      };
    } else {
      const url = this.fileService.renameFile(file);
      ctx.body = {
        f1: url,
      };
    }
  };
}

export default new UploadController();
