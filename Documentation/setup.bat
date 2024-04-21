@echo off

REM Create project directory
mkdir Market_Maestro

REM Navigate into project directory
cd Market_Maestro

REM Create backend, frontend, database, and shared directories
mkdir backend frontend database shared

REM Backend Setup (MedusaJS)
cd backend
medusa init
npm install
cd ..

REM Database Setup (PostgreSQL)
cd database
mkdir migrations seeds scripts
cd ..

REM Frontend Setup (Next.js with Next Material Kit)
cd frontend
npx create-next-app .
npm install @material-ui/core @material-ui/icons
npm install
cd ..

REM Testing and Deployment (No specific commands)