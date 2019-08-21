## Authorization service
* exposes port 9000
* runs on endpoint /
* For access to services requires environment variables in following format
- AUTH_HOST=http://<python_host>:5000
- EMPLOYEES_HOST=http://<java_service>:8000