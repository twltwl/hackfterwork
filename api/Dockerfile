FROM node:8

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install dependencies
ADD package.json ./
ADD package-lock.json ./
RUN npm install

# Copy source
COPY . ./

CMD ["node", "app.js"]