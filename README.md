# Steps to run the project



## Table of Contents

- [Installation](#installation)
- [Dependency installation](#Dependency)
- [Running the Server](#running-the-server)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)


## Installation

1. Clone the repository:

   ```bash
   git clone [https://github.com/your-username/your-repository-name.git](https://github.com/zakie2003/Hospital-Service.git)

2. Dependency installation:
   ```bash
   npm install

4. Running the Server
   ```bash
   node index.js

5. Enviroment Variable
   ```bash
   MONGODB_URL=ENTER_YOUR_MONGODB_URL

6. API Endpoint

   ## Show All services
   http://localhost:3000/service/
   
   ## Update Service
   http://localhost:3000/service/update-service?service_id={service_id}&description={description}&price={price}

   ## Delete Service
   http://localhost:3000/service/delete-service?service_id={service_id}

   ## ADD Service
   http://localhost:3000/service/add-service?name={name}&description={description}&price={price}&service_id={service_id}
