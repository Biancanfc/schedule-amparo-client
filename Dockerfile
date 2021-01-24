FROM node:12

WORKDIR /front

COPY package*.json ./

# install node packages
# RUN yarn install
RUN npm install -g yarn --force
RUN yarn install


COPY . .

CMD [ "yarn", "start" ]

