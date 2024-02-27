FROM node:20.11.0
LABEL maintaner "tomstoughton1@gmail.com"

WORKDIR /frontend

# To avoid "tzdata" asking for geographic area
ARG DEBIAN_FRONTEND=noninteractive

COPY . .

RUN npm install react react-dom

EXPOSE 3000

CMD ["npm", "run", "dev"]