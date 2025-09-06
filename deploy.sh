#!/bin/bash

# AIVYCE Website Deployment Script

echo "🚀 Starting AIVYCE Website Deployment..."

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "❌ Git repository not initialized. Please run 'git init' first."
    exit 1
fi

# Add all files
echo "📁 Adding files to git..."
git add .

# Commit changes
echo "💾 Committing changes..."
git commit -m "Deploy: Update website for production"

# Push to GitHub (if remote is set)
echo "📤 Pushing to GitHub..."
if git remote -v | grep -q origin; then
    git push origin main
    echo "✅ Successfully pushed to GitHub!"
else
    echo "⚠️  No GitHub remote found. Please add a remote repository:"
    echo "   git remote add origin <your-github-repo-url>"
    echo "   git push -u origin main"
fi

echo "🎉 Deployment preparation complete!"
echo ""
echo "Next steps:"
echo "1. Create a GitHub repository and push your code"
echo "2. Connect your GitHub repository to Railway"
echo "3. Deploy to Railway with the provided configuration"
echo ""
echo "Your website is ready for deployment! 🚀"
