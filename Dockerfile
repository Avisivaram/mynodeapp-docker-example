FROM node:latest
FROM mysql:latest
RUN mkdir -p /home/app
COPY . /home/app
CMD ["node","/home/app/index.js"]