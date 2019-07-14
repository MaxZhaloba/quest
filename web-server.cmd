@echo off
start lib\miniweb -r src -p 80
lib\ngrok http 80
