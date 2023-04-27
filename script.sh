echo Init Process!
echo ==============================
echo start MicroService Historic
echo ==============================
cd historic
docker-compose up -d
cd ../
echo ==============================
echo start MicroService Login
cd login
docker-compose up -d
cd ../
echo ==============================
echo install API Gateway!
cd api-gateway
npm install
echo ==============================
echo start API Gateway!
cd api-gateway
npm run start
echo ==============================
