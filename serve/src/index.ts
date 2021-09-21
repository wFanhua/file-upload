import * as Koa from "koa";
import * as Router from "koa-router";
import * as bodyParser from "koa-body";
import * as serve from "koa-static";
import * as path from "path";
import { PORT, UPLOAD_DIR, STATIC_DIR } from "./config";
import appRoutes from "./routes";

const app = new Koa();
const router = new Router();
// appRoutes.forEach((route) => router[route.method](route.path, route.action));
// app.use(
//   bodyParser({
//     multipart: true,
//     formidable: {
//       // 指定请求体中，文件临时存储路径
//       uploadDir: path.resolve(__dirname, UPLOAD_DIR),
//     },
//   })
// );
// app.use(router.routes());
// app.use(router.allowedMethods());
app.use(
  serve(path.resolve(__dirname), {
    maxAge: 7 * 24 * 60 * 60 * 1000,
  })
);
app.listen(PORT);
console.log(`应用启动成功 端口:${PORT}`);
