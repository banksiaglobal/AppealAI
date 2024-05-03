FROM node:18 as node

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

# Stage 2
FROM nginx:alpine

COPY --from=node /usr/src/app/dist/ui/browser /usr/share/nginx/html

COPY ./nginx.conf /etc/nginx/conf.d/default.conf
