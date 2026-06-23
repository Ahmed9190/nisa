Write-Host "=== Nisa Deploy Script ===" -ForegroundColor Cyan

# Stage all changes
git add -A

# Commit (only if there is something to commit)
$status = git status --porcelain
if ($status) {
    git commit -m "Updated products"
    Write-Host "DONE: Committed changes" -ForegroundColor Green
} else {
    Write-Host "INFO: No new changes to commit" -ForegroundColor Yellow
}

# Switch to main, merge dev, push
git checkout main
git merge dev --no-edit
git push origin main
Write-Host "DONE: Pushed to main - live site will update" -ForegroundColor Green

# Go back to dev for continued work
git checkout dev
Write-Host "DONE: Back on dev branch" -ForegroundColor Green
Write-Host ""
Write-Host "=== Deploy complete! ===" -ForegroundColor Cyan
