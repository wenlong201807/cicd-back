FROM node
LABEL name="cicd-back"
LABEL version="1.0"
COPY . /app
WORKDIR /app
RUN npm install
EXPOSE 6006
CMD npm run server