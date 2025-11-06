
# Kyle Arahan - Component Library (Assignment 13)

## 📘 Project Overview

This project is a **React + Storybook component library** built using **TypeScript**.  
It includes reusable and styled UI components such as:

- Button  
- Label  
- Dropdown  
- RadioButton  
- Image  
- HeroImage  

Storybook is used for **visual testing** and **component documentation**.  
The entire application is **containerized using Docker** and runs on **localhost:8018**.

---

##  Getting Started (Local Development)

### Prerequisites

Before you begin, make sure you have the following installed:

- **Node.js (v18 or newer)**
- **npm (v9 or newer)**
- **Docker Desktop**

---

### Install Project Dependencies

In your terminal or command prompt, navigate to the project folder and run:

```bash
npm install
### Command Prompt

To get started setup this assignment, please follow the steps below:

1. Go to your **Command Prompt**
2. Enter your directory to your container

```bash
cd LastName_FirstName_coding_assignment13
```

(Note: Change LastName and First Name to your Name)

3.  Enter your workdir

```bash
cd kyle_arahan_ui_garden
```

### Running on Docker in localhost

Once you already have both container and workdir on your directory, you can begin run the docker to the localhost.

1. Run this docker code to build your container

```bash
docker build -t arahan_kyle_coding_assignment13 .

```

You'll see docker will now build your container

2. After your docker has build your container, you can run your container

```bash
docker run -d -p 8018:80 --name arahan_kyle_coding_assignment13 arahan_kyle_coding_assignment13


Note: You'll notice that after you run this code, you'll see this on your command prompt:

`63a4273e2fcf95e1c781a5316b0580a44df4b541801bdf8a03ea7728c7a6f8ec`

This means your docker is now running on your localhost. This will change every time you run your container
(Warning: If you have an error, it means that your container already build and exist on your localhost. The solution is see the **Docker Commands** section below )

3. You can now open your broswer and input your localhost:s

```bash
http://127.0.0.1:8081
```

(Note: If your localhost says: **Site cant be reached** it means your container cant run to your localhost due to reasons:

- You didnt build/run your container
- Make sure you have Docker Desktop active

Make sure you double check in order your container to show up )

## Docker Commands

Heres the command you can help run/stop your container.

### Stop container

To stop your container, run this code to your command prompt:

```bash
docker stop arahan_kyle_coding_assignment13
```

### Start container

To start your container, run this code:

```bash
docker start arahan_kyle_coding_assignment13
```

### Remove container

To remove your container, run this code:

```bash
docker rm arahan_kyle_coding_assignment13
```
