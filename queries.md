# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 77 records now per latest update.
SELECT *
FROM Products P
JOIN Categories C on P.CategoryID = C.CategoryID


### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.
SELECT * FROM [Orders] o
JOIN Shippers s ON o.ShipperID=s.ShipperID
WHERE o.OrderDate < "1997-01-09"
### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.
SELECT * FROM [OrderDetails] o
JOIN Products p ON o.ProductID = p.ProductID
WHERE OrderID=10251;
### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.
SELECT 
	o.OrderID,
	c.CustomerName Customer,
	e.LastName Employee_Last_Name
FROM [Orders] o
JOIN Employees e ON o.EmployeeID= e.EmployeeID
JOIN Customers c ON o.CustomerID = c.CustomerID

### (Stretch)  Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.

### (Stretch) Display OrderID and a  column called ItemCount that shows the total number of products placed on the order. Shows 196 records. 