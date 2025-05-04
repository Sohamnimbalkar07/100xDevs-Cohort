# 💯 100xDevs Cohort Learning Journey

Welcome to my personal learning journey as part of the **100xDevs** cohort by **Harkirat Singh**. This repository documents everything I've learned so far — from **real-time systems** and **microservices** to **React apps** and **deployment on AWS**.

---

## 🔗 Follow my journey on [**LinkedIn**](https://www.linkedin.com/in/soham-nimbalkar)

---

## 🚀 Real-Time Systems & Distributed Architecture

### 📡 Apache Kafka
- Built **data pipelines** with Kafka **producers** and **consumers**
- Used **topics**, **partitions**, **offsets**, and **retention policies**
- Worked with **consumer groups** and message **ordering guarantees**

### 🎥 WebRTC
- Established **peer-to-peer connections** using WebRTC
- Implemented **signaling via WebSocket**
- Understood **ICE candidates**, **STUN/TURN servers**, and **media streams**
- Learned about **SFU** and **MCU** architectures for multi-user video calls

### 🧵 Redis + Queues + Pub/Sub
- Used **Redis** for **message queues** and **in-memory caching**
- Implemented **Pub/Sub patterns** for **decoupled microservices**
- Handled **background jobs** and **real-time messaging systems**

### 🌐 WebSockets
- Learned about **WebSockets**, enabling **bi-directional real-time communication** between clients and servers.
- Implemented **WebSocket connections** for applications that require **live updates** such as **chat systems**, **live notifications**, and **real-time data streaming**.
- Explored the benefits of WebSockets for **low-latency** and **persistent** communication channels.
- Gained hands-on experience in managing **WebSocket connections**, ensuring reliable messaging and **scalable real-time communication** in distributed systems.

---

## ☸️ DevOps, Scalability & Monitoring

### 🐳 Docker
- **Containerized** full-stack applications
- Used **Docker Compose** to orchestrate multiple services

### ☸️ Kubernetes
- Deployed applications using **Pods**, **Deployments**, and **Services**
- Used **ConfigMaps**, **Secrets**, **Volumes**, and **Ingress Controllers**
- Set up **Horizontal Pod Autoscaling**
- Managed **YAML configs** and **rollout strategies**

### ⚙️ CI/CD (Continuous Integration and Continuous Deployment)
- Set up automated checks (e.g., **testing**, **linting**, **type-checking**) that run whenever code is pushed or a pull request is made, ensuring **code quality** early in the process.
- Created a **CI pipeline** using **GitHub Actions** that runs tests and checks automatically, catching issues before merging code into the main branch.
- Configured **CD pipelines** using **GitHub Actions** to automatically deploy code to **production servers** after a successful merge into the main branch, enabling faster and more reliable deployments.
- Integrated best practices for **secret management**, securely handling sensitive data such as **API keys**, **environment variables**, and **database credentials**.

### 📈 Prometheus + Grafana
- Exposed **custom metrics** using `prom-client`
- Visualized data on **Grafana dashboards** using **PromQL**
- Tracked **counters**, **gauges**, and **histograms**
- Set up **alerts** and improved **system observability**

### 🌍 AWS & NGINX
- Deployed frontend with **S3 + CloudFront**
- Used **NGINX** as a **reverse proxy** and **load balancer**
- Set up **EC2**, **AMIs**, **Auto Scaling Groups**, **Load Balancers**, and **Launch Templates**

---

## 🛠️ Backend Development

### ⚙️ Node.js + Express.js
- Built **scalable REST APIs** using Express
- Followed **clean architecture**: controllers, services, repositories

### 🧬 TypeScript
- **Strongly typed** backend and frontend code
- Used **interfaces**, **unions**, **generics**, and **type narrowing**

### 📡 RPC (Remote Procedure Calls)
- Built services using **gRPC** and **JSON-RPC**
- Wrote `.proto` files and used **Protocol Buffers** for serialization

### 🛡️ Security & Performance
- Implemented **rate limiting** and **CAPTCHA** to prevent abuse
- Used the **Cluster module** to scale Node.js apps
- Applied the **Singleton pattern** for shared instance handling

### 📦 Prisma
- Modeled and queried relational data with **Prisma ORM**
- Handled **migrations**, **relations**, and **raw queries**

### 🍃 Mongoose (MongoDB)
- Created **NoSQL schemas** with **validations** and **hooks**
- Used **advanced queries** and schema design

### 🌐 Serverless Backend Development
- Explored **Cloudflare Workers**, utilizing the **Wrangler CLI** to deploy **serverless functions** that scale automatically based on demand.
- Used the **Hono framework** to simplify the creation of **serverless functions**, improving **developer experience** and reducing overhead.
- Tackled challenges related to **database connection pooling** in **serverless environments**. In traditional server-based setups, maintaining a persistent connection pool is straightforward, but **serverless architectures** require strategies like **database connection multiplexing**, **serverless-friendly databases**, or using **external connection pooling services** to handle connections efficiently.


---

## 🧱 Database Systems

### ⚙️ Indexing
- Applied **indexing strategies** to boost query performance
- Understood **primary**, **secondary**, and **compound indexes**
- Analyzed **execution plans** to optimize queries

### 🧩 Normalization
- Practiced database **normalization**: 1NF, 2NF, and 3NF
- Reduced **redundancy** and improved **data integrity**
- Designed **normalized schemas** for scalable databases

---

## ⚛️ Frontend & UI Development

### 🌐 Next.js
- Built full-stack apps with **SSR**, **SSG**, and **dynamic routing**
- Created **API routes** and integrated with backend

### 🎨 Tailwind CSS
- Designed **responsive** and **modern UIs** using utility-first classes
- Customized **themes** and used **dark/light modes**

### 🧠 Recoil & Context API
- Managed complex app state with **Recoil atoms/selectors**
- Shared global state using **React Context** without prop drilling

### ⚙️ Custom React Hooks
- Extracted **reusable logic** from components into hooks
- Improved **component readability** and **testability**

---

## ✅ Testing, Validation & Development Tools

### 🚀 Turborepo & Monorepos
- Deeply explored **Monorepos**, which enable multiple services (e.g., **backend**, **frontend**) to reside in a single repository, simplifying **dependency management** and **code sharing** across teams.
- Leveraged **Turborepo** to manage the **monorepo**, taking advantage of its powerful **caching**, **parallelization of builds**, and optimized **dependency handling** to speed up the development process.
- Shared **common code** across multiple services, making development more **efficient** and **maintainable**.
- Used **Turborepo** to streamline the development of both **backend** and **frontend** services in a single repository, reducing friction and enabling better **collaboration** between teams.
- Optimized **builds** by enabling **parallelized task execution** and leveraging **caching** to speed up development cycles.


### 🛡️ Zod
- Validated **API schemas** with **type-safe parsing**
- Prevented **runtime bugs** using Zod + TypeScript

### 🧪 Testing
- Planning to integrate **robust testing** using:
  - **Jest** and **Vitest** for **unit** and **integration testing**
  - **Supertest** for **HTTP assertions** in API testing
  - **Cypress** for **end-to-end (E2E)** testing
- Exploring **mocking** and **spying** techniques to isolate test behavior
- Aiming for better **test coverage** and **confidence** in application stability

---
