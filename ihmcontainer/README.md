ng build --prod
docker build -t angular-app .
docker run -it --rm -p 9000:80 angular-app
