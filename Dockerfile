FROM node:18-alpine
WORKDIR /
COPY . .
RUN npm install pm2 -g
CMD ["pm2-runtime", "build/server.js"]
EXPOSE 5000