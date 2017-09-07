FROM node
RUN npm install -g serve
RUN mkdir -p /tmp/dependencies
COPY package.json /tmp/dependencies
RUN cd /tmp/dependencies && npm install
RUN mkdir -p /app
WORKDIR /app
RUN cp -r /tmp/dependencies/* /app
COPY server ./server
COPY public ./public
COPY src ./src
RUN npm run samples && npm run build
EXPOSE 5000
CMD serve -s build/
