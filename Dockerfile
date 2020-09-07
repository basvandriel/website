FROM node:alpine 

WORKDIR /app 

COPY package.json . 

RUN npm update 
RUN npm install

COPY . .

EXPOSE 8000

CMD ["npm", "run", "develop"]

