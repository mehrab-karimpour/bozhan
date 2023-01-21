FROM node:18-alpine
WORKDIR /
COPY . .
RUN yarn install --production
CMD ["node", "build/server.js"]
EXPOSE 5000