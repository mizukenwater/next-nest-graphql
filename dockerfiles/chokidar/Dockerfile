FROM node:18.12.1

RUN npm install -g npm@9.1.2

WORKDIR /usr/app

RUN yarn global add chokidar-cli

WORKDIR /usr/app/api

CMD [ "yarn", "sync" ]