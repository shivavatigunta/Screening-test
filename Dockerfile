#Grab the latest alpine image
FROM node:8.5.0-alpine

#Maintainer.
MAINTAINER Shiva <shiva.network559@gmail.com>
    
#Create app directory in container
RUN mkdir -p /usr/src/app

#Set app directory as default working directory
WORKDIR /usr/src/app

#Copy app source
COPY . /usr/src/app

#Install app dependencies
RUN yarn install

#Expose is NOT supported by Heroku
EXPOSE 8080

#Run the app
CMD ["npm", "start"]


