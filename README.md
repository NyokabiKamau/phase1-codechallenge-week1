# Phase1 Code Challenge Week1

## Table of Content
1. [Description](#description)
2. [Installation](#installation)
3. [Project Setup](#project-setup)
    - [Student Grade Generator Challenge](#student_grade_generatorjs)
    - [Speed Detector Challenge](#speed_detectorjs)
    - [Net Salary Calculator](#net_salary_calculatorjs)
4. [Authors](#author)
5. [License](#license)

## Description
This is my first code challenge. I seperated the 3 code challenges into 3 different filenames:
* student_grade_generator.js
* speed_detector.js
* net_salary_generator.js

## Installations Instructions
Clone this repository to local terminal. You will need node and npm installed globally on your computer

Installations:
* npm install

To access prompt command
* run npm install prompt-sync in each file and sync it to the file using const prompt = require("prompt-sync")();

To run Test Suite: 
* run node 'filename.js'

## Project Setup
The challenges are as follows:

### student_grade_generator.js
Challenge 1: Student Grade Generator(Toy Problem)
Write that prompts the user to input student marks. The input should be between 0 and 100. Then output the correct grade: 

A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.

#### Process
* Run node 'student_grade_generator.js' to initiate the prompt
* When prompted, input student marks
* Output will generated the student grade

### speed_detector.js
Challenge 2: Speed Detector (Toy Problem)
Write a program that takes as input the speed of a car e.g 80. If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.

For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended”.

#### Process
* Run node 'speed_detector.js' to initiate the prompt
* When prompted, input car speed in kilometers
* Output will generated your demerit status


### net_salary_calculator.js
Challenge 3: Net Salary Calculator (Toy Problem)
Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits. Calculate the payee (i.e. Tax), NHIFDeductions, NSSFDeductions, gross salary, and net salary. 
NB: Use KRA, NHIF, and NSSF values provided in the link below.

https://www.aren.co.ke/payroll/taxrates.htm  

https://www.kra.go.ke/en/individual/calculate-tax/calculating-tax/paye

#### Process
* Run node 'net_salary_calculator.js' to initiate the prompt
* When prompted, input gross monthly salary
* Another prompt will appear where you give a 'yes' or 'no' answer to having an alternative pension scheme
* Output will generated a breakdown of all the deduction and net salary

## Author
* This project was contributed to by: 
- Nyokabi Kamau (https://github.com/NyokabiKamau/)

## License
* This project is licensed under ISC