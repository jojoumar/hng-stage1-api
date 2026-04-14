# HNG stage 1 API

## Description
A simple Node.js API deployed with Nginx reverse proxy and PM2.

## Base URL
https://aiconet.name.ng

## Endpoints

### GET /
Returns:
{
  "message": "API is running"
}

### GET /health
Returns:
{
  "message": "healthy"
}

### GET /me
Returns:
{
  "name": "Umar Joannah Martha",
  "email": "jojoumar0918@gmail.com",
  "github": "https://github.com/jojoumar"
}
