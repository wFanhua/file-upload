import { File } from "formidable";
import * as fs from "fs";
import { PORT, UPLOAD_DIR } from "../config";

export default class FileService {
  renameFile(file: File) {
    // path 是临时文件存储位置
    const { path, name } = file;
    const extAry = name.split(".");
    const ext = extAry[extAry.length - 1];
    const newPath = `${path}.${ext}`;
    const fileUrl = newPath.replace(
      new RegExp(`.*(${UPLOAD_DIR})`),
      `http://localhost:${PORT}/$1`
    );
    fs.renameSync(path, newPath);

    return fileUrl;
  }
}
