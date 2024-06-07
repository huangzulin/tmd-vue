Telegram Media Downloader 的前端页面。结合   [huangzulin/tmd](https://github.com/huangzulin/tmd) 使用


## 安装依赖

```sh
npm install
```

### 开发时运行

```sh
npm run dev
```

### 为生产环境编译

```sh
npm run build
```


### 构建

构建多平台docker镜像

```shell
docker buildx create --name tmd-vue-builder
docker buildx use tmd-vue-builder
docker buildx build --push --platform linux/arm64,linux/amd64 -t huangzulin/tmd-vue:latest .
```