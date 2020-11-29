#  docker build -t mpetrus/task-management-react:latest .

FROM node:latest

ENV NODE_ENV=production

WORKDIR /app

COPY ["package.json", "package-lock.json", "./"]

RUN npm install --production

COPY ["./public", "./public"]
COPY ["./src", "./src"]

RUN npm run build

EXPOSE 3000
