FROM strapi/base

# Let WatchTower know to ignore this container for checking
LABEL com.centurylinklabs.watchtower.enable="false"

WORKDIR /app

COPY ./package*.json ./

RUN npm ci

RUN NODE_ENV=production npm run build

COPY . .

EXPOSE 80

CMD ["npm", "start"]
