@echo off
start ..\libraries\miniweb -r src -p 80
..\libraries\ngrok http 80 --region=eu
