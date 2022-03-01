SELECT
     a.NAME AS Employee
FROM Employee AS a JOIN Employee AS b
     ON a.ManagerId = b.Id
     AND a.Salary > b.Salary
;



select a.Name AS 'Employee' from Employee as a,Employee as b where a.managerId=b.id and a.salary>b.salary

SELECT
    a.Name AS 'Employee'
FROM
    Employee AS a,
    Employee AS b
WHERE
    a.ManagerId = b.Id
        AND a.Salary > b.Salary
;4

select websites.name,sum(access_log.site__id) as  nums

from access_log

left join websites on websites.id = access_log.site__id group by websites.name