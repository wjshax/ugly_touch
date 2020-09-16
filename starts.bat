@start ng build ug-lib --watch 
timeout /t 3
@start ng serve uga0-root --host="0.0.0.0"
timeout /t 3
@start ng serve uga1-music --host="0.0.0.0" --port 4201
timeout /t 3
@start ng serve uga2-album --host="0.0.0.0" --port 4202
timeout /t 10
explorer "http://127.0.0.1:4200"
timeout /t 1
explorer "http://127.0.0.1:4201"
exit