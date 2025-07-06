# This script runs after building the sandbox template
# and makes sure the Next.js app is (1) running and (2) the `/` page is compiled
# and helps streams the stdErr during sandbox deployment

# 1) Remove any stale build output that you don’t have permission to touch
cd /home/user
echo "🔨 starting dev server"
cd /home/user && npx next --turbo
