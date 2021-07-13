# GroupVideoCalling

This is a sample group video calling application built using Azure Communication Services.
The client-side application is a React based user interface which uses Redux for handling complex state while leveraging Microsoft Fluent UI.
Powering this front-end is a C# web application powered by ASP.NET Core to connect this application with Azure Communication Services.

## Prerequisites

- Create an Azure account with an active subscription. For details, see [Create an account for free](https://azure.microsoft.com/free/?WT.mc_id=A261C142F)
- [Node.js (12.18.4 and above)](https://nodejs.org/en/download/)
- [Visual Studio Code](https://code.visualstudio.com/download)
- [.NET Core 3.1](https://dotnet.microsoft.com/download/dotnet-core/3.1) 
- Create an Azure Communication Services resource. For details, see [Create an Azure Communication Resource](https://docs.microsoft.com/azure/communication-services/quickstarts/create-communication-resource). You'll need to record your resource **connection string**.

## Before running the sample for the first time
1. Open an instance of PowerShell, Windows Terminal, Command Prompt or equivalent and navigate to the directory that you'd like to clone the sample to.
2. `git clone https://github.com/pvbr2812/GroupVideoCalling.git`
3. Get the `Connection String` from the Azure portal. For more information on connection strings, see [Create an Azure Communication Resources](https://docs.microsoft.com/azure/communication-services/quickstarts/create-communication-resource)
4. Once you get the `Connection String`, add the connection string to the **Calling/appsetting.json** file found under the Calling folder. Input your connection string in the variable: `ResourceConnectionString`.

## Locally deploying the sample app

1. Navigate to the Calling folder in your terminal and run the following commands:
   1. dotnet build
   2. dotnet run
2. The browser will open at localhost:5001