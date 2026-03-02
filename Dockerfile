FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install
RUN npm link
CMD ["offline-learn"]