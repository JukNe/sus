FROM node:16

WORKDIR /app

COPY ["package.json", "package-lock.json", "tsconfig.json", ".env", "./"]
RUN ls -a

COPY ./src ./src


RUN npm install

RUN npm run build


EXPOSE 8080

CMD [ "node", "build/index.js" ]
