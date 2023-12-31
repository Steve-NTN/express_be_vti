select AccountID as accountId,
  Email as email,
  Username as username,
  FullName as fullName,
  A.DepartmentID as departmentId,
  D.DepartmentName as departmentName,
  A.PositionID as positionId,
  P.PositionName as positionName,
  CreateDate as createDate
from Account as A
  left join Department as D on D.DepartmentID = A.DepartmentID
  left join Position as P on P.PositionID = A.PositionID
where A.AccountID = '13';