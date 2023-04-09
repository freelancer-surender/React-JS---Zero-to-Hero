Option 1:

Step 1: Install MySQL
Step 2: Execute the freshkart_login.sql script file. (Present inside SQL folder)
Step 3: Execute the freshkart_products.sql script file. (Present inside SQL folder)
Step 4: Go inside node-mysql-api folder and execute the below command to start the app.js

node app.js

Your server will be started in 5000 port. 

Now you can see data in the react application

----------------------------------------------------------

Option 2:

Create a mock service or stub data using the products.json present inside stub folder. And, invoke that using axios.

----------------------------------------------------------

Option 3: 

I have modified the code to comment axios calls and hardcoded the data, now the app will work.