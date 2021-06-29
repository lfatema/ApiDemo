## CRUD (Create, Read, Update and Delete) API Demo

The main goal of this project is to perform a CRUD operation using a fake API created using mockapi.io.

The following project uses [Angular 10](https://angular.io/) and [Bootstrap](https://getbootstrap.com/) for the UI development.

---

### Sections

- [Installation and Setup](#setup)
- [Angular Setup using CLI](#Angular-setup)
- [API Request](#crud)
- [Reference Links](#links)
- [Author](#author)

---

## Installation and Setup

To install Angular, we need to download and install Node.js and npm (Node Package Manager) using below command

> npm install -g npm

To see if you already have Node.js and npm installed and check the installed version, run the following commands:

> node -v

> npm -v

---

## Angular Setup using CLI

Install the CLI using the **npm** package manager:

> npm install -g @angular/cli

To create, build, and serve a new, basic Angular project on a development server, go to the parent directory of your new workspace use the following commands:

> ng new ApiDemo

> cd ApiDemo

> ng serve --o

The ng new command creates an Angular workspace folder and generates a new application skeleton.

---

## API Request

We have created a HTTP service to make API calls using below command:

> ng generate service RestService

Now we will create a Data Component class that will perform the CRUD operations. We define components using the below command:

> ng generate component Data

We define the GET, POST, PUT and DELETE Requests in our RestService class.

To retrieve the response and display it, we have created a table in our .html class.

We also use Bootstraps NgModel to display our CRUD actions on each button.

All the functionality of buttons is defined in the .ts class.

---

## Reference Links

- [Add Bootstrap to Angular 10](https://www.techiediaries.com/angular-bootstrap/)
- [Angular API Tutorials](https://www.munonye.com/)
- [Angular CRUD Tutorial - Video](https://www.youtube.com/watch?v=JYPyy-hvjYc&list=PL6n9fhu94yhXwcl3a6rIfAI7QmGYIkfK5)
- [NgbModal Angular](https://ng-bootstrap.github.io/#/components/modal/examples)

---

## Author

- LinkedIn - [Fatema Lokhandwala](https://www.linkedin.com/in/fatema-akbar-lokhandwala-a63bb9132/)
