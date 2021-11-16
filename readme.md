# CS308 LAP: Multiplayer-HackIT

## How to run the application

### Database

* Import the sqldump files in your sql database. (If you're getting some error, then first create the database of that corresponding name)
* **Connection with chat databse-** Change the configuration of this file [application\controllers\main.php] [From Line number:65]
* **Connection with hackIt databse-** Change the configuration of this file [application\config\database.php] [From Line number:52]

### Running the application locally

* Install the Xampp.
* Copy the project repository, to this location [C:\xampp\htdocs]
* Start the Appache server and phpmyadmin.
* Now type the url "http://localhost/PROJECT_NAME/"
* If chat applilcation is not running then change the "sample_rdsh" in [application\views\hacking.php] with PROJECT_NAME.


*** 

## Group 2
> Aryan Garg (B19153)  
> Anukool Dwivedi (B19071)  
> Rajat Kaushik (B19105)  
> Samarth Reddy (B19109)  
> Divyansh Vinayak (B19080)  
> Rahul Kumar (B19104)  
> Kailash Kumar (B19087)  

**Chat functionality was added in the project using tools learnt in CS-308 LAP (Fall'21)**

## Setting Everything Up:
Clone and fire up local php server.

Check your **php version in XAMPP**: 
1. Open XAMPP panel. 
2. Click on shell
3. Type in command: 'php -v' to check your version of php

#### For php 8 or above users(daring task ahead):
1. In php 8 -> need to place parameters without default values before the ones with default valued params. (Exchange message and level params on line 348)
2. Fatal error on PHP 8 because 8 introduced type hinting for mixed types. (Change $flag value to FILTER_DEFAULT instead of '' in the default statement)
3. Need to handle redirect URLs in Controller.php, Input.php, Hooks.php primarily. 

#### Easier way to run the application:
1. Downgrade to versions strictly below 8. 
2. Walkthrough: https://youtu.be/wtgiEluCbhc


## Starting point file(s):
> Application/controllers/main.php  
> Application/views (contains individual pages)  

## Potential Way Forward:
1. Store session variables
2. Add **quit** functionality in terminal session to clear the session (because common point is DB.)
3. Add **list all active players** functionality (cmdName: chat -l or --list (Also add --help))
4. Add **chat -p <playerName> -m "Your message"**
