FROM node:12.18.4-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./

RUN npm install

COPY . ./

EXPOSE 3000

CMD ["npm", "start"]



# to run the project
# 
# sudo docker build -t vivino-react-clone .
# sudo docker run -p 3000:3000 vivino-react-clone