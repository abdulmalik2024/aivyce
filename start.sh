#!/bin/bash

# Start script for AIVYCE website on Railway
echo "Starting AIVYCE website..."

# Ensure we're in the right directory
cd /app

# Check if index.html exists
if [ ! -f "index.html" ]; then
    echo "Error: index.html not found!"
    exit 1
fi

# Start Python HTTP server
echo "Starting Python HTTP server on port $PORT"
python3 -m http.server $PORT
