FROM oven/bun
WORKDIR /
COPY . .
EXPOSE 5000
ENTRYPOINT ["bun", "build/server.js"]