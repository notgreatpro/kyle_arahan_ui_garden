# Kyle Arahan - Component Library (Assignment 12)

## Project Overview
This project is a **React + Storybook component library** built using TypeScript.  
It includes reusable UI components such as:
- Button
- Label
- Dropdown
- RadioButton
- Image
- HeroImage

Storybook is used for visual testing and documentation.  
The application is containerized with **Docker** and runs on **localhost:8083**.

## Getting Started (Local Development)

### Install Dependencies
Make sure you have **Node.js (v18+)** and **npm** installed.
```bash
npm install
```
### Command Prompt
To get started setup this assignment, please follow the steps below:
1. Go to your **Command Prompt**
2. Enter your directory to your container
```bash
cd LastName_FirstName_coding_assignment12
```

 (Note: Change LastName and First Name to your Name)

3.  Enter your workdir 
```bash
cd lastName_firstName_ui_garden
```

### Running on Docker in localhost
Once you already have both container and workdir on your directory, you can begin run the docker to the localhost.

1. Run this docker code to build your container

```bash
docker build -t lastname_firstname_coding_assignment12 .
```


You'll see docker will now build your container 

2. After your docker has build your container, you can run your container

``` bash 
docker run -d -p 8083:80 --name lastname_firstname_coding_assignment12 lastname_firstname_coding_assignment12
```

Note: You'll notice that after you run this code, you'll see this on your command prompt:

```63a4273e2fcf95e1c781a5316b0580a44df4b541801bdf8a03ea7728c7a6f8ec```

This means your docker is now running on your localhost. This will change every time you run your container
(Warning: If you have an error, it means that your container already build and exist on your localhost. The solution is see the **Docker Commands** section below )

3. You can now open your broswer and input your localhost:

```bash
http://127.0.0.1:8083
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
docker stop lastname_firstname_coding_assignment12
```

### Start container
To start your container, run this code:
```bash 
docker start arahan_kyle_coding_assignment12
```

### Remove container
To remove your container, run this code:
```bash 
docker rm arahan_kyle_coding_assignment12
```



