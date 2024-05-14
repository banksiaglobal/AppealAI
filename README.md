# BG-AppealAI

## Summary

The BG-AppealAI project is an example of how vector search and generative AI can be used in applications developed using InterSystems technologies. The developed application is designed to assist in writing appeals against an insurance company's refusal to pay for hospital procedures.

### Technologies Used

- **Frontend**: Angular
- **Backend**: IRIS + LangChain + OpenAI

## How to Run

You can use git or zpm to install our project.

1. **Install via GitHub**

- You should clone this repo:

```
git clone https://github.com/banksiaglobal/AppealAI.git
```

- Open a terminal in this directory and run:
```
docker-compose up -d
```


2. **Install via ZPM**

- You should run this command in intersystems terminal:
```
zpm "install bg-appealai"
```

In both cases, after installing the project, create a new `.env` file in the root folder with the following variables:

```
OPENAI_API_KEY="YOUR_API_KEY"
PATH_SAVE_DOC="/opt/irisapp/"
```

and create credential as described in Step 2: Set up OpenAI Operation of the article [Tutorial: Adding OpenAI Interoperability to Production](https://community.intersystems.com/post/tutorial-adding-openai-interoperability-production).

The frontend application is available at the link:

```
http://localhost:32783/appealai/index.html
```

## Description of System

### 1. Features

- creating an insurance company profile;
- adding a service package that includes all necessary documents: insurance contracts, rejection letters and appeals;
- working with the insurance contract: the system allows you to upload and download the insurance contract;
- working with the rejection letter: the system allows you to upload and download the rejection letter;
-  processing insurer rejections: the system checks if an appeal is possible based on the insurance contract, patient's medical data and the rejection letter and if yes - it creates a draft appeal letter, the user can download this letter.

### 2. API

You can test our app in two ways: through a demo of our app or with any web client like Postman.
In the root of the project you can find the file `AppealAI.postman_collection.json`, which you can import into Postman and test the application API. Please note that the queries in the collection are arranged according to the logic of performing actions inside the system, so for correct testing they should be executed sequentially.
### 3. Production

The main functionality of the backend part of the application is implemented using Interoperability Production. After successful installation the project locally, you can go to the Production with the following url: [Production](http://localhost:32783/csp/healthshare/appealai/EnsPortal.ProductionConfig.zen?PRODUCTION=Production.AppealAIApp)

- **User**: ``_SYSTEM``
- **Password**: ``SYS``

![Image_1](./readme_image/image_1.png)

The Production consist of the following elements:
- AppealIn - service that receives the rejection file and sends it for analysis.
- DocumentIn - service that receives the insurance contract file and sends it for vectorization.
- ConversionToVector - process that converts document text into vectors using LangChain, and invokes process GetText and operations SaveVector, SaveDocument for the corresponding actions.
- GetText - process that retrieves text from a document.
- VectorSearch - process that performs a vector search and looks for matches between documents, and invokes operations OpenAiOut to analyze an insurance rejection.
OpenAiOut - operation that makes a request to a generative AI - OpenAI.
- SaveDocument - operation that stores the document file.
- SaveVector - operation that stores document vectors to the database.

The functioning of the system can be seen most clearly in the visual traces.
Visual trace of taking an insurance contract, dividing it into vectors, and storing the vectors in a database (is invoked by requesting "upload insurance contract" from the postman collection, execution time ~ 30 minutes):

![Image_2](./readme_image/image_2.png)

Visual trace of receiving a rejection letter, sending requests to OpenAI, and saving the appeal letter if an appeal is possible (is invoked by requesting "upload rejection letter" from the postman collection, execution time ~ 1-2 minutes):

![Image_6](./readme_image/image_6.png)

All business processes in the system are implemented as BPL, which helps to understand the logic "behind the scene":

![Image_4](./readme_image/image_4.png)
![Image_5](./readme_image/image_5.png)
![Image_3](./readme_image/image_3.png)

## Video

[BG-Appeal-AI](https://www.youtube.com/watch?v=0p6FvZpzaaA)

## Developers of Project

- [Maria Nesterenko](https://community.intersystems.com/user/maria-nesterenko): Backend Developer
- [Katsiaryna Shaustruk](https://community.intersystems.com/user/katsiaryna-shaustruk): Frontend Developer
- [Maria Gladkova](https://community.intersystems.com/user/maria-gladkova): Technical Writer

We are the team of Banksia Global company and we always are opened for something new and interesting!

\#BanksiaGlobal #LangChain #VectorSearch #GenerativeAI #AI #Angular

