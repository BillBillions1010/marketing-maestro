#!/bin/bash

# Update package list and install PostgreSQL
sudo apt update
sudo apt install -y postgresql postgresql-contrib

# Start PostgreSQL service
sudo service postgresql start

# Access the PostgreSQL shell
sudo -u postgres psql -c "CREATE DATABASE ecommerce_db;"

# Clone MedusaJS repository
git clone https://github.com/medusajs/medusa.git
cd medusa

# Install Node.js and npm
curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
sudo apt install -y nodejs

# Install dependencies and configure PostgreSQL connection
npm install
cp .env.example .env
# Update the .env file with your PostgreSQL connection details (localhost, port, username, password, database)

# Start the MedusaJS server in the background
npm run dev &

# Clone Next Material Kit repository
git clone https://github.com/creativetimofficial/nextjs-material-kit.git
cd nextjs-material-kit

# Install dependencies
npm install

echo "E-commerce web app setup completed. Happy selling!"