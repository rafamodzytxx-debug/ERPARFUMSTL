@echo off
set "PATH=%PATH%;C:\Program Files\Git\cmd;C:\Program Files\Git\bin"

echo Sincronizando ultimos cambios desde GitHub...
git pull origin main --rebase

echo Adding files...
git add .

echo Committing...
git commit -m "auto update"

echo Pushing...
git push

echo Done!
pause