FROM tiensinh24/local-weather:latest
WORKDIR /src/app
COPY dist public
RUN npm install
ENV NODE_ENV=production
RUN  npm build