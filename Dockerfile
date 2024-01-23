FROM node:18-alpine As build
# ARG CT_ARTIFACTORY_TOKEN
# ARG VP_ARTIFACTORY_TOKEN

WORKDIR /usr/src/app

RUN apk add g++ make py3-pip

COPY package*.json ./
COPY .npmrc ./

COPY --chown=node:node . .

RUN npm install
RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

##### DEPLOY #####
FROM node:18-alpine As artifact

COPY --chown=node:node --from=build /usr/src/app/node_modules ./node_modules
COPY --chown=node:node --from=build /usr/src/app/dist ./dist
COPY --chown=node:node --from=build /usr/src/app/package*.json ./

CMD ["npm", "start"]