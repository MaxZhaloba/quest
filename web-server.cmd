@echo off
start lib\miniweb -r src -p 8080
lib\ngrok http 8080
