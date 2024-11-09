Game Organising Application High Level Architecture

This readme gives an overview of what the high level architecture of an MVP version of the Game Booking and Organising Application.


The Highlevel Architecture comprises of main compoments, namely;

1. Backend Services(Admin and Client)
2. MongoDB Database


## Admin Backend Services

With the admin backend service, new venues can be added , updated and deleted from the database depending on the operation. The Admin Service would be responsible for handling any requests that comes from the Admin Portal. 

## Client Backend Services

The client backend service handles any requests that comes from the client booking app. Examples of request can range from booking a game, updating profile and making payments etc.


## MongoDB Database

Both Admin and Client service communicates with the mongodb database to persist data regarding booking information, user information etc.
