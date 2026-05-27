FROM node:22
RUN mkdir -p ai-based-crop-monitoring-system

WORKDIR /ai-based-cropmonitoring-system
COPY . /ai-based-cropmonitoring-system
RUN npm install
EXPOSE 5173
CMD ["npm","run","dev","--","--host","0.0.0.0","--port","3000"]