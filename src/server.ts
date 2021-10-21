import { serverHttp } from "./app";

serverHttp.listen(3001, () => {
  console.log("server online, running on port 3001");
});
