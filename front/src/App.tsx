import { defineComponent } from "vue";
import "./App.scss";

export default defineComponent({
  name: "App",
  render() {
    return (
      <div>
        <h1>前端文件上传操作</h1>
        <h2>表单上传Demo</h2>
        <form
          method="post"
          action="http://localhost:3000/upload/form"
          enctype="multipart/form-data"
        >
          {/* input 必须设置 name 属性，否则数据无法发送 */}
          选择文件: <input type="file" name="f1" />
          <br />
          标题：
          <input type="text" name="title" />
          <br />
          <button type="submit" id="btn-0">
            上 传
          </button>
        </form>
      </div>
    );
  },
});
