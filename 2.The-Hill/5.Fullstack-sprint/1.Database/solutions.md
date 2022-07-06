## 1.

```sql
SELECT first_name "First Name",  last_name "Last Name"
FROM employees;
```

## 2.

```sql
SELECT *
FROM employees
ORDER BY first_name DESC;
```

## 3.

```sql
SELECT SUM(salary)
FROM employees;
```

## 4.

```sql
SELECT MAX(salary), MIN(salary)
FROM employees;
```

## 5

```sql
SELECT first_name, last_name, round(salary/12,2) as 'Monthly Salary'
FROM employees;
```

## 6

```sql
SELECT first_name, last_name, salary
FROM employees
WHERE salary NOT BETWEEN 10000 AND 15000;
```

## 7

```sql
SELECT first_name, last_name, salary, department_id
FROM employees
WHERE salary NOT BETWEEN 10000 AND 15000
AND department_id IN (30, 100);
```

## 8

```sql
SELECT last_name
FROM employees
WHERE last_name LIKE '__e%';
```

## 9

```sql
SELECT COUNT(DISTINCT job_id)
FROM employees;
```

## 10

```sql
SELECT department_id, SUM(salary)
FROM employees
GROUP BY department_id;
```

## 11

```sql
SELECT job_id, AVG(salary)
FROM employees
WHERE job_id <> 'IT_PROG'
GROUP BY job_id;
```

## 12

```sql
SELECT job_id, AVG(salary), COUNT(*)
FROM employees
GROUP BY department_id
HAVING COUNT(*) > 10;
```

## 13

```sql
SELECT FIRST_NAME, LAST_NAME, SALARY
FROM employees
WHERE SALARY >
(SELECT salary FROM employees WHERE last_name = 'Bull');
```

## 14

```sql
SELECT first_name, last_name FROM employees
WHERE manager_id in (select employee_id
FROM employees WHERE department_id
IN (SELECT department_id FROM departments WHERE location_id
IN (select location_id from locations where country_id='US')));
```

## 15

```sql
SELECT first_name, last_name, department_id, depart_name
FROM employees
JOIN departments USING (department_id);
```

## 16

```sql
SELECT job_title, first_name, salary-min_salary 'Salary - Min_Salary'
FROM employees
NATURAL JOIN jobs;
```
