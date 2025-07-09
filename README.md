# Rspack persistent bug

复现步骤

1. pnpm install && pnpm build
2. 修改 `rspack.config.js` 变更 entry 为 `./loader.js?pagePath=.%2Fb.js!`
3. 删除 `a.js` 文件
4. 执行 `pnpm build`

报错信息如下

```
RROR in  (./loader.js?pagePath=.%2Fb.js!)
  × Module not found: Can't resolve './b.js' in '/rspack-persistent-cache-bug'
   ╭─[2:12]
 1 │ import * as userland from "./b.js";
 2 │ console.log(userland);
   ·             ────────
   ╰────
```
