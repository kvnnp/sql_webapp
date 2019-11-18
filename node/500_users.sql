-- Find earliest date a user joined with following format: May 2nd 2016
SELECT 
	DATE_FORMAT(created_at, '%M %D %Y') AS earliest_date  
FROM users  
ORDER BY created_at 
LIMIT 1 ;

-- or

SELECT 
	DATE_FORMAT(MIN(created_at), '%M %D %Y') AS earliest_date
FROM users
ORDER BY earliest_date;


-- Find email of the earliest user.
SELECT * FROM users WHERE created_at = (SELECT MIN(created_at) FROM users);


-- Create a query that returns the total # of users that signed up according by month.
SELECT 
	DATE_FORMAT(created_at, '%M') AS month,
	COUNT(*) AS COUNT
FROM users
GROUP BY month
ORDER BY COUNT DESC;


-- Find number of users with Yahoo emails. 
SELECT COUNT(*) AS yahoo_users
FROM users
WHERE email LIKE '%@yahoo.com';


-- Calculate total number of users for each email host.
SELECT 
	CASE
		WHEN email LIKE '%@gmail.com' THEN 'gmail'
		WHEN email LIKE '%@yahoo.com' THEN 'yahoo'
		WHEN email LIKE '%@hotmail.com' THEN 'hotmail'
		ELSE 'other'
	END AS provider,
	COUNT(*) AS total_users
FROM users
GROUP BY provider
ORDER BY total_users;


