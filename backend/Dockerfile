FROM node:17-alpine3.14
WORKDIR /backendPokedex
COPY . .
RUN npm install
ENV CARNET default
EXPOSE 2000
CMD ["npm","start"]